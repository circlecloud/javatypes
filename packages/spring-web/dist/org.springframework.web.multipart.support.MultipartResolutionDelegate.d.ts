declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * A common delegate for {@code HandlerMethodArgumentResolver} implementations
                     * which need to resolve {@link MultipartFile} and {@link Part} arguments.
                     * @author Juergen Hoeller
                     * @since 4.3
                     */
                    // @ts-ignore
                    class MultipartResolutionDelegate extends java.lang.Object {
                        /**
                         * Indicates an unresolvable value.
                         */
                        // @ts-ignore
                        readonly UNRESOLVABLE: any
                        // @ts-ignore
                        resolveMultipartRequest(webRequest: org.springframework.web.context.request.NativeWebRequest): org.springframework.web.multipart.MultipartRequest
                        // @ts-ignore
                        isMultipartRequest(request: HttpServletRequest): boolean
                        // @ts-ignore
                        isMultipartArgument(parameter: MethodParameter): boolean
                        // @ts-ignore
                        resolveMultipartArgument(name: string, parameter: MethodParameter, request: HttpServletRequest): java.lang.Object
                    }
                }
            }
        }
    }
}
