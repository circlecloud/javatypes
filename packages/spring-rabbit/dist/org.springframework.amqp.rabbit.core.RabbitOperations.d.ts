declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * Rabbit specific methods for Amqp functionality.
                     * @author Mark Pollack
                     * @author Mark Fisher
                     * @author Gary Russell
                     * @author Artem Bilan
                     */
                    // @ts-ignore
                    interface RabbitOperations {
                        /**
                         * Execute the callback with a channel and reliably close the channel afterwards.
                         * @param action the call back.
                         * @param <T> the return type.
                         * @return the result from the
                         *  {#link ChannelCallback#doInRabbit(com.rabbitmq.client.Channel)}.
                         * @throws AmqpException if one occurs.
                         */
                        // @ts-ignore
                        execute<T>(action: org.springframework.amqp.rabbit.core.ChannelCallback<T>): T
                        /**
                         * Invoke the callback and run all operations on the template argument in a dedicated
                         * thread-bound channel and reliably close the channel afterwards.
                         * @param action the call back.
                         * @param <T> the return type.
                         * @return the result from the
                         *  {#link OperationsCallback#doInRabbit(RabbitOperations operations)}.
                         * @throws AmqpException if one occurs.
                         * @since 2.0
                         */
                        // @ts-ignore
                        invoke<T>(action: org.springframework.amqp.rabbit.core.RabbitOperations.OperationsCallback<T>): T
                        /**
                         * Invoke operations on the same channel.
                         * If callbacks are needed, both callbacks must be supplied.
                         * @param action the callback.
                         * @param acks a confirm callback for acks.
                         * @param nacks a confirm callback for nacks.
                         * @param <T> the return type.
                         * @return the result of the action method.
                         * @since 2.1
                         */
                        // @ts-ignore
                        invoke<T>(action: org.springframework.amqp.rabbit.core.RabbitOperations.OperationsCallback<T>, acks: com.rabbitmq.client.ConfirmCallback, nacks: com.rabbitmq.client.ConfirmCallback): T
                        /**
                         * Delegate to the underlying dedicated channel to wait for confirms. The connection
                         * factory must be configured for publisher confirms and this method must be called
                         * within the scope of an {@link #invoke(OperationsCallback)} operation.
                         * Requires {@code CachingConnectionFactory#setPublisherConfirms(true)}.
                         * @param timeout the timeout
                         * @return true if acks and no nacks are received.
                         * @throws AmqpException if one occurs.
                         * @since 2.0
                         * @see com.rabbitmq.client.Channel#waitForConfirms(long)
                         */
                        // @ts-ignore
                        waitForConfirms(timeout: number /*long*/): boolean
                        /**
                         * Delegate to the underlying dedicated channel to wait for confirms. The connection
                         * factory must be configured for publisher confirms and this method must be called
                         * within the scope of an {@link #invoke(OperationsCallback)} operation.
                         * Requires {@code CachingConnectionFactory#setPublisherConfirms(true)}.
                         * @param timeout the timeout
                         * @throws AmqpException if one occurs.
                         * @since 2.0
                         * @see com.rabbitmq.client.Channel#waitForConfirmsOrDie(long)
                         */
                        // @ts-ignore
                        waitForConfirmsOrDie(timeout: number /*long*/): void
                        /**
                         * Return the connection factory for this operations.
                         * @return the connection factory.
                         * @since 2.0
                         */
                        // @ts-ignore
                        getConnectionFactory(): org.springframework.amqp.rabbit.connection.ConnectionFactory
                        /**
                         * Send a message to a specific exchange with a specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                         * with a default routing key.
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        correlationConvertAndSend(message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                         * with a specific routing key.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertAndSend(routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a specific exchange
                         * with a specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                         * with a default routing key.
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertAndSend(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                         * with a specific routing key.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertAndSend(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Convert a Java object to an Amqp {@link Message} and send it to a specific exchange
                         * with a specific routing key.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertAndSend(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a default routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param message a message to send.
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * specific exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a default routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * specific exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): any
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a default routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param message a message to send.
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one.
                         * @throws AmqpException if there is a problem.
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * specific exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a default routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * default exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                        /**
                         * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                         * specific exchange with a specific routing key and attempt to receive a response,
                         * converting that to a Java object. Implementations will normally set the reply-to
                         * header to an exclusive queue and wait up for some time limited by a timeout.
                         * Requires a
                         * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                         * @param exchange the name of the exchange
                         * @param routingKey the routing key
                         * @param message a message to send
                         * @param messagePostProcessor a processor to apply to the message before it is sent
                         * @param correlationData data to correlate publisher confirms.
                         * @param responseType the type to convert the reply to.
                         * @param <T> the type.
                         * @return the response if there is one
                         * @throws AmqpException if there is a problem
                         */
                        // @ts-ignore
                        convertSendAndReceiveAsType<T>(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: java.lang.Object | any, messagePostProcessor: MessagePostProcessor, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, responseType: object): T
                    }
                }
            }
        }
    }
}
