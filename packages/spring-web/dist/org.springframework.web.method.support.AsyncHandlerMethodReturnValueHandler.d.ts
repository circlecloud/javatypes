declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace support {
                    /**
                     * A return value handler that supports async types. Such return value types
                     * need to be handled with priority so the async value can be "unwrapped".
                     * <p><strong>Note: </strong> implementing this contract is not required but it
                     * should be implemented when the handler needs to be prioritized ahead of others.
                     * For example custom (async) handlers, by default ordered after built-in
                     * handlers, should take precedence over {@code @ResponseBody} or
                     * {@code @ModelAttribute} handling, which should occur once the async value is
                     * ready. By contrast, built-in (async) handlers are already ordered ahead of
                     * sync handlers.
                     * @author Rossen Stoyanchev
                     * @since 4.2
                     */
                    // @ts-ignore
                    interface AsyncHandlerMethodReturnValueHandler extends org.springframework.web.method.support.HandlerMethodReturnValueHandler {
                        /**
                         * Whether the given return value represents asynchronous computation.
                         * @param returnValue the value returned from the handler method
                         * @param returnType the return type
                         * @return {#code true} if the return value type represents an async value
                         */
                        // @ts-ignore
                        isAsyncReturnValue(returnValue: java.lang.Object | any, returnType: MethodParameter): boolean
                    }
                }
            }
        }
    }
}
