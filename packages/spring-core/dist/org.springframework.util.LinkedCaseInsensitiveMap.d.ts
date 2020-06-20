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
            class LinkedCaseInsensitiveMap<V> extends java.lang.Object implements java.util.Map<java.lang.String, V>, java.io.Serializable, java.lang.Cloneable {
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
                size(): int
                // @ts-ignore
                isEmpty(): boolean
                // @ts-ignore
                containsKey(key: any): boolean
                // @ts-ignore
                containsValue(value: any): boolean
                // @ts-ignore
                get(key: any): V
                // @ts-ignore
                getOrDefault(key: any, defaultValue: V): V
                // @ts-ignore
                put(key: string, value: V): V
                // @ts-ignore
                putAll(map: java.util.Map<java.lang.String, V>): void
                // @ts-ignore
                putIfAbsent(key: string, value: V): V
                // @ts-ignore
                computeIfAbsent(key: string, mappingFunction: java.util.function.Function<any super java.lang.String, V> | java.util.function$.Function<? super java.lang.String, V>): V
                // @ts-ignore
                remove(key: any): V
                // @ts-ignore
                clear(): void
                // @ts-ignore
                keySet(): java.util.Set<java.lang.String>
                // @ts-ignore
                values(): java.util.Collection<V>
                // @ts-ignore
                entrySet(): java.util.Set<java.util.Map.Entry<java.lang.String, V>>
                // @ts-ignore
                clone(): org.springframework.util.LinkedCaseInsensitiveMap<V>
                // @ts-ignore
                equals(obj: any): boolean
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return the locale used by this {@code LinkedCaseInsensitiveMap}.
                 * Used for case-insensitive key conversion.
                 * @since 4.3.10
                 * @see #LinkedCaseInsensitiveMap(Locale)
                 * @see #convertKey(String)
                 */
                // @ts-ignore
                getLocale(): java.util.Locale
                /**
                 * Convert the given key to a case-insensitive key.
                 * <p>The default implementation converts the key
                 * to lower-case according to this Map's Locale.
                 * @param key the user-specified key
                 * @return the key to use for storing
                 * @see String#toLowerCase(Locale)
                 */
                // @ts-ignore
                convertKey(key: string): java.lang.String
                /**
                 * Determine whether this map should remove the given eldest entry.
                 * @param eldest the candidate entry
                 * @return {#code true} for removing it, {@code false} for keeping it
                 * @see LinkedHashMap#removeEldestEntry
                 */
                // @ts-ignore
                removeEldestEntry(eldest: java.util.Map.Entry<java.lang.String, V>): boolean
            }
        }
    }
}
