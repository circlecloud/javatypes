declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * A {@link ServerHttpAsyncRequestControl} to use on Servlet containers (Servlet 3.0+).
                 * @author Rossen Stoyanchev
                 * @since 4.0
                 */
                // @ts-ignore
                class ServletServerHttpAsyncRequestControl extends java.lang.Object implements org.springframework.http.server.ServerHttpAsyncRequestControl {
                    /**
                     * Constructor accepting a request and response pair that are expected to be of type
                     * {@link ServletServerHttpRequest} and {@link ServletServerHttpResponse}
                     * respectively.
                     */
                    // @ts-ignore
                    constructor(request: org.springframework.http.server.ServletServerHttpRequest, response: org.springframework.http.server.ServletServerHttpResponse)
                    // @ts-ignore
                    isStarted(): boolean
                    // @ts-ignore
                    isCompleted(): boolean
                    // @ts-ignore
                    start(): void
                    // @ts-ignore
                    start(timeout: number /*long*/): void
                    // @ts-ignore
                    complete(): void
                    // @ts-ignore
                    onComplete(event: AsyncEvent): void
                    // @ts-ignore
                    onStartAsync(event: AsyncEvent): void
                    // @ts-ignore
                    onError(event: AsyncEvent): void
                    // @ts-ignore
                    onTimeout(event: AsyncEvent): void
                }
            }
        }
    }
}
