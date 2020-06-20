declare namespace org {
    namespace springframework {
        namespace http {
            namespace server {
                /**
                 * A control that can put the processing of an HTTP request in asynchronous mode during
                 * which the response remains open until explicitly closed.
                 * @author Rossen Stoyanchev
                 * @since 4.0
                 */
                // @ts-ignore
                interface ServerHttpAsyncRequestControl {
                    /**
                     * Enable asynchronous processing after which the response remains open until a call
                     * to {@link #complete()} is made or the server times out the request. Once enabled,
                     * additional calls to this method are ignored.
                     */
                    // @ts-ignore
                    start(): void
                    /**
                     * A variation on {@link #start()} that allows specifying a timeout value to use to
                     * use for asynchronous processing. If {@link #complete()} is not called within the
                     * specified value, the request times out.
                     */
                    // @ts-ignore
                    start(timeout: number /*long*/): void
                    /**
                     * Return whether asynchronous request processing has been started.
                     */
                    // @ts-ignore
                    isStarted(): boolean
                    /**
                     * Mark asynchronous request processing as completed.
                     */
                    // @ts-ignore
                    complete(): void
                    /**
                     * Return whether asynchronous request processing has been completed.
                     */
                    // @ts-ignore
                    isCompleted(): boolean
                }
            }
        }
    }
}
