declare namespace org {
    namespace springframework {
        namespace core {
            /**
             * Defines the algorithm for searching for metadata-associated methods exhaustively
             * including interfaces and parent classes while also dealing with parameterized methods
             * as well as common scenarios encountered with interface and class-based proxies.
             * <p>Typically, but not necessarily, used for finding annotated handler methods.
             * @author Juergen Hoeller
             * @author Rossen Stoyanchev
             * @since 4.2.3
             */
            // @ts-ignore
            class MethodIntrospector extends java.lang.Object {
                /**
                 * Select methods on the given target type based on the lookup of associated metadata.
                 * <p>Callers define methods of interest through the {@link MetadataLookup} parameter,
                 * allowing to collect the associated metadata into the result map.
                 * @param targetType the target type to search methods on
                 * @param metadataLookup a {#link MetadataLookup} callback to inspect methods of interest,
                 *  returning non-null metadata to be associated with a given method if there is a match,
                 *  or {@code null} for no match
                 * @return the selected methods associated with their metadata (in the order of retrieval),
                 *  or an empty map in case of no match
                 */
                // @ts-ignore
                public static selectMethods<T>(targetType: java.lang.Class<any>, metadataLookup: org.springframework.core.MethodIntrospector.MetadataLookup<T>): java.util.Map<java.lang.reflect.Method, T>
                /**
                 * Select methods on the given target type based on a filter.
                 * <p>Callers define methods of interest through the {@code MethodFilter} parameter.
                 * @param targetType the target type to search methods on
                 * @param methodFilter a {#code MethodFilter} to help
                 *  recognize handler methods of interest
                 * @return the selected methods, or an empty set in case of no match
                 */
                // @ts-ignore
                public static selectMethods(targetType: java.lang.Class<any>, methodFilter: org.springframework.util.ReflectionUtils.MethodFilter): Array<java.lang.reflect.Method>
                /**
                 * Select an invocable method on the target type: either the given method itself
                 * if actually exposed on the target type, or otherwise a corresponding method
                 * on one of the target type's interfaces or on the target type itself.
                 * <p>Matches on user-declared interfaces will be preferred since they are likely
                 * to contain relevant metadata that corresponds to the method on the target class.
                 * @param method the method to check
                 * @param targetType the target type to search methods on
                 *  (typically an interface-based JDK proxy)
                 * @return a corresponding invocable method on the target type
                 * @throws IllegalStateException if the given method is not invocable on the given
                 *  target type (typically due to a proxy mismatch)
                 */
                // @ts-ignore
                public static selectInvocableMethod(method: java.lang.reflect.Method, targetType: java.lang.Class<any>): java.lang.reflect.Method
            }
        }
    }
}
