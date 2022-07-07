class LRUCache {
  #capacity;

  /**
   * @param {number} capacity 缓存容量
   */
  constructor(capacity) {
    this.#capacity = capacity;
    this.cache = new Map();
  }

  get capacity() {
    return this.#capacity;
  }

  set capacity(newCapacity) {
    if (newCapacity < this.capacity) {
      let diff = this.capacity - newCapacity;
      while (diff--) {
        this.#removeLeastRecentlyUsed();
      }
    }
    this.#capacity = newCapacity;
  }

  #removeLeastRecentlyUsed() {
    this.cache.delete(this.cache.keys().next().value);
  }

  /**
   * @param {string} key
   */
  has(key) {
    return this.cache.has(key);
  }

  /**
   * @param {string} key
   */
  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return null;
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  put(key, value) {
    if (this.cache.size === this.#capacity) {
      this.#removeLeastRecentlyUsed();
    }
    this.cache.set(key, value);
  }
}

export default LRUCache;
