declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * An {@code HttpCookie} subclass with the additional attributes allowed in
             * the "Set-Cookie" response header. To build an instance use the {@link #from}
             * static method.
             * @author Rossen Stoyanchev
             * @author Brian Clozel
             * @since 5.0
             * @see <a href="https://tools.ietf.org/html/rfc6265">RFC 6265</a>
             */
            // @ts-ignore
            class ResponseCookie extends org.springframework.http.HttpCookie {
                /**
                 * Return the cookie "Max-Age" attribute in seconds.
                 * <p>A positive value indicates when the cookie expires relative to the
                 * current time. A value of 0 means the cookie should expire immediately.
                 * A negative value means no "Max-Age" attribute in which case the cookie
                 * is removed when the browser is closed.
                 */
                // @ts-ignore
                public getMaxAge(): java.time.Duration
                /**
                 * Return the cookie "Domain" attribute, or {@code null} if not set.
                 */
                // @ts-ignore
                public getDomain(): string
                /**
                 * Return the cookie "Path" attribute, or {@code null} if not set.
                 */
                // @ts-ignore
                public getPath(): string
                /**
                 * Return {@code true} if the cookie has the "Secure" attribute.
                 */
                // @ts-ignore
                public isSecure(): boolean
                /**
                 * Return {@code true} if the cookie has the "HttpOnly" attribute.
                 * @see <a href="https://www.owasp.org/index.php/HTTPOnly">https://www.owasp.org/index.php/HTTPOnly</a>
                 */
                // @ts-ignore
                public isHttpOnly(): boolean
                /**
                 * Return the cookie "SameSite" attribute, or {@code null} if not set.
                 * <p>This limits the scope of the cookie such that it will only be attached to
                 * same site requests if {@code "Strict"} or cross-site requests if {@code "Lax"}.
                 * @see <a href="https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis#section-4.1.2.7">RFC6265 bis</a>
                 * @since 5.1
                 */
                // @ts-ignore
                public getSameSite(): string
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Factory method to obtain a builder for a server-defined cookie that starts
                 * with a name-value pair and may also include attributes.
                 * @param name the cookie name
                 * @param value the cookie value
                 * @return a builder to create the cookie with
                 */
                // @ts-ignore
                public static from(name: java.lang.String | string, value: java.lang.String | string): org.springframework.http.ResponseCookie.ResponseCookieBuilder
                /**
                 * Factory method to obtain a builder for a server-defined cookie. Unlike
                 * {@link #from(String, String)} this option assumes input from a remote
                 * server, which can be handled more leniently, e.g. ignoring a empty domain
                 * name with double quotes.
                 * @param name the cookie name
                 * @param value the cookie value
                 * @return a builder to create the cookie with
                 * @since 5.2.5
                 */
                // @ts-ignore
                public static fromClientResponse(name: java.lang.String | string, value: java.lang.String | string): org.springframework.http.ResponseCookie.ResponseCookieBuilder
            }
        }
    }
}
