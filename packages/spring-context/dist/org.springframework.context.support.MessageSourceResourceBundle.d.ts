declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Helper class that allows for accessing a Spring
                 * {@link org.springframework.context.MessageSource} as a {@link java.util.ResourceBundle}.
                 * Used for example to expose a Spring MessageSource to JSTL web views.
                 * @author Juergen Hoeller
                 * @since 27.02.2003
                 * @see org.springframework.context.MessageSource
                 * @see java.util.ResourceBundle
                 * @see org.springframework.web.servlet.support.JstlUtils#exposeLocalizationContext
                 */
                // @ts-ignore
                class MessageSourceResourceBundle extends java.util.ResourceBundle {
                    /**
                     * Create a new MessageSourceResourceBundle for the given MessageSource and Locale.
                     * @param source the MessageSource to retrieve messages from
                     * @param locale the Locale to retrieve messages for
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.MessageSource, locale: java.util.Locale)
                    /**
                     * Create a new MessageSourceResourceBundle for the given MessageSource and Locale.
                     * @param source the MessageSource to retrieve messages from
                     * @param locale the Locale to retrieve messages for
                     * @param parent the parent ResourceBundle to delegate to if no local message found
                     */
                    // @ts-ignore
                    constructor(source: org.springframework.context.MessageSource, locale: java.util.Locale, parent: java.util.ResourceBundle)
                    /**
                     * This implementation resolves the code in the MessageSource.
                     * Returns {@code null} if the message could not be resolved.
                     */
                    // @ts-ignore
                    handleGetObject(key: java.lang.String | string): any
                    /**
                     * This implementation checks whether the target MessageSource can resolve
                     * a message for the given key, translating {@code NoSuchMessageException}
                     * accordingly. In contrast to ResourceBundle's default implementation in
                     * JDK 1.6, this does not rely on the capability to enumerate message keys.
                     */
                    // @ts-ignore
                    public containsKey(key: java.lang.String | string): boolean
                    /**
                     * This implementation throws {@code UnsupportedOperationException},
                     * as a MessageSource does not allow for enumerating the defined message codes.
                     */
                    // @ts-ignore
                    public getKeys(): java.util.Enumeration<java.lang.String | string>
                    /**
                     * This implementation exposes the specified Locale for introspection
                     * through the standard {@code ResourceBundle.getLocale()} method.
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                }
            }
        }
    }
}
