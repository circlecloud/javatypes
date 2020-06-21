declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * Strategy that encapsulates value String styling algorithms
                 * according to Spring conventions.
                 * @author Keith Donald
                 * @since 1.2.2
                 */
                // @ts-ignore
                interface ValueStyler {
                    /**
                     * Style the given value, returning a String representation.
                     * @param value the Object value to style
                     * @return the styled String
                     */
                    // @ts-ignore
                    style(value: java.lang.Object | any): string
                }
            }
        }
    }
}
