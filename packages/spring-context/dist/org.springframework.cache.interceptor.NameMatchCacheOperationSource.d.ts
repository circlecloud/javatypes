declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Simple {@link CacheOperationSource} implementation that allows attributes to be matched
                 * by registered name.
                 * @author Costin Leau
                 * @since 3.1
                 */
                // @ts-ignore
                class NameMatchCacheOperationSource extends java.lang.Object implements org.springframework.cache.interceptor.CacheOperationSource, java.io.Serializable {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     * <p>Static for optimal serialization.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set a name/attribute map, consisting of method names
                     * (e.g. "myMethod") and CacheOperation instances
                     * (or Strings to be converted to CacheOperation instances).
                     * @see CacheOperation
                     */
                    // @ts-ignore
                    setNameMap(nameMap: java.util.Map<java.lang.String, java.util.Collection<org.springframework.cache.interceptor.CacheOperation>>): void
                    /**
                     * Add an attribute for a cacheable method.
                     * <p>Method names can be exact matches, or of the pattern "xxx*",
                     * "*xxx" or "*xxx*" for matching multiple methods.
                     * @param methodName the name of the method
                     * @param ops operation associated with the method
                     */
                    // @ts-ignore
                    addCacheMethod(methodName: string, ops: Array<org.springframework.cache.interceptor.CacheOperation>): void
                    // @ts-ignore
                    getCacheOperations(method: java.lang.reflect.Method, targetClass: java.lang.Class<any>): java.util.Collection<org.springframework.cache.interceptor.CacheOperation>
                    /**
                     * Return if the given method name matches the mapped name.
                     * <p>The default implementation checks for "xxx*", "*xxx" and "*xxx*" matches,
                     * as well as direct equality. Can be overridden in subclasses.
                     * @param methodName the method name of the class
                     * @param mappedName the name in the descriptor
                     * @return if the names match
                     * @see org.springframework.util.PatternMatchUtils#simpleMatch(String, String)
                     */
                    // @ts-ignore
                    isMatch(methodName: string, mappedName: string): boolean
                    // @ts-ignore
                    equals(other: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
