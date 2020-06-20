declare namespace org {
    namespace springframework {
        namespace util {
            namespace ReflectionUtils {
                /**
                 * Action to take on each method.
                 */
                // @ts-ignore
                interface MethodCallback {
                    /**
                     * Perform an operation using the given method.
                     * @param method the method to operate on
                     */
                    // @ts-ignore
                    doWith(method: java.lang.reflect.Method): void
                }
            }
        }
    }
}
