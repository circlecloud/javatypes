declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves {@link Map} method arguments and handles {@link Map} return values.
                     * <p>A Map return value can be interpreted in more than one ways depending
                     * on the presence of annotations like {@code @ModelAttribute} or
                     * {@code @ResponseBody}. As of 5.2 this resolver returns false if the
                     * parameter is annotated.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class MapMethodProcessor extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver, org.springframework.web.method.support.HandlerMethodReturnValueHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                        // @ts-ignore
                        supportsReturnType(returnType: MethodParameter): boolean
                        // @ts-ignore
                        handleReturnValue(returnValue: any, returnType: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                    }
                }
            }
        }
    }
}
