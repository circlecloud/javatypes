declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Simple implementation of {@link MultiValueMap} that wraps a {@link LinkedHashMap},
             * storing multiple values in a {@link LinkedList}.
             * <p>This Map implementation is generally not thread-safe. It is primarily designed
             * for data structures exposed from request objects, for use in a single thread only.
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @since 3.0
             * @param <K> the key type
             * @param <V> the value element type
             */
            // @ts-ignore
            class LinkedMultiValueMap<K, V> extends java.lang.Object implements org.springframework.util.MultiValueMap<K, V>, java.io.Serializable, java.lang.Cloneable {
                /**
                 * Create a new LinkedMultiValueMap that wraps a {@link LinkedHashMap}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new LinkedMultiValueMap that wraps a {@link LinkedHashMap}
                 * with the given initial capacity.
                 * @param initialCapacity the initial capacity
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Copy constructor: Create a new LinkedMultiValueMap with the same mappings as
                 * the specified Map. Note that this will be a shallow copy; its value-holding
                 * List entries will get reused and therefore cannot get modified independently.
                 * @param otherMap the Map whose mappings are to be placed in this Map
                 * @see #clone()
                 * @see #deepCopy()
                 */
                // @ts-ignore
                constructor(otherMap: java.util.Map<K, java.util.List<V>>)
                // @ts-ignore
                getFirst(key: K): V
                // @ts-ignore
                add(key: K, value: V): void
                // @ts-ignore
                addAll(key: K, values: Array<V>): void
                // @ts-ignore
                addAll(values: org.springframework.util.MultiValueMap<K, V>): void
                // @ts-ignore
                set(key: K, value: V): void
                // @ts-ignore
                setAll(values: java.util.Map<K, V>): void
                // @ts-ignore
                toSingleValueMap(): java.util.Map<K, V>
                // @ts-ignore
                size(): int
                // @ts-ignore
                isEmpty(): boolean
                // @ts-ignore
                containsKey(key: any): boolean
                // @ts-ignore
                containsValue(value: any): boolean
                // @ts-ignore
                get(key: any): java.util.List<V>
                // @ts-ignore
                put(key: K, value: Array<V>): java.util.List<V>
                // @ts-ignore
                remove(key: any): java.util.List<V>
                // @ts-ignore
                putAll(map: java.util.Map<K, java.util.List<V>>): void
                // @ts-ignore
                clear(): void
                // @ts-ignore
                keySet(): java.util.Set<K>
                // @ts-ignore
                values(): java.util.Collection<java.util.List<V>>
                // @ts-ignore
                entrySet(): java.util.Set<java.util.Map.Entry<K, java.util.List<V>>>
                /**
                 * Create a deep copy of this Map.
                 * @return a copy of this Map, including a copy of each value-holding List entry
                 *  (consistently using an independent modifiable {#link LinkedList} for each entry)
                 *  along the lines of {@code MultiValueMap.addAll} semantics
                 * @since 4.2
                 * @see #addAll(MultiValueMap)
                 * @see #clone()
                 */
                // @ts-ignore
                deepCopy(): org.springframework.util.LinkedMultiValueMap<K, V>
                /**
                 * Create a regular copy of this Map.
                 * @return a shallow copy of this Map, reusing this Map's value-holding List entries
                 *  (even if some entries are shared or unmodifiable) along the lines of standard
                 *  {#code Map.put} semantics
                 * @since 4.2
                 * @see #put(Object, List)
                 * @see #putAll(Map)
                 * @see LinkedMultiValueMap#LinkedMultiValueMap(Map)
                 * @see #deepCopy()
                 */
                // @ts-ignore
                clone(): org.springframework.util.LinkedMultiValueMap<K, V>
                // @ts-ignore
                equals(obj: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
