declare namespace org {
    namespace springframework {
        namespace web {
            namespace context {
                namespace request {
                    namespace async {
                        /**
                         * Sends a 503 (SERVICE_UNAVAILABLE) in case of a timeout if the response is not
                         * already committed. As of 4.2.8 this is done indirectly by setting the result
                         * to an {@link AsyncRequestTimeoutException} which is then handled by
                         * Spring MVC's default exception handling as a 503 error.
                         * <p>Registered at the end, after all other interceptors and
                         * therefore invoked only if no other interceptor handles the timeout.
                         * <p>Note that according to RFC 7231, a 503 without a 'Retry-After' header is
                         * interpreted as a 500 error and the client should not retry. Applications
                         * can install their own interceptor to handle a timeout and add a 'Retry-After'
                         * header if necessary.
                         * @author Rossen Stoyanchev
                         * @since 3.2
                         */
                        // @ts-ignore
                        class TimeoutCallableProcessingInterceptor extends java.lang.Object implements org.springframework.web.context.request.async.CallableProcessingInterceptor {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            handleTimeout<T>(request: org.springframework.web.context.request.NativeWebRequest, task: java.util.concurrent.Callable<T>): java.lang.Object
                        }
                    }
                }
            }
        }
    }
}
