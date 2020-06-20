declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * A strategy interface for pretty-printing {@code toString()} methods.
                 * Encapsulates the print algorithms; some other object such as a builder
                 * should provide the workflow.
                 * @author Keith Donald
                 * @since 1.2.2
                 */
                // @ts-ignore
                interface ToStringStyler {
                    /**
                     * Style a {@code toString()}'ed object before its fields are styled.
                     * @param buffer the buffer to print to
                     * @param obj the object to style
                     */
                    // @ts-ignore
                    styleStart(buffer: java.lang.StringBuilder, obj: any): void
                    /**
                     * Style a {@code toString()}'ed object after it's fields are styled.
                     * @param buffer the buffer to print to
                     * @param obj the object to style
                     */
                    // @ts-ignore
                    styleEnd(buffer: java.lang.StringBuilder, obj: any): void
                    /**
                     * Style a field value as a string.
                     * @param buffer the buffer to print to
                     * @param fieldName the he name of the field
                     * @param value the field value
                     */
                    // @ts-ignore
                    styleField(buffer: java.lang.StringBuilder, fieldName: string, value: any): void
                    /**
                     * Style the given value.
                     * @param buffer the buffer to print to
                     * @param value the field value
                     */
                    // @ts-ignore
                    styleValue(buffer: java.lang.StringBuilder, value: any): void
                    /**
                     * Style the field separator.
                     * @param buffer the buffer to print to
                     */
                    // @ts-ignore
                    styleFieldSeparator(buffer: java.lang.StringBuilder): void
                }
            }
        }
    }
}
