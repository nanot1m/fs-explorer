import { useEffect, useState, memo } from "react";
import { get as idbGet, set as idbSet } from "idb-keyval";

import {
  Button,
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaFolderOpen, FaFolder, FaFile, FaChevronDown } from "react-icons/fa";

import { getDirectoryContent, openDirectory } from "./fs";

const compareFileSystemEntries = (
  a: FileSystemHandle,
  b: FileSystemHandle
): 1 | -1 => {
  if (a.kind === b.kind) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  }
  return a.kind === "directory" ? -1 : 1;
};

const FileSystemEntryView = memo(function FileSystemEntryView({
  handle,
}: {
  handle: FileSystemDirectoryHandle | FileSystemFileHandle;
}) {
  const [entries, setEntries] = useState(
    Array<FileSystemDirectoryHandle | FileSystemFileHandle>()
  );
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    let cancelled = false;
    if (handle.kind === "directory") {
      getDirectoryContent(handle).then((entries) => {
        if (!cancelled) setEntries(entries);
      });
    }

    return () => {
      cancelled = true;
    };
  }, [handle]);

  return (
    <ListItem mt={1}>
      {handle.kind === "directory" ? (
        <Button
          variant="outline"
          onClick={onToggle}
          leftIcon={<FaFolder />}
          size="xs"
        >
          {handle.name}
        </Button>
      ) : (
        <Button variant="outline" leftIcon={<FaFile />} size="xs">
          {handle.name}
        </Button>
      )}

      {isOpen && (
        <List ml={6} spacing={1}>
          {entries.length > 0 ? (
            entries
              .slice()
              .sort(compareFileSystemEntries)
              .map((handle) => (
                <FileSystemEntryView key={handle.name} handle={handle} />
              ))
          ) : (
            <Text fontSize="xs" color="gray.500">
              empty
            </Text>
          )}
        </List>
      )}
    </ListItem>
  );
});

async function verifyPermission(
  fileHandle: FileSystemHandle,
  readWrite: boolean
) {
  const options = {
    mode: readWrite ? "readwrite" : "read",
  } as const;
  // Check if permission was already granted. If so, return true.
  if ((await fileHandle.queryPermission(options)) === "granted") {
    return true;
  }
  // Request permission. If the user grants permission, return true.
  if ((await fileHandle.requestPermission(options)) === "granted") {
    return true;
  }
  // The user didn't grant permission, so return false.
  return false;
}

const IDB_RECENT_PROJECTS = "recentProjects";

function App() {
  const [recentProjects, setRecentProjects] = useState(
    Array<FileSystemHandle>()
  );
  const [handle, setHandle] =
    useState<FileSystemFileHandle | FileSystemDirectoryHandle>();

  useEffect(() => {
    idbGet(IDB_RECENT_PROJECTS).then((result) => {
      setRecentProjects(result ?? []);
    }, console.error);
  }, []);

  async function setHandleAndUpdateRecents(handle: FileSystemHandle) {
    setHandle(handle);

    const oldHandles = await idbGet<FileSystemHandle[]>(IDB_RECENT_PROJECTS);
    const nextValue = [handle] as FileSystemHandle[];
    if (oldHandles) {
      for (const h of oldHandles) {
        if (await h.isSameEntry(handle)) {
          continue;
        }
        nextValue.push(h);
      }
    }
    await idbSet(IDB_RECENT_PROJECTS, nextValue);
  }

  function handleDirectoryOpen() {
    openDirectory().then(setHandleAndUpdateRecents);
  }

  if (!handle) {
    return (
      <Container py={10}>
        <Button leftIcon={<FaFolderOpen />} onClick={handleDirectoryOpen}>
          Open project
        </Button>
        <Divider my={4} />
        <Heading size="md" mb={2}>
          Recent Projects
        </Heading>
        <Stack isInline>
          {recentProjects.map((handle) => (
            <Button
              key={handle.name}
              leftIcon={<FaFolder />}
              onClick={() => {
                handleRecentOpen(handle);
              }}
            >
              {handle.name}
            </Button>
          ))}
        </Stack>
      </Container>
    );
  }

  return (
    <Container py={10}>
      <Button leftIcon={<FaFolderOpen />} onClick={handleDirectoryOpen}>
        Open project
      </Button>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />} ml={4}>
          Recent projects
        </MenuButton>
        <MenuList>
          {recentProjects.map((handle) => (
            <MenuItem
              key={handle.name}
              onClick={() => handleRecentOpen(handle)}
            >
              {handle.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <List my={4}>
        <FileSystemEntryView handle={handle} />
      </List>
    </Container>
  );

  async function handleRecentOpen(handle: FileSystemHandle) {
    const hasAccess = await verifyPermission(handle, true);
    if (hasAccess) {
      setHandleAndUpdateRecents(handle);
    }
  }
}

export default App;
