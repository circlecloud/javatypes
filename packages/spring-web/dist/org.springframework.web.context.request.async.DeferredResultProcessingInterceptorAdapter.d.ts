declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Abstract adapter class for the {@link DeferredResultProcessingInterceptor}
                         * interface for simplified implementation of individual methods.
                         * @author Rossen Stoyanchev
                         * @author Rob Winch
                         * @since 3.2
                         * @deprecated as of 5.0 where DeferredResultProcessingInterceptor has default methods
                         */
                        // @ts-ignore
                        abstract class DeferredResultProcessingInterceptorAdapter extends java.lang.Object implements org.springframework.web.context.request.async.DeferredResultProcessingInterceptor {
                            // @ts-ignore
                            constructor()
                            /**
                             * This implementation is empty.
                             */
                            // @ts-ignore
                            public beforeConcurrentHandling<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>): void
                            /**
                             * This implementation is empty.
                             */
                            // @ts-ignore
                            public preProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>): void
                            /**
                             * This implementation is empty.
                             */
                            // @ts-ignore
                            public postProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>, concurrentResult: java.lang.Object | any): void
                            /**
                             * This implementation returns {@code true} by default allowing other interceptors
                             * to be given a chance to handle the timeout.
                             */
                            // @ts-ignore
                            public handleTimeout<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>): boolean
                            /**
                             * This implementation returns {@code true} by default allowing other interceptors
                             * to be given a chance to handle the error.
                             */
                            // @ts-ignore
                            public handleError<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>, t: java.lang.Throwable | Error): boolean
                            /**
                             * This implementation is empty.
                             */
                            // @ts-ignore
                            public afterCompletion<T>(request: org.springframework.web.context.request.NativeWebRequest, deferredResult: org.springframework.web.context.request.async.DeferredResult<T>): void
                        }
                    }
                }
            }
        }
    }
}
