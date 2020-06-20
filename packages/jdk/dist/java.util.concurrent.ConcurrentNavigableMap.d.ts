declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A {@link ConcurrentMap} supporting {@link NavigableMap} operations,
             * and recursively so for its navigable sub-maps.
             * <p>This interface is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @author Doug Lea
             * @param <K> the type of keys maintained by this map
             * @param <V> the type of mapped values
             * @since 1.6
             */
            // @ts-ignore
            interface ConcurrentNavigableMap<K, V> extends java.util.concurrent.ConcurrentMap<K, V>, java.util.NavigableMap<K, V> {
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subMap(fromKey: K, fromInclusive: boolean, toKey: K, toInclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headMap(toKey: K, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailMap(fromKey: K, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subMap(fromKey: K, toKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headMap(toKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException       {#inheritDoc}
                 * @throws NullPointerException     {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailMap(fromKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * Returns a reverse order view of the mappings contained in this map.
                 * The descending map is backed by this map, so changes to the map are
                 * reflected in the descending map, and vice-versa.
                 * <p>The returned map has an ordering equivalent to
                 * {@link Collections#reverseOrder(Comparator) Collections.reverseOrder}{@code (comparator())}.
                 * The expression {@code m.descendingMap().descendingMap()} returns a
                 * view of {@code m} essentially equivalent to {@code m}.
                 * @return a reverse order view of this map
                 */
                // @ts-ignore
                descendingMap(): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in ascending order.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return a navigable set view of the keys in this map
                 */
                // @ts-ignore
                navigableKeySet(): java.util.NavigableSet<K>
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in ascending order.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>This method is equivalent to method {@code navigableKeySet}.
                 * @return a navigable set view of the keys in this map
                 */
                // @ts-ignore
                keySet(): java.util.NavigableSet<K>
                /**
                 * Returns a reverse order {@link NavigableSet} view of the keys contained in this map.
                 * The set's iterator returns the keys in descending order.
                 * The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll}, and {@code clear}
                 * operations.  It does not support the {@code add} or {@code addAll}
                 * operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * @return a reverse order navigable set view of the keys in this map
                 */
                // @ts-ignore
                descendingKeySet(): java.util.NavigableSet<K>
            }
        }
    }
}
