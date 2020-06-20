declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves {@link Model} arguments and handles {@link Model} return values.
                     * <p>A {@link Model} return type has a set purpose. Therefore this handler
                     * should be configured ahead of handlers that support any return value type
                     * annotated with {@code @ModelAttribute} or {@code @ResponseBody} to ensure
                     * they don't take over.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ModelMethodProcessor extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver, org.springframework.web.method.support.HandlerMethodReturnValueHandler {
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
