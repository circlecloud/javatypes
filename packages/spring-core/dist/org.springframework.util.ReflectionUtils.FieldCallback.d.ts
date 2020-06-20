declare namespace org {
    namespace springframework {
        namespace util {
            namespace ReflectionUtils {
                /**
                 * Callback interface invoked on each field in the hierarchy.
                 */
                // @ts-ignore
                interface FieldCallback {
                    /**
                     * Perform an operation using the given field.
                     * @param field the field to operate on
                     */
                    // @ts-ignore
                    doWith(field: java.lang.reflect.Field): void
                }
            }
        }
    }
}
