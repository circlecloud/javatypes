declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * Handles method return values by delegating to a list of registered {@link HandlerMethodReturnValueHandler HandlerMethodReturnValueHandlers}.
                     * Previously resolved return types are cached for faster lookups.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class HandlerMethodReturnValueHandlerComposite extends java.lang.Object implements org.springframework.web.method.support.HandlerMethodReturnValueHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Return a read-only list with the registered handlers, or an empty list.
                         */
                        // @ts-ignore
                        public getHandlers(): Array<org.springframework.web.method.support.HandlerMethodReturnValueHandler>
                        /**
                         * Whether the given {@linkplain MethodParameter method return type} is supported by any registered
                         * {@link HandlerMethodReturnValueHandler}.
                         */
                        // @ts-ignore
                        public supportsReturnType(returnType: MethodParameter): boolean
                        /**
                         * Iterate over registered {@link HandlerMethodReturnValueHandler HandlerMethodReturnValueHandlers} and invoke the one that supports it.
                         * @throws IllegalStateException if no suitable {#link HandlerMethodReturnValueHandler} is found.
                         */
                        // @ts-ignore
                        public handleReturnValue(returnValue: java.lang.Object | any, returnType: MethodParameter, mavContainer: org.springframework.web.method.support.ModelAndViewContainer, webRequest: org.springframework.web.context.request.NativeWebRequest): void
                        /**
                         * Add the given {@link HandlerMethodReturnValueHandler}.
                         */
                        // @ts-ignore
                        public addHandler(handler: org.springframework.web.method.support.HandlerMethodReturnValueHandler): org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite
                        /**
                         * Add the given {@link HandlerMethodReturnValueHandler HandlerMethodReturnValueHandlers}.
                         */
                        // @ts-ignore
                        public addHandlers(handlers: java.util.List<any> | Array<any>): org.springframework.web.method.support.HandlerMethodReturnValueHandlerComposite
                    }
                }
            }
        }
    }
}
