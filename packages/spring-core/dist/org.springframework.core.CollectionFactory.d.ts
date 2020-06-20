declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Factory for collections that is aware of common Java and Spring collection types.
             * <p>Mainly for internal use within the framework.
             * @author Juergen Hoeller
             * @author Arjen Poutsma
             * @author Oliver Gierke
             * @author Sam Brannen
             * @since 1.1.1
             */
            // @ts-ignore
            class CollectionFactory extends java.lang.Object {
                /**
                 * Determine whether the given collection type is an <em>approximable</em> type,
                 * i.e. a type that {@link #createApproximateCollection} can approximate.
                 * @param collectionType the collection type to check
                 * @return {#code true} if the type is <em>approximable</em>
                 */
                // @ts-ignore
                isApproximableCollectionType(collectionType: java.lang.Class<any>): boolean
                /**
                 * Create the most approximate collection for the given collection.
                 * <p><strong>Warning</strong>: Since the parameterized type {@code E} is
                 * not bound to the type of elements contained in the supplied
                 * {@code collection}, type safety cannot be guaranteed if the supplied
                 * {@code collection} is an {@link EnumSet}. In such scenarios, the caller
                 * is responsible for ensuring that the element type for the supplied
                 * {@code collection} is an enum type matching type {@code E}. As an
                 * alternative, the caller may wish to treat the return value as a raw
                 * collection or collection of {@link Object}.
                 * @param collection the original collection object, potentially {#code null}
                 * @param capacity the initial capacity
                 * @return a new, empty collection instance
                 * @see #isApproximableCollectionType
                 * @see java.util.LinkedList
                 * @see java.util.ArrayList
                 * @see java.util.EnumSet
                 * @see java.util.TreeSet
                 * @see java.util.LinkedHashSet
                 */
                // @ts-ignore
                createApproximateCollection<E>(collection: any, capacity: number /*int*/): java.util.Collection<E>
                /**
                 * Create the most appropriate collection for the given collection type.
                 * <p>Delegates to {@link #createCollection(Class, Class, int)} with a
                 * {@code null} element type.
                 * @param collectionType the desired type of the target collection (never {#code null})
                 * @param capacity the initial capacity
                 * @return a new collection instance
                 * @throws IllegalArgumentException if the supplied {#code collectionType}
                 *  is {@code null} or of type {@link EnumSet}
                 */
                // @ts-ignore
                createCollection<E>(collectionType: java.lang.Class<any>, capacity: number /*int*/): java.util.Collection<E>
                /**
                 * Create the most appropriate collection for the given collection type.
                 * <p><strong>Warning</strong>: Since the parameterized type {@code E} is
                 * not bound to the supplied {@code elementType}, type safety cannot be
                 * guaranteed if the desired {@code collectionType} is {@link EnumSet}.
                 * In such scenarios, the caller is responsible for ensuring that the
                 * supplied {@code elementType} is an enum type matching type {@code E}.
                 * As an alternative, the caller may wish to treat the return value as a
                 * raw collection or collection of {@link Object}.
                 * @param collectionType the desired type of the target collection (never {#code null})
                 * @param elementType the collection's element type, or {#code null} if unknown
                 *  (note: only relevant for {@link EnumSet} creation)
                 * @param capacity the initial capacity
                 * @return a new collection instance
                 * @since 4.1.3
                 * @see java.util.LinkedHashSet
                 * @see java.util.ArrayList
                 * @see java.util.TreeSet
                 * @see java.util.EnumSet
                 * @throws IllegalArgumentException if the supplied {#code collectionType} is
                 *  {@code null}; or if the desired {@code collectionType} is {@link EnumSet} and
                 *  the supplied {@code elementType} is not a subtype of {@link Enum}
                 */
                // @ts-ignore
                createCollection<E>(collectionType: java.lang.Class<any>, elementType: java.lang.Class<any>, capacity: number /*int*/): java.util.Collection<E>
                /**
                 * Determine whether the given map type is an <em>approximable</em> type,
                 * i.e. a type that {@link #createApproximateMap} can approximate.
                 * @param mapType the map type to check
                 * @return {#code true} if the type is <em>approximable</em>
                 */
                // @ts-ignore
                isApproximableMapType(mapType: java.lang.Class<any>): boolean
                /**
                 * Create the most approximate map for the given map.
                 * <p><strong>Warning</strong>: Since the parameterized type {@code K} is
                 * not bound to the type of keys contained in the supplied {@code map},
                 * type safety cannot be guaranteed if the supplied {@code map} is an
                 * {@link EnumMap}. In such scenarios, the caller is responsible for
                 * ensuring that the key type in the supplied {@code map} is an enum type
                 * matching type {@code K}. As an alternative, the caller may wish to
                 * treat the return value as a raw map or map keyed by {@link Object}.
                 * @param map the original map object, potentially {#code null}
                 * @param capacity the initial capacity
                 * @return a new, empty map instance
                 * @see #isApproximableMapType
                 * @see java.util.EnumMap
                 * @see java.util.TreeMap
                 * @see java.util.LinkedHashMap
                 */
                // @ts-ignore
                createApproximateMap<K, V>(map: any, capacity: number /*int*/): java.util.Map<K, V>
                /**
                 * Create the most appropriate map for the given map type.
                 * <p>Delegates to {@link #createMap(Class, Class, int)} with a
                 * {@code null} key type.
                 * @param mapType the desired type of the target map
                 * @param capacity the initial capacity
                 * @return a new map instance
                 * @throws IllegalArgumentException if the supplied {#code mapType} is
                 *  {@code null} or of type {@link EnumMap}
                 */
                // @ts-ignore
                createMap<K, V>(mapType: java.lang.Class<any>, capacity: number /*int*/): java.util.Map<K, V>
                /**
                 * Create the most appropriate map for the given map type.
                 * <p><strong>Warning</strong>: Since the parameterized type {@code K}
                 * is not bound to the supplied {@code keyType}, type safety cannot be
                 * guaranteed if the desired {@code mapType} is {@link EnumMap}. In such
                 * scenarios, the caller is responsible for ensuring that the {@code keyType}
                 * is an enum type matching type {@code K}. As an alternative, the caller
                 * may wish to treat the return value as a raw map or map keyed by
                 * {@link Object}. Similarly, type safety cannot be enforced if the
                 * desired {@code mapType} is {@link MultiValueMap}.
                 * @param mapType the desired type of the target map (never {#code null})
                 * @param keyType the map's key type, or {#code null} if unknown
                 *  (note: only relevant for {@link EnumMap} creation)
                 * @param capacity the initial capacity
                 * @return a new map instance
                 * @since 4.1.3
                 * @see java.util.LinkedHashMap
                 * @see java.util.TreeMap
                 * @see org.springframework.util.LinkedMultiValueMap
                 * @see java.util.EnumMap
                 * @throws IllegalArgumentException if the supplied {#code mapType} is
                 *  {@code null}; or if the desired {@code mapType} is {@link EnumMap} and
                 *  the supplied {@code keyType} is not a subtype of {@link Enum}
                 */
                // @ts-ignore
                createMap<K, V>(mapType: java.lang.Class<any>, keyType: java.lang.Class<any>, capacity: number /*int*/): java.util.Map<K, V>
                /**
                 * Create a variant of {@link java.util.Properties} that automatically adapts
                 * non-String values to String representations in {@link Properties#getProperty}.
                 * <p>In addition, the returned {@code Properties} instance sorts properties
                 * alphanumerically based on their keys.
                 * @return a new {#code Properties} instance
                 * @since 4.3.4
                 * @see #createSortedProperties(boolean)
                 * @see #createSortedProperties(Properties, boolean)
                 */
                // @ts-ignore
                createStringAdaptingProperties(): java.util.Properties
                /**
                 * Create a variant of {@link java.util.Properties} that sorts properties
                 * alphanumerically based on their keys.
                 * <p>This can be useful when storing the {@link Properties} instance in a
                 * properties file, since it allows such files to be generated in a repeatable
                 * manner with consistent ordering of properties. Comments in generated
                 * properties files can also be optionally omitted.
                 * @param omitComments {#code true} if comments should be omitted when
                 *  storing properties in a file
                 * @return a new {#code Properties} instance
                 * @since 5.2
                 * @see #createStringAdaptingProperties()
                 * @see #createSortedProperties(Properties, boolean)
                 */
                // @ts-ignore
                createSortedProperties(omitComments: boolean): java.util.Properties
                /**
                 * Create a variant of {@link java.util.Properties} that sorts properties
                 * alphanumerically based on their keys.
                 * <p>This can be useful when storing the {@code Properties} instance in a
                 * properties file, since it allows such files to be generated in a repeatable
                 * manner with consistent ordering of properties. Comments in generated
                 * properties files can also be optionally omitted.
                 * <p>The returned {@code Properties} instance will be populated with
                 * properties from the supplied {@code properties} object, but default
                 * properties from the supplied {@code properties} object will not be copied.
                 * @param properties the {#code Properties} object from which to copy the
                 *  initial properties
                 * @param omitComments {#code true} if comments should be omitted when
                 *  storing properties in a file
                 * @return a new {#code Properties} instance
                 * @since 5.2
                 * @see #createStringAdaptingProperties()
                 * @see #createSortedProperties(boolean)
                 */
                // @ts-ignore
                createSortedProperties(properties: java.util.Properties, omitComments: boolean): java.util.Properties
            }
        }
    }
}
