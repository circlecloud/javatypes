declare namespace org {
    namespace springframework {
        namespace util {
            namespace ReflectionUtils {
                /**
                 * Callback optionally used to filter methods to be operated on by a method callback.
                 */
                // @ts-ignore
                interface MethodFilter {
                    /**
                     * Determine whether the given method matches.
                     * @param method the method to check
                     */
                    // @ts-ignore
                    matches(method: java.lang.reflect.Method): boolean
                }
            }
        }
    }
}
