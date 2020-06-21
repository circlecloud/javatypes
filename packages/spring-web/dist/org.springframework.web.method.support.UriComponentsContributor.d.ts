declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Strategy for contributing to the building of a {@link UriComponents} by
                     * looking at a method parameter and an argument value and deciding what
                     * part of the target URL should be updated.
                     * @author Oliver Gierke
                     * @author Rossen Stoyanchev
                     * @since 4.0
                     */
                    // @ts-ignore
                    interface UriComponentsContributor {
                        /**
                         * Whether this contributor supports the given method parameter.
                         */
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Process the given method argument and either update the
                         * {@link UriComponentsBuilder} or add to the map with URI variables
                         * to use to expand the URI after all arguments are processed.
                         * @param parameter the controller method parameter (never {#code null})
                         * @param value the argument value (possibly {#code null})
                         * @param builder the builder to update (never {#code null})
                         * @param uriVariables a map to add URI variables to (never {#code null})
                         * @param conversionService a ConversionService to format values as Strings
                         */
                        // @ts-ignore
                        contributeMethodArgument(parameter: MethodParameter, value: java.lang.Object | any, builder: org.springframework.web.util.UriComponentsBuilder, uriVariables: java.util.Map<java.lang.String | string, java.lang.Object | any>, conversionService: ConversionService): void
                    }
                }
            }
        }
    }
}
