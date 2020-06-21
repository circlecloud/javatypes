declare namespace java {
    namespace util {
        /**
         * A Red-Black tree based {@link NavigableMap} implementation.
         * The map is sorted according to the {@linkplain Comparable natural
         * ordering} of its keys, or by a {@link Comparator} provided at map
         * creation time, depending on which constructor is used.
         * <p>This implementation provides guaranteed log(n) time cost for the
         * {@code containsKey}, {@code get}, {@code put} and {@code remove}
         * operations.  Algorithms are adaptations of those in Cormen, Leiserson, and
         * Rivest's <em>Introduction to Algorithms</em>.
         * <p>Note that the ordering maintained by a tree map, like any sorted map, and
         * whether or not an explicit comparator is provided, must be <em>consistent
         * with {@code equals}</em> if this sorted map is to correctly implement the
         * {@code Map} interface.  (See {@code Comparable} or {@code Comparator} for a
         * precise definition of <em>consistent with equals</em>.)  This is so because
         * the {@code Map} interface is defined in terms of the {@code equals}
         * operation, but a sorted map performs all key comparisons using its {@code
         * compareTo} (or {@code compare}) method, so two keys that are deemed equal by
         * this method are, from the standpoint of the sorted map, equal.  The behavior
         * of a sorted map <em>is</em> well-defined even if its ordering is
         * inconsistent with {@code equals}; it just fails to obey the general contract
         * of the {@code Map} interface.
         * <p><strong>Note that this implementation is not synchronized.</strong>
         * If multiple threads access a map concurrently, and at least one of the
         * threads modifies the map structurally, it <em>must</em> be synchronized
         * externally.  (A structural modification is any operation that adds or
         * deletes one or more mappings; merely changing the value associated
         * with an existing key is not a structural modification.)  This is
         * typically accomplished by synchronizing on some object that naturally
         * encapsulates the map.
         * If no such object exists, the map should be "wrapped" using the
         * {@link Collections#synchronizedSortedMap Collections.synchronizedSortedMap}
         * method.  This is best done at creation time, to prevent accidental
         * unsynchronized access to the map: <pre>
         * SortedMap m = Collections.synchronizedSortedMap(new TreeMap(...));</pre>
         * <p>The iterators returned by the {@code iterator} method of the collections
         * returned by all of this class's "collection view methods" are
         * <em>fail-fast</em>: if the map is structurally modified at any time after
         * the iterator is created, in any way except through the iterator's own
         * {@code remove} method, the iterator will throw a {@link
         * ConcurrentModificationException}.  Thus, in the face of concurrent
         * modification, the iterator fails quickly and cleanly, rather than risking
         * arbitrary, non-deterministic behavior at an undetermined time in the future.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw {@code ConcurrentModificationException} on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness:   <em>the fail-fast behavior of iterators
         * should be used only to detect bugs.</em>
         * <p>All {@code Map.Entry} pairs returned by methods in this class
         * and its views represent snapshots of mappings at the time they were
         * produced. They do <strong>not</strong> support the {@code Entry.setValue}
         * method. (Note however that it is possible to change mappings in the
         * associated map using {@code put}.)
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @param <K> the type of keys maintained by this map
         * @param <V> the type of mapped values
         * @author Josh Bloch and Doug Lea
         * @see Map
         * @see HashMap
         * @see Hashtable
         * @see Comparable
         * @see Comparator
         * @see Collection
         * @since 1.2
         */
        // @ts-ignore
        class TreeMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.NavigableMap<K, V>, java.lang.Cloneable, java.io.Serializable {
            /**
             * Constructs a new, empty tree map, using the natural ordering of its
             * keys.  All keys inserted into the map must implement the {@link
             * Comparable} interface.  Furthermore, all such keys must be
             * <em>mutually comparable</em>: {@code k1.compareTo(k2)} must not throw
             * a {@code ClassCastException} for any keys {@code k1} and
             * {@code k2} in the map.  If the user attempts to put a key into the
             * map that violates this constraint (for example, the user attempts to
             * put a string key into a map whose keys are integers), the
             * {@code put(Object key, Object value)} call will throw a
             * {@code ClassCastException}.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new, empty tree map, ordered according to the given
             * comparator.  All keys inserted into the map must be <em>mutually
             * comparable</em> by the given comparator: {@code comparator.compare(k1,
             * k2)} must not throw a {@code ClassCastException} for any keys
             * {@code k1} and {@code k2} in the map.  If the user attempts to put
             * a key into the map that violates this constraint, the {@code put(Object
             * key, Object value)} call will throw a
             * {@code ClassCastException}.
             * @param comparator the comparator that will be used to order this map.
             *         If {#code null}, the {@linkplain Comparable natural
             *         ordering} of the keys will be used.
             */
            // @ts-ignore
            constructor(comparator: java.util.Comparator<any>)
            /**
             * Constructs a new tree map containing the same mappings as the given
             * map, ordered according to the <em>natural ordering</em> of its keys.
             * All keys inserted into the new map must implement the {@link
             * Comparable} interface.  Furthermore, all such keys must be
             * <em>mutually comparable</em>: {@code k1.compareTo(k2)} must not throw
             * a {@code ClassCastException} for any keys {@code k1} and
             * {@code k2} in the map.  This method runs in n*log(n) time.
             * @param m the map whose mappings are to be placed in this map
             * @throws ClassCastException if the keys in m are not {#link Comparable},
             *          or are not mutually comparable
             * @throws NullPointerException if the specified map is null
             */
            // @ts-ignore
            constructor(m: java.util.Map<any, any>)
            /**
             * Constructs a new tree map containing the same mappings and
             * using the same ordering as the specified sorted map.  This
             * method runs in linear time.
             * @param m the sorted map whose mappings are to be placed in this map,
             *          and whose comparator is to be used to sort this map
             * @throws NullPointerException if the specified map is null
             */
            // @ts-ignore
            constructor(m: java.util.SortedMap<K, any>)
            /**
             * Returns the number of key-value mappings in this map.
             * @return the number of key-value mappings in this map
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Returns {@code true} if this map contains a mapping for the specified
             * key.
             * @param key key whose presence in this map is to be tested
             * @return {#code true} if this map contains a mapping for the
             *          specified key
             * @throws ClassCastException if the specified key cannot be compared
             *          with the keys currently in the map
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             */
            // @ts-ignore
            public containsKey(key: java.lang.Object | any): boolean
            /**
             * Returns {@code true} if this map maps one or more keys to the
             * specified value.  More formally, returns {@code true} if and only if
             * this map contains at least one mapping to a value {@code v} such
             * that {@code (value==null ? v==null : value.equals(v))}.  This
             * operation will probably require time linear in the map size for
             * most implementations.
             * @param value value whose presence in this map is to be tested
             * @return {#code true} if a mapping to {@code value} exists;
             *          {@code false} otherwise
             * @since 1.2
             */
            // @ts-ignore
            public containsValue(value: java.lang.Object | any): boolean
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code key} compares
             * equal to {@code k} according to the map's ordering, then this
             * method returns {@code v}; otherwise it returns {@code null}.
             * (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <em>necessarily</em>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             * @throws ClassCastException if the specified key cannot be compared
             *          with the keys currently in the map
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             */
            // @ts-ignore
            public get(key: java.lang.Object | any): V
            // @ts-ignore
            public comparator(): java.util.Comparator<any>
            /**
             * @throws NoSuchElementException {#inheritDoc}
             */
            // @ts-ignore
            public firstKey(): K
            /**
             * @throws NoSuchElementException {#inheritDoc}
             */
            // @ts-ignore
            public lastKey(): K
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings replace any mappings that this map had for any
             * of the keys currently in the specified map.
             * @param map mappings to be stored in this map
             * @throws ClassCastException if the class of a key or value in
             *          the specified map prevents it from being stored in this map
             * @throws NullPointerException if the specified map is null or
             *          the specified map contains a null key and this map does not
             *          permit null keys
             */
            // @ts-ignore
            public putAll(map: java.util.Map<any, any>): void
            /**
             * Associates the specified value with the specified key in this map.
             * If the map previously contained a mapping for the key, the old
             * value is replaced.
             * @param key key with which the specified value is to be associated
             * @param value value to be associated with the specified key
             * @return the previous value associated with {#code key}, or
             *          {@code null} if there was no mapping for {@code key}.
             *          (A {@code null} return can also indicate that the map
             *          previously associated {@code null} with {@code key}.)
             * @throws ClassCastException if the specified key cannot be compared
             *          with the keys currently in the map
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             */
            // @ts-ignore
            public put(key: K, value: V): V
            /**
             * Removes the mapping for this key from this TreeMap if present.
             * @param key key for which mapping should be removed
             * @return the previous value associated with {#code key}, or
             *          {@code null} if there was no mapping for {@code key}.
             *          (A {@code null} return can also indicate that the map
             *          previously associated {@code null} with {@code key}.)
             * @throws ClassCastException if the specified key cannot be compared
             *          with the keys currently in the map
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             */
            // @ts-ignore
            public remove(key: java.lang.Object | any): V
            /**
             * Removes all of the mappings from this map.
             * The map will be empty after this call returns.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns a shallow copy of this {@code TreeMap} instance. (The keys and
             * values themselves are not cloned.)
             * @return a shallow copy of this map
             */
            // @ts-ignore
            public clone(): any
            /**
             * @since 1.6
             */
            // @ts-ignore
            public firstEntry(): java.util.Map.Entry<K, V>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public lastEntry(): java.util.Map.Entry<K, V>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public pollFirstEntry(): java.util.Map.Entry<K, V>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public pollLastEntry(): java.util.Map.Entry<K, V>
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public lowerEntry(key: K): java.util.Map.Entry<K, V>
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public lowerKey(key: K): K
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public floorEntry(key: K): java.util.Map.Entry<K, V>
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public floorKey(key: K): K
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public ceilingEntry(key: K): java.util.Map.Entry<K, V>
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public ceilingKey(key: K): K
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public higherEntry(key: K): java.util.Map.Entry<K, V>
            /**
             * @throws ClassCastException {#inheritDoc}
             * @throws NullPointerException if the specified key is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @since 1.6
             */
            // @ts-ignore
            public higherKey(key: K): K
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * <p>The set's iterator returns the keys in ascending order.
             * The set's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#SORTED}
             * and {@link Spliterator#ORDERED} with an encounter order that is ascending
             * key order.  The spliterator's comparator (see
             * {@link java.util.Spliterator#getComparator()}) is {@code null} if
             * the tree map's comparator (see {@link #comparator()}) is {@code null}.
             * Otherwise, the spliterator's comparator is the same as or imposes the
             * same total ordering as the tree map's comparator.
             * <p>The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own {@code remove} operation), the results of
             * the iteration are undefined.  The set supports element removal,
             * which removes the corresponding mapping from the map, via the
             * {@code Iterator.remove}, {@code Set.remove},
             * {@code removeAll}, {@code retainAll}, and {@code clear}
             * operations.  It does not support the {@code add} or {@code addAll}
             * operations.
             */
            // @ts-ignore
            public keySet(): Array<K>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public navigableKeySet(): java.util.NavigableSet<K>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public descendingKeySet(): java.util.NavigableSet<K>
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * <p>The collection's iterator returns the values in ascending order
             * of the corresponding keys. The collection's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#ORDERED}
             * with an encounter order that is ascending order of the corresponding
             * keys.
             * <p>The collection is backed by the map, so changes to the map are
             * reflected in the collection, and vice-versa.  If the map is
             * modified while an iteration over the collection is in progress
             * (except through the iterator's own {@code remove} operation),
             * the results of the iteration are undefined.  The collection
             * supports element removal, which removes the corresponding
             * mapping from the map, via the {@code Iterator.remove},
             * {@code Collection.remove}, {@code removeAll},
             * {@code retainAll} and {@code clear} operations.  It does not
             * support the {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
            public values(): Array<V>
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * <p>The set's iterator returns the entries in ascending key order. The
             * sets's spliterator is
             * <em><a href="Spliterator.html#binding">late-binding</a></em>,
             * <em>fail-fast</em>, and additionally reports {@link Spliterator#SORTED} and
             * {@link Spliterator#ORDERED} with an encounter order that is ascending key
             * order.
             * <p>The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own {@code remove} operation, or through the
             * {@code setValue} operation on a map entry returned by the
             * iterator) the results of the iteration are undefined.  The set
             * supports element removal, which removes the corresponding
             * mapping from the map, via the {@code Iterator.remove},
             * {@code Set.remove}, {@code removeAll}, {@code retainAll} and
             * {@code clear} operations.  It does not support the
             * {@code add} or {@code addAll} operations.
             */
            // @ts-ignore
            public entrySet(): Array<java.util.Map.Entry<K, V>>
            /**
             * @since 1.6
             */
            // @ts-ignore
            public descendingMap(): java.util.NavigableMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code fromKey} or {@code toKey} is
             *          null and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            public subMap(fromKey: K, fromInclusive: boolean, toKey: K, toInclusive: boolean): java.util.NavigableMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code toKey} is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            public headMap(toKey: K, inclusive: boolean): java.util.NavigableMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code fromKey} is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             * @since 1.6
             */
            // @ts-ignore
            public tailMap(fromKey: K, inclusive: boolean): java.util.NavigableMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code fromKey} or {@code toKey} is
             *          null and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            public subMap(fromKey: K, toKey: K): java.util.SortedMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code toKey} is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            public headMap(toKey: K): java.util.SortedMap<K, V>
            /**
             * @throws ClassCastException       {#inheritDoc}
             * @throws NullPointerException if {#code fromKey} is null
             *          and this map uses natural ordering, or its comparator
             *          does not permit null keys
             * @throws IllegalArgumentException {#inheritDoc}
             */
            // @ts-ignore
            public tailMap(fromKey: K): java.util.SortedMap<K, V>
            // @ts-ignore
            public replace(key: K, oldValue: V, newValue: V): boolean
            // @ts-ignore
            public replace(key: K, value: V): V
            // @ts-ignore
            public forEach(action: java.util.function$.BiConsumer<any, any>): void
            // @ts-ignore
            public replaceAll(func: java.util.function$.BiFunction<any, any, any>): void
        }
    }
}
