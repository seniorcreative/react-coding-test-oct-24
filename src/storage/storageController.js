export class StorageController {

  static storageType = "LOCAL_STORAGE";
  storageController;

  constructor() {

    switch(this.storageType) {
        case "LOCAL_STORAGE":
        default:
            this.storageController = window.localStorage;
        // TODO: Build out other window storage here if needed (Session, IndexedDB)
    }

  }

  /* Save the data item to the default window storage 
  name: string
  value: any
  */
  savePersistItem(name, value) {
    return this.storageController.setItem(name, value);
  }

  /* Retrieve the data from the storage mechanism
  name: string
  */
  loadPersistItem(name) {
    return this.storageController.getItem(name);
  }

}
