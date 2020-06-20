declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A scalable concurrent {@link ConcurrentNavigableMap} implementation.
             * The map is sorted according to the {@linkplain Comparable natural
             * ordering} of its keys, or by a {@link Comparator} provided at map
             * creation time, depending on which constructor is used.
             * <p>This class implements a concurrent variant of <a
             * href="http://en.wikipedia.org/wiki/Skip_list" target="_top">SkipLists</a>
             * providing expected average <i>log(n)</i> time cost for the
             * {@code containsKey}, {@code get}, {@code put} and
             * {@code remove} operations and their variants.  Insertion, removal,
             * update, and access operations safely execute concurrently by
             * multiple threads.
             * <p>Iterators and spliterators are
             * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
             * <p>Ascending key ordered views and their iterators are faster than
             * descending ones.
             * <p>All {@code Map.Entry} pairs returned by methods in this class
             * and its views represent snapshots of mappings at the time they were
             * produced. They do <em>not</em> support the {@code Entry.setValue}
             * method. (Note however that it is possible to change mappings in the
             * associated map using {@code put}, {@code putIfAbsent}, or
             * {@code replace}, depending on exactly which effect you need.)
             * <p>Beware that, unlike in most collections, the {@code size}
             * method is <em>not</em> a constant-time operation. Because of the
             * asynchronous nature of these maps, determining the current number
             * of elements requires a traversal of the elements, and so may report
             * inaccurate results if this collection is modified during traversal.
             * Additionally, the bulk operations {@code putAll}, {@code equals},
             * {@code toArray}, {@code containsValue}, and {@code clear} are
             * <em>not</em> guaranteed to be performed atomically. For example, an
             * iterator operating concurrently with a {@code putAll} operation
             * might view only some of the added elements.
             * <p>This class and its views and iterators implement all of the
             * <em>optional</em> methods of the {@link Map} and {@link Iterator}
             * interfaces. Like most other concurrent collections, this class does
             * <em>not</em> permit the use of {@code null} keys or values because some
             * null return values cannot be reliably distinguished from the absence of
             * elements.
             * <p>This class is a member of the
             * <a href="{@docRoot}/../technotes/guides/collections/index.html">
             * Java Collections Framework</a>.
             * @author Doug Lea
             * @param <K> the type of keys maintained by this map
             * @param <V> the type of mapped values
             * @since 1.6
             */
            // @ts-ignore
            class ConcurrentSkipListMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.concurrent.ConcurrentNavigableMap<K, V>, java.lang.Cloneable, java.io.Serializable {
                /**
                 * Constructs a new, empty map, sorted according to the
                 * {@linkplain Comparable natural ordering} of the keys.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a new, empty map, sorted according to the specified
                 * comparator.
                 * @param comparator the comparator that will be used to order this map.
                 *         If {#code null}, the {@linkplain Comparable natural
                 *         ordering} of the keys will be used.
                 */
                // @ts-ignore
                constructor(comparator: java.util.Comparator<any super K>)
                /**
                 * Constructs a new map containing the same mappings as the given map,
                 * sorted according to the {@linkplain Comparable natural ordering} of
                 * the keys.
                 * @param m the map whose mappings are to be placed in this map
                 * @throws ClassCastException if the keys in {#code m} are not
                 *          {@link Comparable}, or are not mutually comparable
                 * @throws NullPointerException if the specified map or any of its keys
                 *          or values are null
                 */
                // @ts-ignore
                constructor(m: java.util.Map<K, V>)
                /**
                 * Constructs a new map containing the same mappings and using the
                 * same ordering as the specified sorted map.
                 * @param m the sorted map whose mappings are to be placed in this
                 *         map, and whose comparator is to be used to sort this map
                 * @throws NullPointerException if the specified sorted map or any of
                 *          its keys or values are null
                 */
                // @ts-ignore
                constructor(m: java.util.SortedMap<K, V>)
                /**
                 * Returns a shallow copy of this {@code ConcurrentSkipListMap}
                 * instance. (The keys and values themselves are not cloned.)
                 * @return a shallow copy of this map
                 */
                // @ts-ignore
                clone(): java.util.concurrent.ConcurrentSkipListMap<K, V>
                /**
                 * Returns {@code true} if this map contains a mapping for the specified
                 * key.
                 * @param key key whose presence in this map is to be tested
                 * @return {#code true} if this map contains a mapping for the specified key
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                containsKey(key: any): boolean
                /**
                 * Returns the value to which the specified key is mapped,
                 * or {@code null} if this map contains no mapping for the key.
                 * <p>More formally, if this map contains a mapping from a key
                 * {@code k} to a value {@code v} such that {@code key} compares
                 * equal to {@code k} according to the map's ordering, then this
                 * method returns {@code v}; otherwise it returns {@code null}.
                 * (There can be at most one such mapping.)
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                get(key: any): V
                /**
                 * Returns the value to which the specified key is mapped,
                 * or the given defaultValue if this map contains no mapping for the key.
                 * @param key the key
                 * @param defaultValue the value to return if this map contains
                 *  no mapping for the given key
                 * @return the mapping for the key, if present; else the defaultValue
                 * @throws NullPointerException if the specified key is null
                 * @since 1.8
                 */
                // @ts-ignore
                getOrDefault(key: any, defaultValue: V): V
                /**
                 * Associates the specified value with the specified key in this map.
                 * If the map previously contained a mapping for the key, the old
                 * value is replaced.
                 * @param key key with which the specified value is to be associated
                 * @param value value to be associated with the specified key
                 * @return the previous value associated with the specified key, or
                 *          {#code null} if there was no mapping for the key
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key or value is null
                 */
                // @ts-ignore
                put(key: K, value: V): V
                /**
                 * Removes the mapping for the specified key from this map if present.
                 * @param key key for which mapping should be removed
                 * @return the previous value associated with the specified key, or
                 *          {#code null} if there was no mapping for the key
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                remove(key: any): V
                /**
                 * Returns {@code true} if this map maps one or more keys to the
                 * specified value.  This operation requires time linear in the
                 * map size. Additionally, it is possible for the map to change
                 * during execution of this method, in which case the returned
                 * result may be inaccurate.
                 * @param value value whose presence in this map is to be tested
                 * @return {#code true} if a mapping to {@code value} exists;
                 *          {@code false} otherwise
                 * @throws NullPointerException if the specified value is null
                 */
                // @ts-ignore
                containsValue(value: any): boolean
                /**
                 * Returns the number of key-value mappings in this map.  If this map
                 * contains more than {@code Integer.MAX_VALUE} elements, it
                 * returns {@code Integer.MAX_VALUE}.
                 * <p>Beware that, unlike in most collections, this method is
                 * <em>NOT</em> a constant-time operation. Because of the
                 * asynchronous nature of these maps, determining the current
                 * number of elements requires traversing them all to count them.
                 * Additionally, it is possible for the size to change during
                 * execution of this method, in which case the returned result
                 * will be inaccurate. Thus, this method is typically not very
                 * useful in concurrent applications.
                 * @return the number of elements in this map
                 */
                // @ts-ignore
                size(): int
                /**
                 * Returns {@code true} if this map contains no key-value mappings.
                 * @return {#code true} if this map contains no key-value mappings
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Removes all of the mappings from this map.
                 */
                // @ts-ignore
                clear(): void
                /**
                 * If the specified key is not already associated with a value,
                 * attempts to compute its value using the given mapping function
                 * and enters it into this map unless {@code null}.  The function
                 * is <em>NOT</em> guaranteed to be applied once atomically only
                 * if the value is not present.
                 * @param key key with which the specified value is to be associated
                 * @param mappingFunction the function to compute a value
                 * @return the current (existing or computed) value associated with
                 *          the specified key, or null if the computed value is null
                 * @throws NullPointerException if the specified key is null
                 *          or the mappingFunction is null
                 * @since 1.8
                 */
                // @ts-ignore
                computeIfAbsent(key: K, mappingFunction: java.util.function.Function<any super K, V> | java.util.function$.Function<? super K, V>): V
                /**
                 * If the value for the specified key is present, attempts to
                 * compute a new mapping given the key and its current mapped
                 * value. The function is <em>NOT</em> guaranteed to be applied
                 * once atomically.
                 * @param key key with which a value may be associated
                 * @param remappingFunction the function to compute a value
                 * @return the new value associated with the specified key, or null if none
                 * @throws NullPointerException if the specified key is null
                 *          or the remappingFunction is null
                 * @since 1.8
                 */
                // @ts-ignore
                computeIfPresent(key: K, remappingFunction: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): V
                /**
                 * Attempts to compute a mapping for the specified key and its
                 * current mapped value (or {@code null} if there is no current
                 * mapping). The function is <em>NOT</em> guaranteed to be applied
                 * once atomically.
                 * @param key key with which the specified value is to be associated
                 * @param remappingFunction the function to compute a value
                 * @return the new value associated with the specified key, or null if none
                 * @throws NullPointerException if the specified key is null
                 *          or the remappingFunction is null
                 * @since 1.8
                 */
                // @ts-ignore
                compute(key: K, remappingFunction: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): V
                /**
                 * If the specified key is not already associated with a value,
                 * associates it with the given value.  Otherwise, replaces the
                 * value with the results of the given remapping function, or
                 * removes if {@code null}. The function is <em>NOT</em>
                 * guaranteed to be applied once atomically.
                 * @param key key with which the specified value is to be associated
                 * @param value the value to use if absent
                 * @param remappingFunction the function to recompute a value if present
                 * @return the new value associated with the specified key, or null if none
                 * @throws NullPointerException if the specified key or value is null
                 *          or the remappingFunction is null
                 * @since 1.8
                 */
                // @ts-ignore
                merge(key: K, value: V, remappingFunction: java.util.function.BiFunction<any super V, ? super V, V> | java.util.function$.BiFunction<? super V, ? super V, V>): V
                /**
                 * Returns a {@link NavigableSet} view of the keys contained in this map.
                 * <p>The set's iterator returns the keys in ascending order.
                 * The set's spliterator additionally reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * key order.  The spliterator's comparator (see
                 * {@link java.util.Spliterator#getComparator()}) is {@code null} if
                 * the map's comparator (see {@link #comparator()}) is {@code null}.
                 * Otherwise, the spliterator's comparator is the same as or imposes the
                 * same total ordering as the map's comparator.
                 * <p>The set is backed by the map, so changes to the map are
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
                // @ts-ignore
                navigableKeySet(): java.util.NavigableSet<K>
                /**
                 * Returns a {@link Collection} view of the values contained in this map.
                 * <p>The collection's iterator returns the values in ascending order
                 * of the corresponding keys. The collections's spliterator additionally
                 * reports {@link Spliterator#CONCURRENT}, {@link Spliterator#NONNULL} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * order of the corresponding keys.
                 * <p>The collection is backed by the map, so changes to the map are
                 * reflected in the collection, and vice-versa.  The collection
                 * supports element removal, which removes the corresponding
                 * mapping from the map, via the {@code Iterator.remove},
                 * {@code Collection.remove}, {@code removeAll},
                 * {@code retainAll} and {@code clear} operations.  It does not
                 * support the {@code add} or {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 */
                // @ts-ignore
                values(): java.util.Collection<V>
                /**
                 * Returns a {@link Set} view of the mappings contained in this map.
                 * <p>The set's iterator returns the entries in ascending key order.  The
                 * set's spliterator additionally reports {@link Spliterator#CONCURRENT},
                 * {@link Spliterator#NONNULL}, {@link Spliterator#SORTED} and
                 * {@link Spliterator#ORDERED}, with an encounter order that is ascending
                 * key order.
                 * <p>The set is backed by the map, so changes to the map are
                 * reflected in the set, and vice-versa.  The set supports element
                 * removal, which removes the corresponding mapping from the map,
                 * via the {@code Iterator.remove}, {@code Set.remove},
                 * {@code removeAll}, {@code retainAll} and {@code clear}
                 * operations.  It does not support the {@code add} or
                 * {@code addAll} operations.
                 * <p>The view's iterators and spliterators are
                 * <a href="package-summary.html#Weakly"><i>weakly consistent</i></a>.
                 * <p>The {@code Map.Entry} elements traversed by the {@code iterator}
                 * or {@code spliterator} do <em>not</em> support the {@code setValue}
                 * operation.
                 * @return a set view of the mappings contained in this map,
                 *          sorted in ascending key order
                 */
                // @ts-ignore
                entrySet(): java.util.Set<java.util.Map.Entry<K, V>>
                // @ts-ignore
                descendingMap(): java.util.concurrent.ConcurrentNavigableMap<K, V>
                // @ts-ignore
                descendingKeySet(): java.util.NavigableSet<K>
                /**
                 * Compares the specified object with this map for equality.
                 * Returns {@code true} if the given object is also a map and the
                 * two maps represent the same mappings.  More formally, two maps
                 * {@code m1} and {@code m2} represent the same mappings if
                 * {@code m1.entrySet().equals(m2.entrySet())}.  This
                 * operation may return misleading results if either map is
                 * concurrently modified during execution of this method.
                 * @param o object to be compared for equality with this map
                 * @return {#code true} if the specified object is equal to this map
                 */
                // @ts-ignore
                equals(o: any): boolean
                /**
                 * {@inheritDoc}
                 * @return the previous value associated with the specified key,
                 *          or {#code null} if there was no mapping for the key
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key or value is null
                 */
                // @ts-ignore
                putIfAbsent(key: K, value: V): V
                /**
                 * {@inheritDoc}
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                remove(key: any, value: any): boolean
                /**
                 * {@inheritDoc}
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if any of the arguments are null
                 */
                // @ts-ignore
                replace(key: K, oldValue: V, newValue: V): boolean
                /**
                 * {@inheritDoc}
                 * @return the previous value associated with the specified key,
                 *          or {#code null} if there was no mapping for the key
                 * @throws ClassCastException if the specified key cannot be compared
                 *          with the keys currently in the map
                 * @throws NullPointerException if the specified key or value is null
                 */
                // @ts-ignore
                replace(key: K, value: V): V
                // @ts-ignore
                comparator(): java.util.Comparator<? super K>
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                firstKey(): K
                /**
                 * @throws NoSuchElementException {#inheritDoc}
                 */
                // @ts-ignore
                lastKey(): K
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromKey} or {@code toKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subMap(fromKey: K, fromInclusive: boolean, toKey: K, toInclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code toKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headMap(toKey: K, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailMap(fromKey: K, inclusive: boolean): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromKey} or {@code toKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                subMap(fromKey: K, toKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code toKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                headMap(toKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if {#code fromKey} is null
                 * @throws IllegalArgumentException {#inheritDoc}
                 */
                // @ts-ignore
                tailMap(fromKey: K): java.util.concurrent.ConcurrentNavigableMap<K, V>
                /**
                 * Returns a key-value mapping associated with the greatest key
                 * strictly less than the given key, or {@code null} if there is
                 * no such key. The returned entry does <em>not</em> support the
                 * {@code Entry.setValue} method.
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                lowerEntry(key: K): java.util.Map.Entry<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                lowerKey(key: K): K
                /**
                 * Returns a key-value mapping associated with the greatest key
                 * less than or equal to the given key, or {@code null} if there
                 * is no such key. The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 * @param key the key
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                floorEntry(key: K): java.util.Map.Entry<K, V>
                /**
                 * @param key the key
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                floorKey(key: K): K
                /**
                 * Returns a key-value mapping associated with the least key
                 * greater than or equal to the given key, or {@code null} if
                 * there is no such entry. The returned entry does <em>not</em>
                 * support the {@code Entry.setValue} method.
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                ceilingEntry(key: K): java.util.Map.Entry<K, V>
                /**
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                ceilingKey(key: K): K
                /**
                 * Returns a key-value mapping associated with the least key
                 * strictly greater than the given key, or {@code null} if there
                 * is no such key. The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 * @param key the key
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                higherEntry(key: K): java.util.Map.Entry<K, V>
                /**
                 * @param key the key
                 * @throws ClassCastException {#inheritDoc}
                 * @throws NullPointerException if the specified key is null
                 */
                // @ts-ignore
                higherKey(key: K): K
                /**
                 * Returns a key-value mapping associated with the least
                 * key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                firstEntry(): java.util.Map.Entry<K, V>
                /**
                 * Returns a key-value mapping associated with the greatest
                 * key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                lastEntry(): java.util.Map.Entry<K, V>
                /**
                 * Removes and returns a key-value mapping associated with
                 * the least key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                pollFirstEntry(): java.util.Map.Entry<K, V>
                /**
                 * Removes and returns a key-value mapping associated with
                 * the greatest key in this map, or {@code null} if the map is empty.
                 * The returned entry does <em>not</em> support
                 * the {@code Entry.setValue} method.
                 */
                // @ts-ignore
                pollLastEntry(): java.util.Map.Entry<K, V>
                // @ts-ignore
                forEach(action: java.util.function.BiConsumer<any super K, ? super V> | java.util.function$.BiConsumer<? super K, ? super V>): void
                // @ts-ignore
                replaceAll(func: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): void
            }
        }
    }
}
