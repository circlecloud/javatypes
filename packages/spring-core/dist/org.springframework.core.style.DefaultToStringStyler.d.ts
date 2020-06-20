declare namespace org {
    namespace springframework {
        namespace core {
            namespace style {
                /**
                 * Spring's default {@code toString()} styler.
                 * <p>This class is used by {@link ToStringCreator} to style {@code toString()}
                 * output in a consistent manner according to Spring conventions.
                 * @author Keith Donald
                 * @author Juergen Hoeller
                 * @since 1.2.2
                 */
                // @ts-ignore
                class DefaultToStringStyler extends java.lang.Object implements org.springframework.core.style.ToStringStyler {
                    /**
                     * Create a new DefaultToStringStyler.
                     * @param valueStyler the ValueStyler to use
                     */
                    // @ts-ignore
                    constructor(valueStyler: org.springframework.core.style.ValueStyler)
                    /**
                     * Return the ValueStyler used by this ToStringStyler.
                     */
                    // @ts-ignore
                    getValueStyler(): org.springframework.core.style.ValueStyler
                    // @ts-ignore
                    styleStart(buffer: java.lang.StringBuilder, obj: any): void
                    // @ts-ignore
                    styleEnd(buffer: java.lang.StringBuilder, o: any): void
                    // @ts-ignore
                    styleField(buffer: java.lang.StringBuilder, fieldName: string, value: any): void
                    // @ts-ignore
                    styleFieldStart(buffer: java.lang.StringBuilder, fieldName: string): void
                    // @ts-ignore
                    styleFieldEnd(buffer: java.lang.StringBuilder, fieldName: string): void
                    // @ts-ignore
                    styleValue(buffer: java.lang.StringBuilder, value: any): void
                    // @ts-ignore
                    styleFieldSeparator(buffer: java.lang.StringBuilder): void
                }
            }
        }
    }
}
