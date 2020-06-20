declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP cookie as a name-value pair consistent with the content of
             * the "Cookie" request header. The {@link ResponseCookie} sub-class has the
             * additional attributes expected in the "Set-Cookie" response header.
             * @author Rossen Stoyanchev
             * @since 5.0
             * @see <a href="https://tools.ietf.org/html/rfc6265">RFC 6265</a>
             */
            // @ts-ignore
            class HttpCookie extends java.lang.Object {
                // @ts-ignore
                constructor(name: string, value: string)
                /**
                 * Return the cookie name.
                 */
                // @ts-ignore
                getName(): java.lang.String
                /**
                 * Return the cookie value or an empty string (never {@code null}).
                 */
                // @ts-ignore
                getValue(): java.lang.String
                // @ts-ignore
                hashCode(): int
                // @ts-ignore
                equals(other: any): boolean
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
