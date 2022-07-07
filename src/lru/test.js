import LRUCache from ".";

const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);

console.log("get 1: " + lru.get(1));

lru.put(3, 3);

console.log("get 2: " + lru.get(2));

lru.put(4, 4);

console.log("get 1: " + lru.get(1));
console.log("get 3: " + lru.get(3));
console.log("get 4: " + lru.get(4));

console.log(lru.cache, "lru");

// 扩容
lru.capacity = 4;
lru.put(4, 6);
lru.put(5, 5);

console.log(lru.cache, "扩容 lru");

lru.capacity = 3;

console.log(lru.cache, "缩容 lru");
