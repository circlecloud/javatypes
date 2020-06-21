declare namespace java {
    namespace util {
        /**
         * An object that maps keys to values.  A map cannot contain duplicate keys;
         * each key can map to at most one value.
         * <p>This interface takes the place of the <tt>Dictionary</tt> class, which
         * was a totally abstract class rather than an interface.
         * <p>The <tt>Map</tt> interface provides three <i>collection views</i>, which
         * allow a map's contents to be viewed as a set of keys, collection of values,
         * or set of key-value mappings.  The <i>order</i> of a map is defined as
         * the order in which the iterators on the map's collection views return their
         * elements.  Some map implementations, like the <tt>TreeMap</tt> class, make
         * specific guarantees as to their order; others, like the <tt>HashMap</tt>
         * class, do not.
         * <p>Note: great care must be exercised if mutable objects are used as map
         * keys.  The behavior of a map is not specified if the value of an object is
         * changed in a manner that affects <tt>equals</tt> comparisons while the
         * object is a key in the map.  A special case of this prohibition is that it
         * is not permissible for a map to contain itself as a key.  While it is
         * permissible for a map to contain itself as a value, extreme caution is
         * advised: the <tt>equals</tt> and <tt>hashCode</tt> methods are no longer
         * well defined on such a map.
         * <p>All general-purpose map implementation classes should provide two
         * "standard" constructors: a void (no arguments) constructor which creates an
         * empty map, and a constructor with a single argument of type <tt>Map</tt>,
         * which creates a new map with the same key-value mappings as its argument.
         * In effect, the latter constructor allows the user to copy any map,
         * producing an equivalent map of the desired class.  There is no way to
         * enforce this recommendation (as interfaces cannot contain constructors) but
         * all of the general-purpose map implementations in the JDK comply.
         * <p>The "destructive" methods contained in this interface, that is, the
         * methods that modify the map on which they operate, are specified to throw
         * <tt>UnsupportedOperationException</tt> if this map does not support the
         * operation.  If this is the case, these methods may, but are not required
         * to, throw an <tt>UnsupportedOperationException</tt> if the invocation would
         * have no effect on the map.  For example, invoking the {@link #putAll(Map)}
         * method on an unmodifiable map may, but is not required to, throw the
         * exception if the map whose mappings are to be "superimposed" is empty.
         * <p>Some map implementations have restrictions on the keys and values they
         * may contain.  For example, some implementations prohibit null keys and
         * values, and some have restrictions on the types of their keys.  Attempting
         * to insert an ineligible key or value throws an unchecked exception,
         * typically <tt>NullPointerException</tt> or <tt>ClassCastException</tt>.
         * Attempting to query the presence of an ineligible key or value may throw an
         * exception, or it may simply return false; some implementations will exhibit
         * the former behavior and some will exhibit the latter.  More generally,
         * attempting an operation on an ineligible key or value whose completion
         * would not result in the insertion of an ineligible element into the map may
         * throw an exception or it may succeed, at the option of the implementation.
         * Such exceptions are marked as "optional" in the specification for this
         * interface.
         * <p>Many methods in Collections Framework interfaces are defined
         * in terms of the {@link Object#equals(Object) equals} method.  For
         * example, the specification for the {@link #containsKey(Object)
         * containsKey(Object key)} method says: "returns <tt>true</tt> if and
         * only if this map contains a mapping for a key <tt>k</tt> such that
         * <tt>(key==null ? k==null : key.equals(k))</tt>." This specification should
         * <i>not</i> be construed to imply that invoking <tt>Map.containsKey</tt>
         * with a non-null argument <tt>key</tt> will cause <tt>key.equals(k)</tt> to
         * be invoked for any key <tt>k</tt>.  Implementations are free to
         * implement optimizations whereby the <tt>equals</tt> invocation is avoided,
         * for example, by first comparing the hash codes of the two keys.  (The
         * {@link Object#hashCode()} specification guarantees that two objects with
         * unequal hash codes cannot be equal.)  More generally, implementations of
         * the various Collections Framework interfaces are free to take advantage of
         * the specified behavior of underlying {@link Object} methods wherever the
         * implementor deems it appropriate.
         * <p>Some map operations which perform recursive traversal of the map may fail
         * with an exception for self-referential instances where the map directly or
         * indirectly contains itself. This includes the {@code clone()},
         * {@code equals()}, {@code hashCode()} and {@code toString()} methods.
         * Implementations may optionally handle the self-referential scenario, however
         * most current implementations do not do so.
         * <p>This interface is a member of the
         * <a href="{@docRoot}/../technotes/guides/collections/index.html">
         * Java Collections Framework</a>.
         * @param <K> the type of keys maintained by this map
         * @param <V> the type of mapped values
         * @author Josh Bloch
         * @see HashMap
         * @see TreeMap
         * @see Hashtable
         * @see SortedMap
         * @see Collection
         * @see Set
         * @since 1.2
         */
        // @ts-ignore
        interface Map<K, V> {
            /**
             * Returns the number of key-value mappings in this map.  If the
             * map contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
             * <tt>Integer.MAX_VALUE</tt>.
             * @return the number of key-value mappings in this map
             */
            // @ts-ignore
            size(): number /*int*/
            /**
             * Returns <tt>true</tt> if this map contains no key-value mappings.
             * @return <tt>true</tt> if this map contains no key-value mappings
             */
            // @ts-ignore
            isEmpty(): boolean
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the specified
             * key.  More formally, returns <tt>true</tt> if and only if
             * this map contains a mapping for a key <tt>k</tt> such that
             * <tt>(key==null ? k==null : key.equals(k))</tt>.  (There can be
             * at most one such mapping.)
             * @param key key whose presence in this map is to be tested
             * @return <tt>true</tt> if this map contains a mapping for the specified
             *          key
             * @throws ClassCastException if the key is of an inappropriate type for
             *          this map
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key is null and this map
             *          does not permit null keys
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             */
            // @ts-ignore
            containsKey(key: java.lang.Object | any): boolean
            /**
             * Returns <tt>true</tt> if this map maps one or more keys to the
             * specified value.  More formally, returns <tt>true</tt> if and only if
             * this map contains at least one mapping to a value <tt>v</tt> such that
             * <tt>(value==null ? v==null : value.equals(v))</tt>.  This operation
             * will probably require time linear in the map size for most
             * implementations of the <tt>Map</tt> interface.
             * @param value value whose presence in this map is to be tested
             * @return <tt>true</tt> if this map maps one or more keys to the
             *          specified value
             * @throws ClassCastException if the value is of an inappropriate type for
             *          this map
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified value is null and this
             *          map does not permit null values
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             */
            // @ts-ignore
            containsValue(value: java.lang.Object | any): boolean
            /**
             * Returns the value to which the specified key is mapped,
             * or {@code null} if this map contains no mapping for the key.
             * <p>More formally, if this map contains a mapping from a key
             * {@code k} to a value {@code v} such that {@code (key==null ? k==null :
             * key.equals(k))}, then this method returns {@code v}; otherwise
             * it returns {@code null}.  (There can be at most one such mapping.)
             * <p>If this map permits null values, then a return value of
             * {@code null} does not <i>necessarily</i> indicate that the map
             * contains no mapping for the key; it's also possible that the map
             * explicitly maps the key to {@code null}.  The {@link #containsKey
             * containsKey} operation may be used to distinguish these two cases.
             * @param key the key whose associated value is to be returned
             * @return the value to which the specified key is mapped, or
             *          {#code null} if this map contains no mapping for the key
             * @throws ClassCastException if the key is of an inappropriate type for
             *          this map
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key is null and this map
             *          does not permit null keys
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             */
            // @ts-ignore
            get(key: java.lang.Object | any): V
            /**
             * Associates the specified value with the specified key in this map
             * (optional operation).  If the map previously contained a mapping for
             * the key, the old value is replaced by the specified value.  (A map
             * <tt>m</tt> is said to contain a mapping for a key <tt>k</tt> if and only
             * if {@link #containsKey(Object) m.containsKey(k)} would return
             * <tt>true</tt>.)
             * @param key key with which the specified value is to be associated
             * @param value value to be associated with the specified key
             * @return the previous value associated with <tt>key</tt>, or
             *          <tt>null</tt> if there was no mapping for <tt>key</tt>.
             *          (A <tt>null</tt> return can also indicate that the map
             *          previously associated <tt>null</tt> with <tt>key</tt>,
             *          if the implementation supports <tt>null</tt> values.)
             * @throws UnsupportedOperationException if the <tt>put</tt> operation
             *          is not supported by this map
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             * @throws NullPointerException if the specified key or value is null
             *          and this map does not permit null keys or values
             * @throws IllegalArgumentException if some property of the specified key
             *          or value prevents it from being stored in this map
             */
            // @ts-ignore
            put(key: K, value: V): V
            /**
             * Removes the mapping for a key from this map if it is present
             * (optional operation).   More formally, if this map contains a mapping
             * from key <tt>k</tt> to value <tt>v</tt> such that
             * <code>(key==null ?  k==null : key.equals(k))</code>, that mapping
             * is removed.  (The map can contain at most one such mapping.)
             * <p>Returns the value to which this map previously associated the key,
             * or <tt>null</tt> if the map contained no mapping for the key.
             * <p>If this map permits null values, then a return value of
             * <tt>null</tt> does not <i>necessarily</i> indicate that the map
             * contained no mapping for the key; it's also possible that the map
             * explicitly mapped the key to <tt>null</tt>.
             * <p>The map will not contain a mapping for the specified key once the
             * call returns.
             * @param key key whose mapping is to be removed from the map
             * @return the previous value associated with <tt>key</tt>, or
             *          <tt>null</tt> if there was no mapping for <tt>key</tt>.
             * @throws UnsupportedOperationException if the <tt>remove</tt> operation
             *          is not supported by this map
             * @throws ClassCastException if the key is of an inappropriate type for
             *          this map
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key is null and this
             *          map does not permit null keys
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             */
            // @ts-ignore
            remove(key: java.lang.Object | any): V
            /**
             * Copies all of the mappings from the specified map to this map
             * (optional operation).  The effect of this call is equivalent to that
             * of calling {@link #put(Object,Object) put(k, v)} on this map once
             * for each mapping from key <tt>k</tt> to value <tt>v</tt> in the
             * specified map.  The behavior of this operation is undefined if the
             * specified map is modified while the operation is in progress.
             * @param m mappings to be stored in this map
             * @throws UnsupportedOperationException if the <tt>putAll</tt> operation
             *          is not supported by this map
             * @throws ClassCastException if the class of a key or value in the
             *          specified map prevents it from being stored in this map
             * @throws NullPointerException if the specified map is null, or if
             *          this map does not permit null keys or values, and the
             *          specified map contains null keys or values
             * @throws IllegalArgumentException if some property of a key or value in
             *          the specified map prevents it from being stored in this map
             */
            // @ts-ignore
            putAll(m: java.util.Map<any, any>): void
            /**
             * Removes all of the mappings from this map (optional operation).
             * The map will be empty after this call returns.
             * @throws UnsupportedOperationException if the <tt>clear</tt> operation
             *          is not supported by this map
             */
            // @ts-ignore
            clear(): void
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
             * @return a set view of the keys contained in this map
             */
            // @ts-ignore
            keySet(): Array<K>
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
             * @return a collection view of the values contained in this map
             */
            // @ts-ignore
            values(): Array<V>
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
             * @return a set view of the mappings contained in this map
             */
            // @ts-ignore
            entrySet(): Array<java.util.Map.Entry<K, V>>
            /**
             * Compares the specified object with this map for equality.  Returns
             * <tt>true</tt> if the given object is also a map and the two maps
             * represent the same mappings.  More formally, two maps <tt>m1</tt> and
             * <tt>m2</tt> represent the same mappings if
             * <tt>m1.entrySet().equals(m2.entrySet())</tt>.  This ensures that the
             * <tt>equals</tt> method works properly across different implementations
             * of the <tt>Map</tt> interface.
             * @param o object to be compared for equality with this map
             * @return <tt>true</tt> if the specified object is equal to this map
             */
            // @ts-ignore
            equals(o: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this map.  The hash code of a map is
             * defined to be the sum of the hash codes of each entry in the map's
             * <tt>entrySet()</tt> view.  This ensures that <tt>m1.equals(m2)</tt>
             * implies that <tt>m1.hashCode()==m2.hashCode()</tt> for any two maps
             * <tt>m1</tt> and <tt>m2</tt>, as required by the general contract of
             * {@link Object#hashCode}.
             * @return the hash code value for this map
             * @see Map.Entry#hashCode()
             * @see Object#equals(Object)
             * @see #equals(Object)
             */
            // @ts-ignore
            hashCode(): number /*int*/
            /**
             * Returns the value to which the specified key is mapped, or
             * {@code defaultValue} if this map contains no mapping for the key.
             * @implSpec The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param key the key whose associated value is to be returned
             * @param defaultValue the default mapping of the key
             * @return the value to which the specified key is mapped, or
             *  {#code defaultValue} if this map contains no mapping for the key
             * @throws ClassCastException if the key is of an inappropriate type for
             *  this map
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key is null and this map
             *  does not permit null keys
             *  (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            getOrDefault(key: java.lang.Object | any, defaultValue: V): V
            /**
             * Performs the given action for each entry in this map until all entries
             * have been processed or the action throws an exception.   Unless
             * otherwise specified by the implementing class, actions are performed in
             * the order of entry set iteration (if an iteration order is specified.)
             * Exceptions thrown by the action are relayed to the caller.
             * @implSpec The default implementation is equivalent to, for this {#code map}:
             *  <pre> {@code
             *  for (Map.Entry<K, V> entry : map.entrySet())
             *      action.accept(entry.getKey(), entry.getValue());
             *  }</pre>
             * 
             *  The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param action The action to be performed for each entry
             * @throws NullPointerException if the specified action is null
             * @throws ConcurrentModificationException if an entry is found to be
             *  removed during iteration
             * @since 1.8
             */
            // @ts-ignore
            forEach(action: java.util.function$.BiConsumer<any, any>): void
            /**
             * Replaces each entry's value with the result of invoking the given
             * function on that entry until all entries have been processed or the
             * function throws an exception.  Exceptions thrown by the function are
             * relayed to the caller.
             * @implSpec <p>The default implementation is equivalent to, for this {#code map}:
             *  <pre> {@code
             *  for (Map.Entry<K, V> entry : map.entrySet())
             *      entry.setValue(function.apply(entry.getKey(), entry.getValue()));
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param function the function to apply to each entry
             * @throws UnsupportedOperationException if the {#code set} operation
             *  is not supported by this map's entry set iterator.
             * @throws ClassCastException if the class of a replacement value
             *  prevents it from being stored in this map
             * @throws NullPointerException if the specified function is null, or the
             *  specified replacement value is null, and this map does not permit null
             *  values
             * @throws ClassCastException if a replacement value is of an inappropriate
             *          type for this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if function or a replacement value is null,
             *          and this map does not permit null keys or values
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws IllegalArgumentException if some property of a replacement value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ConcurrentModificationException if an entry is found to be
             *  removed during iteration
             * @since 1.8
             */
            // @ts-ignore
            replaceAll(func: java.util.function$.BiFunction<any, any, any>): void
            /**
             * If the specified key is not already associated with a value (or is mapped
             * to {@code null}) associates it with the given value and returns
             * {@code null}, else returns the current value.
             * @implSpec The default implementation is equivalent to, for this {#code
             *  map}:
             * 
             *  <pre> {@code
             *  V v = map.get(key);
             *  if (v == null)
             *      v = map.put(key, value);
             * 
             *  return v;
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param key key with which the specified value is to be associated
             * @param value value to be associated with the specified key
             * @return the previous value associated with the specified key, or
             *          {#code null} if there was no mapping for the key.
             *          (A {@code null} return can also indicate that the map
             *          previously associated {@code null} with the key,
             *          if the implementation supports null values.)
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the key or value is of an inappropriate
             *          type for this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key or value is null,
             *          and this map does not permit null keys or values
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws IllegalArgumentException if some property of the specified key
             *          or value prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            putIfAbsent(key: K, value: V): V
            /**
             * Removes the entry for the specified key only if it is currently
             * mapped to the specified value.
             * @implSpec The default implementation is equivalent to, for this {#code map}:
             * 
             *  <pre> {@code
             *  if (map.containsKey(key) && Objects.equals(map.get(key), value)) {
             *      map.remove(key);
             *      return true;
             *  } else
             *      return false;
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param key key with which the specified value is associated
             * @param value value expected to be associated with the specified key
             * @return {#code true} if the value was removed
             * @throws UnsupportedOperationException if the {#code remove} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the key or value is of an inappropriate
             *          type for this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key or value is null,
             *          and this map does not permit null keys or values
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            remove(key: java.lang.Object | any, value: java.lang.Object | any): boolean
            /**
             * Replaces the entry for the specified key only if currently
             * mapped to the specified value.
             * @implSpec The default implementation is equivalent to, for this {#code map}:
             * 
             *  <pre> {@code
             *  if (map.containsKey(key) && Objects.equals(map.get(key), value)) {
             *      map.put(key, newValue);
             *      return true;
             *  } else
             *      return false;
             *  }</pre>
             * 
             *  The default implementation does not throw NullPointerException
             *  for maps that do not support null values if oldValue is null unless
             *  newValue is also null.
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param key key with which the specified value is associated
             * @param oldValue value expected to be associated with the specified key
             * @param newValue value to be associated with the specified key
             * @return {#code true} if the value was replaced
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of a specified key or value
             *          prevents it from being stored in this map
             * @throws NullPointerException if a specified key or newValue is null,
             *          and this map does not permit null keys or values
             * @throws NullPointerException if oldValue is null and this map does not
             *          permit null values
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws IllegalArgumentException if some property of a specified key
             *          or value prevents it from being stored in this map
             * @since 1.8
             */
            // @ts-ignore
            replace(key: K, oldValue: V, newValue: V): boolean
            /**
             * Replaces the entry for the specified key only if it is
             * currently mapped to some value.
             * @implSpec The default implementation is equivalent to, for this {#code map}:
             * 
             *  <pre> {@code
             *  if (map.containsKey(key)) {
             *      return map.put(key, value);
             *  } else
             *      return null;
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties.
             * @param key key with which the specified value is associated
             * @param value value to be associated with the specified key
             * @return the previous value associated with the specified key, or
             *          {#code null} if there was no mapping for the key.
             *          (A {@code null} return can also indicate that the map
             *          previously associated {@code null} with the key,
             *          if the implementation supports null values.)
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key or value is null,
             *          and this map does not permit null keys or values
             * @throws IllegalArgumentException if some property of the specified key
             *          or value prevents it from being stored in this map
             * @since 1.8
             */
            // @ts-ignore
            replace(key: K, value: V): V
            /**
             * If the specified key is not already associated with a value (or is mapped
             * to {@code null}), attempts to compute its value using the given mapping
             * function and enters it into this map unless {@code null}.
             * <p>If the function returns {@code null} no mapping is recorded. If
             * the function itself throws an (unchecked) exception, the
             * exception is rethrown, and no mapping is recorded.  The most
             * common usage is to construct a new object serving as an initial
             * mapped value or memoized result, as in:
             * <pre> {@code
             * map.computeIfAbsent(key, k -> new Value(f(k)));
             * }</pre>
             * <p>Or to implement a multi-value map, {@code Map<K,Collection<V>>},
             * supporting multiple values per key:
             * <pre> {@code
             * map.computeIfAbsent(key, k -> new HashSet<V>()).add(v);
             * }</pre>
             * @implSpec The default implementation is equivalent to the following steps for this
             *  {#code map}, then returning the current value or {@code null} if now
             *  absent:
             * 
             *  <pre> {@code
             *  if (map.get(key) == null) {
             *      V newValue = mappingFunction.apply(key);
             *      if (newValue != null)
             *          map.put(key, newValue);
             *  }
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties. In particular, all implementations of
             *  subinterface {@link java.util.concurrent.ConcurrentMap} must document
             *  whether the function is applied once atomically only if the value is not
             *  present.
             * @param key key with which the specified value is to be associated
             * @param mappingFunction the function to compute a value
             * @return the current (existing or computed) value associated with
             *          the specified key, or null if the computed value is null
             * @throws NullPointerException if the specified key is null and
             *          this map does not support null keys, or the mappingFunction
             *          is null
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            computeIfAbsent(key: K, mappingFunction: java.util.function$.Function<any, any>): V
            /**
             * If the value for the specified key is present and non-null, attempts to
             * compute a new mapping given the key and its current mapped value.
             * <p>If the function returns {@code null}, the mapping is removed.  If the
             * function itself throws an (unchecked) exception, the exception is
             * rethrown, and the current mapping is left unchanged.
             * @implSpec The default implementation is equivalent to performing the following
             *  steps for this {#code map}, then returning the current value or
             *  {@code null} if now absent:
             * 
             *  <pre> {@code
             *  if (map.get(key) != null) {
             *      V oldValue = map.get(key);
             *      V newValue = remappingFunction.apply(key, oldValue);
             *      if (newValue != null)
             *          map.put(key, newValue);
             *      else
             *          map.remove(key);
             *  }
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties. In particular, all implementations of
             *  subinterface {@link java.util.concurrent.ConcurrentMap} must document
             *  whether the function is applied once atomically only if the value is not
             *  present.
             * @param key key with which the specified value is to be associated
             * @param remappingFunction the function to compute a value
             * @return the new value associated with the specified key, or null if none
             * @throws NullPointerException if the specified key is null and
             *          this map does not support null keys, or the
             *          remappingFunction is null
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            computeIfPresent(key: K, remappingFunction: java.util.function$.BiFunction<any, any, any>): V
            /**
             * Attempts to compute a mapping for the specified key and its current
             * mapped value (or {@code null} if there is no current mapping). For
             * example, to either create or append a {@code String} msg to a value
             * mapping:
             * <pre> {@code
             * map.compute(key, (k, v) -> (v == null) ? msg : v.concat(msg))}</pre>
             * (Method {@link #merge merge()} is often simpler to use for such purposes.)
             * <p>If the function returns {@code null}, the mapping is removed (or
             * remains absent if initially absent).  If the function itself throws an
             * (unchecked) exception, the exception is rethrown, and the current mapping
             * is left unchanged.
             * @implSpec The default implementation is equivalent to performing the following
             *  steps for this {#code map}, then returning the current value or
             *  {@code null} if absent:
             * 
             *  <pre> {@code
             *  V oldValue = map.get(key);
             *  V newValue = remappingFunction.apply(key, oldValue);
             *  if (oldValue != null ) {
             *     if (newValue != null)
             *        map.put(key, newValue);
             *     else
             *        map.remove(key);
             *  } else {
             *     if (newValue != null)
             *        map.put(key, newValue);
             *     else
             *        return null;
             *  }
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties. In particular, all implementations of
             *  subinterface {@link java.util.concurrent.ConcurrentMap} must document
             *  whether the function is applied once atomically only if the value is not
             *  present.
             * @param key key with which the specified value is to be associated
             * @param remappingFunction the function to compute a value
             * @return the new value associated with the specified key, or null if none
             * @throws NullPointerException if the specified key is null and
             *          this map does not support null keys, or the
             *          remappingFunction is null
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @since 1.8
             */
            // @ts-ignore
            compute(key: K, remappingFunction: java.util.function$.BiFunction<any, any, any>): V
            /**
             * If the specified key is not already associated with a value or is
             * associated with null, associates it with the given non-null value.
             * Otherwise, replaces the associated value with the results of the given
             * remapping function, or removes if the result is {@code null}. This
             * method may be of use when combining multiple mapped values for a key.
             * For example, to either create or append a {@code String msg} to a
             * value mapping:
             * <pre> {@code
             * map.merge(key, msg, String::concat)
             * }</pre>
             * <p>If the function returns {@code null} the mapping is removed.  If the
             * function itself throws an (unchecked) exception, the exception is
             * rethrown, and the current mapping is left unchanged.
             * @implSpec The default implementation is equivalent to performing the following
             *  steps for this {#code map}, then returning the current value or
             *  {@code null} if absent:
             * 
             *  <pre> {@code
             *  V oldValue = map.get(key);
             *  V newValue = (oldValue == null) ? value :
             *               remappingFunction.apply(oldValue, value);
             *  if (newValue == null)
             *      map.remove(key);
             *  else
             *      map.put(key, newValue);
             *  }</pre>
             * 
             *  <p>The default implementation makes no guarantees about synchronization
             *  or atomicity properties of this method. Any implementation providing
             *  atomicity guarantees must override this method and document its
             *  concurrency properties. In particular, all implementations of
             *  subinterface {@link java.util.concurrent.ConcurrentMap} must document
             *  whether the function is applied once atomically only if the value is not
             *  present.
             * @param key key with which the resulting value is to be associated
             * @param value the non-null value to be merged with the existing value
             *         associated with the key or, if no existing value or a null value
             *         is associated with the key, to be associated with the key
             * @param remappingFunction the function to recompute a value if present
             * @return the new value associated with the specified key, or null if no
             *          value is associated with the key
             * @throws UnsupportedOperationException if the {#code put} operation
             *          is not supported by this map
             *          (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws ClassCastException if the class of the specified key or value
             *          prevents it from being stored in this map
             *          (<a href="{#docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
             * @throws NullPointerException if the specified key is null and this map
             *          does not support null keys or the value or remappingFunction is
             *          null
             * @since 1.8
             */
            // @ts-ignore
            merge(key: K, value: V, remappingFunction: java.util.function$.BiFunction<any, any, any>): V
        }
    }
}
