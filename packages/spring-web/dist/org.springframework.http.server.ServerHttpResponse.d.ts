declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * Represents a server-side HTTP response.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                interface ServerHttpResponse extends org.springframework.http.HttpOutputMessage, java.io.Flushable, java.io.Closeable {
                    /**
                     * Set the HTTP status code of the response.
                     * @param status the HTTP status as an HttpStatus enum value
                     */
                    // @ts-ignore
                    setStatusCode(status: org.springframework.http.HttpStatus): void
                    /**
                     * Ensure that the headers and the content of the response are written out.
                     * <p>After the first flush, headers can no longer be changed.
                     * Only further content writing and content flushing is possible.
                     */
                    // @ts-ignore
                    flush(): void
                    /**
                     * Close this response, freeing any resources created.
                     */
                    // @ts-ignore
                    close(): void
                }
            }
        }
    }
}
