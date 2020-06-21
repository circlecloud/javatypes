declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * Helper bean for registering {@link RabbitListenerEndpoint} with
                     * a {@link RabbitListenerEndpointRegistry}.
                     * @author Stephane Nicoll
                     * @author Juergen Hoeller
                     * @author Artem Bilan
                     * @since 1.4
                     * @see org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer
                     */
                    // @ts-ignore
                    class RabbitListenerEndpointRegistrar extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the {@link RabbitListenerEndpointRegistry} instance to use.
                         * @param endpointRegistry the {#link RabbitListenerEndpointRegistry} instance to use.
                         */
                        // @ts-ignore
                        public setEndpointRegistry(endpointRegistry: org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry): void
                        /**
                         * @return the {#link RabbitListenerEndpointRegistry} instance for this
                         *  registrar, may be {@code null}.
                         */
                        // @ts-ignore
                        public getEndpointRegistry(): org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry
                        /**
                         * Set the {@link MessageHandlerMethodFactory} to use to configure the message
                         * listener responsible to serve an endpoint detected by this processor.
                         * <p>
                         * By default,
                         * {@link org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory}
                         * is used and it can be configured further to support additional method arguments or
                         * to customize conversion and validation support. See
                         * {@link org.springframework.messaging.handler.annotation.support.DefaultMessageHandlerMethodFactory}
                         * javadoc for more details.
                         * @param rabbitHandlerMethodFactory the {#link MessageHandlerMethodFactory} instance.
                         */
                        // @ts-ignore
                        public setMessageHandlerMethodFactory(rabbitHandlerMethodFactory: MessageHandlerMethodFactory): void
                        /**
                         * @return the custom {#link MessageHandlerMethodFactory} to use, if any.
                         */
                        // @ts-ignore
                        public getMessageHandlerMethodFactory(): MessageHandlerMethodFactory
                        /**
                         * Set the {@link RabbitListenerContainerFactory} to use in case a {@link RabbitListenerEndpoint}
                         * is registered with a {@code null} container factory.
                         * <p>Alternatively, the bean name of the {@link RabbitListenerContainerFactory} to use
                         * can be specified for a lazy lookup, see {@link #setContainerFactoryBeanName}.
                         * @param containerFactory the {#link RabbitListenerContainerFactory} instance.
                         */
                        // @ts-ignore
                        public setContainerFactory(containerFactory: org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<any>): void
                        /**
                         * Set the bean name of the {@link RabbitListenerContainerFactory} to use in case
                         * a {@link RabbitListenerEndpoint} is registered with a {@code null} container factory.
                         * Alternatively, the container factory instance can be registered directly:
                         * see {@link #setContainerFactory(RabbitListenerContainerFactory)}.
                         * @param containerFactoryBeanName the {#link RabbitListenerContainerFactory} bean name.
                         * @see #setBeanFactory
                         */
                        // @ts-ignore
                        public setContainerFactoryBeanName(containerFactoryBeanName: java.lang.String | string): void
                        /**
                         * A {@link BeanFactory} only needs to be available in conjunction with
                         * {@link #setContainerFactoryBeanName}.
                         * @param beanFactory the {#link BeanFactory} instance.
                         */
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        registerAllEndpoints(): void
                        /**
                         * Register a new {@link RabbitListenerEndpoint} alongside the
                         * {@link RabbitListenerContainerFactory} to use to create the underlying container.
                         * <p>The {@code factory} may be {@code null} if the default factory has to be
                         * used for that endpoint.
                         * @param endpoint the {#link RabbitListenerEndpoint} instance to register.
                         * @param factory the {#link RabbitListenerContainerFactory} to use.
                         */
                        // @ts-ignore
                        public registerEndpoint(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint, factory: org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory<any>): void
                        /**
                         * Register a new {@link RabbitListenerEndpoint} using the default
                         * {@link RabbitListenerContainerFactory} to create the underlying container.
                         * @param endpoint the {#link RabbitListenerEndpoint} instance to register.
                         * @see #setContainerFactory(RabbitListenerContainerFactory)
                         * @see #registerEndpoint(RabbitListenerEndpoint, RabbitListenerContainerFactory)
                         */
                        // @ts-ignore
                        public registerEndpoint(endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): void
                    }
                }
            }
        }
    }
}
