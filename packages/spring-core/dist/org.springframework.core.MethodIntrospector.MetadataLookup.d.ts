declare namespace org {
    namespace springframework {
        namespace core {
            namespace MethodIntrospector {
                /**
                 * A callback interface for metadata lookup on a given method.
                 * @param <T> the type of metadata returned
                 */
                // @ts-ignore
                interface MetadataLookup<T> {
                    /**
                     * Perform a lookup on the given method and return associated metadata, if any.
                     * @param method the method to inspect
                     * @return non-null metadata to be associated with a method if there is a match,
                     *  or {#code null} for no match
                     */
                    // @ts-ignore
                    inspect(method: java.lang.reflect.Method): T
                }
            }
        }
    }
}
