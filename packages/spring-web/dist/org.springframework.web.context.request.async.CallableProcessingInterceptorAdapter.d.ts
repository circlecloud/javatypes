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
                        class CallableProcessingInterceptorAdapter extends java.lang.Object implements org.springframework.web.context.request.async.CallableProcessingInterceptor {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            beforeConcurrentHandling<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            // @ts-ignore
                            preProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                            // @ts-ignore
                            postProcess<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, concurrentResult: any): void
                            // @ts-ignore
                            handleTimeout<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): java.lang.Object
                            // @ts-ignore
                            handleError<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>, t: Error): java.lang.Object
                            // @ts-ignore
                            afterCompletion<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): void
                        }
                    }
                }
            }
        }
    }
}
