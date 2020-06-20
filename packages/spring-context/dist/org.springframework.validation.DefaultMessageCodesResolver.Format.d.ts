declare namespace org {
    namespace springframework {
        namespace validation {
            namespace DefaultMessageCodesResolver {
                /**
                 * Common message code formats.
                 * @see MessageCodeFormatter
                 * @see DefaultMessageCodesResolver#setMessageCodeFormatter(MessageCodeFormatter)
                 */
                // @ts-ignore
                class Format extends java.lang.Enum<org.springframework.validation.DefaultMessageCodesResolver.Format> implements org.springframework.validation.MessageCodeFormatter {
                    // @ts-ignore
                    values(): org.springframework.validation.DefaultMessageCodesResolver.Format[]
                    // @ts-ignore
                    valueOf(name: string): org.springframework.validation.DefaultMessageCodesResolver.Format
                    /**
                     * Concatenate the given elements, delimiting each with
                     * {@link DefaultMessageCodesResolver#CODE_SEPARATOR}, skipping zero-length or
                     * null elements altogether.
                     */
                    // @ts-ignore
                    toDelimitedString(...elements: string[]): java.lang.String
                }
            }
        }
    }
}
