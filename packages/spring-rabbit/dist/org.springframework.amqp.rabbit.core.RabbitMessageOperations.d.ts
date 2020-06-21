declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * A specialization of {@link MessageSendingOperations} and {@link MessageRequestReplyOperations}
                     * for AMQP related operations that allow to specify not only the exchange but also the
                     * routing key to use.
                     * @author Stephane Nicoll
                     * @since 1.4
                     * @see org.springframework.amqp.rabbit.core.RabbitTemplate
                     */
                    // @ts-ignore
                    interface RabbitMessageOperations {
                        /**
                         * Send a message to a specific exchange with a specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message the message to send
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: object): void
                        /**
                         * Convert the given Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * wrap it as a message and send it to a specific exchange with a
                         * specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param payload the Object to use as payload
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any): void
                        /**
                         * Convert the given Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * wrap it as a message with the given headers and send it to a
                         * specific exchange with a specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param payload the Object to use as payload
                         * @param headers headers for the message to send
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        /**
                         * Convert the given Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * wrap it as a message, apply the given post processor, and send
                         * the resulting message to a specific exchange with a specific
                         * routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param payload the Object to use as payload
                         * @param postProcessor the post processor to apply to the message
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, postProcessor: MessagePostProcessor): void
                        /**
                         * Convert the given Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * wrap it as a message with the given headers, apply the given post processor,
                         * and send the resulting message to a specific exchange with a specific
                         * routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param payload the Object to use as payload
                         * @param headers headers for the message to send
                         * @param postProcessor the post processor to apply to the message
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, payload: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, postProcessor: MessagePostProcessor): void
                        /**
                         * Send a request message to a specific exchange with a specific routing key and
                         * wait for the reply.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param requestMessage the message to send
                         * @return the reply, possibly {#code null} if the message could not be received,
                         *  for example due to a timeout
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, requestMessage: object): object
                        /**
                         * Convert the given request Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter}, send
                         * it as a {@link Message} to a specific exchange with a specific routing key,
                         * receive the reply and convert its body of the specified target class.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param request payload for the request message to send
                         * @param targetClass the target type to convert the payload of the reply to
                         * @param <T> return type
                         * @return the payload of the reply message, possibly {#code null} if the message
                         *  could not be received, for example due to a timeout
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, targetClass: java.lang.Class<T>): T
                        /**
                         * Convert the given request Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter}, send
                         * it as a {@link Message} with the given headers, to a specific exchange
                         * with a specific routing key, receive the reply and convert its body of
                         * the specified target class.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param request payload for the request message to send
                         * @param headers headers for the request message to send
                         * @param targetClass the target type to convert the payload of the reply to
                         * @param <T> return type
                         * @return the payload of the reply message, possibly {#code null} if the message
                         *  could not be received, for example due to a timeout
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, targetClass: java.lang.Class<T>): T
                        /**
                         * Convert the given request Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * apply the given post processor and send the resulting {@link Message} to
                         * a specific exchange with a specific routing key, receive the reply and
                         * convert its body of the given target class.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param request payload for the request message to send
                         * @param targetClass the target type to convert the payload of the reply to
                         * @param requestPostProcessor post process to apply to the request message
                         * @param <T> return type
                         * @return the payload of the reply message, possibly {#code null} if the message
                         *  could not be received, for example due to a timeout
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, targetClass: java.lang.Class<T>, requestPostProcessor: MessagePostProcessor): T
                        /**
                         * Convert the given request Object to serialized form, possibly using a
                         * {@link org.springframework.messaging.converter.MessageConverter},
                         * wrap it as a message with the given headers, apply the given post processor
                         * and send the resulting {@link Message} to a specific exchange with a
                         * specific routing key,, receive  the reply and convert its body of the
                         * given target class.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param request payload for the request message to send
                         * @param headers headers for the message to send
                         * @param targetClass the target type to convert the payload of the reply to
                         * @param requestPostProcessor post process to apply to the request message
                         * @param <T> return type
                         * @return the payload of the reply message, possibly {#code null} if the message
                         *  could not be received, for example due to a timeout
                         * @throws MessagingException a messaging exception.
                         */
                        // @ts-ignore
                        convertSendAndReceive<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, request: java.lang.Object | any, headers: java.util.Map<java.lang.String | string, java.lang.Object | any>, targetClass: java.lang.Class<T>, requestPostProcessor: MessagePostProcessor): T
                    }
                }
            }
        }
    }
}
