declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Resolves method parameters by delegating to a list of registered
                     * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                     * Previously resolved method parameters are cached for faster lookups.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 3.1
                     */
                    // @ts-ignore
                    class HandlerMethodArgumentResolverComposite extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodArgumentResolver {
                        // @ts-ignore
                        constructor()
                        /**
                         * Add the given {@link HandlerMethodArgumentResolver}.
                         */
                        // @ts-ignore
                        addResolver(resolver: org.springframework.web.method.support.HandlerMethodArgumentResolver): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Add the given {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         * @since 4.3
                         */
                        // @ts-ignore
                        addResolvers(...resolvers: org.springframework.web.method.support.HandlerMethodArgumentResolver[]): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Add the given {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         */
                        // @ts-ignore
                        addResolvers(resolvers: Array<org.springframework.web.method.support.HandlerMethodArgumentResolver>): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Return a read-only list with the contained resolvers, or an empty list.
                         */
                        // @ts-ignore
                        getResolvers(): java.util.List<org.springframework.web.method.support.HandlerMethodArgumentResolver>
                        /**
                         * Clear the list of configured resolvers.
                         * @since 4.3
                         */
                        // @ts-ignore
                        clear(): void
                        /**
                         * Whether the given {@linkplain MethodParameter method parameter} is
                         * supported by any registered {@link HandlerMethodArgumentResolver}.
                         */
                        // @ts-ignore
                        supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Iterate over registered
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}
                         * and invoke the one that supports it.
                         * @throws IllegalArgumentException if no suitable argument resolver is found
                         */
                        // @ts-ignore
                        resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): java.lang.Object
                    }
                }
            }
        }
    }
}
