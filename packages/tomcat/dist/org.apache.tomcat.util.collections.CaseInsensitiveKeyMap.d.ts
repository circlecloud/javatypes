declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace collections {
                    /**
                     * A Map implementation that uses case-insensitive (using {@link
                     * Locale#ENGLISH}) strings as keys.
                     * <p>
                     * Keys must be instances of {@link String}. Note that this means that
                     * <code>null</code> keys are not permitted.
                     * <p>
                     * This implementation is not thread-safe.
                     * @param <V> Type of values placed in this Map.
                     */
                    // @ts-ignore
                    class CaseInsensitiveKeyMap<V> extends java.util.AbstractMap<java.lang.String | string, V> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public get(key: java.lang.Object | any): V
                        // @ts-ignore
                        public put(key: java.lang.String | string, value: V): V
                        /**
                         * {@inheritDoc}
                         * <p>
                         * <b>Use this method with caution</b>. If the input Map contains duplicate
                         * keys when the keys are compared in a case insensitive manner then some
                         * values will be lost when inserting via this method.
                         */
                        // @ts-ignore
                        public putAll(m: java.util.Map<any, any>): void
                        // @ts-ignore
                        public containsKey(key: java.lang.Object | any): boolean
                        // @ts-ignore
                        public remove(key: java.lang.Object | any): V
                        // @ts-ignore
                        public entrySet(): Array<java.util.Map.Entry<java.lang.String | string, V>>
                    }
                }
            }
        }
    }
}
