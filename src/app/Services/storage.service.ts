import { AppConfig } from "@app/config";
import { StorageProvider } from "@arcana/storage/dist/standalone/storage.umd";

function createStorageService() {
  let storage: any;

  async function init() {
    if (!storage) {
      storage = new StorageProvider({
        appId: AppConfig.ARCANA.APP_ID,
        // gateway: GATEWAY_URL,
        chainId: AppConfig.ARCANA.BLOCKCHAIN_ID,
        provider: window.arcana.provider,
        debug: true,
      });
    }
  }

  async function getUploadLimit() {
    const access = await storage.getAccess();
    return await access.getUploadLimit();
  }

  async function getDownloadLimit() {
    const access = await storage.getAccess();
    return await access.getDownloadLimit();
  }

  async function myFiles() {
    return await storage.myFiles();
  }

  async function sharedFiles() {
    return await storage.sharedFiles();
  }

  async function upload(
    fileBlob: any,
    { onSuccess, onError, onProgress }: any
  ) {
    const uploader = await storage.getUploader();
    if (onSuccess) uploader.onSuccess = onSuccess;
    if (onError) uploader.onError = onError;
    if (onProgress) uploader.onProgress = onProgress;
    const fileDid = await uploader.upload(fileBlob);
    return fileDid;
  }

  async function download(fileDid: any, { onSuccess, onProgress }: any) {
    const downloader = await storage.getDownloader();
    if (onSuccess) downloader.onSuccess = onSuccess;
    if (onProgress) downloader.onProgress = onProgress;
    await downloader.download(fileDid);
  }

  async function remove(fileDid: any) {
    const access = await storage.getAccess();
    await access.deleteFile(fileDid);
  }

  async function share(fileDid: any, address: string) {
    const access = await storage.getAccess();
    await access.share(fileDid, address, 1000);
  }

  async function getSharedUsers(fileDid: any) {
    const access = await storage.getAccess();
    return await access.getSharedUsers(fileDid);
  }

  async function revoke(fileDid: any, address: string) {
    const access = await storage.getAccess();
    await access.revoke(fileDid, address);
  }

  async function changeFileOwner(fileDid: any, address: string) {
    const access = await storage.getAccess();
    await access.changeFileOwner(fileDid, address);
  }

  return {
    changeFileOwner,
    download,
    getDownloadLimit,
    getSharedUsers,
    getUploadLimit,
    init,
    myFiles,
    remove,
    revoke,
    share,
    sharedFiles,
    upload,
  };
}

const StorageService = Object.freeze(createStorageService());

export default StorageService;
