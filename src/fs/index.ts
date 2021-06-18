export function openDirectory(): Promise<FileSystemDirectoryHandle> {
  return window.showDirectoryPicker();
}

export async function getDirectoryContent(
  directoryHandle: FileSystemDirectoryHandle
) {
  const result = [];
  for await (const handle of directoryHandle.values()) {
    result.push(handle);
  }
  return result;
}
