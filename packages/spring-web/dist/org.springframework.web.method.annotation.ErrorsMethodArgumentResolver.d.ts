declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves {@link Errors} method arguments.
                     * <p>An {@code Errors} method argument is expected to appear immediately after
                     * the model attribute in the method signature. It is resolved by expecting the
                     * last two attributes added to the model to be the model attribute and its
                     * {@link BindingResult}.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ErrorsMethodArgumentResolver extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                    }
                }
            }
        }
    }
}
