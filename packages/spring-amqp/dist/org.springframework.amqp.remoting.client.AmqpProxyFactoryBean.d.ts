declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace remoting {
                namespace client {
                    /**
                     * {@link FactoryBean} for AMQP proxies. Exposes the proxied service for use as a bean reference, using the specified
                     * service interface. Proxies will throw Spring's unchecked RemoteAccessException on remote invocation failure.
                     * <p>
                     * This is intended for an "RMI-style" (i.e. synchroneous) usage of the AMQP protocol. Obviously, AMQP allows for a much
                     * broader scope of execution styles, which are not the scope of the mechanism at hand.
                     * <p>
                     * Calling a method on the proxy will cause an AMQP message being sent according to the configured
                     * {@link org.springframework.amqp.core.AmqpTemplate}.
                     * This can be received and answered by an {@link org.springframework.amqp.remoting.service.AmqpInvokerServiceExporter}.
                     * @author David Bilge
                     * @author Gary Russell
                     * @since 1.2
                     * @see #setServiceInterface
                     * @see AmqpClientInterceptor
                     * @see org.springframework.remoting.rmi.RmiServiceExporter
                     * @see org.springframework.remoting.RemoteAccessException
                     */
                    // @ts-ignore
                    class AmqpProxyFactoryBean extends org.springframework.amqp.remoting.client.AmqpClientInterceptor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): any
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
