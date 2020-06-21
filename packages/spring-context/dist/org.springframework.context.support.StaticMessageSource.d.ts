declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Simple implementation of {@link org.springframework.context.MessageSource}
                 * which allows messages to be registered programmatically.
                 * This MessageSource supports basic internationalization.
                 * <p>Intended for testing rather than for use in production systems.
                 * @author Rod Johnson
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                class StaticMessageSource extends org.springframework.context.support.AbstractMessageSource {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    resolveCodeWithoutArguments(code: java.lang.String | string, locale: java.util.Locale): string
                    // @ts-ignore
                    resolveCode(code: java.lang.String | string, locale: java.util.Locale): java.text.MessageFormat
                    /**
                     * Associate the given message with the given code.
                     * @param code the lookup code
                     * @param locale the locale that the message should be found within
                     * @param msg the message associated with this lookup code
                     */
                    // @ts-ignore
                    public addMessage(code: java.lang.String | string, locale: java.util.Locale, msg: java.lang.String | string): void
                    /**
                     * Associate the given message values with the given keys as codes.
                     * @param messages the messages to register, with messages codes
                     *  as keys and message texts as values
                     * @param locale the locale that the messages should be found within
                     */
                    // @ts-ignore
                    public addMessages(messages: java.util.Map<java.lang.String | string, java.lang.String | string>, locale: java.util.Locale): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
