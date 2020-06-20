declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace remoting {
                namespace client {
                    /**
                     * {@link org.aopalliance.intercept.MethodInterceptor} for accessing RMI-style AMQP services.
                     * @author David Bilge
                     * @author Gary Russell
                     * @since 1.2
                     * @see org.springframework.amqp.remoting.service.AmqpInvokerServiceExporter
                     * @see AmqpProxyFactoryBean
                     * @see org.springframework.remoting.RemoteAccessException
                     */
                    // @ts-ignore
                    class AmqpClientInterceptor extends RemoteAccessor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        invoke(invocation: MethodInvocation): java.lang.Object
                        // @ts-ignore
                        getAmqpTemplate(): org.springframework.amqp.core.AmqpTemplate
                        /**
                         * The AMQP template to be used for sending messages and receiving results. This class is using "Request/Reply" for
                         * sending messages as described <a href=
                         * "https://docs.spring.io/spring-amqp/reference/html/#request-reply" >in the Spring-AMQP
                         * documentation</a>.
                         * @param amqpTemplate The amqp template.
                         */
                        // @ts-ignore
                        setAmqpTemplate(amqpTemplate: org.springframework.amqp.core.AmqpTemplate): void
                        // @ts-ignore
                        getRoutingKey(): java.lang.String
                        /**
                         * The routing key to send calls to the service with. Use this to route the messages to a specific queue on the
                         * broker. If not set, the {@link AmqpTemplate}'s default routing key will be used.
                         * <p>
                         * This property is useful if you want to use the same AmqpTemplate to talk to multiple services.
                         * @param routingKey The routing key.
                         */
                        // @ts-ignore
                        setRoutingKey(routingKey: string): void
                        // @ts-ignore
                        getRemoteInvocationFactory(): RemoteInvocationFactory
                        /**
                         * Set the RemoteInvocationFactory to use for this accessor. Default is a {@link DefaultRemoteInvocationFactory}.
                         * <p>
                         * A custom invocation factory can add further context information to the invocation, for example user credentials.
                         * @param remoteInvocationFactory The remote invocation factory.
                         */
                        // @ts-ignore
                        setRemoteInvocationFactory(remoteInvocationFactory: RemoteInvocationFactory): void
                    }
                }
            }
        }
    }
}
