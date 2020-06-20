declare namespace javax {
    namespace script {
        /**
         * A simple implementation of Bindings backed by
         * a <code>HashMap</code> or some other specified <code>Map</code>.
         * @author Mike Grogan
         * @since 1.6
         */
        // @ts-ignore
        class SimpleBindings extends java.lang.Object implements javax.script.Bindings {
            /**
             * Constructor uses an existing <code>Map</code> to store the values.
             * @param m The <code>Map</code> backing this <code>SimpleBindings</code>.
             * @throws NullPointerException if m is null
             */
            // @ts-ignore
            constructor(m: java.util.Map<java.lang.String, java.lang.Object>)
            /**
             * Default constructor uses a <code>HashMap</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Sets the specified key/value in the underlying <code>map</code> field.
             * @param name Name of value
             * @param value Value to set.
             * @return Previous value for the specified key.  Returns null if key was previously
             *  unset.
             * @throws NullPointerException if the name is null.
             * @throws IllegalArgumentException if the name is empty.
             */
            // @ts-ignore
            put(name: string, value: any): java.lang.Object
            /**
             * <code>putAll</code> is implemented using <code>Map.putAll</code>.
             * @param toMerge The <code>Map</code> of values to add.
             * @throws NullPointerException
             *          if toMerge map is null or if some key in the map is null.
             * @throws IllegalArgumentException
             *          if some key in the map is an empty String.
             */
            // @ts-ignore
            putAll(toMerge: java.util.Map<java.lang.String, java.lang.Object>): void
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            clear(): void
            /**
             * Returns <tt>true</tt> if this map contains a mapping for the specified
             * key.  More formally, returns <tt>true</tt> if and only if
             * this map contains a mapping for a key <tt>k</tt> such that
             * <tt>(key==null ? k==null : key.equals(k))</tt>.  (There can be
             * at most one such mapping.)
             * @param key key whose presence in this map is to be tested.
             * @return <tt>true</tt> if this map contains a mapping for the specified
             *          key.
             * @throws NullPointerException if key is null
             * @throws ClassCastException if key is not String
             * @throws IllegalArgumentException if key is empty String
             */
            // @ts-ignore
            containsKey(key: any): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            containsValue(value: any): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            entrySet(): java.util.Set<java.util.Map.Entry<java.lang.String, java.lang.Object>>
            /**
             * Returns the value to which this map maps the specified key.  Returns
             * <tt>null</tt> if the map contains no mapping for this key.  A return
             * value of <tt>null</tt> does not <i>necessarily</i> indicate that the
             * map contains no mapping for the key; it's also possible that the map
             * explicitly maps the key to <tt>null</tt>.  The <tt>containsKey</tt>
             * operation may be used to distinguish these two cases.
             * <p>More formally, if this map contains a mapping from a key
             * <tt>k</tt> to a value <tt>v</tt> such that <tt>(key==null ? k==null :
             * key.equals(k))</tt>, then this method returns <tt>v</tt>; otherwise
             * it returns <tt>null</tt>.  (There can be at most one such mapping.)
             * @param key key whose associated value is to be returned.
             * @return the value to which this map maps the specified key, or
             *          <tt>null</tt> if the map contains no mapping for this key.
             * @throws NullPointerException if key is null
             * @throws ClassCastException if key is not String
             * @throws IllegalArgumentException if key is empty String
             */
            // @ts-ignore
            get(key: any): java.lang.Object
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            isEmpty(): boolean
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            keySet(): java.util.Set<java.lang.String>
            /**
             * Removes the mapping for this key from this map if it is present
             * (optional operation).   More formally, if this map contains a mapping
             * from key <tt>k</tt> to value <tt>v</tt> such that
             * <code>(key==null ?  k==null : key.equals(k))</code>, that mapping
             * is removed.  (The map can contain at most one such mapping.)
             * <p>Returns the value to which the map previously associated the key, or
             * <tt>null</tt> if the map contained no mapping for this key.  (A
             * <tt>null</tt> return can also indicate that the map previously
             * associated <tt>null</tt> with the specified key if the implementation
             * supports <tt>null</tt> values.)  The map will not contain a mapping for
             * the specified  key once the call returns.
             * @param key key whose mapping is to be removed from the map.
             * @return previous value associated with specified key, or <tt>null</tt>
             *          if there was no mapping for key.
             * @throws NullPointerException if key is null
             * @throws ClassCastException if key is not String
             * @throws IllegalArgumentException if key is empty String
             */
            // @ts-ignore
            remove(key: any): java.lang.Object
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            size(): int
            /**
             * {@inheritDoc}
             */
            // @ts-ignore
            values(): java.util.Collection<java.lang.Object>
        }
    }
}
