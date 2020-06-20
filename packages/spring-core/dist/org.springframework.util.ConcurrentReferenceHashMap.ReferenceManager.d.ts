declare namespace org {
    namespace springframework {
        namespace util {
            namespace ConcurrentReferenceHashMap {
                /**
                 * Strategy class used to manage {@link Reference References}.
                 * This class can be overridden if alternative reference types need to be supported.
                 */
                // @ts-ignore
                class K, V>.ReferenceManager extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Factory method used to create a new {@link Reference}.
                     * @param entry the entry contained in the reference
                     * @param hash the hash
                     * @param next the next reference in the chain, or {#code null} if none
                     * @return a new {#link Reference}
                     */
                    // @ts-ignore
                    createReference(entry: org.springframework.util.ConcurrentReferenceHashMap.Entry<K, V>, hash: number /*int*/, next: org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>): org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>
                    /**
                     * Return any reference that has been garbage collected and can be purged from the
                     * underlying structure or {@code null} if no references need purging. This
                     * method must be thread safe and ideally should not block when returning
                     * {@code null}. References should be returned once and only once.
                     * @return a reference to purge or {#code null}
                     */
                    // @ts-ignore
                    pollForPurge(): org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>
                }
            }
        }
    }
}
