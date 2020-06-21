declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * A wrapper for either an {@link InvocableHandlerMethod} or
                         * {@link DelegatingInvocableHandler}. All methods delegate to the
                         * underlying handler.
                         * @author Gary Russell
                         * @since 1.5
                         */
                        // @ts-ignore
                        class HandlerAdapter extends java.lang.Object {
                            // @ts-ignore
                            constructor(invokerHandlerMethod: InvocableHandlerMethod)
                            // @ts-ignore
                            public invoke(message: object, ...providedArgs: java.lang.Object[] | any[]): org.springframework.amqp.rabbit.listener.adapter.InvocationResult
                            // @ts-ignore
                            public getMethodAsString(payload: java.lang.Object | any): string
                            /**
                             * Return the return type for the method that will be chosen for this payload.
                             * @param payload the payload.
                             * @return the return type, or null if no handler found.
                             * @since 2.0
                             */
                            // @ts-ignore
                            public getReturnType(payload: java.lang.Object | any): any
                            // @ts-ignore
                            public getBean(): any
                            // @ts-ignore
                            public getInvocationResultFor(result: java.lang.Object | any, inboundPayload: java.lang.Object | any): org.springframework.amqp.rabbit.listener.adapter.InvocationResult
                        }
                    }
                }
            }
        }
    }
}
