declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves a {@link SessionStatus} argument by obtaining it from
                     * the {@link ModelAndViewContainer}.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class SessionStatusMethodArgumentResolver extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
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
