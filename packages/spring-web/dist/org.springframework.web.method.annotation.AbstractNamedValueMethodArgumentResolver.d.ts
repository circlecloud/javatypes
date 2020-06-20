declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Abstract base class for resolving method arguments from a named value.
                     * Request parameters, request headers, and path variables are examples of named
                     * values. Each may have a name, a required flag, and a default value.
                     * <p>Subclasses define how to do the following:
                     * <ul>
                     * <li>Obtain named value information for a method parameter
                     * <li>Resolve names into argument values
                     * <li>Handle missing argument values when argument values are required
                     * <li>Optionally handle a resolved value
                     * </ul>
                     * <p>A default value string can contain ${...} placeholders and Spring Expression
                     * Language #{...} expressions. For this to work a
                     * {@link ConfigurableBeanFactory} must be supplied to the class constructor.
                     * <p>A {@link WebDataBinder} is created to apply type conversion to the resolved
                     * argument value if it doesn't match the method parameter type.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class AbstractNamedValueMethodArgumentResolver extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new {@link AbstractNamedValueMethodArgumentResolver} instance.
                         * @param beanFactory a bean factory to use for resolving ${...} placeholder
                         *  and #{...} SpEL expressions in default values, or {#code null} if default
                         *  values are not expected to contain expressions
                         */
                        // @ts-ignore
                        constructor(beanFactory: ConfigurableBeanFactory)
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                        /**
                         * Create the {@link NamedValueInfo} object for the given method parameter. Implementations typically
                         * retrieve the method annotation by means of {@link MethodParameter#getParameterAnnotation(Class)}.
                         * @param parameter the method parameter
                         * @return the named value information
                         */
                        // @ts-ignore
                        abstract createNamedValueInfo(parameter: MethodParameter): org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver.NamedValueInfo
                        /**
                         * Resolve the given parameter type and value name into an argument value.
                         * @param name the name of the value being resolved
                         * @param parameter the method parameter to resolve to an argument value
                         *  (pre-nested in case of a {#link java.util.Optional} declaration)
                         * @param request the current request
                         * @return the resolved argument (may be {#code null})
                         * @throws Exception in case of errors
                         */
                        // @ts-ignore
                        abstract resolveName(name: string, parameter: MethodParameter, request: org.springframework.web.context.request.NativeWebRequest): java.lang.Object
                        /**
                         * Invoked when a named value is required, but {@link #resolveName(String, MethodParameter, NativeWebRequest)}
                         * returned {@code null} and there is no default value. Subclasses typically throw an exception in this case.
                         * @param name the name for the value
                         * @param parameter the method parameter
                         * @param request the current request
                         * @since 4.3
                         */
                        // @ts-ignore
                        handleMissingValue(name: string, parameter: MethodParameter, request: org.springframework.web.context.request.NativeWebRequest): void
                        /**
                         * Invoked when a named value is required, but {@link #resolveName(String, MethodParameter, NativeWebRequest)}
                         * returned {@code null} and there is no default value. Subclasses typically throw an exception in this case.
                         * @param name the name for the value
                         * @param parameter the method parameter
                         */
                        // @ts-ignore
                        handleMissingValue(name: string, parameter: MethodParameter): void
                        /**
                         * Invoked after a value is resolved.
                         * @param arg the resolved argument value
                         * @param name the argument name
                         * @param parameter the argument parameter type
                         * @param mavContainer the {#link ModelAndViewContainer} (may be {@code null})
                         * @param webRequest the current request
                         */
                        // @ts-ignore
                        handleResolvedValue(arg: any, name: string, parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                    }
                }
            }
        }
    }
}
