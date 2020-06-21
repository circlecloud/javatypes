declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Abstract adapter class for the {@link CallableProcessingInterceptor} interface,
                         * for simplified implementation of individual methods.
                         * @author Rossen Stoyanchev
                         * @author Rob Winch
                         * @since 3.2
                         * @deprecated as of 5.0 where CallableProcessingInterceptor has default methods
                         */
                        // @ts-ignore
                        abstract class CallableProcessingInterceptorAdapter extends java.lang.Object implements org.springframework.web.context.request.async.CallableProcessingInterceptor {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public beforeConcurrentHandling<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            // @ts-ignore
                            public preProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            // @ts-ignore
                            public postProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, concurrentResult: java.lang.Object | any): void
                            // @ts-ignore
                            public handleTimeout<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): any
                            // @ts-ignore
                            public handleError<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, t: java.lang.Throwable | Error): any
                            // @ts-ignore
                            public afterCompletion<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                        }
                    }
                }
            }
        }
    }
}
