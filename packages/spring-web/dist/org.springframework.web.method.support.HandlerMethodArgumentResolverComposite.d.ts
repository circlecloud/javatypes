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
                        public addResolver(resolver: org.springframework.web.method.support.HandlerMethodArgumentResolver): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Add the given {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         * @since 4.3
                         */
                        // @ts-ignore
                        public addResolvers(...resolvers: org.springframework.web.method.support.HandlerMethodArgumentResolver[]): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Add the given {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}.
                         */
                        // @ts-ignore
                        public addResolvers(resolvers: java.util.List<any> | Array<any>): org.springframework.web.method.support.HandlerMethodArgumentResolverComposite
                        /**
                         * Return a read-only list with the contained resolvers, or an empty list.
                         */
                        // @ts-ignore
                        public getResolvers(): Array<org.springframework.web.method.support.HandlerMethodArgumentResolver>
                        /**
                         * Clear the list of configured resolvers.
                         * @since 4.3
                         */
                        // @ts-ignore
                        public clear(): void
                        /**
                         * Whether the given {@linkplain MethodParameter method parameter} is
                         * supported by any registered {@link HandlerMethodArgumentResolver}.
                         */
                        // @ts-ignore
                        public supportsParameter(parameter: MethodParameter): boolean
                        /**
                         * Iterate over registered
                         * {@link HandlerMethodArgumentResolver HandlerMethodArgumentResolvers}
                         * and invoke the one that supports it.
                         * @throws IllegalArgumentException if no suitable argument resolver is found
                         */
                        // @ts-ignore
                        public resolveArgument(parameter: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest, binderFactory: org.springframework.web.bind.support.WebDataBinderFactory): any
                    }
                }
            }
        }
    }
}
