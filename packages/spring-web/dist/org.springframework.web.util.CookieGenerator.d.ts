declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                /**
                 * Helper class for cookie generation, carrying cookie descriptor settings
                 * as bean properties and being able to add and remove cookie to/from a
                 * given response.
                 * <p>Can serve as base class for components that generate specific cookies,
                 * such as CookieLocaleResolver and CookieThemeResolver.
                 * @author Juergen Hoeller
                 * @since 1.1.4
                 * @see #addCookie
                 * @see #removeCookie
                 * @see org.springframework.web.servlet.i18n.CookieLocaleResolver
                 * @see org.springframework.web.servlet.theme.CookieThemeResolver
                 */
                // @ts-ignore
                class CookieGenerator extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Default path that cookies will be visible to: "/", i.e. the entire server.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_COOKIE_PATH: java.lang.String | string
                    // @ts-ignore
                    readonly logger: Log
                    /**
                     * Use the given name for cookies created by this generator.
                     * @see javax.servlet.http.Cookie#getName()
                     */
                    // @ts-ignore
                    public setCookieName(cookieName: java.lang.String | string): void
                    /**
                     * Return the given name for cookies created by this generator.
                     */
                    // @ts-ignore
                    public getCookieName(): string
                    /**
                     * Use the given domain for cookies created by this generator.
                     * The cookie is only visible to servers in this domain.
                     * @see javax.servlet.http.Cookie#setDomain
                     */
                    // @ts-ignore
                    public setCookieDomain(cookieDomain: java.lang.String | string): void
                    /**
                     * Return the domain for cookies created by this generator, if any.
                     */
                    // @ts-ignore
                    public getCookieDomain(): string
                    /**
                     * Use the given path for cookies created by this generator.
                     * The cookie is only visible to URLs in this path and below.
                     * @see javax.servlet.http.Cookie#setPath
                     */
                    // @ts-ignore
                    public setCookiePath(cookiePath: java.lang.String | string): void
                    /**
                     * Return the path for cookies created by this generator.
                     */
                    // @ts-ignore
                    public getCookiePath(): string
                    /**
                     * Use the given maximum age (in seconds) for cookies created by this generator.
                     * Useful special value: -1 ... not persistent, deleted when client shuts down.
                     * <p>Default is no specific maximum age at all, using the Servlet container's
                     * default.
                     * @see javax.servlet.http.Cookie#setMaxAge
                     */
                    // @ts-ignore
                    public setCookieMaxAge(cookieMaxAge: java.lang.Integer | number): void
                    /**
                     * Return the maximum age for cookies created by this generator.
                     */
                    // @ts-ignore
                    public getCookieMaxAge(): number
                    /**
                     * Set whether the cookie should only be sent using a secure protocol,
                     * such as HTTPS (SSL). This is an indication to the receiving browser,
                     * not processed by the HTTP server itself.
                     * <p>Default is "false".
                     * @see javax.servlet.http.Cookie#setSecure
                     */
                    // @ts-ignore
                    public setCookieSecure(cookieSecure: boolean): void
                    /**
                     * Return whether the cookie should only be sent using a secure protocol,
                     * such as HTTPS (SSL).
                     */
                    // @ts-ignore
                    public isCookieSecure(): boolean
                    /**
                     * Set whether the cookie is supposed to be marked with the "HttpOnly" attribute.
                     * <p>Default is "false".
                     * @see javax.servlet.http.Cookie#setHttpOnly
                     */
                    // @ts-ignore
                    public setCookieHttpOnly(cookieHttpOnly: boolean): void
                    /**
                     * Return whether the cookie is supposed to be marked with the "HttpOnly" attribute.
                     */
                    // @ts-ignore
                    public isCookieHttpOnly(): boolean
                    /**
                     * Add a cookie with the given value to the response,
                     * using the cookie descriptor settings of this generator.
                     * <p>Delegates to {@link #createCookie} for cookie creation.
                     * @param response the HTTP response to add the cookie to
                     * @param cookieValue the value of the cookie to add
                     * @see #setCookieName
                     * @see #setCookieDomain
                     * @see #setCookiePath
                     * @see #setCookieMaxAge
                     */
                    // @ts-ignore
                    public addCookie(response: HttpServletResponse, cookieValue: java.lang.String | string): void
                    /**
                     * Remove the cookie that this generator describes from the response.
                     * Will generate a cookie with empty value and max age 0.
                     * <p>Delegates to {@link #createCookie} for cookie creation.
                     * @param response the HTTP response to remove the cookie from
                     * @see #setCookieName
                     * @see #setCookieDomain
                     * @see #setCookiePath
                     */
                    // @ts-ignore
                    public removeCookie(response: HttpServletResponse): void
                    /**
                     * Create a cookie with the given value, using the cookie descriptor
                     * settings of this generator (except for "cookieMaxAge").
                     * @param cookieValue the value of the cookie to crate
                     * @return the cookie
                     * @see #setCookieName
                     * @see #setCookieDomain
                     * @see #setCookiePath
                     */
                    // @ts-ignore
                    createCookie(cookieValue: java.lang.String | string): Cookie
                }
            }
        }
    }
}
