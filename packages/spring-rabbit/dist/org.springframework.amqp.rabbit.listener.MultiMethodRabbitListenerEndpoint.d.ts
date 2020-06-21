declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * @author Gary Russell
                     * @since 1.5
                     */
                    // @ts-ignore
                    class MultiMethodRabbitListenerEndpoint extends org.springframework.amqp.rabbit.listener.MethodRabbitListenerEndpoint {
                        /**
                         * Construct an instance for the provided methods and bean.
                         * @param methods the methods.
                         * @param bean the bean.
                         */
                        // @ts-ignore
                        constructor(methods: java.util.List<java.lang.reflect.Method> | Array<java.lang.reflect.Method>, bean: java.lang.Object | any)
                        /**
                         * Construct an instance for the provided methods, default method and bean.
                         * @param methods the methods.
                         * @param defaultMethod the default method.
                         * @param bean the bean.
                         * @since 2.0.3
                         */
                        // @ts-ignore
                        constructor(methods: java.util.List<java.lang.reflect.Method> | Array<java.lang.reflect.Method>, defaultMethod: java.lang.reflect.Method, bean: java.lang.Object | any)
                        // @ts-ignore
                        configureListenerAdapter(messageListener: org.springframework.amqp.rabbit.listener.adapter.MessagingMessageListenerAdapter): org.springframework.amqp.rabbit.listener.adapter.HandlerAdapter
                    }
                }
            }
        }
    }
}
