declare namespace org {
    namespace springframework {
        namespace cache {
            namespace interceptor {
                /**
                 * Cache key generator. Used for creating a key based on the given method
                 * (used as context) and its parameters.
                 * @author Costin Leau
                 * @author Chris Beams
                 * @author Phillip Webb
                 * @since 3.1
                 */
                // @ts-ignore
                interface KeyGenerator {
                    /**
                     * Generate a key for the given method and its parameters.
                     * @param target the target instance
                     * @param method the method being called
                     * @param params the method parameters (with any var-args expanded)
                     * @return a generated key
                     */
                    // @ts-ignore
                    generate(target: any, method: java.lang.reflect.Method, ...params: any[]): java.lang.Object
                }
            }
        }
    }
}
