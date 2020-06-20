declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * An abstract base class adapting a {@link WebArgumentResolver} to the
                     * {@link HandlerMethodArgumentResolver} contract.
                     * <p><strong>Note:</strong> This class is provided for backwards compatibility.
                     * However it is recommended to re-write a {@code WebArgumentResolver} as
                     * {@code HandlerMethodArgumentResolver}. Since {@link #supportsParameter}
                     * can only be implemented by actually resolving the value and then checking
                     * the result is not {@code WebArgumentResolver#UNRESOLVED} any exceptions
                     * raised must be absorbed and ignored since it's not clear whether the adapter
                     * doesn't support the parameter or whether it failed for an internal reason.
                     * The {@code HandlerMethodArgumentResolver} contract also provides access to
                     * model attributes and to {@code WebDataBinderFactory} (for type conversion).
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class AbstractWebArgumentResolverAdapter extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
                        /**
                         * Create a new instance.
                         */
                        // @ts-ignore
                        constructor(adaptee: org.springframework.web.bind.support.WebArgumentResolver)
                        /**
                         * Actually resolve the value and check the resolved value is not
                         * {@link WebArgumentResolver#UNRESOLVED} absorbing _any_ exceptions.
                         */
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Delegate to the {@link WebArgumentResolver} instance.
                         * @throws IllegalStateException if the resolved value is not assignable
                         *  to the method parameter.
                         */
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                        /**
                         * Required for access to NativeWebRequest in {@link #supportsParameter}.
                         */
                        // @ts-ignore
                        abstract getWebRequest(): org.springframework.web.context.request.NativeWebRequest
                    }
                }
            }
        }
    }
}
