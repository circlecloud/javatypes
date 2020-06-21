declare namespace org {
    namespace springframework {
        namespace web {
            namespace method {
                namespace annotation {
                    /**
                     * Adds initialization to a WebDataBinder via {@code @InitBinder} methods.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class InitBinderDataBinderFactory extends org.springframework.web.bind.support.DefaultDataBinderFactory {
                        /**
                         * Create a new InitBinderDataBinderFactory instance.
                         * @param binderMethods {#code @InitBinder} methods
                         * @param initializer for global data binder initialization
                         */
                        // @ts-ignore
                        constructor(binderMethods: java.util.List<org.springframework.web.method.support.InvocableHandlerMethod> | Array<org.springframework.web.method.support.InvocableHandlerMethod>, initializer: org.springframework.web.bind.support.WebBindingInitializer)
                        /**
                         * Initialize a WebDataBinder with {@code @InitBinder} methods.
                         * <p>If the {@code @InitBinder} annotation specifies attributes names,
                         * it is invoked only if the names include the target object name.
                         * @throws Exception if one of the invoked #{@link InitBinder} methods fails
                         * @see #isBinderMethodApplicable
                         */
                        // @ts-ignore
                        public initBinder(dataBinder: org.springframework.web.bind.WebDataBinder, request: org.springframework.web.context.request.NativeWebRequest): void
                        /**
                         * Determine whether the given {@code @InitBinder} method should be used
                         * to initialize the given {@link WebDataBinder} instance. By default we
                         * check the specified attribute names in the annotation value, if any.
                         */
                        // @ts-ignore
                        isBinderMethodApplicable(initBinderMethod: org.springframework.web.method.HandlerMethod, dataBinder: org.springframework.web.bind.WebDataBinder): boolean
                    }
                }
            }
        }
    }
}
