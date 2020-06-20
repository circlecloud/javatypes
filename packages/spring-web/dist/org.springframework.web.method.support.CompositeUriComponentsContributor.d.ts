declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * A {@link UriComponentsContributor} containing a list of other contributors
                     * to delegate and also encapsulating a specific {@link ConversionService} to
                     * use for formatting method argument values to Strings.
                     * @author Rossen Stoyanchev
                     * @since 4.0
                     */
                    // @ts-ignore
                    class CompositeUriComponentsContributor extends java.lang.Object implements org.springframework.web.method.support.UriComponentsContributor {
                        /**
                         * Create an instance from a collection of {@link UriComponentsContributor UriComponentsContributors} or
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}. Since both of these tend to be implemented
                         * by the same class, the most convenient option is to obtain the configured
                         * {@code HandlerMethodArgumentResolvers} in {@code RequestMappingHandlerAdapter}
                         * and provide that to this constructor.
                         * @param contributors a collection of {#link UriComponentsContributor}
                         *  or {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         */
                        // @ts-ignore
                        constructor(...contributors: org.springframework.web.method.support.UriComponentsContributor[])
                        /**
                         * Create an instance from a collection of {@link UriComponentsContributor UriComponentsContributors} or
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}. Since both of these tend to be implemented
                         * by the same class, the most convenient option is to obtain the configured
                         * {@code HandlerMethodArgumentResolvers} in {@code RequestMappingHandlerAdapter}
                         * and provide that to this constructor.
                         * @param contributors a collection of {#link UriComponentsContributor}
                         *  or {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         */
                        // @ts-ignore
                        constructor(contributors: Array<any>)
                        /**
                         * Create an instance from a collection of {@link UriComponentsContributor UriComponentsContributors} or
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}. Since both of these tend to be implemented
                         * by the same class, the most convenient option is to obtain the configured
                         * {@code HandlerMethodArgumentResolvers} in the {@code RequestMappingHandlerAdapter}
                         * and provide that to this constructor.
                         * <p>If the {@link ConversionService} argument is {@code null},
                         * {@link org.springframework.format.support.DefaultFormattingConversionService}
                         * will be used by default.
                         * @param contributors a collection of {#link UriComponentsContributor}
                         *  or {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         * @param cs a ConversionService to use when method argument values
                         *  need to be formatted as Strings before being added to the URI
                         */
                        // @ts-ignore
                        constructor(contributors: Array<any>, cs: ConversionService)
                        // @ts-ignore
                        hasContributors(): boolean
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        // @ts-ignore
                        contributeMethodArgument(parameter: MethodParameter, value: any, builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.util.Map<java.lang.String, java.lang.Object>, conversionService: ConversionService): void
                        /**
                         * An overloaded method that uses the ConversionService created at construction.
                         */
                        // @ts-ignore
                        contributeMethodArgument(parameter: MethodParameter, value: any, builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.util.Map<java.lang.String, java.lang.Object>): void
                    }
                }
            }
        }
    }
}
