declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * Delegates to an {@link InvocableHandlerMethod} based on the message payload type.
                         * Matches a single, non-annotated parameter or one that is annotated with
                         * {@link org.springframework.messaging.handler.annotation.Payload}. Matches must be
                         * unambiguous.
                         * @author Gary Russell
                         * @author Artem Bilan
                         * @since 1.5
                         */
                        // @ts-ignore
                        class DelegatingInvocableHandler extends java.lang.Object {
                            /**
                             * Construct an instance with the supplied handlers for the bean.
                             * @param handlers the handlers.
                             * @param bean the bean.
                             * @param beanExpressionResolver the resolver.
                             * @param beanExpressionContext the context.
                             */
                            // @ts-ignore
                            constructor(handlers: java.util.List<InvocableHandlerMethod> | Array<InvocableHandlerMethod>, bean: java.lang.Object | any, beanExpressionResolver: BeanExpressionResolver, beanExpressionContext: BeanExpressionContext)
                            /**
                             * Construct an instance with the supplied handlers for the bean.
                             * @param handlers the handlers.
                             * @param defaultHandler the default handler.
                             * @param bean the bean.
                             * @param beanExpressionResolver the resolver.
                             * @param beanExpressionContext the context.
                             * @since 2.0.3
                             */
                            // @ts-ignore
                            constructor(handlers: java.util.List<InvocableHandlerMethod> | Array<InvocableHandlerMethod>, defaultHandler: InvocableHandlerMethod, bean: java.lang.Object | any, beanExpressionResolver: BeanExpressionResolver, beanExpressionContext: BeanExpressionContext)
                            /**
                             * @return the bean
                             */
                            // @ts-ignore
                            public getBean(): any
                            /**
                             * Invoke the method with the given message.
                             * @param message the message.
                             * @param providedArgs additional arguments.
                             * @return the result of the invocation.
                             * @throws Exception raised if no suitable argument resolver can be found,
                             *  or the method raised an exception.
                             */
                            // @ts-ignore
                            public invoke(message: object, ...providedArgs: java.lang.Object[] | any[]): org.springframework.amqp.rabbit.listener.adapter.InvocationResult
                            /**
                             * @param payloadClass the payload class.
                             * @return the handler.
                             */
                            // @ts-ignore
                            getHandlerForPayload(payloadClass: java.lang.Class<any>): InvocableHandlerMethod
                            // @ts-ignore
                            findHandlerForPayload(payloadClass: java.lang.Class<any>): InvocableHandlerMethod
                            // @ts-ignore
                            matchHandlerMethod(payloadClass: java.lang.Class<any>, handler: InvocableHandlerMethod): boolean
                            /**
                             * Return a string representation of the method that will be invoked for this payload.
                             * @param payload the payload.
                             * @return the method name.
                             */
                            // @ts-ignore
                            public getMethodNameFor(payload: java.lang.Object | any): string
                            /**
                             * Return the method that will be invoked for this payload.
                             * @param payload the payload.
                             * @return the method.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getMethodFor(payload: java.lang.Object | any): java.lang.reflect.Method
                            // @ts-ignore
                            public hasDefaultHandler(): boolean
                            // @ts-ignore
                            public getInvocationResultFor(result: java.lang.Object | any, inboundPayload: java.lang.Object | any): org.springframework.amqp.rabbit.listener.adapter.InvocationResult
                        }
                    }
                }
            }
        }
    }
}
