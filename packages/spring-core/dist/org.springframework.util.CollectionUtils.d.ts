declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Miscellaneous collection utility methods.
             * Mainly for internal use within the framework.
             * @author Juergen Hoeller
             * @author Rob Harrop
             * @author Arjen Poutsma
             * @since 1.1.3
             */
            // @ts-ignore
            abstract class CollectionUtils extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Return {@code true} if the supplied Collection is {@code null} or empty.
                 * Otherwise, return {@code false}.
                 * @param collection the Collection to check
                 * @return whether the given Collection is empty
                 */
                // @ts-ignore
                public static isEmpty(collection: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Return {@code true} if the supplied Map is {@code null} or empty.
                 * Otherwise, return {@code false}.
                 * @param map the Map to check
                 * @return whether the given Map is empty
                 */
                // @ts-ignore
                public static isEmpty(map: java.util.Map<any, any>): boolean
                /**
                 * Convert the supplied array into a List. A primitive array gets converted
                 * into a List of the appropriate wrapper type.
                 * <p><b>NOTE:</b> Generally prefer the standard {@link Arrays#asList} method.
                 * This {@code arrayToList} method is just meant to deal with an incoming Object
                 * value that might be an {@code Object[]} or a primitive array at runtime.
                 * <p>A {@code null} source value will be converted to an empty List.
                 * @param source the (potentially primitive) array
                 * @return the converted List result
                 * @see ObjectUtils#toObjectArray(Object)
                 * @see Arrays#asList(Object[])
                 */
                // @ts-ignore
                public static arrayToList(source: java.lang.Object | any): Array<any>
                /**
                 * Merge the given array into the given Collection.
                 * @param array the array to merge (may be {#code null})
                 * @param collection the target Collection to merge the array into
                 */
                // @ts-ignore
                public static mergeArrayIntoCollection<E>(array: java.lang.Object | any, collection: java.util.Collection<E> | Array<E>): void
                /**
                 * Merge the given Properties instance into the given Map,
                 * copying all properties (key-value pairs) over.
                 * <p>Uses {@code Properties.propertyNames()} to even catch
                 * default properties linked into the original Properties instance.
                 * @param props the Properties instance to merge (may be {#code null})
                 * @param map the target Map to merge the properties into
                 */
                // @ts-ignore
                public static mergePropertiesIntoMap<K, V>(props: java.util.Properties, map: java.util.Map<K, V>): void
                /**
                 * Check whether the given Iterator contains the given element.
                 * @param iterator the Iterator to check
                 * @param element the element to look for
                 * @return {#code true} if found, {@code false} otherwise
                 */
                // @ts-ignore
                public static contains(iterator: java.util.Iterator<any>, element: java.lang.Object | any): boolean
                /**
                 * Check whether the given Enumeration contains the given element.
                 * @param enumeration the Enumeration to check
                 * @param element the element to look for
                 * @return {#code true} if found, {@code false} otherwise
                 */
                // @ts-ignore
                public static contains(enumeration: java.util.Enumeration<any>, element: java.lang.Object | any): boolean
                /**
                 * Check whether the given Collection contains the given element instance.
                 * <p>Enforces the given instance to be present, rather than returning
                 * {@code true} for an equal element as well.
                 * @param collection the Collection to check
                 * @param element the element to look for
                 * @return {#code true} if found, {@code false} otherwise
                 */
                // @ts-ignore
                public static containsInstance(collection: java.util.Collection<any> | Array<any>, element: java.lang.Object | any): boolean
                /**
                 * Return {@code true} if any element in '{@code candidates}' is
                 * contained in '{@code source}'; otherwise returns {@code false}.
                 * @param source the source Collection
                 * @param candidates the candidates to search for
                 * @return whether any of the candidates has been found
                 */
                // @ts-ignore
                public static containsAny(source: java.util.Collection<any> | Array<any>, candidates: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Return the first element in '{@code candidates}' that is contained in
                 * '{@code source}'. If no element in '{@code candidates}' is present in
                 * '{@code source}' returns {@code null}. Iteration order is
                 * {@link Collection} implementation specific.
                 * @param source the source Collection
                 * @param candidates the candidates to search for
                 * @return the first present object, or {#code null} if not found
                 */
                // @ts-ignore
                public static findFirstMatch<E>(source: java.util.Collection<any> | Array<any>, candidates: java.util.Collection<E> | Array<E>): E
                /**
                 * Find a single value of the given type in the given Collection.
                 * @param collection the Collection to search
                 * @param type the type to look for
                 * @return a value of the given type found if there is a clear match,
                 *  or {#code null} if none or more than one such value found
                 */
                // @ts-ignore
                public static findValueOfType<T>(collection: java.util.Collection<any> | Array<any>, type: java.lang.Class<T>): T
                /**
                 * Find a single value of one of the given types in the given Collection:
                 * searching the Collection for a value of the first type, then
                 * searching for a value of the second type, etc.
                 * @param collection the collection to search
                 * @param types the types to look for, in prioritized order
                 * @return a value of one of the given types found if there is a clear match,
                 *  or {#code null} if none or more than one such value found
                 */
                // @ts-ignore
                public static findValueOfType(collection: java.util.Collection<any> | Array<any>, types: java.lang.Class<any>[]): any
                /**
                 * Determine whether the given Collection only contains a single unique object.
                 * @param collection the Collection to check
                 * @return {#code true} if the collection contains a single reference or
                 *  multiple references to the same instance, {@code false} otherwise
                 */
                // @ts-ignore
                public static hasUniqueObject(collection: java.util.Collection<any> | Array<any>): boolean
                /**
                 * Find the common element type of the given Collection, if any.
                 * @param collection the Collection to check
                 * @return the common element type, or {#code null} if no clear
                 *  common type has been found (or the collection was empty)
                 */
                // @ts-ignore
                public static findCommonElementType(collection: java.util.Collection<any> | Array<any>): java.lang.Class<any>
                /**
                 * Retrieve the first element of the given Set, using {@link SortedSet#first()}
                 * or otherwise using the iterator.
                 * @param set the Set to check (may be {#code null} or empty)
                 * @return the first element, or {#code null} if none
                 * @since 5.2.3
                 * @see SortedSet
                 * @see LinkedHashMap#keySet()
                 * @see java.util.LinkedHashSet
                 */
                // @ts-ignore
                public static firstElement<T>(set: java.util.Set<T> | Array<T>): T
                /**
                 * Retrieve the first element of the given List, accessing the zero index.
                 * @param list the List to check (may be {#code null} or empty)
                 * @return the first element, or {#code null} if none
                 * @since 5.2.3
                 */
                // @ts-ignore
                public static firstElement<T>(list: java.util.List<T> | Array<T>): T
                /**
                 * Retrieve the last element of the given Set, using {@link SortedSet#last()}
                 * or otherwise iterating over all elements (assuming a linked set).
                 * @param set the Set to check (may be {#code null} or empty)
                 * @return the last element, or {#code null} if none
                 * @since 5.0.3
                 * @see SortedSet
                 * @see LinkedHashMap#keySet()
                 * @see java.util.LinkedHashSet
                 */
                // @ts-ignore
                public static lastElement<T>(set: java.util.Set<T> | Array<T>): T
                /**
                 * Retrieve the last element of the given List, accessing the highest index.
                 * @param list the List to check (may be {#code null} or empty)
                 * @return the last element, or {#code null} if none
                 * @since 5.0.3
                 */
                // @ts-ignore
                public static lastElement<T>(list: java.util.List<T> | Array<T>): T
                /**
                 * Marshal the elements from the given enumeration into an array of the given type.
                 * Enumeration elements must be assignable to the type of the given array. The array
                 * returned will be a different instance than the array given.
                 */
                // @ts-ignore
                public static toArray<A, E extends A>(enumeration: java.util.Enumeration<E>, array: A[]): A
                /**
                 * Adapt an {@link Enumeration} to an {@link Iterator}.
                 * @param enumeration the original {#code Enumeration}
                 * @return the adapted {#code Iterator}
                 */
                // @ts-ignore
                public static toIterator<E>(enumeration: java.util.Enumeration<E>): java.util.Iterator<E>
                /**
                 * Adapt a {@code Map<K, List<V>>} to an {@code MultiValueMap<K, V>}.
                 * @param map the original map
                 * @return the multi-value map
                 * @since 3.1
                 */
                // @ts-ignore
                public static toMultiValueMap<K, V>(map: java.util.Map<K, java.util.List<V> | Array<V>>): org.springframework.util.MultiValueMap<K, V>
                /**
                 * Return an unmodifiable view of the specified multi-value map.
                 * @param map the map for which an unmodifiable view is to be returned.
                 * @return an unmodifiable view of the specified multi-value map.
                 * @since 3.1
                 */
                // @ts-ignore
                public static unmodifiableMultiValueMap<K, V>(map: org.springframework.util.MultiValueMap<any, any>): org.springframework.util.MultiValueMap<K, V>
            }
        }
    }
}
