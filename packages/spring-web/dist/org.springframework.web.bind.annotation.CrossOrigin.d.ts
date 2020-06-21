declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace annotation {
                    /**
                     * Annotation for permitting cross-origin requests on specific handler classes
                     * and/or handler methods. Processed if an appropriate {@code HandlerMapping}
                     * is configured.
                     * <p>Both Spring Web MVC and Spring WebFlux support this annotation through the
                     * {@code RequestMappingHandlerMapping} in their respective modules. The values
                     * from each type and method level pair of annotations are added to a
                     * {@link CorsConfiguration} and then default values are applied via
                     * {@link CorsConfiguration#applyPermitDefaultValues()}.
                     * <p>The rules for combining global and local configuration are generally
                     * additive -- e.g. all global and all local origins. For those attributes
                     * where only a single value can be accepted such as {@code allowCredentials}
                     * and {@code maxAge}, the local overrides the global value.
                     * See {@link CorsConfiguration#combine(CorsConfiguration)} for more details.
                     * @author Russell Allen
                     * @author Sebastien Deleuze
                     * @author Sam Brannen
                     * @since 4.2
                     */
                    // @ts-ignore
                    abstract class CrossOrigin implements java.lang.annotation.Annotation {
                        /**
                         * @deprecated as of Spring 5.0, in favor of {#link CorsConfiguration#applyPermitDefaultValues}
                         */
                        // @ts-ignore
                        readonly DEFAULT_ORIGINS: java.lang.String[] | string[]
                        /**
                         * @deprecated as of Spring 5.0, in favor of {#link CorsConfiguration#applyPermitDefaultValues}
                         */
                        // @ts-ignore
                        readonly DEFAULT_ALLOWED_HEADERS: java.lang.String[] | string[]
                        /**
                         * @deprecated as of Spring 5.0, in favor of {#link CorsConfiguration#applyPermitDefaultValues}
                         */
                        // @ts-ignore
                        readonly DEFAULT_ALLOW_CREDENTIALS: boolean
                        /**
                         * @deprecated as of Spring 5.0, in favor of {#link CorsConfiguration#applyPermitDefaultValues}
                         */
                        // @ts-ignore
                        readonly DEFAULT_MAX_AGE: number /*long*/
                    }
                }
            }
        }
    }
}
