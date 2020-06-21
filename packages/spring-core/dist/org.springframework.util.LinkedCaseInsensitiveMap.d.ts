declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * {@link LinkedHashMap} variant that stores String keys in a case-insensitive
             * manner, for example for key-based access in a results table.
             * <p>Preserves the original order as well as the original casing of keys,
             * while allowing for contains, get and remove calls with any case of key.
             * <p>Does <i>not</i> support {@code null} keys.
             * @author Juergen Hoeller
             * @author Phillip Webb
             * @since 3.0
             * @param <V> the value type
             */
            // @ts-ignore
            class LinkedCaseInsensitiveMap<V> extends java.lang.Object implements java.util.Map<java.lang.String | string, V>, java.io.Serializable, java.lang.Cloneable {
                /**
                 * Create a new LinkedCaseInsensitiveMap that stores case-insensitive keys
                 * according to the default Locale (by default in lower case).
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                constructor()
                /**
                 * Create a new LinkedCaseInsensitiveMap that stores case-insensitive keys
                 * according to the given Locale (by default in lower case).
                 * @param locale the Locale to use for case-insensitive key conversion
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                constructor(locale: java.util.Locale)
                /**
                 * Create a new LinkedCaseInsensitiveMap that wraps a {@link LinkedHashMap}
                 * with the given initial capacity and stores case-insensitive keys
                 * according to the default Locale (by default in lower case).
                 * @param initialCapacity the initial capacity
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/)
                /**
                 * Create a new LinkedCaseInsensitiveMap that wraps a {@link LinkedHashMap}
                 * with the given initial capacity and stores case-insensitive keys
                 * according to the given Locale (by default in lower case).
                 * @param initialCapacity the initial capacity
                 * @param locale the Locale to use for case-insensitive key conversion
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                constructor(initialCapacity: number /*int*/, locale: java.util.Locale)
                // @ts-ignore
                public size(): number /*int*/
                // @ts-ignore
                public isEmpty(): boolean
                // @ts-ignore
                public containsKey(key: java.lang.Object | any): boolean
                // @ts-ignore
                public containsValue(value: java.lang.Object | any): boolean
                // @ts-ignore
                public get(key: java.lang.Object | any): V
                // @ts-ignore
                public getOrDefault(key: java.lang.Object | any, defaultValue: V): V
                // @ts-ignore
                public put(key: java.lang.String | string, value: V): V
                // @ts-ignore
                public putAll(map: java.util.Map<any, any>): void
                // @ts-ignore
                public putIfAbsent(key: java.lang.String | string, value: V): V
                // @ts-ignore
                public computeIfAbsent(key: java.lang.String | string, mappingFunction: java.util.function$.Function<any, any>): V
                // @ts-ignore
                public remove(key: java.lang.Object | any): V
                // @ts-ignore
                public clear(): void
                // @ts-ignore
                public keySet(): Array<java.lang.String | string>
                // @ts-ignore
                public values(): Array<V>
                // @ts-ignore
                public entrySet(): Array<java.util.Map.Entry<java.lang.String | string, V>>
                // @ts-ignore
                public clone(): org.springframework.util.LinkedCaseInsensitiveMap<V>
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Return the locale used by this {@code LinkedCaseInsensitiveMap}.
                 * Used for case-insensitive key conversion.
                 * @since 4.3.10
                 * @see #LinkedCaseInsensitiveMap(Locale)
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale
                /**
                 * Convert the given key to a case-insensitive key.
                 * <p>The default implementation converts the key
                 * to lower-case according to this Map's Locale.
                 * @param key the user-specified key
                 * @return the key to use for storing
                 * @see String#toLowerCase(Locale)
                 */
                // @ts-ignore
                convertKey(key: java.lang.String | string): string
                /**
                 * Determine whether this map should remove the given eldest entry.
                 * @param eldest the candidate entry
                 * @return {#code true} for removing it, {@code false} for keeping it
                 * @see LinkedHashMap#removeEldestEntry
                 */
                // @ts-ignore
                removeEldestEntry(eldest: java.util.Map.Entry<java.lang.String | string, V>): boolean
            }
        }
    }
}
