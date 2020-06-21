declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Helper class for easy access to messages from a MessageSource,
                 * providing various overloaded getMessage methods.
                 * <p>Available from ApplicationObjectSupport, but also reusable
                 * as a standalone helper to delegate to in application objects.
                 * @author Juergen Hoeller
                 * @since 23.10.2003
                 * @see ApplicationObjectSupport#getMessageSourceAccessor
                 */
                // @ts-ignore
                class MessageSourceAccessor extends java.lang.Object {
                    /**
                     * Create a new MessageSourceAccessor, using LocaleContextHolder's locale
                     * as default locale.
                     * @param messageSource the MessageSource to wrap
                     * @see org.springframework.context.i18n.LocaleContextHolder#getLocale()
                     */
                    // @ts-ignore
                    constructor(messageSource: org.springframework.context.MessageSource)
                    /**
                     * Create a new MessageSourceAccessor, using the given default locale.
                     * @param messageSource the MessageSource to wrap
                     * @param defaultLocale the default locale to use for message access
                     */
                    // @ts-ignore
                    constructor(messageSource: org.springframework.context.MessageSource, defaultLocale: java.util.Locale)
                    /**
                     * Return the default locale to use if no explicit locale has been given.
                     * <p>The default implementation returns the default locale passed into the
                     * corresponding constructor, or LocaleContextHolder's locale as fallback.
                     * Can be overridden in subclasses.
                     * @see #MessageSourceAccessor(org.springframework.context.MessageSource, java.util.Locale)
                     * @see org.springframework.context.i18n.LocaleContextHolder#getLocale()
                     */
                    // @ts-ignore
                    getDefaultLocale(): java.util.Locale
                    /**
                     * Retrieve the message for the given code and the default Locale.
                     * @param code the code of the message
                     * @param defaultMessage the String to return if the lookup fails
                     * @return the message
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, defaultMessage: java.lang.String | string): string
                    /**
                     * Retrieve the message for the given code and the given Locale.
                     * @param code the code of the message
                     * @param defaultMessage the String to return if the lookup fails
                     * @param locale the Locale in which to do lookup
                     * @return the message
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, defaultMessage: java.lang.String | string, locale: java.util.Locale): string
                    /**
                     * Retrieve the message for the given code and the default Locale.
                     * @param code the code of the message
                     * @param args arguments for the message, or {#code null} if none
                     * @param defaultMessage the String to return if the lookup fails
                     * @return the message
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], defaultMessage: java.lang.String | string): string
                    /**
                     * Retrieve the message for the given code and the given Locale.
                     * @param code the code of the message
                     * @param args arguments for the message, or {#code null} if none
                     * @param defaultMessage the String to return if the lookup fails
                     * @param locale the Locale in which to do lookup
                     * @return the message
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], defaultMessage: java.lang.String | string, locale: java.util.Locale): string
                    /**
                     * Retrieve the message for the given code and the default Locale.
                     * @param code the code of the message
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string): string
                    /**
                     * Retrieve the message for the given code and the given Locale.
                     * @param code the code of the message
                     * @param locale the Locale in which to do lookup
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, locale: java.util.Locale): string
                    /**
                     * Retrieve the message for the given code and the default Locale.
                     * @param code the code of the message
                     * @param args arguments for the message, or {#code null} if none
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[]): string
                    /**
                     * Retrieve the message for the given code and the given Locale.
                     * @param code the code of the message
                     * @param args arguments for the message, or {#code null} if none
                     * @param locale the Locale in which to do lookup
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    /**
                     * Retrieve the given MessageSourceResolvable (e.g. an ObjectError instance)
                     * in the default Locale.
                     * @param resolvable the MessageSourceResolvable
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(resolvable: org.springframework.context.MessageSourceResolvable): string
                    /**
                     * Retrieve the given MessageSourceResolvable (e.g. an ObjectError instance)
                     * in the given Locale.
                     * @param resolvable the MessageSourceResolvable
                     * @param locale the Locale in which to do lookup
                     * @return the message
                     * @throws org.springframework.context.NoSuchMessageException if not found
                     */
                    // @ts-ignore
                    public getMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): string
                }
            }
        }
    }
}
