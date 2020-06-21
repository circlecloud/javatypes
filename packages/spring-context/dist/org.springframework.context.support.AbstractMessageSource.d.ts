declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Abstract implementation of the {@link HierarchicalMessageSource} interface,
                 * implementing common handling of message variants, making it easy
                 * to implement a specific strategy for a concrete MessageSource.
                 * <p>Subclasses must implement the abstract {@link #resolveCode}
                 * method. For efficient resolution of messages without arguments, the
                 * {@link #resolveCodeWithoutArguments} method should be overridden
                 * as well, resolving messages without a MessageFormat being involved.
                 * <p><b>Note:</b> By default, message texts are only parsed through
                 * MessageFormat if arguments have been passed in for the message. In case
                 * of no arguments, message texts will be returned as-is. As a consequence,
                 * you should only use MessageFormat escaping for messages with actual
                 * arguments, and keep all other messages unescaped. If you prefer to
                 * escape all messages, set the "alwaysUseMessageFormat" flag to "true".
                 * <p>Supports not only MessageSourceResolvables as primary messages
                 * but also resolution of message arguments that are in turn
                 * MessageSourceResolvables themselves.
                 * <p>This class does not implement caching of messages per code, thus
                 * subclasses can dynamically change messages over time. Subclasses are
                 * encouraged to cache their messages in a modification-aware fashion,
                 * allowing for hot deployment of updated messages.
                 * @author Juergen Hoeller
                 * @author Rod Johnson
                 * @see #resolveCode(String, java.util.Locale)
                 * @see #resolveCodeWithoutArguments(String, java.util.Locale)
                 * @see #setAlwaysUseMessageFormat
                 * @see java.text.MessageFormat
                 */
                // @ts-ignore
                abstract class AbstractMessageSource extends org.springframework.context.support.MessageSourceSupport implements org.springframework.context.HierarchicalMessageSource {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public setParentMessageSource(parent: org.springframework.context.MessageSource): void
                    // @ts-ignore
                    public getParentMessageSource(): org.springframework.context.MessageSource
                    /**
                     * Specify locale-independent common messages, with the message code as key
                     * and the full message String (may contain argument placeholders) as value.
                     * <p>May also link to an externally defined Properties object, e.g. defined
                     * through a {@link org.springframework.beans.factory.config.PropertiesFactoryBean}.
                     */
                    // @ts-ignore
                    public setCommonMessages(commonMessages: java.util.Properties): void
                    /**
                     * Return a Properties object defining locale-independent common messages, if any.
                     */
                    // @ts-ignore
                    getCommonMessages(): java.util.Properties
                    /**
                     * Set whether to use the message code as default message instead of
                     * throwing a NoSuchMessageException. Useful for development and debugging.
                     * Default is "false".
                     * <p>Note: In case of a MessageSourceResolvable with multiple codes
                     * (like a FieldError) and a MessageSource that has a parent MessageSource,
                     * do <i>not</i> activate "useCodeAsDefaultMessage" in the <i>parent</i>:
                     * Else, you'll get the first code returned as message by the parent,
                     * without attempts to check further codes.
                     * <p>To be able to work with "useCodeAsDefaultMessage" turned on in the parent,
                     * AbstractMessageSource and AbstractApplicationContext contain special checks
                     * to delegate to the internal {@link #getMessageInternal} method if available.
                     * In general, it is recommended to just use "useCodeAsDefaultMessage" during
                     * development and not rely on it in production in the first place, though.
                     * @see #getMessage(String, Object[], Locale)
                     * @see org.springframework.validation.FieldError
                     */
                    // @ts-ignore
                    public setUseCodeAsDefaultMessage(useCodeAsDefaultMessage: boolean): void
                    /**
                     * Return whether to use the message code as default message instead of
                     * throwing a NoSuchMessageException. Useful for development and debugging.
                     * Default is "false".
                     * <p>Alternatively, consider overriding the {@link #getDefaultMessage}
                     * method to return a custom fallback message for an unresolvable code.
                     * @see #getDefaultMessage(String)
                     */
                    // @ts-ignore
                    isUseCodeAsDefaultMessage(): boolean
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], defaultMessage: java.lang.String | string, locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    // @ts-ignore
                    public getMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): string
                    /**
                     * Resolve the given code and arguments as message in the given Locale,
                     * returning {@code null} if not found. Does <i>not</i> fall back to
                     * the code as default message. Invoked by {@code getMessage} methods.
                     * @param code the code to lookup up, such as 'calculator.noRateSet'
                     * @param args array of arguments that will be filled in for params
                     *  within the message
                     * @param locale the locale in which to do the lookup
                     * @return the resolved message, or {#code null} if not found
                     * @see #getMessage(String, Object[], String, Locale)
                     * @see #getMessage(String, Object[], Locale)
                     * @see #getMessage(MessageSourceResolvable, Locale)
                     * @see #setUseCodeAsDefaultMessage
                     */
                    // @ts-ignore
                    getMessageInternal(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    /**
                     * Try to retrieve the given message from the parent {@code MessageSource}, if any.
                     * @param code the code to lookup up, such as 'calculator.noRateSet'
                     * @param args array of arguments that will be filled in for params
                     *  within the message
                     * @param locale the locale in which to do the lookup
                     * @return the resolved message, or {#code null} if not found
                     * @see #getParentMessageSource()
                     */
                    // @ts-ignore
                    getMessageFromParent(code: java.lang.String | string, args: java.lang.Object[] | any[], locale: java.util.Locale): string
                    /**
                     * Get a default message for the given {@code MessageSourceResolvable}.
                     * <p>This implementation fully renders the default message if available,
                     * or just returns the plain default message {@code String} if the primary
                     * message code is being used as a default message.
                     * @param resolvable the value object to resolve a default message for
                     * @param locale the current locale
                     * @return the default message, or {#code null} if none
                     * @since 4.3.6
                     * @see #renderDefaultMessage(String, Object[], Locale)
                     * @see #getDefaultMessage(String)
                     */
                    // @ts-ignore
                    getDefaultMessage(resolvable: org.springframework.context.MessageSourceResolvable, locale: java.util.Locale): string
                    /**
                     * Return a fallback default message for the given code, if any.
                     * <p>Default is to return the code itself if "useCodeAsDefaultMessage" is activated,
                     * or return no fallback else. In case of no fallback, the caller will usually
                     * receive a {@code NoSuchMessageException} from {@code getMessage}.
                     * @param code the message code that we couldn't resolve
                     *  and that we didn't receive an explicit default message for
                     * @return the default message to use, or {#code null} if none
                     * @see #setUseCodeAsDefaultMessage
                     */
                    // @ts-ignore
                    getDefaultMessage(code: java.lang.String | string): string
                    /**
                     * Searches through the given array of objects, finds any MessageSourceResolvable
                     * objects and resolves them.
                     * <p>Allows for messages to have MessageSourceResolvables as arguments.
                     * @param args array of arguments for a message
                     * @param locale the locale to resolve through
                     * @return an array of arguments with any MessageSourceResolvables resolved
                     */
                    // @ts-ignore
                    resolveArguments(args: java.lang.Object[] | any[], locale: java.util.Locale): any[]
                    /**
                     * Subclasses can override this method to resolve a message without arguments
                     * in an optimized fashion, i.e. to resolve without involving a MessageFormat.
                     * <p>The default implementation <i>does</i> use MessageFormat, through
                     * delegating to the {@link #resolveCode} method. Subclasses are encouraged
                     * to replace this with optimized resolution.
                     * <p>Unfortunately, {@code java.text.MessageFormat} is not implemented
                     * in an efficient fashion. In particular, it does not detect that a message
                     * pattern doesn't contain argument placeholders in the first place. Therefore,
                     * it is advisable to circumvent MessageFormat for messages without arguments.
                     * @param code the code of the message to resolve
                     * @param locale the locale to resolve the code for
                     *  (subclasses are encouraged to support internationalization)
                     * @return the message String, or {#code null} if not found
                     * @see #resolveCode
                     * @see java.text.MessageFormat
                     */
                    // @ts-ignore
                    resolveCodeWithoutArguments(code: java.lang.String | string, locale: java.util.Locale): string
                    /**
                     * Subclasses must implement this method to resolve a message.
                     * <p>Returns a MessageFormat instance rather than a message String,
                     * to allow for appropriate caching of MessageFormats in subclasses.
                     * <p><b>Subclasses are encouraged to provide optimized resolution
                     * for messages without arguments, not involving MessageFormat.</b>
                     * See the {@link #resolveCodeWithoutArguments} javadoc for details.
                     * @param code the code of the message to resolve
                     * @param locale the locale to resolve the code for
                     *  (subclasses are encouraged to support internationalization)
                     * @return the MessageFormat for the message, or {#code null} if not found
                     * @see #resolveCodeWithoutArguments(String, java.util.Locale)
                     */
                    // @ts-ignore
                    abstract resolveCode(code: java.lang.String | string, locale: java.util.Locale): java.text.MessageFormat
                }
            }
        }
    }
}
