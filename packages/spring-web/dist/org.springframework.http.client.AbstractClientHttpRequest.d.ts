declare namespace org {
    namespace springframework {
        namespace http {
            namespace client {
                /**
                 * Abstract base for {@link ClientHttpRequest} that makes sure that headers
                 * and body are not written multiple times.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                abstract class AbstractClientHttpRequest extends java.lang.Object implements org.springframework.http.client.ClientHttpRequest {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public getHeaders(): org.springframework.http.HttpHeaders
                    // @ts-ignore
                    public getBody(): java.io.OutputStream
                    // @ts-ignore
                    public execute(): org.springframework.http.client.ClientHttpResponse
                    /**
                     * Assert that this request has not been {@linkplain #execute() executed} yet.
                     * @throws IllegalStateException if this request has been executed
                     */
                    // @ts-ignore
                    assertNotExecuted(): void
                    /**
                     * Abstract template method that returns the body.
                     * @param headers the HTTP headers
                     * @return the body output stream
                     */
                    // @ts-ignore
                    abstract getBodyInternal(headers: org.springframework.http.HttpHeaders): java.io.OutputStream
                    /**
                     * Abstract template method that writes the given headers and content to the HTTP request.
                     * @param headers the HTTP headers
                     * @return the response object for the executed request
                     */
                    // @ts-ignore
                    abstract executeInternal(headers: org.springframework.http.HttpHeaders): org.springframework.http.client.ClientHttpResponse
                }
            }
        }
    }
}
