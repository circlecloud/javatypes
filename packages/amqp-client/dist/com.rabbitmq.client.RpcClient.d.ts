declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Convenience class which manages simple RPC-style communication.
             * The class is agnostic about the format of RPC arguments / return values.
             * It simply provides a mechanism for sending a message to an exchange with a given routing key,
             * and waiting for a response.
             */
            // @ts-ignore
            class RpcClient extends java.lang.Object {
                /**
                 * Construct a {@link RpcClient} with the passed-in {@link RpcClientParams}.
                 * @param params
                 * @throws IOException
                 * @see RpcClientParams
                 * @since 5.6.0
                 */
                // @ts-ignore
                constructor(params: com.rabbitmq.client.RpcClientParams)
                /**
                 * Construct a new RpcClient that will communicate on the given channel, sending
                 * requests to the given exchange with the given routing key.
                 * Causes the creation of a temporary private autodelete queue. The name of this queue can be specified.
                 * @param channel the channel to use for communication
                 * @param exchange the exchange to connect to
                 * @param routingKey the routing key
                 * @param replyTo the queue where the server should put the reply
                 * @param timeout milliseconds before timing out on wait for response
                 * @throws IOException if an error is encountered
                 * @deprecated use {#link RpcClient#RpcClient(RpcClientParams)} instead, will be removed in 6.0.0
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, replyTo: java.lang.String | string, timeout: number /*int*/)
                /**
                 * Construct a new RpcClient that will communicate on the given channel, sending
                 * requests to the given exchange with the given routing key.
                 * Causes the creation of a temporary private autodelete queue.
                 * The name of the queue can be provided (only relevant for RabbitMQ servers
                 * that do not support <a href="https://www.rabbitmq.com/direct-reply-to.html">Direct Reply-to</a>.
                 * Waits forever for responses (that is, no timeout).
                 * @param channel the channel to use for communication
                 * @param exchange the exchange to connect to
                 * @param routingKey the routing key
                 * @param replyTo the queue where the server should put the reply
                 * @throws IOException if an error is encountered
                 * @deprecated use {#link RpcClient#RpcClient(RpcClientParams)} instead, will be removed in 6.0.0
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, replyTo: java.lang.String | string)
                /**
                 * Construct a new RpcClient that will communicate on the given channel, sending
                 * requests to the given exchange with the given routing key.
                 * <a href="https://www.rabbitmq.com/direct-reply-to.html">Direct Reply-to</a> will be used
                 * for response propagation.
                 * Waits forever for responses (that is, no timeout).
                 * @param channel the channel to use for communication
                 * @param exchange the exchange to connect to
                 * @param routingKey the routing key
                 * @throws IOException if an error is encountered
                 * @deprecated use {#link RpcClient#RpcClient(RpcClientParams)} instead, will be removed in 6.0.0
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                /**
                 * <p>
                 * Construct a new RpcClient that will communicate on the given channel, sending
                 * requests to the given exchange with the given routing key.
                 * </p>
                 * Causes the creation of a temporary private autodelete queue. The name of this queue will be
                 * "amq.rabbitmq.reply-to".
                 * @param channel the channel to use for communication
                 * @param exchange the exchange to connect to
                 * @param routingKey the routing key
                 * @param timeout milliseconds before timing out on wait for response
                 * @throws IOException if an error is encountered
                 * @deprecated use {#link RpcClient#RpcClient(RpcClientParams)} instead, will be removed in 6.0.0
                 */
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, exchange: java.lang.String | string, routingKey: java.lang.String | string, timeout: number /*int*/)
                /**
                 * NO_TIMEOUT value must match convention on {@link BlockingCell#uninterruptibleGet(int)}
                 */
                // @ts-ignore
                static readonly NO_TIMEOUT: number /*int*/
                // @ts-ignore
                public static readonly DEFAULT_REPLY_HANDLER: java.util.function$.Function<java.lang.Object | any, com.rabbitmq.client.RpcClient.Response>
                /**
                 * Private API - ensures the RpcClient is correctly open.
                 * @throws IOException if an error is encountered
                 */
                // @ts-ignore
                public checkConsumer(): void
                /**
                 * Public API - cancels the consumer, thus deleting the temporary queue, and marks the RpcClient as closed.
                 * @throws IOException if an error is encountered
                 */
                // @ts-ignore
                public close(): void
                /**
                 * Registers a consumer on the reply queue.
                 * @throws IOException if an error is encountered
                 * @return the newly created and registered consumer
                 */
                // @ts-ignore
                setupConsumer(): com.rabbitmq.client.DefaultConsumer
                // @ts-ignore
                public publish(props: com.rabbitmq.client.AMQP.BasicProperties, message: number /*byte*/[]): void
                // @ts-ignore
                public doCall(props: com.rabbitmq.client.AMQP.BasicProperties, message: number /*byte*/[]): com.rabbitmq.client.RpcClient.Response
                // @ts-ignore
                public doCall(props: com.rabbitmq.client.AMQP.BasicProperties, message: number /*byte*/[], timeout: number /*int*/): com.rabbitmq.client.RpcClient.Response
                // @ts-ignore
                public primitiveCall(props: com.rabbitmq.client.AMQP.BasicProperties, message: number /*byte*/[]): number /*byte*/[]
                // @ts-ignore
                public primitiveCall(props: com.rabbitmq.client.AMQP.BasicProperties, message: number /*byte*/[], timeout: number /*int*/): number /*byte*/[]
                /**
                 * Perform a simple byte-array-based RPC roundtrip.
                 * @param message the byte array request message to send
                 * @return the byte array response received
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a response is not received within the configured timeout
                 */
                // @ts-ignore
                public primitiveCall(message: number /*byte*/[]): number /*byte*/[]
                /**
                 * Perform a simple byte-array-based RPC roundtrip
                 * Useful if you need to get at more than just the body of the message
                 * @param message the byte array request message to send
                 * @return The response object is an envelope that contains all of the data provided to the `handleDelivery` consumer
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a response is not received within the configured timeout
                 */
                // @ts-ignore
                public responseCall(message: number /*byte*/[]): com.rabbitmq.client.RpcClient.Response
                /**
                 * Perform a simple byte-array-based RPC roundtrip
                 * Useful if you need to get at more than just the body of the message
                 * @param message the byte array request message to send
                 * @param timeout milliseconds before timing out on wait for response
                 * @return The response object is an envelope that contains all of the data provided to the `handleDelivery` consumer
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a response is not received within the configured timeout
                 */
                // @ts-ignore
                public responseCall(message: number /*byte*/[], timeout: number /*int*/): com.rabbitmq.client.RpcClient.Response
                /**
                 * Perform a simple string-based RPC roundtrip.
                 * @param message the string request message to send
                 * @return the string response received
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a timeout occurs before the response is received
                 */
                // @ts-ignore
                public stringCall(message: java.lang.String | string): string
                /**
                 * Perform an AMQP wire-protocol-table based RPC roundtrip <br><br>
                 * There are some restrictions on the values appearing in the table: <br>
                 * they must be of type {@link String}, {@link LongString}, {@link Integer}, {@link java.math.BigDecimal}, {@link Date},
                 * or (recursively) a {@link Map} of the enclosing type.
                 * @param message the table to send
                 * @return the table received
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a timeout occurs before a response is received
                 */
                // @ts-ignore
                public mapCall(message: java.util.Map<java.lang.String | string, java.lang.Object | any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Perform an AMQP wire-protocol-table based RPC roundtrip, first
                 * constructing the table from an array of alternating keys (in
                 * even-numbered elements, starting at zero) and values (in
                 * odd-numbered elements, starting at one) <br>
                 * Restrictions on value arguments apply as in {@link RpcClient#mapCall(Map)}.
                 * @param keyValuePairs alternating {key, value, key, value, ...} data to send
                 * @return the table received
                 * @throws ShutdownSignalException if the connection dies during our wait
                 * @throws IOException if an error is encountered
                 * @throws TimeoutException if a timeout occurs before a response is received
                 */
                // @ts-ignore
                public mapCall(keyValuePairs: java.lang.Object[] | any[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Retrieve the channel.
                 * @return the channel to which this client is connected
                 */
                // @ts-ignore
                public getChannel(): com.rabbitmq.client.Channel
                /**
                 * Retrieve the exchange.
                 * @return the exchange to which this client is connected
                 */
                // @ts-ignore
                public getExchange(): string
                /**
                 * Retrieve the routing key.
                 * @return the routing key for messages to this client
                 */
                // @ts-ignore
                public getRoutingKey(): string
                /**
                 * Retrieve the continuation map.
                 * @return the map of objects to blocking cells for this client
                 */
                // @ts-ignore
                public getContinuationMap(): java.util.Map<java.lang.String | string, com.rabbitmq.utility.BlockingCell<java.lang.Object | any>>
                /**
                 * Retrieve the last correlation id used.
                 * <p>
                 * Note as of 5.9.0, correlation IDs may not always be integers
                 * (by default, they are).
                 * This method will try to parse the last correlation ID string
                 * as an integer, so this may result in {@link NumberFormatException}
                 * if the correlation ID supplier provided by
                 * {@link RpcClientParams#correlationIdSupplier(Supplier)}
                 * does not generate appropriate IDs.
                 * @return the most recently used correlation id
                 * @see RpcClientParams#correlationIdSupplier(Supplier)
                 */
                // @ts-ignore
                public getCorrelationId(): number /*int*/
                /**
                 * Retrieve the consumer.
                 * @return an interface to the client's consumer object
                 */
                // @ts-ignore
                public getConsumer(): com.rabbitmq.client.Consumer
                /**
                 * Creates generation IDs as a sequence of integers.
                 * @return 
                 * @see RpcClientParams#correlationIdSupplier(Supplier)
                 * @since 5.9.0
                 */
                // @ts-ignore
                public static incrementingCorrelationIdSupplier(): java.util.function$.Supplier<java.lang.String | string>
                /**
                 * Creates generation IDs as a sequence of integers, with the provided prefix.
                 * @param prefix
                 * @return 
                 * @see RpcClientParams#correlationIdSupplier(Supplier)
                 * @since 5.9.0
                 */
                // @ts-ignore
                public static incrementingCorrelationIdSupplier(prefix: java.lang.String | string): java.util.function$.Supplier<java.lang.String | string>
            }
        }
    }
}
