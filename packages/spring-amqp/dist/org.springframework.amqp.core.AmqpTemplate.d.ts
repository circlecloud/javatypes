declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Specifies a basic set of AMQP operations.
                 * Provides synchronous send and receive methods. The {@link #convertAndSend(Object)} and
                 * {@link #receiveAndConvert()} methods allow let you send and receive POJO objects.
                 * Implementations are expected to delegate to an instance of
                 * {@link org.springframework.amqp.support.converter.MessageConverter} to perform
                 * conversion to and from AMQP byte[] payload type.
                 * @author Mark Pollack
                 * @author Mark Fisher
                 * @author Artem Bilan
                 * @author Ernest Sadykov
                 * @author Gary Russell
                 */
                // @ts-ignore
                interface AmqpTemplate {
                    /**
                     * Send a message to a default exchange with a default routing key.
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    send(message: org.springframework.amqp.core.Message): void
                    /**
                     * Send a message to a default exchange with a specific routing key.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    send(routingKey: string, message: org.springframework.amqp.core.Message): void
                    /**
                     * Send a message to a specific exchange with a specific routing key.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    send(exchange: string, routingKey: string, message: org.springframework.amqp.core.Message): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                     * with a default routing key.
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(message: any): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                     * with a specific routing key.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(routingKey: string, message: any): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a specific exchange
                     * with a specific routing key.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(exchange: string, routingKey: string, message: any): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                     * with a default routing key.
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a default exchange
                     * with a specific routing key.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): void
                    /**
                     * Convert a Java object to an Amqp {@link Message} and send it to a specific exchange
                     * with a specific routing key.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertAndSend(exchange: string, routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): void
                    /**
                     * Receive a message if there is one from a default queue. Returns immediately,
                     * possibly with a null value.
                     * @return a message or null if there is none waiting
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receive(): org.springframework.amqp.core.Message
                    /**
                     * Receive a message if there is one from a specific queue. Returns immediately,
                     * possibly with a null value.
                     * @param queueName the name of the queue to poll
                     * @return a message or null if there is none waiting
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receive(queueName: string): org.springframework.amqp.core.Message
                    /**
                     * Receive a message from a default queue, waiting up to the specified wait time if
                     * necessary for a message to become available.
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 1.6
                     */
                    // @ts-ignore
                    receive(timeoutMillis: number /*long*/): org.springframework.amqp.core.Message
                    /**
                     * Receive a message from a specific queue, waiting up to the specified wait time if
                     * necessary for a message to become available.
                     * @param queueName the queue to receive from
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 1.6
                     */
                    // @ts-ignore
                    receive(queueName: string, timeoutMillis: number /*long*/): org.springframework.amqp.core.Message
                    /**
                     * Receive a message if there is one from a default queue and convert it to a Java
                     * object. Returns immediately, possibly with a null value.
                     * @return a message or null if there is none waiting
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receiveAndConvert(): java.lang.Object
                    /**
                     * Receive a message if there is one from a specific queue and convert it to a Java
                     * object. Returns immediately, possibly with a null value.
                     * @param queueName the name of the queue to poll
                     * @return a message or null if there is none waiting
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receiveAndConvert(queueName: string): java.lang.Object
                    /**
                     * Receive a message if there is one from a default queue and convert it to a Java
                     * object. Wait up to the specified wait time if necessary for a message to become
                     * available.
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 1.6
                     */
                    // @ts-ignore
                    receiveAndConvert(timeoutMillis: number /*long*/): java.lang.Object
                    /**
                     * Receive a message if there is one from a specific queue and convert it to a Java
                     * object. Wait up to the specified wait time if necessary for a message to become
                     * available.
                     * @param queueName the name of the queue to poll
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 1.6
                     */
                    // @ts-ignore
                    receiveAndConvert(queueName: string, timeoutMillis: number /*long*/): java.lang.Object
                    /**
                     * Receive a message if there is one from a default queue and convert it to a Java
                     * object. Returns immediately, possibly with a null value. Requires a
                     * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param type the type to convert to.
                     * @param <T> the type.
                     * @return a message or null if there is none waiting.
                     * @throws AmqpException if there is a problem.
                     * @since 2.0
                     */
                    // @ts-ignore
                    receiveAndConvert<T>(type: object): T
                    /**
                     * Receive a message if there is one from a specific queue and convert it to a Java
                     * object. Returns immediately, possibly with a null value. Requires a
                     * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param queueName the name of the queue to poll
                     * @param type the type to convert to.
                     * @param <T> the type.
                     * @return a message or null if there is none waiting
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    receiveAndConvert<T>(queueName: string, type: object): T
                    /**
                     * Receive a message if there is one from a default queue and convert it to a Java
                     * object. Wait up to the specified wait time if necessary for a message to become
                     * available. Requires a
                     * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @param type the type to convert to.
                     * @param <T> the type.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    receiveAndConvert<T>(timeoutMillis: number /*long*/, type: object): T
                    /**
                     * Receive a message if there is one from a specific queue and convert it to a Java
                     * object. Wait up to the specified wait time if necessary for a message to become
                     * available. Requires a
                     * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param queueName the name of the queue to poll
                     * @param timeoutMillis how long to wait before giving up. Zero value means the method
                     *  will return {#code null} immediately if there is no message available. Negative
                     *  value makes method wait for a message indefinitely.
                     * @param type the type to convert to.
                     * @param <T> the type.
                     * @return a message or null if the time expires
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    receiveAndConvert<T>(queueName: string, timeoutMillis: number /*long*/, type: object): T
                    /**
                     * Receive a message if there is one from a default queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the {@code replyTo} {@link org.springframework.amqp.core.Address}
                     * from {@link org.springframework.amqp.core.MessageProperties} or to default exchange
                     * and default routingKey.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>): boolean
                    /**
                     * Receive a message if there is one from provided queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the {@code replyTo} {@link org.springframework.amqp.core.Address}
                     * from {@link org.springframework.amqp.core.MessageProperties} or to default exchange
                     * and default routingKey.
                     * @param queueName the queue name to receive a message.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received.
                     * @throws AmqpException if there is a problem.
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(queueName: string, callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>): boolean
                    /**
                     * Receive a message if there is one from default queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the provided {@code exchange} and {@code routingKey}.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param replyExchange the exchange name to send reply message.
                     * @param replyRoutingKey the routing key to send reply message.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received.
                     * @throws AmqpException if there is a problem.
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>, replyExchange: string, replyRoutingKey: string): boolean
                    /**
                     * Receive a message if there is one from provided queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the provided {@code exchange} and {@code routingKey}.
                     * @param queueName the queue name to receive a message.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param replyExchange the exchange name to send reply message.
                     * @param replyRoutingKey the routing key to send reply message.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(queueName: string, callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>, replyExchange: string, replyRoutingKey: string): boolean
                    /**
                     * Receive a message if there is one from a default queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the {@code replyTo} {@link org.springframework.amqp.core.Address}
                     * from result of {@link ReplyToAddressCallback}.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param replyToAddressCallback the callback to determine replyTo address at runtime.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received.
                     * @throws AmqpException if there is a problem.
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>, replyToAddressCallback: org.springframework.amqp.core.ReplyToAddressCallback<S>): boolean
                    /**
                     * Receive a message if there is one from provided queue, invoke provided
                     * {@link ReceiveAndReplyCallback} and send reply message, if the {@code callback}
                     * returns one, to the {@code replyTo} {@link org.springframework.amqp.core.Address}
                     * from result of {@link ReplyToAddressCallback}.
                     * @param queueName the queue name to receive a message.
                     * @param callback a user-provided {#link ReceiveAndReplyCallback} implementation to
                     *  process received message and return a reply message.
                     * @param replyToAddressCallback the callback to determine replyTo address at runtime.
                     * @param <R> The type of the request after conversion from the {#link Message}.
                     * @param <S> The type of the response.
                     * @return {#code true}, if message was received
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    receiveAndReply<R, S>(queueName: string, callback: org.springframework.amqp.core.ReceiveAndReplyCallback<R, S>, replyToAddressCallback: org.springframework.amqp.core.ReplyToAddressCallback<S>): boolean
                    /**
                     * Basic RPC pattern. Send a message to a default exchange with a default routing key
                     * and attempt to receive a response. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    sendAndReceive(message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                    /**
                     * Basic RPC pattern. Send a message to a default exchange with a specific routing key
                     * and attempt to receive a response. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    sendAndReceive(routingKey: string, message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                    /**
                     * Basic RPC pattern. Send a message to a specific exchange with a specific routing
                     * key and attempt to receive a response. Implementations will normally set the
                     * reply-to header to an exclusive queue and wait up for some time limited by a
                     * timeout.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    sendAndReceive(exchange: string, routingKey: string, message: org.springframework.amqp.core.Message): org.springframework.amqp.core.Message
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a default routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(message: any): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(routingKey: string, message: any): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * specific exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(exchange: string, routingKey: string, message: any): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a default routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * specific exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     */
                    // @ts-ignore
                    convertSendAndReceive(exchange: string, routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor): java.lang.Object
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a default routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a
                     * {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param message a message to send.
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one.
                     * @throws AmqpException if there is a problem.
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(message: any, responseType: object): T
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(routingKey: string, message: any, responseType: object): T
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * specific exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(exchange: string, routingKey: string, message: any, responseType: object): T
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a default routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): T
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * default exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): T
                    /**
                     * Basic RPC pattern with conversion. Send a Java object converted to a message to a
                     * specific exchange with a specific routing key and attempt to receive a response,
                     * converting that to a Java object. Implementations will normally set the reply-to
                     * header to an exclusive queue and wait up for some time limited by a timeout.
                     * Requires a {@link org.springframework.amqp.support.converter.SmartMessageConverter}.
                     * @param exchange the name of the exchange
                     * @param routingKey the routing key
                     * @param message a message to send
                     * @param messagePostProcessor a processor to apply to the message before it is sent
                     * @param responseType the type to convert the reply to.
                     * @param <T> the type.
                     * @return the response if there is one
                     * @throws AmqpException if there is a problem
                     * @since 2.0
                     */
                    // @ts-ignore
                    convertSendAndReceiveAsType<T>(exchange: string, routingKey: string, message: any, messagePostProcessor: org.springframework.amqp.core.MessagePostProcessor, responseType: object): T
                }
            }
        }
    }
}
