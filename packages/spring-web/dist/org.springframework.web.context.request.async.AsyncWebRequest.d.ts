declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Extends {@link NativeWebRequest} with methods for asynchronous request processing.
                         * @author Rossen Stoyanchev
                         * @since 3.2
                         */
                        // @ts-ignore
                        interface AsyncWebRequest extends org.springframework.web.context.request.NativeWebRequest {
                            /**
                             * Set the time required for concurrent handling to complete.
                             * This property should not be set when concurrent handling is in progress,
                             * i.e. when {@link #isAsyncStarted()} is {@code true}.
                             * @param timeout amount of time in milliseconds; {#code null} means no
                             *  	timeout, i.e. rely on the default timeout of the container.
                             */
                            // @ts-ignore
                            setTimeout(timeout: number): void
                            /**
                             * Add a handler to invoke when concurrent handling has timed out.
                             */
                            // @ts-ignore
                            addTimeoutHandler(runnable: java.lang.Runnable): void
                            /**
                             * Add a handler to invoke when an error occurred while concurrent
                             * handling of a request.
                             * @since 5.0
                             */
                            // @ts-ignore
                            addErrorHandler(exceptionHandler: java.util.function.Consumer<java.lang.Throwable> | java.util.function$.Consumer<java.lang.Throwable>): void
                            /**
                             * Add a handler to invoke when request processing completes.
                             */
                            // @ts-ignore
                            addCompletionHandler(runnable: java.lang.Runnable): void
                            /**
                             * Mark the start of asynchronous request processing so that when the main
                             * processing thread exits, the response remains open for further processing
                             * in another thread.
                             * @throws IllegalStateException if async processing has completed or is not supported
                             */
                            // @ts-ignore
                            startAsync(): void
                            /**
                             * Whether the request is in async mode following a call to {@link #startAsync()}.
                             * Returns "false" if asynchronous processing never started, has completed,
                             * or the request was dispatched for further processing.
                             */
                            // @ts-ignore
                            isAsyncStarted(): boolean
                            /**
                             * Dispatch the request to the container in order to resume processing after
                             * concurrent execution in an application thread.
                             */
                            // @ts-ignore
                            dispatch(): void
                            /**
                             * Whether asynchronous processing has completed.
                             */
                            // @ts-ignore
                            isAsyncComplete(): boolean
                        }
                    }
                }
            }
        }
    }
}
