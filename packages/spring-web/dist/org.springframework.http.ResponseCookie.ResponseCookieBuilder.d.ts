declare namespace org {
    namespace springframework {
        namespace http {
            namespace ResponseCookie {
                /**
                 * A builder for a server-defined HttpCookie with attributes.
                 */
                // @ts-ignore
                interface ResponseCookieBuilder {
                    /**
                     * Set the cookie "Max-Age" attribute.
                     * <p>A positive value indicates when the cookie should expire relative
                     * to the current time. A value of 0 means the cookie should expire
                     * immediately. A negative value results in no "Max-Age" attribute in
                     * which case the cookie is removed when the browser is closed.
                     */
                    // @ts-ignore
                    maxAge(maxAge: java.time.Duration): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Variant of {@link #maxAge(Duration)} accepting a value in seconds.
                     */
                    // @ts-ignore
                    maxAge(maxAgeSeconds: number /*long*/): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Set the cookie "Path" attribute.
                     */
                    // @ts-ignore
                    path(path: java.lang.String | string): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Set the cookie "Domain" attribute.
                     */
                    // @ts-ignore
                    domain(domain: java.lang.String | string): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Add the "Secure" attribute to the cookie.
                     */
                    // @ts-ignore
                    secure(secure: boolean): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Add the "HttpOnly" attribute to the cookie.
                     * @see <a href="https://www.owasp.org/index.php/HTTPOnly">https://www.owasp.org/index.php/HTTPOnly</a>
                     */
                    // @ts-ignore
                    httpOnly(httpOnly: boolean): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Add the "SameSite" attribute to the cookie.
                     * <p>This limits the scope of the cookie such that it will only be
                     * attached to same site requests if {@code "Strict"} or cross-site
                     * requests if {@code "Lax"}.
                     * @since 5.1
                     * @see <a href="https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis#section-4.1.2.7">RFC6265 bis</a>
                     */
                    // @ts-ignore
                    sameSite(sameSite: java.lang.String | string): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                    /**
                     * Create the HttpCookie.
                     */
                    // @ts-ignore
                    build(): org.springframework.http.ResponseCookie
                }
            }
        }
    }
}
