declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * An implementation of {@link RabbitMessageOperations}.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @since 1.4
                     */
                    // @ts-ignore
                    class RabbitMessagingTemplate extends java.lang.Object implements org.springframework.amqp.rabbit.core.RabbitMessageOperations {
                        /**
                         * Constructor for use with bean properties.
                         * Requires {@link #setRabbitTemplate} to be called.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create an instance with the {@link RabbitTemplate} to use.
                         * @param rabbitTemplate the template.
                         */
                        // @ts-ignore
                        constructor(rabbitTemplate: org.springframework.amqp.rabbit.core.RabbitTemplate)
                        /**
                         * Set the {@link RabbitTemplate} to use.
                         * @param rabbitTemplate the template.
                         */
                        // @ts-ignore
                        public setRabbitTemplate(rabbitTemplate: org.springframework.amqp.rabbit.core.RabbitTemplate): void
                        /**
                         * @return the configured {#link RabbitTemplate}.
                         */
                        // @ts-ignore
                        public getRabbitTemplate(): org.springframework.amqp.rabbit.core.RabbitTemplate
                        /**
                         * Set the {@link MessageConverter} to use to convert a {@link Message} from
                         * the messaging to and from a {@link org.springframework.amqp.core.Message}.
                         * By default, a {@link MessagingMessageConverter} is defined using the provided
                         * {@link RabbitTemplate}'s message converter (a
                         * {@link org.springframework.amqp.support.converter.SimpleMessageConverter}
                         * by default) to convert the payload of the message.
                         * <p>Consider configuring a {@link MessagingMessageConverter} with a different
                         * {@link MessagingMessageConverter#setPayloadConverter(MessageConverter) payload converter}
                         * for more advanced scenarios.
                         * @param amqpMessageConverter the message converter.
                         * @see MessagingMessageConverter
                         */
                        // @ts-ignore
                        public setAmqpMessageConverter(amqpMessageConverter: MessageConverter): void
                        /**
                         * @return the {#link MessageConverter} to use to convert a {@link org.springframework.messaging.Message}
                         *  from the messaging to and from a {@link org.springframework.amqp.core.Message}.
                         */
                        // @ts-ignore
                        public getAmqpMessageConverter(): MessageConverter
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: object): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, postProcessor: MessagePostProcessor): void
                        // @ts-ignore
                        public convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, postProcessor: MessagePostProcessor): void
                        // @ts-ignore
                        public sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, requestMessage: object): object
                        // @ts-ignore
                        public convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, targetClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, targetClass: java.lang.Class<T>): T
                        // @ts-ignore
                        public convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, targetClass: java.lang.Class<T>, requestPostProcessor: MessagePostProcessor): T
                        // @ts-ignore
                        public convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, targetClass: java.lang.Class<T>, requestPostProcessor: MessagePostProcessor): T
                        // @ts-ignore
                        doSend(destination: java.lang.String | string, message: object): void
                        // @ts-ignore
                        doSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: object): void
                        // @ts-ignore
                        doReceive(destination: java.lang.String | string): object
                        // @ts-ignore
                        doSendAndReceive(destination: java.lang.String | string, requestMessage: object): object
                        // @ts-ignore
                        doSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, requestMessage: object): object
                        // @ts-ignore
                        convertAmqpMessage(message: org.springframework.amqp.core.Message): object
                        // @ts-ignore
                        convertAmqpException(ex: java.lang.RuntimeException): MessagingException
                    }
                }
            }
        }
    }
}
