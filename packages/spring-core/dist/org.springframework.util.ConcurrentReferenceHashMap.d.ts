declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * A {@link ConcurrentHashMap} that uses {@link ReferenceType#SOFT soft} or
             * {@linkplain ReferenceType#WEAK weak} references for both {@code keys} and {@code values}.
             * <p>This class can be used as an alternative to
             * {@code Collections.synchronizedMap(new WeakHashMap<K, Reference<V>>())} in order to
             * support better performance when accessed concurrently. This implementation follows the
             * same design constraints as {@link ConcurrentHashMap} with the exception that
             * {@code null} values and {@code null} keys are supported.
             * <p><b>NOTE:</b> The use of references means that there is no guarantee that items
             * placed into the map will be subsequently available. The garbage collector may discard
             * references at any time, so it may appear that an unknown thread is silently removing
             * entries.
             * <p>If not explicitly specified, this implementation will use
             * {@linkplain SoftReference soft entry references}.
             * @author Phillip Webb
             * @author Juergen Hoeller
             * @since 3.2
             * @param <K> the key type
             * @param <V> the value type
             */
            // @ts-ignore
            class ConcurrentReferenceHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.concurrent.ConcurrentMap<K, V> {
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 * @param loadFactor the load factor. When the average number of references per table
                 *  exceeds this value resize will be attempted
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 * @param concurrencyLevel the expected number of threads that will concurrently
                 *  write to the map
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, concurrencyLevel: number /*int*/)
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 * @param referenceType the reference type used for entries (soft or weak)
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, referenceType: org.springframework.util.ConcurrentReferenceHashMap.ReferenceType)
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 * @param loadFactor the load factor. When the average number of references per
                 *  table exceeds this value, resize will be attempted.
                 * @param concurrencyLevel the expected number of threads that will concurrently
                 *  write to the map
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/, concurrencyLevel: number /*int*/)
                /**
                 * Create a new {@code ConcurrentReferenceHashMap} instance.
                 * @param initialCapacity the initial capacity of the map
                 * @param loadFactor the load factor. When the average number of references per
                 *  table exceeds this value, resize will be attempted.
                 * @param concurrencyLevel the expected number of threads that will concurrently
                 *  write to the map
                 * @param referenceType the reference type used for entries (soft or weak)
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/, concurrencyLevel: number /*int*/, referenceType: org.springframework.util.ConcurrentReferenceHashMap.ReferenceType)
                // @ts-ignore
                getLoadFactor(): number /*float*/
                // @ts-ignore
                getSegmentsSize(): number /*int*/
                // @ts-ignore
                getSegment(index: number /*int*/): org.springframework.util.ConcurrentReferenceHashMap.Segment<any>
                /**
                 * Factory method that returns the {@link ReferenceManager}.
                 * This method will be called once for each {@link Segment}.
                 * @return a new reference manager
                 */
                // @ts-ignore
                createReferenceManager(): org.springframework.util.ConcurrentReferenceHashMap.ReferenceManager<any>
                /**
                 * Get the hash for a given object, apply an additional hash function to reduce
                 * collisions. This implementation uses the same Wang/Jenkins algorithm as
                 * {@link ConcurrentHashMap}. Subclasses can override to provide alternative hashing.
                 * @param o the object to hash (may be null)
                 * @return the resulting hash code
                 */
                // @ts-ignore
                getHash(o: java.lang.Object | any): number /*int*/
                // @ts-ignore
                public get(key: java.lang.Object | any): V
                // @ts-ignore
                public getOrDefault(key: java.lang.Object | any, defaultValue: V): V
                // @ts-ignore
                public containsKey(key: java.lang.Object | any): boolean
                /**
                 * Return a {@link Reference} to the {@link Entry} for the specified {@code key},
                 * or {@code null} if not found.
                 * @param key the key (can be {#code null})
                 * @param restructure types of restructure allowed during this call
                 * @return the reference, or {#code null} if not found
                 */
                // @ts-ignore
                getReference(key: java.lang.Object | any, restructure: org.springframework.util.ConcurrentReferenceHashMap.Restructure): org.springframework.util.ConcurrentReferenceHashMap.Reference<K, V>
                // @ts-ignore
                public put(key: K, value: V): V
                // @ts-ignore
                public putIfAbsent(key: K, value: V): V
                // @ts-ignore
                public remove(key: java.lang.Object | any): V
                // @ts-ignore
                public remove(key: java.lang.Object | any, value: java.lang.Object | any): boolean
                // @ts-ignore
                public replace(key: K, oldValue: V, newValue: V): boolean
                // @ts-ignore
                public replace(key: K, value: V): V
                // @ts-ignore
                public clear(): void
                /**
                 * Remove any entries that have been garbage collected and are no longer referenced.
                 * Under normal circumstances garbage collected entries are automatically purged as
                 * items are added or removed from the Map. This method can be used to force a purge,
                 * and is useful when the Map is read frequently but updated less often.
                 */
                // @ts-ignore
                public purgeUnreferencedEntries(): void
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public entrySet(): Array<java.util.Map.Entry<K, V>>
                /**
                 * Calculate a shift value that can be used to create a power-of-two value between
                 * the specified maximum and minimum values.
                 * @param minimumValue the minimum value
                 * @param maximumValue the maximum value
                 * @return the calculated shift (use {#code 1 << shift} to obtain a value)
                 */
                // @ts-ignore
                static calculateShift(minimumValue: number /*int*/, maximumValue: number /*int*/): number /*int*/
            }
        }
    }
}
