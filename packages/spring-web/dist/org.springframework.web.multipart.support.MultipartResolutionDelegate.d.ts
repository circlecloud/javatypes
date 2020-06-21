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
                        public static readonly UNRESOLVABLE: java.lang.Object | any
                        // @ts-ignore
                        public static resolveMultipartRequest(webRequest: org.springframework.web.context.request.NativeWebRequest): org.springframework.web.multipart.MultipartRequest
                        // @ts-ignore
                        public static isMultipartRequest(request: HttpServletRequest): boolean
                        // @ts-ignore
                        public static isMultipartArgument(parameter: MethodParameter): boolean
                        // @ts-ignore
                        public static resolveMultipartArgument(name: java.lang.String | string, parameter: MethodParameter, request: HttpServletRequest): any
                    }
                }
            }
        }
    }
}
