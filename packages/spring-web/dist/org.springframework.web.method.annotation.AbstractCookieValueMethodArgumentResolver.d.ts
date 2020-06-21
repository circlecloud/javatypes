declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * A base abstract class to resolve method arguments annotated with
                     * {@code @CookieValue}. Subclasses extract the cookie value from the request.
                     * <p>An {@code @CookieValue} is a named value that is resolved from a cookie.
                     * It has a required flag and a default value to fall back on when the cookie
                     * does not exist.
                     * <p>A {@link WebDataBinder} may be invoked to apply type conversion to the
                     * resolved cookie value.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    abstract class AbstractCookieValueMethodArgumentResolver extends org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver {
                        /**
                         * Crate a new {@link AbstractCookieValueMethodArgumentResolver} instance.
                         * @param beanFactory a bean factory to use for resolving  ${...}
                         *  placeholder and #{...} SpEL expressions in default values;
                         *  or {#code null} if default values are not expected to contain expressions
                         */
                        // @ts-ignore
                        constructor(beanFactory: ConfigurableBeanFactory)
                        // @ts-ignore
                        public supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        createNamedValueInfo(parameter: MethodParameter): org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver.NamedValueInfo
                        // @ts-ignore
                        handleMissingValue(name: java.lang.String | string, parameter: MethodParameter): void
                    }
                }
            }
        }
    }
}
