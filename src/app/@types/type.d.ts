declare global {
  export interface Window {
    ethereum: any;
    arcana: any;
  }
}
declare module "@arcana/storage/dist/standalone/storage.umd";
// Adding this exports the declaration file which Typescript/CRA can now pickup:
export {};
