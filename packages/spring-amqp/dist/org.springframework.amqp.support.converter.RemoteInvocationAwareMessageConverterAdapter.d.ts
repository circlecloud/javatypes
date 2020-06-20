declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    /**
                     * A delegating adapter that unwraps {@link RemoteInvocationResult} after invoking
                     * the delegate to convert from a message.
                     * Delegates to a {@link SimpleMessageConverter} by default.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class RemoteInvocationAwareMessageConverterAdapter extends java.lang.Object implements org.springframework.amqp.support.converter.MessageConverter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(delegate: org.springframework.amqp.support.converter.MessageConverter)
                        // @ts-ignore
                        setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        toMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties): org.springframework.amqp.core.Message
                        // @ts-ignore
                        fromMessage(message: org.springframework.amqp.core.Message): java.lang.Object
                    }
                }
            }
        }
    }
}
