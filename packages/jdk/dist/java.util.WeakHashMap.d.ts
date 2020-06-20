declare namespace java {
    namespace util {
        /**
         * Hash table based implementation of the <tt>Map</tt> interface, with
         * <em>weak keys</em>.
         * An entry in a <tt>WeakHashMap</tt> will automatically be removed when
         * its key is no longer in ordinary use.  More precisely, the presence of a
         * mapping for a given key will not prevent the key from being discarded by the
         * garbage collector, that is, made finalizable, finalized, and then reclaimed.
         * When a key has been discarded its entry is effectively removed from the map,
         * so this class behaves somewhat differently from other <tt>Map</tt>
         * implementations.
         * <p> Both null values and the null key are supported. This class has
         * performance characteristics similar to those of the <tt>HashMap</tt>
         * class, and has the same efficiency parameters of <em>initial capacity</em>
         * and <em>load factor</em>.
         * <p> Like most collection classes, this class is not synchronized.
         * A synchronized <tt>WeakHashMap</tt> may be constructed using the
         * {@link Collections#synchronizedMap Collections.synchronizedMap}
         * method.
         * <p> This class is intended primarily for use with key objects whose
         * <tt>equals</tt> methods test for object identity using the
         * <tt>==</tt> operator.  Once such a key is discarded it can never be
         * recreated, so it is impossible to do a lookup of that key in a
         * <tt>WeakHashMap</tt> at some later time and be surprised that its entry
         * has been removed.  This class will work perfectly well with key objects
         * whose <tt>equals</tt> methods are not based upon object identity, such
         * as <tt>String</tt> instances.  With such recreatable key objects,
         * however, the automatic removal of <tt>WeakHashMap</tt> entries whose
         * keys have been discarded may prove to be confusing.
         * <p> The behavior of the <tt>WeakHashMap</tt> class depends in part upon
         * the actions of the garbage collector, so several familiar (though not
         * required) <tt>Map</tt> invariants do not hold for this class.  Because
         * the garbage collector may discard keys at any time, a
         * <tt>WeakHashMap</tt> may behave as though an unknown thread is silently
         * removing entries.  In particular, even if you synchronize on a
         * <tt>WeakHashMap</tt> instance and invoke none of its mutator methods, it
         * is possible for the <tt>size</tt> method to return smaller values over
         * time, for the <tt>isEmpty</tt> method to return <tt>false</tt> and
         * then <tt>true</tt>, for the <tt>containsKey</tt> method to return
         * <tt>true</tt> and later <tt>false</tt> for a given key, for the
         * <tt>get</tt> method to return a value for a given key but later return
         * <tt>null</tt>, for the <tt>put</tt> method to return
         * <tt>null</tt> and the <tt>remove</tt> method to return
         * <tt>false</tt> for a key that previously appeared to be in the map, and
         * for successive examinations of the key set, the value collection, and
         * the entry set to yield successively smaller numbers of elements.
         * <p> Each key object in a <tt>WeakHashMap</tt> is stored indirectly as
         * the referent of a weak reference.  Therefore a key will automatically be
         * removed only after the weak references to it, both inside and outside of the
         * map, have been cleared by the garbage collector.
         * <p> <strong>Implementation note:</strong> The value objects in a
         * <tt>WeakHashMap</tt> are held by ordinary strong references.  Thus care
         * should be taken to ensure that value objects do not strongly refer to their
         * own keys, either directly or indirectly, since that will prevent the keys
         * from being discarded.  Note that a value object may refer indirectly to its
         * key via the <tt>WeakHashMap</tt> itself; that is, a value object may
         * strongly refer to some other key object whose associated value object, in
         * turn, strongly refers to the key of the first value object.  If the values
         * in the map do not rely on the map holding strong references to them, one way
         * to deal with this is to wrap values themselves within
         * <tt>WeakReferences</tt> before
         * inserting, as in: <tt>m.put(key, new WeakReference(value))</tt>,
         * and then unwrapping upon each <tt>get</tt>.
         * <p>The iterators returned by the <tt>iterator</tt> method of the collections
         * returned by all of this class's "collection view methods" are
         * <i>fail-fast</i>: if the map is structurally modified at any time after the
         * iterator is created, in any way except through the iterator's own
         * <tt>remove</tt> method, the iterator will throw a {@link
         * ConcurrentModificationException}.  Thus, in the face of concurrent
         * modification, the iterator fails quickly and cleanly, rather than risking
         * arbitrary, non-deterministic behavior at an undetermined time in the future.
         * <p>Note that the fail-fast behavior of an iterator cannot be guaranteed
         * as it is, generally speaking, impossible to make any hard guarantees in the
         * presence of unsynchronized concurrent modification.  Fail-fast iterators
         * throw <tt>ConcurrentModificationException</tt> on a best-effort basis.
         * Therefore, it would be wrong to write a program that depended on this
         * exception for its correctness:  <i>the fail-fast behavior of iterators
         * should be used only to detect bugs.</i>
         * <p>This class is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @param <K> the type of keys maintained by this map
         * @param <V> the type of mapped values
         * @author Doug Lea
         * @author Josh Bloch
         * @author Mark Reinhold
         * @since 1.2
         * @see java.util.HashMap
         * @see java.lang.ref.WeakReference
         */
        // @ts-ignore
        class WeakHashMap<K, V> extends java.util.AbstractMap<K, V> implements java.util.Map<K, V> {
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the given initial
             * capacity and the given load factor.
             * @param initialCapacity The initial capacity of the <tt>WeakHashMap</tt>
             * @param loadFactor      The load factor of the <tt>WeakHashMap</tt>
             * @throws IllegalArgumentException if the initial capacity is negative,
             *          or if the load factor is nonpositive.
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the given initial
             * capacity and the default load factor (0.75).
             * @param initialCapacity The initial capacity of the <tt>WeakHashMap</tt>
             * @throws IllegalArgumentException if the initial capacity is negative
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/)
            /**
             * Constructs a new, empty <tt>WeakHashMap</tt> with the default initial
             * capacity (16) and load factor (0.75).
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <tt>WeakHashMap</tt> with the same mappings as the
             * specified map.  The <tt>WeakHashMap</tt> is created with the default
             * load factor (0.75) and an initial capacity sufficient to hold the
             * mappings in the specified map.
             * @param m the map whose mappings are to be placed in this map
             * @throws NullPointerException if the specified map is null
             * @since 1.3
             */
            // @ts-ignore
            constructor(m: java.util.Map<K, V>)
            /**
             * Returns the number of key-value mappings in this map.
             * This result is a snapshot, and may not reflect unprocessed
             * entries that will be removed before next attempted access
             * because they are no longer referenced.
             */
            // @ts-ignore
            size(): int
            /**
             * Returns <tt>true</tt> if this map contains no key-value mappings.
             * This result is a snapshot, and may not reflect unprocessed
             * entries that will be removed before next attempted access
             * because they are no longer referenced.
             */
            // @ts-ignore
            isEmpty(): boolean
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key==null ? k==null :
             * key.equals(k))}, then this method returns {@code v}; otherwise
             * it returns {@code null}.  (There can be at most one such mapping.)
             * <p>A return value of {@code null} does not <i>necessarily</i>
             * indicate that the map contains no mapping for the key; it's also
             * possible that the map explicitly maps the key to {@code null}.
             * The {@link #containsKey containsKey} operation may be used to
             * distinguish these two cases.
             * @see #put(Object, Object)
             */
            // @ts-ignore
            get(key: any): V
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the
             * specified key.
             * @param key   The key whose presence in this map is to be tested
             * @return <tt>true</tt> if there is a mapping for <tt>key</tt>;
             *          <tt>false</tt> otherwise
             */
            // @ts-ignore
            containsKey(key: any): boolean
            /**
             * Associates the specified value with the specified key in this map.
             * If the map previously contained a mapping for this key, the old
             * value is replaced.
             * @param key key with which the specified value is to be associated.
             * @param value value to be associated with the specified key.
             * @return the previous value associated with <tt>key</tt>, or
             *          <tt>null</tt> if there was no mapping for <tt>key</tt>.
             *          (A <tt>null</tt> return can also indicate that the map
             *          previously associated <tt>null</tt> with <tt>key</tt>.)
             */
            // @ts-ignore
            put(key: K, value: V): V
            /**
             * Copies all of the mappings from the specified map to this map.
             * These mappings will replace any mappings that this map had for any
             * of the keys currently in the specified map.
             * @param m mappings to be stored in this map.
             * @throws NullPointerException if the specified map is null.
             */
            // @ts-ignore
            putAll(m: java.util.Map<K, V>): void
            /**
             * Removes the mapping for a key from this weak hash map if it is present.
             * More formally, if this map contains a mapping from key <tt>k</tt> to
             * value <tt>v</tt> such that <code>(key==null ?  k==null :
             * key.equals(k))</code>, that mapping is removed.  (The map can contain
             * at most one such mapping.)
             * <p>Returns the value to which this map previously associated the key,
             * or <tt>null</tt> if the map contained no mapping for the key.  A
             * return value of <tt>null</tt> does not <i>necessarily</i> indicate
             * that the map contained no mapping for the key; it's also possible
             * that the map explicitly mapped the key to <tt>null</tt>.
             * <p>The map will not contain a mapping for the specified key once the
             * call returns.
             * @param key key whose mapping is to be removed from the map
             * @return the previous value associated with <tt>key</tt>, or
             *          <tt>null</tt> if there was no mapping for <tt>key</tt>
             */
            // @ts-ignore
            remove(key: any): V
            /**
             * Removes all of the mappings from this map.
             * The map will be empty after this call returns.
             */
            // @ts-ignore
            clear(): void
            /**
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.
             * @param value value whose presence in this map is to be tested
             * @return <tt>true</tt> if this map maps one or more keys to the
             *          specified value
             */
            // @ts-ignore
            containsValue(value: any): boolean
            /**
             * Returns a {@link Set} view of the keys contained in this map.
             * The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own <tt>remove</tt> operation), the results of
             * the iteration are undefined.  The set supports element removal,
             * which removes the corresponding mapping from the map, via the
             * <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
             * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
             * operations.  It does not support the <tt>add</tt> or <tt>addAll</tt>
             * operations.
             */
            // @ts-ignore
            keySet(): java.util.Set<K>
            /**
             * Returns a {@link Collection} view of the values contained in this map.
             * The collection is backed by the map, so changes to the map are
             * reflected in the collection, and vice-versa.  If the map is
             * modified while an iteration over the collection is in progress
             * (except through the iterator's own <tt>remove</tt> operation),
             * the results of the iteration are undefined.  The collection
             * supports element removal, which removes the corresponding
             * mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Collection.remove</tt>, <tt>removeAll</tt>,
             * <tt>retainAll</tt> and <tt>clear</tt> operations.  It does not
             * support the <tt>add</tt> or <tt>addAll</tt> operations.
             */
            // @ts-ignore
            values(): java.util.Collection<V>
            /**
             * Returns a {@link Set} view of the mappings contained in this map.
             * The set is backed by the map, so changes to the map are
             * reflected in the set, and vice-versa.  If the map is modified
             * while an iteration over the set is in progress (except through
             * the iterator's own <tt>remove</tt> operation, or through the
             * <tt>setValue</tt> operation on a map entry returned by the
             * iterator) the results of the iteration are undefined.  The set
             * supports element removal, which removes the corresponding
             * mapping from the map, via the <tt>Iterator.remove</tt>,
             * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and
             * <tt>clear</tt> operations.  It does not support the
             * <tt>add</tt> or <tt>addAll</tt> operations.
             */
            // @ts-ignore
            entrySet(): java.util.Set<java.util.Map.Entry<K, V>>
            // @ts-ignore
            forEach(action: java.util.function.BiConsumer<any super K, ? super V> | java.util.function$.BiConsumer<? super K, ? super V>): void
            // @ts-ignore
            replaceAll(func: java.util.function.BiFunction<any super K, ? super V, V> | java.util.function$.BiFunction<? super K, ? super V, V>): void
        }
    }
}
