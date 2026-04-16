// Minimal ambient module declarations for untyped deps used by this folder's
// .mts scripts. Only the shapes we actually touch are declared.

declare module 'copy' {
  interface CopyFile {
    dest?: string;
  }
  type CopyCallback = (err: Error | null, files: CopyFile[]) => void;
  function copy(src: string, dest: string, cb: CopyCallback): void;
  export default copy;
  export = copy;
}

declare module 'rimraf' {
  function rimraf(
    path: string,
    cb: (err: Error | null) => void,
  ): void;
  namespace rimraf {
    function sync(path: string): void;
  }
  export = rimraf;
}
