declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                /**
                 * Spring's default implementation of the {@link MessageSourceResolvable} interface.
                 * Offers an easy way to store all the necessary values needed to resolve
                 * a message via a {@link org.springframework.context.MessageSource}.
                 * @author Juergen Hoeller
                 * @since 13.02.2004
                 * @see org.springframework.context.MessageSource#getMessage(MessageSourceResolvable, java.util.Locale)
                 */
                // @ts-ignore
                class DefaultMessageSourceResolvable extends java.lang.Object implements org.springframework.context.MessageSourceResolvable, java.io.Serializable {
                    /**
                     * Create a new DefaultMessageSourceResolvable.
                     * @param code the code to be used to resolve this message
                     */
                    // @ts-ignore
                    constructor(code: java.lang.String | string)
                    /**
                     * Create a new DefaultMessageSourceResolvable.
                     * @param codes the codes to be used to resolve this message
                     */
                    // @ts-ignore
                    constructor(codes: java.lang.String[] | string[])
                    /**
                     * Create a new DefaultMessageSourceResolvable.
                     * @param codes the codes to be used to resolve this message
                     * @param defaultMessage the default message to be used to resolve this message
                     */
                    // @ts-ignore
                    constructor(codes: java.lang.String[] | string[], defaultMessage: java.lang.String | string)
                    /**
                     * Create a new DefaultMessageSourceResolvable.
                     * @param codes the codes to be used to resolve this message
                     * @param arguments the array of arguments to be used to resolve this message
                     */
                    // @ts-ignore
                    constructor(codes: java.lang.String[] | string[], arguments: java.lang.Object[] | any[])
                    /**
                     * Create a new DefaultMessageSourceResolvable.
                     * @param codes the codes to be used to resolve this message
                     * @param arguments the array of arguments to be used to resolve this message
                     * @param defaultMessage the default message to be used to resolve this message
                     */
                    // @ts-ignore
                    constructor(codes: java.lang.String[] | string[], arguments: java.lang.Object[] | any[], defaultMessage: java.lang.String | string)
                    /**
                     * Copy constructor: Create a new instance from another resolvable.
                     * @param resolvable the resolvable to copy from
                     */
                    // @ts-ignore
                    constructor(resolvable: org.springframework.context.MessageSourceResolvable)
                    /**
                     * Return the default code of this resolvable, that is,
                     * the last one in the codes array.
                     */
                    // @ts-ignore
                    public getCode(): string
                    // @ts-ignore
                    public getCodes(): string[]
                    // @ts-ignore
                    public getArguments(): any[]
                    // @ts-ignore
                    public getDefaultMessage(): string
                    /**
                     * Indicate whether the specified default message needs to be rendered for
                     * substituting placeholders and/or {@link java.text.MessageFormat} escaping.
                     * @return {#code true} if the default message may contain argument placeholders;
                     *  {@code false} if it definitely does not contain placeholders or custom escaping
                     *  and can therefore be simply exposed as-is
                     * @since 5.1.7
                     * @see #getDefaultMessage()
                     * @see #getArguments()
                     * @see AbstractMessageSource#renderDefaultMessage
                     */
                    // @ts-ignore
                    public shouldRenderDefaultMessage(): boolean
                    /**
                     * Build a default String representation for this MessageSourceResolvable:
                     * including codes, arguments, and default message.
                     */
                    // @ts-ignore
                    resolvableToString(): string
                    /**
                     * The default implementation exposes the attributes of this MessageSourceResolvable.
                     * <p>To be overridden in more specific subclasses, potentially including the
                     * resolvable content through {@code resolvableToString()}.
                     * @see #resolvableToString()
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(other: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
