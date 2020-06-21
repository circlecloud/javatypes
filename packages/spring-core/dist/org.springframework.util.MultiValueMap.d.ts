declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Extension of the {@code Map} interface that stores multiple values.
             * @author Arjen Poutsma
             * @since 3.0
             * @param <K> the key type
             * @param <V> the value element type
             */
            // @ts-ignore
            interface MultiValueMap<K, V> extends java.util.Map<K, java.util.List<V> | Array<V>> {
                /**
                 * Return the first value for the given key.
                 * @param key the key
                 * @return the first value for the specified key, or {#code null} if none
                 */
                // @ts-ignore
                getFirst(key: K): V
                /**
                 * Add the given single value to the current list of values for the given key.
                 * @param key the key
                 * @param value the value to be added
                 */
                // @ts-ignore
                add(key: K, value: V): void
                /**
                 * Add all the values of the given list to the current list of values for the given key.
                 * @param key they key
                 * @param values the values to be added
                 * @since 5.0
                 */
                // @ts-ignore
                addAll(key: K, values: java.util.List<any> | Array<any>): void
                /**
                 * Add all the values of the given {@code MultiValueMap} to the current values.
                 * @param values the values to be added
                 * @since 5.0
                 */
                // @ts-ignore
                addAll(values: org.springframework.util.MultiValueMap<K, V>): void
                /**
                 * {@link #add(Object, Object) Add} the given value, only when the map does not
                 * {@link #containsKey(Object) contain} the given key.
                 * @param key the key
                 * @param value the value to be added
                 * @since 5.2
                 */
                // @ts-ignore
                addIfAbsent(key: K, value: V): void
                /**
                 * Set the given single value under the given key.
                 * @param key the key
                 * @param value the value to set
                 */
                // @ts-ignore
                set(key: K, value: V): void
                /**
                 * Set the given values under.
                 * @param values the values.
                 */
                // @ts-ignore
                setAll(values: java.util.Map<K, V>): void
                /**
                 * Return a {@code Map} with the first values contained in this {@code MultiValueMap}.
                 * @return a single value representation of this map
                 */
                // @ts-ignore
                toSingleValueMap(): java.util.Map<K, V>
            }
        }
    }
}
