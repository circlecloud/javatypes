declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Base class for message source implementations, providing support infrastructure
                 * such as {@link java.text.MessageFormat} handling but not implementing concrete
                 * methods defined in the {@link org.springframework.context.MessageSource}.
                 * <p>{@link AbstractMessageSource} derives from this class, providing concrete
                 * {@code getMessage} implementations that delegate to a central template
                 * method for message code resolution.
                 * @author Juergen Hoeller
                 * @since 2.5.5
                 */
                // @ts-ignore
                class MessageSourceSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Logger available to subclasses.
                     */
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Set whether to always apply the {@code MessageFormat} rules,
                     * parsing even messages without arguments.
                     * <p>Default is "false": Messages without arguments are by default
                     * returned as-is, without parsing them through MessageFormat.
                     * Set this to "true" to enforce MessageFormat for all messages,
                     * expecting all message texts to be written with MessageFormat escaping.
                     * <p>For example, MessageFormat expects a single quote to be escaped
                     * as "''". If your message texts are all written with such escaping,
                     * even when not defining argument placeholders, you need to set this
                     * flag to "true". Else, only message texts with actual arguments
                     * are supposed to be written with MessageFormat escaping.
                     * @see java.text.MessageFormat
                     */
                    // @ts-ignore
                    setAlwaysUseMessageFormat(alwaysUseMessageFormat: boolean): void
                    /**
                     * Return whether to always apply the MessageFormat rules, parsing even
                     * messages without arguments.
                     */
                    // @ts-ignore
                    isAlwaysUseMessageFormat(): boolean
                    /**
                     * Render the given default message String. The default message is
                     * passed in as specified by the caller and can be rendered into
                     * a fully formatted default message shown to the user.
                     * <p>The default implementation passes the String to {@code formatMessage},
                     * resolving any argument placeholders found in them. Subclasses may override
                     * this method to plug in custom processing of default messages.
                     * @param defaultMessage the passed-in default message String
                     * @param args array of arguments that will be filled in for params within
                     *  the message, or {#code null} if none.
                     * @param locale the Locale used for formatting
                     * @return the rendered default message (with resolved arguments)
                     * @see #formatMessage(String, Object[], java.util.Locale)
                     */
                    // @ts-ignore
                    renderDefaultMessage(defaultMessage: string, args: any[], locale: java.util.Locale): java.lang.String
                    /**
                     * Format the given message String, using cached MessageFormats.
                     * By default invoked for passed-in default messages, to resolve
                     * any argument placeholders found in them.
                     * @param msg the message to format
                     * @param args array of arguments that will be filled in for params within
                     *  the message, or {#code null} if none
                     * @param locale the Locale used for formatting
                     * @return the formatted message (with resolved arguments)
                     */
                    // @ts-ignore
                    formatMessage(msg: string, args: any[], locale: java.util.Locale): java.lang.String
                    /**
                     * Create a MessageFormat for the given message and Locale.
                     * @param msg the message to create a MessageFormat for
                     * @param locale the Locale to create a MessageFormat for
                     * @return the MessageFormat instance
                     */
                    // @ts-ignore
                    createMessageFormat(msg: string, locale: java.util.Locale): java.text.MessageFormat
                    /**
                     * Template method for resolving argument objects.
                     * <p>The default implementation simply returns the given argument array as-is.
                     * Can be overridden in subclasses in order to resolve special argument types.
                     * @param args the original argument array
                     * @param locale the Locale to resolve against
                     * @return the resolved argument array
                     */
                    // @ts-ignore
                    resolveArguments(args: any[], locale: java.util.Locale): java.lang.Object[]
                }
            }
        }
    }
}
