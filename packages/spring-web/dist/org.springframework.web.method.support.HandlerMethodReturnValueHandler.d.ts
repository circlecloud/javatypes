declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Strategy interface to handle the value returned from the invocation of a
                     * handler method .
                     * @author Arjen Poutsma
                     * @since 3.1
                     * @see HandlerMethodArgumentResolver
                     */
                    // @ts-ignore
                    interface HandlerMethodReturnValueHandler {
                        /**
                         * Whether the given {@linkplain MethodParameter method return type} is
                         * supported by this handler.
                         * @param returnType the method return type to check
                         * @return {#code true} if this handler supports the supplied return type;
                         *  {@code false} otherwise
                         */
                        // @ts-ignore
                        supportsReturnType(returnType: MethodParameter): boolean
                        /**
                         * Handle the given return value by adding attributes to the model and
                         * setting a view or setting the
                         * {@link ModelAndViewContainer#setRequestHandled} flag to {@code true}
                         * to indicate the response has been handled directly.
                         * @param returnValue the value returned from the handler method
                         * @param returnType the type of the return value. This type must have
                         *  previously been passed to {#link #supportsReturnType} which must
                         *  have returned {@code true}.
                         * @param mavContainer the ModelAndViewContainer for the current request
                         * @param webRequest the current request
                         * @throws Exception if the return value handling results in an error
                         */
                        // @ts-ignore
                        handleReturnValue(returnValue: any, returnType: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                    }
                }
            }
        }
    }
}
