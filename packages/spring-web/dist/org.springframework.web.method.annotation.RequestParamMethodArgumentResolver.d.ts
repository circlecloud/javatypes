declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Resolves method arguments annotated with @{@link RequestParam}, arguments of
                     * type {@link MultipartFile} in conjunction with Spring's {@link MultipartResolver}
                     * abstraction, and arguments of type {@code javax.servlet.http.Part} in conjunction
                     * with Servlet 3.0 multipart requests. This resolver can also be created in default
                     * resolution mode in which simple types (int, long, etc.) not annotated with
                     * {@link RequestParam @RequestParam} are also treated as request parameters with
                     * the parameter name derived from the argument name.
                     * <p>If the method parameter type is {@link Map}, the name specified in the
                     * annotation is used to resolve the request parameter String value. The value is
                     * then converted to a {@link Map} via type conversion assuming a suitable
                     * {@link Converter} or {@link PropertyEditor} has been registered.
                     * Or if a request parameter name is not specified the
                     * {@link RequestParamMapMethodArgumentResolver} is used instead to provide
                     * access to all request parameters in the form of a map.
                     * <p>A {@link WebDataBinder} is invoked to apply type conversion to resolved request
                     * header values that don't yet match the method parameter type.
                     * @author Arjen Poutsma
                     * @author Rossen Stoyanchev
                     * @author Brian Clozel
                     * @since 3.1
                     * @see RequestParamMapMethodArgumentResolver
                     */
                    // @ts-ignore
                    class RequestParamMethodArgumentResolver extends org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver implements org.springframework.web.method.support.UriComponentsContributor {
                        /**
                         * Create a new {@link RequestParamMethodArgumentResolver} instance.
                         * @param useDefaultResolution in default resolution mode a method argument
                         *  that is a simple type, as defined in {#link BeanUtils#isSimpleProperty},
                         *  is treated as a request parameter even if it isn't annotated, the
                         *  request parameter name is derived from the method parameter name.
                         */
                        // @ts-ignore
                        constructor(useDefaultResolution: boolean)
                        /**
                         * Create a new {@link RequestParamMethodArgumentResolver} instance.
                         * @param beanFactory a bean factory used for resolving  ${...} placeholder
                         *  and #{...} SpEL expressions in default values, or {#code null} if default
                         *  values are not expected to contain expressions
                         * @param useDefaultResolution in default resolution mode a method argument
                         *  that is a simple type, as defined in {#link BeanUtils#isSimpleProperty},
                         *  is treated as a request parameter even if it isn't annotated, the
                         *  request parameter name is derived from the method parameter name.
                         */
                        // @ts-ignore
                        constructor(beanFactory: ConfigurableBeanFactory, useDefaultResolution: boolean)
                        /**
                         * Supports the following:
                         * <ul>
                         * <li>@RequestParam-annotated method arguments.
                         * This excludes {@link Map} params where the annotation does not specify a name.
                         * See {@link RequestParamMapMethodArgumentResolver} instead for such params.
                         * <li>Arguments of type {@link MultipartFile} unless annotated with @{@link RequestPart}.
                         * <li>Arguments of type {@code Part} unless annotated with @{@link RequestPart}.
                         * <li>In default resolution mode, simple type arguments even if not with @{@link RequestParam}.
                         * </ul>
                         */
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        createNamedValueInfo(parameter: MethodParameter): org.springframework.web.method.annotation.AbstractNamedValueMethodArgumentResolver.NamedValueInfo
                        // @ts-ignore
                        resolveName(name: string, parameter: MethodParameter, request: org.springframework.web.context.request.NativeWebRequest): java.lang.Object
                        // @ts-ignore
                        handleMissingValue(name: string, parameter: MethodParameter, request: org.springframework.web.context.request.NativeWebRequest): void
                        // @ts-ignore
                        contributeMethodArgument(parameter: MethodParameter, value: any, builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.util.Map<java.lang.String, java.lang.Object>, conversionService: ConversionService): void
                        // @ts-ignore
                        formatUriValue(cs: ConversionService, sourceType: TypeDescriptor, value: any): java.lang.String
                    }
                }
            }
        }
    }
}
