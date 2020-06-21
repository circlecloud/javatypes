declare namespace org {
    namespace springframework {
        namespace web {
            namespace filter {
                /**
                 * Servlet Filter that allows one to specify a character encoding for requests.
                 * This is useful because current browsers typically do not set a character
                 * encoding even if specified in the HTML page or form.
                 * <p>This filter can either apply its encoding if the request does not already
                 * specify an encoding, or enforce this filter's encoding in any case
                 * ("forceEncoding"="true"). In the latter case, the encoding will also be
                 * applied as default response encoding (although this will usually be overridden
                 * by a full content type set in the view).
                 * @author Juergen Hoeller
                 * @since 15.03.2004
                 * @see #setEncoding
                 * @see #setForceEncoding
                 * @see javax.servlet.http.HttpServletRequest#setCharacterEncoding
                 * @see javax.servlet.http.HttpServletResponse#setCharacterEncoding
                 */
                // @ts-ignore
                class CharacterEncodingFilter extends org.springframework.web.filter.OncePerRequestFilter {
                    /**
                     * Create a default {@code CharacterEncodingFilter},
                     * with the encoding to be set via {@link #setEncoding}.
                     * @see #setEncoding
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a {@code CharacterEncodingFilter} for the given encoding.
                     * @param encoding the encoding to apply
                     * @since 4.2.3
                     * @see #setEncoding
                     */
                    // @ts-ignore
                    constructor(encoding: java.lang.String | string)
                    /**
                     * Create a {@code CharacterEncodingFilter} for the given encoding.
                     * @param encoding the encoding to apply
                     * @param forceEncoding whether the specified encoding is supposed to
                     *  override existing request and response encodings
                     * @since 4.2.3
                     * @see #setEncoding
                     * @see #setForceEncoding
                     */
                    // @ts-ignore
                    constructor(encoding: java.lang.String | string, forceEncoding: boolean)
                    /**
                     * Create a {@code CharacterEncodingFilter} for the given encoding.
                     * @param encoding the encoding to apply
                     * @param forceRequestEncoding whether the specified encoding is supposed to
                     *  override existing request encodings
                     * @param forceResponseEncoding whether the specified encoding is supposed to
                     *  override existing response encodings
                     * @since 4.3
                     * @see #setEncoding
                     * @see #setForceRequestEncoding(boolean)
                     * @see #setForceResponseEncoding(boolean)
                     */
                    // @ts-ignore
                    constructor(encoding: java.lang.String | string, forceRequestEncoding: boolean, forceResponseEncoding: boolean)
                    /**
                     * Set the encoding to use for requests. This encoding will be passed into a
                     * {@link javax.servlet.http.HttpServletRequest#setCharacterEncoding} call.
                     * <p>Whether this encoding will override existing request encodings
                     * (and whether it will be applied as default response encoding as well)
                     * depends on the {@link #setForceEncoding "forceEncoding"} flag.
                     */
                    // @ts-ignore
                    public setEncoding(encoding: java.lang.String | string): void
                    /**
                     * Return the configured encoding for requests and/or responses.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public getEncoding(): string
                    /**
                     * Set whether the configured {@link #setEncoding encoding} of this filter
                     * is supposed to override existing request and response encodings.
                     * <p>Default is "false", i.e. do not modify the encoding if
                     * {@link javax.servlet.http.HttpServletRequest#getCharacterEncoding()}
                     * returns a non-null value. Switch this to "true" to enforce the specified
                     * encoding in any case, applying it as default response encoding as well.
                     * <p>This is the equivalent to setting both {@link #setForceRequestEncoding(boolean)}
                     * and {@link #setForceResponseEncoding(boolean)}.
                     * @see #setForceRequestEncoding(boolean)
                     * @see #setForceResponseEncoding(boolean)
                     */
                    // @ts-ignore
                    public setForceEncoding(forceEncoding: boolean): void
                    /**
                     * Set whether the configured {@link #setEncoding encoding} of this filter
                     * is supposed to override existing request encodings.
                     * <p>Default is "false", i.e. do not modify the encoding if
                     * {@link javax.servlet.http.HttpServletRequest#getCharacterEncoding()}
                     * returns a non-null value. Switch this to "true" to enforce the specified
                     * encoding in any case.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setForceRequestEncoding(forceRequestEncoding: boolean): void
                    /**
                     * Return whether the encoding should be forced on requests.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public isForceRequestEncoding(): boolean
                    /**
                     * Set whether the configured {@link #setEncoding encoding} of this filter
                     * is supposed to override existing response encodings.
                     * <p>Default is "false", i.e. do not modify the encoding.
                     * Switch this to "true" to enforce the specified encoding
                     * for responses in any case.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public setForceResponseEncoding(forceResponseEncoding: boolean): void
                    /**
                     * Return whether the encoding should be forced on responses.
                     * @since 4.3
                     */
                    // @ts-ignore
                    public isForceResponseEncoding(): boolean
                    // @ts-ignore
                    doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain): void
                }
            }
        }
    }
}
