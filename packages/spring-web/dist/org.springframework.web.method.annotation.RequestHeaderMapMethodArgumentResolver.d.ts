declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves {@link Map} method arguments annotated with {@code @RequestHeader}.
                     * For individual header values annotated with {@code @RequestHeader} see
                     * {@link RequestHeaderMethodArgumentResolver} instead.
                     * <p>The created {@link Map} contains all request header name/value pairs.
                     * The method parameter type may be a {@link MultiValueMap} to receive all
                     * values for a header, not only the first one.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class RequestHeaderMapMethodArgumentResolver extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        public resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): any
                    }
                }
            }
        }
    }
}
