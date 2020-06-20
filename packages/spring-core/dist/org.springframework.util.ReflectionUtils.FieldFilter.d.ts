declare namespace org {
    namespace springframework {
        namespace util {
            namespace ReflectionUtils {
                /**
                 * Callback optionally used to filter fields to be operated on by a field callback.
                 */
                // @ts-ignore
                interface FieldFilter {
                    /**
                     * Determine whether the given field matches.
                     * @param field the field to check
                     */
                    // @ts-ignore
                    matches(field: java.lang.reflect.Field): boolean
                }
            }
        }
    }
}
