declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace annotation {
                    /**
                     * Bean post-processor that registers methods annotated with {@link RabbitListener}
                     * to be invoked by a AMQP message listener container created under the cover
                     * by a {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory}
                     * according to the parameters of the annotation.
                     * <p>Annotated methods can use flexible arguments as defined by {@link RabbitListener}.
                     * <p>This post-processor is automatically registered by Spring's
                     * {@code <rabbit:annotation-driven>} XML element, and also by the {@link EnableRabbit}
                     * annotation.
                     * <p>Auto-detect any {@link RabbitListenerConfigurer} instances in the container,
                     * allowing for customization of the registry to be used, the default container
                     * factory or for fine-grained control over endpoints registration. See
                     * {@link EnableRabbit} Javadoc for complete usage details.
                     * @author Stephane Nicoll
                     * @author Juergen Hoeller
                     * @author Gary Russell
                     * @author Alex Panchenko
                     * @author Artem Bilan
                     * @since 1.4
                     * @see RabbitListener
                     * @see EnableRabbit
                     * @see RabbitListenerConfigurer
                     * @see RabbitListenerEndpointRegistrar
                     * @see RabbitListenerEndpointRegistry
                     * @see org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint
                     * @see MethodRabbitListenerEndpoint
                     */
                    // @ts-ignore
                    class RabbitListenerAnnotationBeanPostProcessor extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * The bean name of the default {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory}.
                         */
                        // @ts-ignore
                        public static readonly DEFAULT_RABBIT_LISTENER_CONTAINER_FACTORY_BEAN_NAME: java.lang.String | string
                        // @ts-ignore
                        public static readonly RABBIT_EMPTY_STRING_ARGUMENTS_PROPERTY: java.lang.String | string
                        // @ts-ignore
                        public getOrder(): number /*int*/
                        /**
                         * Set the {@link RabbitListenerEndpointRegistry} that will hold the created
                         * endpoint and manage the lifecycle of the related listener container.
                         * @param endpointRegistry the {#link RabbitListenerEndpointRegistry} to set.
                         */
                        // @ts-ignore
                        public setEndpointRegistry(endpointRegistry: org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistry): void
                        /**
                         * Set the name of the {@link RabbitListenerContainerFactory} to use by default.
                         * <p>If none is specified, "rabbitListenerContainerFactory" is assumed to be defined.
                         * @param containerFactoryBeanName the {#link RabbitListenerContainerFactory} bean name.
                         */
                        // @ts-ignore
                        public setContainerFactoryBeanName(containerFactoryBeanName: java.lang.String | string): void
                        /**
                         * Set the {@link MessageHandlerMethodFactory} to use to configure the message
                         * listener responsible to serve an endpoint detected by this processor.
                         * <p>By default, {@link DefaultMessageHandlerMethodFactory} is used and it
                         * can be configured further to support additional method arguments
                         * or to customize conversion and validation support. See
                         * {@link DefaultMessageHandlerMethodFactory} Javadoc for more details.
                         * @param messageHandlerMethodFactory the {#link MessageHandlerMethodFactory} instance.
                         */
                        // @ts-ignore
                        public setMessageHandlerMethodFactory(messageHandlerMethodFactory: MessageHandlerMethodFactory): void
                        /**
                         * Making a {@link BeanFactory} available is optional; if not set,
                         * {@link RabbitListenerConfigurer} beans won't get autodetected and an
                         * {@link #setEndpointRegistry endpoint registry} has to be explicitly configured.
                         * @param beanFactory the {#link BeanFactory} to be used.
                         */
                        // @ts-ignore
                        public setBeanFactory(beanFactory: BeanFactory): void
                        // @ts-ignore
                        public setBeanClassLoader(classLoader: java.lang.ClassLoader): void
                        // @ts-ignore
                        public setEnvironment(environment: Environment): void
                        // @ts-ignore
                        public afterSingletonsInstantiated(): void
                        // @ts-ignore
                        public postProcessBeforeInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                        // @ts-ignore
                        public postProcessAfterInitialization(bean: java.lang.Object | any, beanName: java.lang.String | string): any
                        // @ts-ignore
                        processAmqpListener(rabbitListener: org.springframework.amqp.rabbit.annotation.RabbitListener, method: java.lang.reflect.Method, bean: java.lang.Object | any, beanName: java.lang.String | string): void
                        // @ts-ignore
                        processListener(endpoint: org.springframework.amqp.rabbit.listener.MethodRabbitListenerEndpoint, rabbitListener: org.springframework.amqp.rabbit.annotation.RabbitListener, bean: java.lang.Object | any, adminTarget: java.lang.Object | any, beanName: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
