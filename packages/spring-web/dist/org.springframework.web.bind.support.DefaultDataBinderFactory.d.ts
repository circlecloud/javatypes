declare namespace org {
    namespace springframework {
        namespace web {
            namespace bind {
                namespace support {
                    /**
                     * Create a {@link WebRequestDataBinder} instance and initialize it with a
                     * {@link WebBindingInitializer}.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class DefaultDataBinderFactory extends java.lang.Object implements org.springframework.web.bind.support.WebDataBinderFactory {
                        /**
                         * Create a new {@code DefaultDataBinderFactory} instance.
                         * @param initializer for global data binder initialization
                         *  (or {#code null} if none)
                         */
                        // @ts-ignore
                        constructor(initializer: org.springframework.web.bind.support.WebBindingInitializer)
                        /**
                         * Create a new {@link WebDataBinder} for the given target object and
                         * initialize it through a {@link WebBindingInitializer}.
                         * @throws Exception in case of invalid state or arguments
                         */
                        // @ts-ignore
                        createBinder(webRequest: org.springframework.web.context.request.NativeWebRequest, target: any, objectName: string): org.springframework.web.bind.WebDataBinder
                        /**
                         * Extension point to create the WebDataBinder instance.
                         * By default this is {@code WebRequestDataBinder}.
                         * @param target the binding target or {#code null} for type conversion only
                         * @param objectName the binding target object name
                         * @param webRequest the current request
                         * @throws Exception in case of invalid state or arguments
                         */
                        // @ts-ignore
                        createBinderInstance(target: any, objectName: string, webRequest: org.springframework.web.context.request.NativeWebRequest): org.springframework.web.bind.WebDataBinder
                        /**
                         * Extension point to further initialize the created data binder instance
                         * (e.g. with {@code @InitBinder} methods) after "global" initialization
                         * via {@link WebBindingInitializer}.
                         * @param dataBinder the data binder instance to customize
                         * @param webRequest the current request
                         * @throws Exception if initialization fails
                         */
                        // @ts-ignore
                        initBinder(dataBinder: org.springframework.web.bind.WebDataBinder, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                    }
                }
            }
        }
    }
}
