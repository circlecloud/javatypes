declare namespace org {
    namespace springframework {
        namespace format {
            namespace support {
                /**
                 * Adapter that bridges between {@link Formatter} and {@link PropertyEditor}.
                 * @author Juergen Hoeller
                 * @since 4.2
                 */
                // @ts-ignore
                class FormatterPropertyEditorAdapter extends java.beans.PropertyEditorSupport {
                    /**
                     * Create a new {@code FormatterPropertyEditorAdapter} for the given {@link Formatter}.
                     * @param formatter the {#link Formatter} to wrap
                     */
                    // @ts-ignore
                    constructor(formatter: org.springframework.format.Formatter<any>)
                    /**
                     * Determine the {@link Formatter}-declared field type.
                     * @return the field type declared in the wrapped {#link Formatter} implementation
                     *  (never {@code null})
                     * @throws IllegalArgumentException if the {#link Formatter}-declared field type
                     *  cannot be inferred
                     */
                    // @ts-ignore
                    public getFieldType(): java.lang.Class<any>
                    // @ts-ignore
                    public setAsText(text: java.lang.String | string): void
                    // @ts-ignore
                    public getAsText(): string
                }
            }
        }
    }
}
