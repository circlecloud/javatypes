declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace collections {
                    /**
                     * Concurrent hash map that holds its keys via weak references. Unlike
                     * <code>WeakHashMap</code> this class does not handle dead keys during common
                     * access operations, but expects you to call its {@link #maintain()} method
                     * periodically. Both keys and values are expected to be not-<code>null</code>.
                     * @param <K> The type of keys used with the Map instance
                     * @param <V> The type of values used with the Map instance
                     */
                    // @ts-ignore
                    class ManagedConcurrentWeakHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.concurrent.ConcurrentMap<K, V> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Method, that has to be invoked periodically to clean dead keys from the
                         * map.
                         */
                        // @ts-ignore
                        public maintain(): void
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public containsValue(value: java.lang.Object | any): boolean
                        // @ts-ignore
                        public containsKey(key: java.lang.Object | any): boolean
                        // @ts-ignore
                        public get(key: java.lang.Object | any): V
                        // @ts-ignore
                        public put(key: K, value: V): V
                        // @ts-ignore
                        public remove(key: java.lang.Object | any): V
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public putIfAbsent(key: K, value: V): V
                        // @ts-ignore
                        public remove(key: java.lang.Object | any, value: java.lang.Object | any): boolean
                        // @ts-ignore
                        public replace(key: K, oldValue: V, newValue: V): boolean
                        // @ts-ignore
                        public replace(key: K, value: V): V
                        // @ts-ignore
                        public values(): Array<V>
                        // @ts-ignore
                        public entrySet(): Array<java.util.Map.Entry<K, V>>
                    }
                }
            }
        }
    }
}
