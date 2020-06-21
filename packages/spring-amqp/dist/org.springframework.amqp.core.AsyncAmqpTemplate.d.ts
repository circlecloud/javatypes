declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Classes implementing this interface can perform asynchronous send and
                 * receive operations.
                 * @author Gary Russell
                 * @since 2.0
                 */
                // @ts-ignore
                interface AsyncAmqpTemplate {
                    /**
                     * Send a message to the default exchange with the default routing key. If the message
                     * contains a correlationId property, it must be unique.
                     * @param message the message.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    sendAndReceive(message: org.springframework.amqp.core.Message): object
                    /**
                     * Send a message to the default exchange with the supplied routing key. If the message
                     * contains a correlationId property, it must be unique.
                     * @param routingKey the routing key.
                     * @param message the message.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    sendAndReceive(routingKey: java.lang.String | string, message: org.springframework.amqp.core.Message): object
                    /**
                     * Send a message to the supplied exchange and routing key. If the message
                     * contains a correlationId property, it must be unique.
                     * @param exchange the exchange.
                     * @param routingKey the routing key.
                     * @param message the message.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    sendAndReceive(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: org.springframework.amqp.core.Message): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * default routing key.
                     * @param object the object to convert.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(object: java.lang.Object | any): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * provided routing key.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(routingKey: java.lang.String | string, object: java.lang.Object | any): object
                    /**
                     * Convert the object to a message and send it to the provided exchange and
                     * routing key.
                     * @param exchange the exchange.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * default routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * provided routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): object
                    /**
                     * Convert the object to a message and send it to the provided exchange and
                     * routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param exchange the exchange
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceive<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * default routing key.
                     * @param object the object to convert.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(object: java.lang.Object | any, responseType: object): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * provided routing key.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, responseType: object): object
                    /**
                     * Convert the object to a message and send it to the provided exchange and
                     * routing key.
                     * @param exchange the exchange.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, responseType: object): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * default routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): object
                    /**
                     * Convert the object to a message and send it to the default exchange with the
                     * provided routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): object
                    /**
                     * Convert the object to a message and send it to the provided exchange and
                     * routing key after invoking the {@link MessagePostProcessor}.
                     * If the post processor adds a correlationId property, it must be unique.
                     * @param exchange the exchange
                     * @param routingKey the routing key.
                     * @param object the object to convert.
                     * @param messagePostProcessor the post processor.
                     * @param responseType the response type.
                     * @param <C> the expected result type.
                     * @return the {#link ListenableFuture}.
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<C>(exchange: java.lang.String | string, routingKey: java.lang.String | string, object: java.lang.Object | any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): object
                }
            }
        }
    }
}
