declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves method arguments annotated with {@code @Value}.
                     * <p>An {@code @Value} does not have a name but gets resolved from the default
                     * value string, which may contain ${...} placeholder or Spring Expression
                     * Language #{...} expressions.
                     * <p>A {@link WebDataBinder} may be invoked to apply type conversion to
                     * resolved argument value.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class ExpressionValueMethodArgumentResolver extends org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver {
                        /**
                         * Create a new {@link ExpressionValueMethodArgumentResolver} instance.
                         * @param beanFactory a bean factory to use for resolving  ${...}
                         *  placeholder and #{...} SpEL expressions in default values;
                         *  or {#code null} if default values are not expected to contain expressions
                         */
                        // @ts-ignore
                        constructor(beanFactory: ConfigurableBeanFactory)
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        createNamedValueInfo(parameter: MethodParameter): org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver.NamedValueInfo
                        // @ts-ignore
                        resolveName(name: string, parameter: MethodParameter, webRequest: org.springframework.web.context.request.NativeWebRequest): java.lang.Object
                        // @ts-ignore
                        handleMissingValue(name: string, parameter: MethodParameter): void
                    }
                }
            }
        }
    }
}
