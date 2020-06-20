declare namespace java {
    namespace util {
        namespace concurrent {
            namespace ConcurrentHashMap {
                /**
                 * A view of a ConcurrentHashMap as a {@link Set} of keys, in
                 * which additions may optionally be enabled by mapping to a
                 * common value.  This class cannot be directly instantiated.
                 * See {@link #keySet() keySet()},
                 * {@link #keySet(Object) keySet(V)},
                 * {@link #newKeySet() newKeySet()},
                 * {@link #newKeySet(int) newKeySet(int)}.
                 * @since 1.8
                 */
                // @ts-ignore
                class KeySetView<K, V> extends java.util.concurrent.ConcurrentHashMap.CollectionView<K, V, K> implements java.util.Set<K>, java.io.Serializable {
                    /**
                     * Returns the default mapped value for additions,
                     * or {@code null} if additions are not supported.
                     * @return the default mapped value for additions, or {#code null}
                     *  if not supported
                     */
                    // @ts-ignore
                    getMappedValue(): V
                    /**
                     * {@inheritDoc}
                     * @throws NullPointerException if the specified key is null
                     */
                    // @ts-ignore
                    contains(o: any): boolean
                    /**
                     * Removes the key from this map view, by removing the key (and its
                     * corresponding value) from the backing map.  This method does
                     * nothing if the key is not in the map.
                     * @param o the key to be removed from the backing map
                     * @return {#code true} if the backing map contained the specified key
                     * @throws NullPointerException if the specified key is null
                     */
                    // @ts-ignore
                    remove(o: any): boolean
                    /**
                     * @return an iterator over the keys of the backing map
                     */
                    // @ts-ignore
                    iterator(): java.util.Iterator<K>
                    /**
                     * Adds the specified key to this set view by mapping the key to
                     * the default mapped value in the backing map, if defined.
                     * @param e key to be added
                     * @return {#code true} if this set changed as a result of the call
                     * @throws NullPointerException if the specified key is null
                     * @throws UnsupportedOperationException if no default mapped value
                     *  for additions was provided
                     */
                    // @ts-ignore
                    add(e: K): boolean
                    /**
                     * Adds all of the elements in the specified collection to this set,
                     * as if by calling {@link #add} on each one.
                     * @param c the elements to be inserted into this set
                     * @return {#code true} if this set changed as a result of the call
                     * @throws NullPointerException if the collection or any of its
                     *  elements are {#code null}
                     * @throws UnsupportedOperationException if no default mapped value
                     *  for additions was provided
                     */
                    // @ts-ignore
                    addAll(c: Array<K>): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    equals(o: any): boolean
                    // @ts-ignore
                    spliterator(): java.util.Spliterator<K>
                    // @ts-ignore
                    forEach(action: java.util.function.Consumer<any super K> | java.util.function$.Consumer<? super K>): void
                }
            }
        }
    }
}
