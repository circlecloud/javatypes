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
                constructor(otherMap: java.util.Map<K, java.util.List<V> | Array<V>>)
                // @ts-ignore
                public getFirst(key: K): V
                // @ts-ignore
                public add(key: K, value: V): void
                // @ts-ignore
                public addAll(key: K, values: java.util.List<any> | Array<any>): void
                // @ts-ignore
                public addAll(values: org.springframework.util.MultiValueMap<K, V>): void
                // @ts-ignore
                public set(key: K, value: V): void
                // @ts-ignore
                public setAll(values: java.util.Map<K, V>): void
                // @ts-ignore
                public toSingleValueMap(): java.util.Map<K, V>
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public containsKey(key: java.lang.Object | any): boolean
                // @ts-ignore
                public containsValue(value: java.lang.Object | any): boolean
                // @ts-ignore
                public get(key: java.lang.Object | any): Array<V>
                // @ts-ignore
                public put(key: K, value: java.util.List<V> | Array<V>): Array<V>
                // @ts-ignore
                public remove(key: java.lang.Object | any): Array<V>
                // @ts-ignore
                public putAll(map: java.util.Map<any, any>): void
                // @ts-ignore
                public clear(): void
                // @ts-ignore
                public keySet(): Array<K>
                // @ts-ignore
                public values(): Array<java.util.List<V> | Array<V>>
                // @ts-ignore
                public entrySet(): Array<java.util.Map.Entry<K, java.util.List<V> | Array<V>>>
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
                public deepCopy(): org.springframework.util.LinkedMultiValueMap<K, V>
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
                public clone(): org.springframework.util.LinkedMultiValueMap<K, V>
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
