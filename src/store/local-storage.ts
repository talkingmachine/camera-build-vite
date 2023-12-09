export const Basket = new class {

  _updateStorageData() {
    window.dispatchEvent(new Event('onStorage'));
  }

  addItem(id: number) {
    const item = localStorage.getItem(id.toString());
    if (item) {
      const newValue = (Number(item) + 1).toString();
      localStorage.setItem(id.toString(), newValue);
    } else {
      localStorage.setItem(id.toString(), '1');
    }
    ///
    this._updateStorageData();
  }

  setItem(id: number, value: number) {
    localStorage.setItem(id.toString(), value.toString());
    ///
    this._updateStorageData();
  }

  getLength() {
    let length = 0;
    for (let i = 0; i < localStorage.length; i++) {
      if (Number(localStorage.key(i))) {
        length += 1;
      }
    }
    return length;
  }

  getItem(id: number) {
    return Number(localStorage.getItem(id.toString()));
  }

  getItems() {
    const items: {[key: number]: number} = {};
    for (let i = 0; i < localStorage.length; i++) {
      if (Number(localStorage.key(i))) {
        items[Number(localStorage.key(i) as string)] = Number(localStorage.getItem(localStorage.key(i) as string));
      }
    }
    return items;
  }

  removeItem(id: number) {
    const item = localStorage.getItem(id.toString());
    if (Number(item) - 1 <= 0) {
      localStorage.removeItem(id.toString());
    } else {
      const newValue = (Number(item) - 1).toString();
      localStorage.setItem(id.toString(), newValue);
    }
    ///
    this._updateStorageData();
  }

  removeAllItems(id: number) {
    localStorage.removeItem(id.toString());
    ///
    this._updateStorageData();
  }
};
