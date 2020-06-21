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
                constructor(method: java.lang.String | string)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(method: java.lang.String | string, msg: java.lang.String | string)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods (may be {#code null})
                 */
                // @ts-ignore
                constructor(method: java.lang.String | string, supportedMethods: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>)
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods (may be {#code null})
                 */
                // @ts-ignore
                constructor(method: java.lang.String | string, supportedMethods: java.lang.String[] | string[])
                /**
                 * Create a new HttpRequestMethodNotSupportedException.
                 * @param method the unsupported HTTP request method
                 * @param supportedMethods the actually supported HTTP methods
                 * @param msg the detail message
                 */
                // @ts-ignore
                constructor(method: java.lang.String | string, supportedMethods: java.lang.String[] | string[], msg: java.lang.String | string)
                /**
                 * Return the HTTP request method that caused the failure.
                 */
                // @ts-ignore
                public getMethod(): string
                /**
                 * Return the actually supported HTTP methods, or {@code null} if not known.
                 */
                // @ts-ignore
                public getSupportedMethods(): string[]
                /**
                 * Return the actually supported HTTP methods as {@link HttpMethod} instances,
                 * or {@code null} if not known.
                 * @since 3.2
                 */
                // @ts-ignore
                public getSupportedHttpMethods(): Array<org.springframework.http.HttpMethod>
            }
        }
    }
}
