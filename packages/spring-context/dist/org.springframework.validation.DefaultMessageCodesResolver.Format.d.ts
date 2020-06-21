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
                    /**
                     * Prefix the error code at the beginning of the generated message code. e.g.:
                     * {@code errorCode + "." + object name + "." + field}
                     */
                    // @ts-ignore
                    readonly PREFIX_ERROR_CODE: org.springframework.validation.DefaultMessageCodesResolver.Format
                    /**
                     * Postfix the error code at the end of the generated message code. e.g.:
                     * {@code object name + "." + field + "." + errorCode}
                     */
                    // @ts-ignore
                    readonly POSTFIX_ERROR_CODE: org.springframework.validation.DefaultMessageCodesResolver.Format
                    // @ts-ignore
                    values(): org.springframework.validation.DefaultMessageCodesResolver.Format[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.springframework.validation.DefaultMessageCodesResolver.Format
                    /**
                     * Concatenate the given elements, delimiting each with
                     * {@link DefaultMessageCodesResolver#CODE_SEPARATOR}, skipping zero-length or
                     * null elements altogether.
                     */
                    // @ts-ignore
                    toDelimitedString(...elements: java.lang.String[] | string[]): string
                }
            }
        }
    }
}
