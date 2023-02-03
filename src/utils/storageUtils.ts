class StorageUtils {
  static setItem(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default StorageUtils;
