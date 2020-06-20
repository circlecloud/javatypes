declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Strategy interface for resolving method parameters into argument values in
                     * the context of a given request.
                     * @author Arjen Poutsma
                     * @since 3.1
                     * @see HandlerMethodReturnValueHandler
                     */
                    // @ts-ignore
                    interface HandlerMethodArgumentResolver {
                        /**
                         * Whether the given {@linkplain MethodParameter method parameter} is
                         * supported by this resolver.
                         * @param parameter the method parameter to check
                         * @return {#code true} if this resolver supports the supplied parameter;
                         *  {@code false} otherwise
                         */
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Resolves a method parameter into an argument value from a given request.
                         * A {@link ModelAndViewContainer} provides access to the model for the
                         * request. A {@link WebDataBinderFactory} provides a way to create
                         * a {@link WebDataBinder} instance when needed for data binding and
                         * type conversion purposes.
                         * @param parameter the method parameter to resolve. This parameter must
                         *  have previously been passed to {#link #supportsParameter} which must
                         *  have returned {@code true}.
                         * @param mavContainer the ModelAndViewContainer for the current request
                         * @param webRequest the current request
                         * @param binderFactory a factory for creating {#link WebDataBinder} instances
                         * @return the resolved argument value, or {#code null} if not resolvable
                         * @throws Exception in case of errors with the preparation of argument values
                         */
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                    }
                }
            }
        }
    }
}
