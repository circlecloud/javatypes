declare namespace org {
    namespace springframework {
        namespace util {
            namespace ConcurrentReferenceHashMap {
                /**
                 * A reference to an {@link Entry} contained in the map. Implementations are usually
                 * wrappers around specific Java reference implementations (e.g., {@link SoftReference}).
                 * @param <K> the key type
                 * @param <V> the value type
                 */
                // @ts-ignore
                interface Reference<K, V> {
                    /**
                     * Return the referenced entry, or {@code null} if the entry is no longer available.
                     */
                    // @ts-ignore
                    get(): org.springframework.util.ConcurrentReferenceHashMap.Entry<K, V>
                    /**
                     * Return the hash for the reference.
                     */
                    // @ts-ignore
                    getHash(): number /*int*/
                    /**
                     * Return the next reference in the chain, or {@code null} if none.
                     */
                    // @ts-ignore
                    getNext(): org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>
                    /**
                     * Release this entry and ensure that it will be returned from
                     * {@code ReferenceManager#pollForPurge()}.
                     */
                    // @ts-ignore
                    release(): void
                }
            }
        }
    }
}
