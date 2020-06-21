declare namespace org {
    namespace springframework {
        namespace util {
            namespace ConcurrentReferenceHashMap {
                /**
                 * A single segment used to divide the map to allow better concurrent performance.
                 */
                // @ts-ignore
                class Segment extends java.util.concurrent.locks.ReentrantLock {
                    // @ts-ignore
                    constructor(initialSize: number /*int*/, resizeThreshold: number /*int*/)
                    // @ts-ignore
                    public getReference(key: java.lang.Object | any, hash: number /*int*/, restructure: org.springframework.util.ConcurrentReferenceHashMap.Restructure): org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>
                    /**
                     * Apply an update operation to this segment.
                     * The segment will be locked during the update.
                     * @param hash the hash of the key
                     * @param key the key
                     * @param task the update operation
                     * @return the result of the operation
                     */
                    // @ts-ignore
                    public doTask<T>(hash: number /*int*/, key: java.lang.Object | any, task: org.springframework.util.ConcurrentReferenceHashMap.Task<T>): T
                    /**
                     * Clear all items from this segment.
                     */
                    // @ts-ignore
                    public clear(): void
                    /**
                     * Restructure the underlying data structure when it becomes necessary. This
                     * method can increase the size of the references table as well as purge any
                     * references that have been garbage collected.
                     * @param allowResize if resizing is permitted
                     */
                    // @ts-ignore
                    restructureIfNecessary(allowResize: boolean): void
                    /**
                     * Return the size of the current references array.
                     */
                    // @ts-ignore
                    public getSize(): number /*int*/
                    /**
                     * Return the total number of references in this segment.
                     */
                    // @ts-ignore
                    public getCount(): number /*int*/
                }
            }
        }
    }
}
