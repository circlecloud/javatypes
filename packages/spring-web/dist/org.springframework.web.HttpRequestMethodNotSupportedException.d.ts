declare namespace org {
    namespace springframework {
        namespace web {
            /**
             * Exception thrown when a request handler does not support a
             * specific request method.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            class HttpRequestMethodNotSupportedException extends ServletException {
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 */
                // @ts-ignore
                constructor(method: string)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(method: string, msg: string)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods (may be {#code null})
                 */
                // @ts-ignore
                constructor(method: string, supportedMethods: Array<java.lang.String>)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods (may be {#code null})
                 */
                // @ts-ignore
                constructor(method: string, supportedMethods: string[])
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(method: string, supportedMethods: string[], msg: string)
                /**
                 * Return the HTTP request method that caused the failure.
                 */
                // @ts-ignore
                getMethod(): java.lang.String
                /**
                 * Return the actually supported HTTP methods, or {@code null} if not known.
                 */
                // @ts-ignore
                getSupportedMethods(): java.lang.String[]
                /**
                 * Return the actually supported HTTP methods as {@link HttpMethod} instances,
                 * or {@code null} if not known.
                 * @since 3.2
                 */
                // @ts-ignore
                getSupportedHttpMethods(): java.util.Set<org.springframework.http.HttpMethod>
            }
        }
    }
}
