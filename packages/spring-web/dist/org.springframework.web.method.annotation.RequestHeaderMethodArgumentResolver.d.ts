declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves method arguments annotated with {@code @RequestHeader} except for
                     * {@link Map} arguments. See {@link RequestHeaderMapMethodArgumentResolver} for
                     * details on {@link Map} arguments annotated with {@code @RequestHeader}.
                     * <p>An {@code @RequestHeader} is a named value resolved from a request header.
                     * It has a required flag and a default value to fall back on when the request
                     * header does not exist.
                     * <p>A {@link WebDataBinder} is invoked to apply type conversion to resolved
                     * request header values that don't yet match the method parameter type.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class RequestHeaderMethodArgumentResolver extends org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver {
                        /**
                         * Create a new {@link RequestHeaderMethodArgumentResolver} instance.
                         * @param beanFactory a bean factory to use for resolving  ${...}
                         *  placeholder and #{...} SpEL expressions in default values;
                         *  or {#code null} if default values are not expected to have expressions
                         */
                        // @ts-ignore
                        constructor(beanFactory: ConfigurableBeanFactory)
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        createNamedValueInfo(parameter: MethodParameter): org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver.NamedValueInfo
                        // @ts-ignore
                        resolveName(name: string, parameter: MethodParameter, request: org.springframework.web.context.request.NativeWebRequest): java.lang.Object
                        // @ts-ignore
                        handleMissingValue(name: string, parameter: MethodParameter): void
                    }
                }
            }
        }
    }
}
