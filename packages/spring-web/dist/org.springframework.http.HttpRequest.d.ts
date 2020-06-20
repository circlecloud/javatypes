declare namespace org {
    namespace springframework {
        namespace http {
            /**
             * Represents an HTTP request message, consisting of
             * {@linkplain #getMethod() method} and {@linkplain #getURI() uri}.
             * @author Arjen Poutsma
             * @since 3.1
             */
            // @ts-ignore
            interface HttpRequest extends org.springframework.http.HttpMessage {
                /**
                 * Return the HTTP method of the request.
                 * @return the HTTP method as an HttpMethod enum value, or {#code null}
                 *  if not resolvable (e.g. in case of a non-standard HTTP method)
                 * @see #getMethodValue()
                 * @see HttpMethod#resolve(String)
                 */
                // @ts-ignore
                getMethod(): org.springframework.http.HttpMethod
                /**
                 * Return the HTTP method of the request as a String value.
                 * @return the HTTP method as a plain String
                 * @since 5.0
                 * @see #getMethod()
                 */
                // @ts-ignore
                getMethodValue(): java.lang.String
                /**
                 * Return the URI of the request (including a query string if any,
                 * but only if it is well-formed for a URI representation).
                 * @return the URI of the request (never {#code null})
                 */
                // @ts-ignore
                getURI(): java.net.URI
            }
        }
    }
}
