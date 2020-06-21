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
                constructor(name: java.lang.String | string, value: java.lang.String | string)
                /**
                 * Return the cookie name.
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Return the cookie value or an empty string (never {@code null}).
                 */
                // @ts-ignore
                public getValue(): string
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public equals(other: java.lang.Object | any): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
