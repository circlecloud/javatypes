declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * {@code DeferredResult} provides an alternative to using a {@link Callable} for
                         * asynchronous request processing. While a {@code Callable} is executed concurrently
                         * on behalf of the application, with a {@code DeferredResult} the application can
                         * produce the result from a thread of its choice.
                         * <p>Subclasses can extend this class to easily associate additional data or behavior
                         * with the {@link DeferredResult}. For example, one might want to associate the user
                         * used to create the {@link DeferredResult} by extending the class and adding an
                         * additional property for the user. In this way, the user could easily be accessed
                         * later without the need to use a data structure to do the mapping.
                         * <p>An example of associating additional behavior to this class might be realized
                         * by extending the class to implement an additional interface. For example, one
                         * might want to implement {@link Comparable} so that when the {@link DeferredResult}
                         * is added to a {@link PriorityQueue} it is handled in the correct order.
                         * @author Rossen Stoyanchev
                         * @author Juergen Hoeller
                         * @author Rob Winch
                         * @since 3.2
                         * @param <T> the result type
                         */
                        // @ts-ignore
                        class DeferredResult<T> extends java.lang.Object {
                            /**
                             * Create a DeferredResult.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Create a DeferredResult with a custom timeout value.
                             * <p>By default not set in which case the default configured in the MVC
                             * Java Config or the MVC namespace is used, or if that's not set, then the
                             * timeout depends on the default of the underlying server.
                             * @param timeoutValue timeout value in milliseconds
                             */
                            // @ts-ignore
                            constructor(timeoutValue: java.lang.Long | number)
                            /**
                             * Create a DeferredResult with a timeout value and a default result to use
                             * in case of timeout.
                             * @param timeoutValue timeout value in milliseconds (ignored if {#code null})
                             * @param timeoutResult the result to use
                             */
                            // @ts-ignore
                            constructor(timeoutValue: java.lang.Long | number, timeoutResult: java.lang.Object | any)
                            /**
                             * Variant of {@link #DeferredResult(Long, Object)} that accepts a dynamic
                             * fallback value based on a {@link Supplier}.
                             * @param timeoutValue timeout value in milliseconds (ignored if {#code null})
                             * @param timeoutResult the result supplier to use
                             * @since 5.1.1
                             */
                            // @ts-ignore
                            constructor(timeoutValue: java.lang.Long | number, timeoutResult: java.util.function$.Supplier<any>)
                            /**
                             * Return {@code true} if this DeferredResult is no longer usable either
                             * because it was previously set or because the underlying request expired.
                             * <p>The result may have been set with a call to {@link #setResult(Object)},
                             * or {@link #setErrorResult(Object)}, or as a result of a timeout, if a
                             * timeout result was provided to the constructor. The request may also
                             * expire due to a timeout or network error.
                             */
                            // @ts-ignore
                            public isSetOrExpired(): boolean
                            /**
                             * Return {@code true} if the DeferredResult has been set.
                             * @since 4.0
                             */
                            // @ts-ignore
                            public hasResult(): boolean
                            /**
                             * Return the result, or {@code null} if the result wasn't set. Since the result
                             * can also be {@code null}, it is recommended to use {@link #hasResult()} first
                             * to check if there is a result prior to calling this method.
                             * @since 4.0
                             */
                            // @ts-ignore
                            public getResult(): any
                            /**
                             * Register code to invoke when the async request times out.
                             * <p>This method is called from a container thread when an async request
                             * times out before the {@code DeferredResult} has been populated.
                             * It may invoke {@link DeferredResult#setResult setResult} or
                             * {@link DeferredResult#setErrorResult setErrorResult} to resume processing.
                             */
                            // @ts-ignore
                            public onTimeout(callback: java.lang.Runnable): void
                            /**
                             * Register code to invoke when an error occurred during the async request.
                             * <p>This method is called from a container thread when an error occurs
                             * while processing an async request before the {@code DeferredResult} has
                             * been populated. It may invoke {@link DeferredResult#setResult setResult}
                             * or {@link DeferredResult#setErrorResult setErrorResult} to resume
                             * processing.
                             * @since 5.0
                             */
                            // @ts-ignore
                            public onError(callback: java.util.function$.Consumer<java.lang.Throwable | Error>): void
                            /**
                             * Register code to invoke when the async request completes.
                             * <p>This method is called from a container thread when an async request
                             * completed for any reason including timeout and network error. This is useful
                             * for detecting that a {@code DeferredResult} instance is no longer usable.
                             */
                            // @ts-ignore
                            public onCompletion(callback: java.lang.Runnable): void
                            /**
                             * Provide a handler to use to handle the result value.
                             * @param resultHandler the handler
                             * @see DeferredResultProcessingInterceptor
                             */
                            // @ts-ignore
                            public setResultHandler(resultHandler: org.springframework.web.context.request.async.DeferredResult.DeferredResultHandler): void
                            /**
                             * Set the value for the DeferredResult and handle it.
                             * @param result the value to set
                             * @return {#code true} if the result was set and passed on for handling;
                             *  {@code false} if the result was already set or the async request expired
                             * @see #isSetOrExpired()
                             */
                            // @ts-ignore
                            public setResult(result: T): boolean
                            /**
                             * Set an error value for the {@link DeferredResult} and handle it.
                             * The value may be an {@link Exception} or {@link Throwable} in which case
                             * it will be processed as if a handler raised the exception.
                             * @param result the error result value
                             * @return {#code true} if the result was set to the error value and passed on
                             *  for handling; {@code false} if the result was already set or the async
                             *  request expired
                             * @see #isSetOrExpired()
                             */
                            // @ts-ignore
                            public setErrorResult(result: java.lang.Object | any): boolean
                        }
                    }
                }
            }
        }
    }
}
