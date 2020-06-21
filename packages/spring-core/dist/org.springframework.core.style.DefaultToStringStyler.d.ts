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
                    public styleStart(buffer: java.lang.StringBuilder, obj: java.lang.Object | any): void
                    // @ts-ignore
                    public styleEnd(buffer: java.lang.StringBuilder, o: java.lang.Object | any): void
                    // @ts-ignore
                    public styleField(buffer: java.lang.StringBuilder, fieldName: java.lang.String | string, value: java.lang.Object | any): void
                    // @ts-ignore
                    styleFieldStart(buffer: java.lang.StringBuilder, fieldName: java.lang.String | string): void
                    // @ts-ignore
                    styleFieldEnd(buffer: java.lang.StringBuilder, fieldName: java.lang.String | string): void
                    // @ts-ignore
                    public styleValue(buffer: java.lang.StringBuilder, value: java.lang.Object | any): void
                    // @ts-ignore
                    public styleFieldSeparator(buffer: java.lang.StringBuilder): void
                }
            }
        }
    }
}
