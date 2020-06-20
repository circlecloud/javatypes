declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves {@link Map} method arguments annotated with an @{@link RequestParam}
                     * where the annotation does not specify a request parameter name.
                     * <p>The created {@link Map} contains all request parameter name/value pairs,
                     * or all multipart files for a given parameter name if specifically declared
                     * with {@link MultipartFile} as the value type. If the method parameter type is
                     * {@link MultiValueMap} instead, the created map contains all request parameters
                     * and all their values for cases where request parameters have multiple values
                     * (or multiple multipart files of the same name).
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     * @see RequestParamMethodArgumentResolver
                     * @see HttpServletRequest#getParameterMap()
                     * @see MultipartRequest#getMultiFileMap()
                     * @see MultipartRequest#getFileMap()
                     */
                    // @ts-ignore
                    class RequestParamMapMethodArgumentResolver extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
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
