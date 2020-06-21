declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Interface to a channel. All non-deprecated methods of
             * this interface are part of the public API.
             * <h2>Tutorials</h2>
             * <a href="https://www.rabbitmq.com/getstarted.html">RabbitMQ tutorials</a> demonstrate how
             * key methods of this interface are used.
             * <h2>User Guide</h2>
             * See <a href="https://www.rabbitmq.com/api-guide.html">Java Client User Guide</a>.
             * <h2>Concurrency Considerations</h2>
             * <p>
             * {@link Channel} instances must not be shared between
             * threads. Applications
             * should prefer using a {@link Channel} per thread
             * instead of sharing the same {@link Channel} across
             * multiple threads. While some operations on channels are safe to invoke
             * concurrently, some are not and will result in incorrect frame interleaving
             * on the wire. Sharing channels between threads will also interfere with
             * <a href="https://www.rabbitmq.com/confirms.html">Publisher Confirms</a>.
             * As such, applications need to use a {@link Channel} per thread.
             * </p>
             * @see <a href="https://www.rabbitmq.com/getstarted.html">RabbitMQ tutorials</a>
             * @see <a href="https://www.rabbitmq.com/api-guide.html">RabbitMQ Java Client User Guide</a>
             */
            // @ts-ignore
            interface Channel extends com.rabbitmq.client.ShutdownNotifier, java.lang.AutoCloseable {
                /**
                 * Retrieve this channel's channel number.
                 * @return the channel number
                 */
                // @ts-ignore
                getChannelNumber(): number /*int*/
                /**
                 * Retrieve the connection which carries this channel.
                 * @return the underlying {#link Connection}
                 */
                // @ts-ignore
                getConnection(): com.rabbitmq.client.Connection
                /**
                 * Close this channel with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                close(): void
                /**
                 * Close this channel.
                 * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                 * @param closeMessage a message indicating the reason for closing the connection
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                /**
                 * Abort this channel with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * Forces the channel to close and waits for the close operation to complete.
                 * Any encountered exceptions in the close operation are silently discarded.
                 */
                // @ts-ignore
                abort(): void
                /**
                 * Abort this channel.
                 * Forces the channel to close and waits for the close operation to complete.
                 * Any encountered exceptions in the close operation are silently discarded.
                 */
                // @ts-ignore
                abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                /**
                 * Add a {@link ReturnListener}.
                 * @param listener the listener to add
                 */
                // @ts-ignore
                addReturnListener(listener: com.rabbitmq.client.ReturnListener): void
                /**
                 * Add a lambda-based {@link ReturnListener}.
                 * @see ReturnListener
                 * @see ReturnCallback
                 * @see Return
                 * @param returnCallback the callback when the message is returned
                 * @return the listener that wraps the callback
                 */
                // @ts-ignore
                addReturnListener(returnCallback: com.rabbitmq.client.ReturnCallback): com.rabbitmq.client.ReturnListener
                /**
                 * Remove a {@link ReturnListener}.
                 * @param listener the listener to remove
                 * @return <code><b>true</b></code> if the listener was found and removed,
                 *  <code><b>false</b></code> otherwise
                 */
                // @ts-ignore
                removeReturnListener(listener: com.rabbitmq.client.ReturnListener): boolean
                /**
                 * Remove all {@link ReturnListener}s.
                 */
                // @ts-ignore
                clearReturnListeners(): void
                /**
                 * Add a {@link ConfirmListener}.
                 * @param listener the listener to add
                 */
                // @ts-ignore
                addConfirmListener(listener: com.rabbitmq.client.ConfirmListener): void
                /**
                 * Add a lambda-based {@link ConfirmListener}.
                 * @see ConfirmListener
                 * @see ConfirmCallback
                 * @param ackCallback callback on ack
                 * @param nackCallback call on nack (negative ack)
                 * @return the listener that wraps the callbacks
                 */
                // @ts-ignore
                addConfirmListener(ackCallback: com.rabbitmq.client.ConfirmCallback, nackCallback: com.rabbitmq.client.ConfirmCallback): com.rabbitmq.client.ConfirmListener
                /**
                 * Remove a {@link ConfirmListener}.
                 * @param listener the listener to remove
                 * @return <code><b>true</b></code> if the listener was found and removed,
                 *  <code><b>false</b></code> otherwise
                 */
                // @ts-ignore
                removeConfirmListener(listener: com.rabbitmq.client.ConfirmListener): boolean
                /**
                 * Remove all {@link ConfirmListener}s.
                 */
                // @ts-ignore
                clearConfirmListeners(): void
                /**
                 * Get the current default consumer. @see setDefaultConsumer for rationale.
                 * @return an interface to the current default consumer.
                 */
                // @ts-ignore
                getDefaultConsumer(): com.rabbitmq.client.Consumer
                /**
                 * Set the current default consumer.
                 * Under certain circumstances it is possible for a channel to receive a
                 * message delivery which does not match any consumer which is currently
                 * set up via basicConsume(). This will occur after the following sequence
                 * of events:
                 * ctag = basicConsume(queue, consumer); // i.e. with explicit acks
                 * // some deliveries take place but are not acked
                 * basicCancel(ctag);
                 * basicRecover(false);
                 * Since requeue is specified to be false in the basicRecover, the spec
                 * states that the message must be redelivered to "the original recipient"
                 * - i.e. the same channel / consumer-tag. But the consumer is no longer
                 * active.
                 * In these circumstances, you can register a default consumer to handle
                 * such deliveries. If no default consumer is registered an
                 * IllegalStateException will be thrown when such a delivery arrives.
                 * Most people will not need to use this.
                 * @param consumer the consumer to use, or null indicating "don't use one".
                 */
                // @ts-ignore
                setDefaultConsumer(consumer: com.rabbitmq.client.Consumer): void
                /**
                 * Request specific "quality of service" settings.
                 * <p>
                 * These settings impose limits on the amount of data the server
                 * will deliver to consumers before requiring acknowledgements.
                 * Thus they provide a means of consumer-initiated flow control.
                 * <p>
                 * Note the prefetch count must be between 0 and 65535 (unsigned short in AMQP 0-9-1).
                 * @param prefetchSize  maximum amount of content (measured in
                 *                       octets) that the server will deliver, 0 if unlimited
                 * @param prefetchCount maximum number of messages that the server
                 *                       will deliver, 0 if unlimited
                 * @param global        true if the settings should be applied to the
                 *                       entire channel rather than each consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Qos
                 */
                // @ts-ignore
                basicQos(prefetchSize: number /*int*/, prefetchCount: number /*int*/, global: boolean): void
                /**
                 * Request a specific prefetchCount "quality of service" settings
                 * for this channel.
                 * <p>
                 * Note the prefetch count must be between 0 and 65535 (unsigned short in AMQP 0-9-1).
                 * @param prefetchCount maximum number of messages that the server
                 *                       will deliver, 0 if unlimited
                 * @param global        true if the settings should be applied to the
                 *                       entire channel rather than each consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see #basicQos(int, int, boolean)
                 */
                // @ts-ignore
                basicQos(prefetchCount: number /*int*/, global: boolean): void
                /**
                 * Request a specific prefetchCount "quality of service" settings
                 * for this channel.
                 * <p>
                 * Note the prefetch count must be between 0 and 65535 (unsigned short in AMQP 0-9-1).
                 * @param prefetchCount maximum number of messages that the server
                 *                       will deliver, 0 if unlimited
                 * @throws java.io.IOException if an error is encountered
                 * @see #basicQos(int, int, boolean)
                 */
                // @ts-ignore
                basicQos(prefetchCount: number /*int*/): void
                /**
                 * Publish a message.
                 * Publishing to a non-existent exchange will result in a channel-level
                 * protocol exception, which closes the channel.
                 * Invocations of <code>Channel#basicPublish</code> will eventually block if a
                 * <a href="https://www.rabbitmq.com/alarms.html">resource-driven alarm</a> is in effect.
                 * @see com.rabbitmq.client.AMQP.Basic.Publish
                 * @see <a href="https://www.rabbitmq.com/alarms.html">Resource-driven alarms</a>
                 * @param exchange the exchange to publish the message to
                 * @param routingKey the routing key
                 * @param props other properties for the message - routing headers etc
                 * @param body the message body
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                /**
                 * Publish a message.
                 * Invocations of <code>Channel#basicPublish</code> will eventually block if a
                 * <a href="https://www.rabbitmq.com/alarms.html">resource-driven alarm</a> is in effect.
                 * @see com.rabbitmq.client.AMQP.Basic.Publish
                 * @see <a href="https://www.rabbitmq.com/alarms.html">Resource-driven alarms</a>
                 * @param exchange the exchange to publish the message to
                 * @param routingKey the routing key
                 * @param mandatory true if the 'mandatory' flag is to be set
                 * @param props other properties for the message - routing headers etc
                 * @param body the message body
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                /**
                 * Publish a message.
                 * Publishing to a non-existent exchange will result in a channel-level
                 * protocol exception, which closes the channel.
                 * Invocations of <code>Channel#basicPublish</code> will eventually block if a
                 * <a href="https://www.rabbitmq.com/alarms.html">resource-driven alarm</a> is in effect.
                 * @see com.rabbitmq.client.AMQP.Basic.Publish
                 * @see <a href="https://www.rabbitmq.com/alarms.html">Resource-driven alarms</a>
                 * @param exchange the exchange to publish the message to
                 * @param routingKey the routing key
                 * @param mandatory true if the 'mandatory' flag is to be set
                 * @param immediate true if the 'immediate' flag is to be
                 *  set. Note that the RabbitMQ server does not support this flag.
                 * @param props other properties for the message - routing headers etc
                 * @param body the message body
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicPublish(exchange: java.lang.String | string, routingKey: java.lang.String | string, mandatory: boolean, immediate: boolean, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[]): void
                /**
                 * Actively declare a non-autodelete, non-durable exchange with no extra arguments
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Actively declare a non-autodelete, non-durable exchange with no extra arguments
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Actively declare a non-autodelete exchange with no extra arguments
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @throws java.io.IOException if an error is encountered
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Actively declare a non-autodelete exchange with no extra arguments
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @throws java.io.IOException if an error is encountered
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Declare an exchange.
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param arguments other properties (construction arguments) for the exchange
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Declare an exchange.
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param arguments other properties (construction arguments) for the exchange
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Declare an exchange, via an interface that allows the complete set of
                 * arguments.
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param internal true if the exchange is internal, i.e. can't be directly
                 *  published to by a client.
                 * @param arguments other properties (construction arguments) for the exchange
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Declare an exchange, via an interface that allows the complete set of
                 * arguments.
                 * @see com.rabbitmq.client.AMQP.Exchange.Declare
                 * @see com.rabbitmq.client.AMQP.Exchange.DeclareOk
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param internal true if the exchange is internal, i.e. can't be directly
                 *  published to by a client.
                 * @param arguments other properties (construction arguments) for the exchange
                 * @return a declaration-confirm method to indicate the exchange was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclare(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Like {@link Channel#exchangeDeclare(String, String, boolean, boolean, java.util.Map)} but
                 * sets nowait parameter to true and returns nothing (as there will be no response from
                 * the server).
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param internal true if the exchange is internal, i.e. can't be directly
                 *  published to by a client.
                 * @param arguments other properties (construction arguments) for the exchange
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclareNoWait(exchange: java.lang.String | string, type: java.lang.String | string, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Like {@link Channel#exchangeDeclare(String, String, boolean, boolean, java.util.Map)} but
                 * sets nowait parameter to true and returns nothing (as there will be no response from
                 * the server).
                 * @param exchange the name of the exchange
                 * @param type the exchange type
                 * @param durable true if we are declaring a durable exchange (the exchange will survive a server restart)
                 * @param autoDelete true if the server should delete the exchange when it is no longer in use
                 * @param internal true if the exchange is internal, i.e. can't be directly
                 *  published to by a client.
                 * @param arguments other properties (construction arguments) for the exchange
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeclareNoWait(exchange: java.lang.String | string, type: com.rabbitmq.client.BuiltinExchangeType, durable: boolean, autoDelete: boolean, internal: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Declare an exchange passively; that is, check if the named exchange exists.
                 * @param name check the existence of an exchange named this
                 * @throws IOException the server will raise a 404 channel exception if the named exchange does not exist.
                 */
                // @ts-ignore
                exchangeDeclarePassive(name: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeclareOk
                /**
                 * Delete an exchange
                 * @see com.rabbitmq.client.AMQP.Exchange.Delete
                 * @see com.rabbitmq.client.AMQP.Exchange.DeleteOk
                 * @param exchange the name of the exchange
                 * @param ifUnused true to indicate that the exchange is only to be deleted if it is unused
                 * @return a deletion-confirm method to indicate the exchange was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDelete(exchange: java.lang.String | string, ifUnused: boolean): com.rabbitmq.client.AMQP.Exchange.DeleteOk
                /**
                 * Like {@link Channel#exchangeDelete(String, boolean)} but sets nowait parameter to true
                 * and returns void (as there will be no response from the server).
                 * @see com.rabbitmq.client.AMQP.Exchange.Delete
                 * @see com.rabbitmq.client.AMQP.Exchange.DeleteOk
                 * @param exchange the name of the exchange
                 * @param ifUnused true to indicate that the exchange is only to be deleted if it is unused
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDeleteNoWait(exchange: java.lang.String | string, ifUnused: boolean): void
                /**
                 * Delete an exchange, without regard for whether it is in use or not
                 * @see com.rabbitmq.client.AMQP.Exchange.Delete
                 * @see com.rabbitmq.client.AMQP.Exchange.DeleteOk
                 * @param exchange the name of the exchange
                 * @return a deletion-confirm method to indicate the exchange was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeDelete(exchange: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.DeleteOk
                /**
                 * Bind an exchange to an exchange, with no extra arguments.
                 * @see com.rabbitmq.client.AMQP.Exchange.Bind
                 * @see com.rabbitmq.client.AMQP.Exchange.BindOk
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.BindOk
                /**
                 * Bind an exchange to an exchange.
                 * @see com.rabbitmq.client.AMQP.Exchange.Bind
                 * @see com.rabbitmq.client.AMQP.Exchange.BindOk
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeBind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.BindOk
                /**
                 * Like {@link Channel#exchangeBind(String, String, String, java.util.Map)} but sets nowait parameter
                 * to true and returns void (as there will be no response from the server).
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeBindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Unbind an exchange from an exchange, with no extra arguments.
                 * @see com.rabbitmq.client.AMQP.Exchange.Bind
                 * @see com.rabbitmq.client.AMQP.Exchange.BindOk
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Exchange.UnbindOk
                /**
                 * Unbind an exchange from an exchange.
                 * @see com.rabbitmq.client.AMQP.Exchange.Bind
                 * @see com.rabbitmq.client.AMQP.Exchange.BindOk
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeUnbind(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Exchange.UnbindOk
                /**
                 * Same as {@link Channel#exchangeUnbind(String, String, String, java.util.Map)} but sets no-wait parameter to true
                 * and returns nothing (as there will be no response from the server).
                 * @param destination the name of the exchange to which messages flow across the binding
                 * @param source the name of the exchange from which messages flow across the binding
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                exchangeUnbindNoWait(destination: java.lang.String | string, source: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Actively declare a server-named exclusive, autodelete, non-durable queue.
                 * The name of the new queue is held in the "queue" field of the {@link com.rabbitmq.client.AMQP.Queue.DeclareOk} result.
                 * @see com.rabbitmq.client.AMQP.Queue.Declare
                 * @see com.rabbitmq.client.AMQP.Queue.DeclareOk
                 * @return a declaration-confirm method to indicate the queue was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDeclare(): com.rabbitmq.client.AMQP.Queue.DeclareOk
                /**
                 * Declare a queue
                 * @see com.rabbitmq.client.AMQP.Queue.Declare
                 * @see com.rabbitmq.client.AMQP.Queue.DeclareOk
                 * @param queue the name of the queue
                 * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                 * @param exclusive true if we are declaring an exclusive queue (restricted to this connection)
                 * @param autoDelete true if we are declaring an autodelete queue (server will delete it when no longer in use)
                 * @param arguments other properties (construction arguments) for the queue
                 * @return a declaration-confirm method to indicate the queue was successfully declared
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDeclare(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.DeclareOk
                /**
                 * Like {@link Channel#queueDeclare(String, boolean, boolean, boolean, java.util.Map)} but sets nowait
                 * flag to true and returns no result (as there will be no response from the server).
                 * @param queue the name of the queue
                 * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                 * @param exclusive true if we are declaring an exclusive queue (restricted to this connection)
                 * @param autoDelete true if we are declaring an autodelete queue (server will delete it when no longer in use)
                 * @param arguments other properties (construction arguments) for the queue
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDeclareNoWait(queue: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Declare a queue passively; i.e., check if it exists.  In AMQP
                 * 0-9-1, all arguments aside from nowait are ignored; and sending
                 * nowait makes this method a no-op, so we default it to false.
                 * @see com.rabbitmq.client.AMQP.Queue.Declare
                 * @see com.rabbitmq.client.AMQP.Queue.DeclareOk
                 * @param queue the name of the queue
                 * @return a declaration-confirm method to indicate the queue exists
                 * @throws java.io.IOException if an error is encountered,
                 *  including if the queue does not exist and if the queue is
                 *  exclusively owned by another connection.
                 */
                // @ts-ignore
                queueDeclarePassive(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeclareOk
                /**
                 * Delete a queue, without regard for whether it is in use or has messages on it
                 * @see com.rabbitmq.client.AMQP.Queue.Delete
                 * @see com.rabbitmq.client.AMQP.Queue.DeleteOk
                 * @param queue the name of the queue
                 * @return a deletion-confirm method to indicate the queue was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDelete(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.DeleteOk
                /**
                 * Delete a queue
                 * @see com.rabbitmq.client.AMQP.Queue.Delete
                 * @see com.rabbitmq.client.AMQP.Queue.DeleteOk
                 * @param queue the name of the queue
                 * @param ifUnused true if the queue should be deleted only if not in use
                 * @param ifEmpty true if the queue should be deleted only if empty
                 * @return a deletion-confirm method to indicate the queue was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDelete(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): com.rabbitmq.client.AMQP.Queue.DeleteOk
                /**
                 * Like {@link Channel#queueDelete(String, boolean, boolean)} but sets nowait parameter
                 * to true and returns nothing (as there will be no response from the server).
                 * @see com.rabbitmq.client.AMQP.Queue.Delete
                 * @see com.rabbitmq.client.AMQP.Queue.DeleteOk
                 * @param queue the name of the queue
                 * @param ifUnused true if the queue should be deleted only if not in use
                 * @param ifEmpty true if the queue should be deleted only if empty
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueDeleteNoWait(queue: java.lang.String | string, ifUnused: boolean, ifEmpty: boolean): void
                /**
                 * Bind a queue to an exchange, with no extra arguments.
                 * @see com.rabbitmq.client.AMQP.Queue.Bind
                 * @see com.rabbitmq.client.AMQP.Queue.BindOk
                 * @param queue the name of the queue
                 * @param exchange the name of the exchange
                 * @param routingKey the routing key to use for the binding
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.BindOk
                /**
                 * Bind a queue to an exchange.
                 * @see com.rabbitmq.client.AMQP.Queue.Bind
                 * @see com.rabbitmq.client.AMQP.Queue.BindOk
                 * @param queue the name of the queue
                 * @param exchange the name of the exchange
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @return a binding-confirm method if the binding was successfully created
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueBind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.BindOk
                /**
                 * Same as {@link Channel#queueBind(String, String, String, java.util.Map)} but sets nowait
                 * parameter to true and returns void (as there will be no response
                 * from the server).
                 * @param queue the name of the queue
                 * @param exchange the name of the exchange
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueBindNoWait(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                /**
                 * Unbinds a queue from an exchange, with no extra arguments.
                 * @see com.rabbitmq.client.AMQP.Queue.Unbind
                 * @see com.rabbitmq.client.AMQP.Queue.UnbindOk
                 * @param queue the name of the queue
                 * @param exchange the name of the exchange
                 * @param routingKey the routing key to use for the binding
                 * @return an unbinding-confirm method if the binding was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.UnbindOk
                /**
                 * Unbind a queue from an exchange.
                 * @see com.rabbitmq.client.AMQP.Queue.Unbind
                 * @see com.rabbitmq.client.AMQP.Queue.UnbindOk
                 * @param queue the name of the queue
                 * @param exchange the name of the exchange
                 * @param routingKey the routing key to use for the binding
                 * @param arguments other properties (binding parameters)
                 * @return an unbinding-confirm method if the binding was successfully deleted
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queueUnbind(queue: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): com.rabbitmq.client.AMQP.Queue.UnbindOk
                /**
                 * Purges the contents of the given queue.
                 * @see com.rabbitmq.client.AMQP.Queue.Purge
                 * @see com.rabbitmq.client.AMQP.Queue.PurgeOk
                 * @param queue the name of the queue
                 * @return a purge-confirm method if the purge was executed successfully
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                queuePurge(queue: java.lang.String | string): com.rabbitmq.client.AMQP.Queue.PurgeOk
                /**
                 * Retrieve a message from a queue using {@link com.rabbitmq.client.AMQP.Basic.Get}
                 * @see com.rabbitmq.client.AMQP.Basic.Get
                 * @see com.rabbitmq.client.AMQP.Basic.GetOk
                 * @see com.rabbitmq.client.AMQP.Basic.GetEmpty
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @return a {#link GetResponse} containing the retrieved message data
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicGet(queue: java.lang.String | string, autoAck: boolean): com.rabbitmq.client.GetResponse
                /**
                 * Acknowledge one or several received
                 * messages. Supply the deliveryTag from the {@link com.rabbitmq.client.AMQP.Basic.GetOk}
                 * or {@link com.rabbitmq.client.AMQP.Basic.Deliver} method
                 * containing the received message being acknowledged.
                 * @see com.rabbitmq.client.AMQP.Basic.Ack
                 * @param deliveryTag the tag from the received {#link com.rabbitmq.client.AMQP.Basic.GetOk} or {@link com.rabbitmq.client.AMQP.Basic.Deliver}
                 * @param multiple true to acknowledge all messages up to and
                 *  including the supplied delivery tag; false to acknowledge just
                 *  the supplied delivery tag.
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicAck(deliveryTag: number /*long*/, multiple: boolean): void
                /**
                 * Reject one or several received messages.
                 * Supply the <code>deliveryTag</code> from the {@link com.rabbitmq.client.AMQP.Basic.GetOk}
                 * or {@link com.rabbitmq.client.AMQP.Basic.GetOk} method containing the message to be rejected.
                 * @see com.rabbitmq.client.AMQP.Basic.Nack
                 * @param deliveryTag the tag from the received {#link com.rabbitmq.client.AMQP.Basic.GetOk} or {@link com.rabbitmq.client.AMQP.Basic.Deliver}
                 * @param multiple true to reject all messages up to and including
                 *  the supplied delivery tag; false to reject just the supplied
                 *  delivery tag.
                 * @param requeue true if the rejected message(s) should be requeued rather
                 *  than discarded/dead-lettered
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicNack(deliveryTag: number /*long*/, multiple: boolean, requeue: boolean): void
                /**
                 * Reject a message. Supply the deliveryTag from the {@link com.rabbitmq.client.AMQP.Basic.GetOk}
                 * or {@link com.rabbitmq.client.AMQP.Basic.Deliver} method
                 * containing the received message being rejected.
                 * @see com.rabbitmq.client.AMQP.Basic.Reject
                 * @param deliveryTag the tag from the received {#link com.rabbitmq.client.AMQP.Basic.GetOk} or {@link com.rabbitmq.client.AMQP.Basic.Deliver}
                 * @param requeue true if the rejected message should be requeued rather than discarded/dead-lettered
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                basicReject(deliveryTag: number /*long*/, requeue: boolean): void
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * explicit acknowledgement and a server-generated consumerTag.
                 * @param queue the name of the queue
                 * @param callback an interface to the consumer object
                 * @return the consumerTag generated by the server
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * explicit acknowledgement and a server-generated consumerTag.
                 * Provide access only to <code>basic.deliver</code> and
                 * <code>basic.cancel</code> AMQP methods (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * explicit acknowledgement and a server-generated consumerTag.
                 * Provide access only to <code>basic.deliver</code> and
                 * shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param deliverCallback callback when a message is delivered
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * explicit acknowledgement and a server-generated consumerTag.
                 * Provide access to <code>basic.deliver</code>, <code>basic.cancel</code>
                 * and shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param callback an interface to the consumer object
                 * @return the consumerTag generated by the server
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, callback: com.rabbitmq.client.Consumer): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag.
                 * Provide access only to <code>basic.deliver</code> and
                 * <code>basic.cancel</code> AMQP methods (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag.
                 * Provide access only to <code>basic.deliver</code> and
                 * shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param deliverCallback callback when a message is delivered
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag.
                 * Provide access to <code>basic.deliver</code>, <code>basic.cancel</code>
                 * and shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag and specified arguments.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param arguments a set of arguments for the consume
                 * @param callback an interface to the consumer object
                 * @return the consumerTag generated by the server
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag and specified arguments.
                 * Provide access only to <code>basic.deliver</code> and
                 * <code>basic.cancel</code> AMQP methods (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag and specified arguments.
                 * Provide access only to <code>basic.deliver</code> and
                 * shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer, with
                 * a server-generated consumerTag and specified arguments.
                 * Provide access to <code>basic.deliver</code>, <code>basic.cancel</code>
                 * and shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag generated by the server
                 * @throws IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicAck
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param callback an interface to the consumer object
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, callback: com.rabbitmq.client.Consumer): string
                /**
                 * Start a non-nolocal, non-exclusive consumer.
                 * Provide access only to <code>basic.deliver</code> and
                 * <code>basic.cancel</code> AMQP methods (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer.
                 * Provide access only to <code>basic.deliver</code> and
                 * shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param deliverCallback callback when a message is delivered
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a non-nolocal, non-exclusive consumer.
                 * Provide access to <code>basic.deliver</code>, <code>basic.cancel</code>
                 * and shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @see #basicConsume(String, boolean, String, boolean, boolean, Map, Consumer)
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a consumer. Calls the consumer's {@link Consumer#handleConsumeOk}
                 * method.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param noLocal True if the server should not deliver to this consumer
                 *  messages published on this channel's connection. Note that the RabbitMQ server does not support this flag.
                 * @param exclusive true if this is an exclusive consumer
                 * @param callback an interface to the consumer object
                 * @param arguments a set of arguments for the consume
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, callback: com.rabbitmq.client.Consumer): string
                /**
                 * Start a consumer. Calls the consumer's {@link Consumer#handleConsumeOk}
                 * method.
                 * Provide access only to <code>basic.deliver</code> and
                 * <code>basic.cancel</code> AMQP methods (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param noLocal True if the server should not deliver to this consumer
                 *  messages published on this channel's connection. Note that the RabbitMQ server does not support this flag.
                 * @param exclusive true if this is an exclusive consumer
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback): string
                /**
                 * Start a consumer. Calls the consumer's {@link Consumer#handleConsumeOk}
                 * method.
                 * Provide access only to <code>basic.deliver</code> and
                 * shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param noLocal True if the server should not deliver to this consumer
                 *  messages published on this channel's connection. Note that the RabbitMQ server does not support this flag.
                 * @param exclusive true if this is an exclusive consumer
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Start a consumer. Calls the consumer's {@link Consumer#handleConsumeOk}
                 * method.
                 * Provide access to <code>basic.deliver</code>, <code>basic.cancel</code>
                 * and shutdown signal callbacks (which is sufficient
                 * for most cases). See methods with a {@link Consumer} argument
                 * to have access to all the application callbacks.
                 * @param queue the name of the queue
                 * @param autoAck true if the server should consider messages
                 *  acknowledged once delivered; false if the server should expect
                 *  explicit acknowledgements
                 * @param consumerTag a client-generated consumer tag to establish context
                 * @param noLocal True if the server should not deliver to this consumer
                 *  messages published on this channel's connection. Note that the RabbitMQ server does not support this flag.
                 * @param exclusive true if this is an exclusive consumer
                 * @param arguments a set of arguments for the consume
                 * @param deliverCallback callback when a message is delivered
                 * @param cancelCallback callback when the consumer is cancelled
                 * @param shutdownSignalCallback callback when the channel/connection is shut down
                 * @return the consumerTag associated with the new consumer
                 * @throws java.io.IOException if an error is encountered
                 * @see com.rabbitmq.client.AMQP.Basic.Consume
                 * @see com.rabbitmq.client.AMQP.Basic.ConsumeOk
                 * @since 5.0
                 */
                // @ts-ignore
                basicConsume(queue: java.lang.String | string, autoAck: boolean, consumerTag: java.lang.String | string, noLocal: boolean, exclusive: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>, deliverCallback: com.rabbitmq.client.DeliverCallback, cancelCallback: com.rabbitmq.client.CancelCallback, shutdownSignalCallback: com.rabbitmq.client.ConsumerShutdownSignalCallback): string
                /**
                 * Cancel a consumer. Calls the consumer's {@link Consumer#handleCancelOk}
                 * method.
                 * @param consumerTag a client- or server-generated consumer tag to establish context
                 * @throws IOException if an error is encountered, or if the consumerTag is unknown
                 * @see com.rabbitmq.client.AMQP.Basic.Cancel
                 * @see com.rabbitmq.client.AMQP.Basic.CancelOk
                 */
                // @ts-ignore
                basicCancel(consumerTag: java.lang.String | string): void
                /**
                 * <p>
                 * Ask the broker to resend unacknowledged messages.  In 0-8
                 * basic.recover is asynchronous; in 0-9-1 it is synchronous, and
                 * the new, deprecated method basic.recover_async is asynchronous.
                 * </p>
                 * Equivalent to calling <code>basicRecover(true)</code>, messages
                 * will be requeued and possibly delivered to a different consumer.
                 * @see #basicRecover(boolean)
                 */
                // @ts-ignore
                basicRecover(): com.rabbitmq.client.AMQP.Basic.RecoverOk
                /**
                 * Ask the broker to resend unacknowledged messages.  In 0-8
                 * basic.recover is asynchronous; in 0-9-1 it is synchronous, and
                 * the new, deprecated method basic.recover_async is asynchronous.
                 * @param requeue If true, messages will be requeued and possibly
                 *  delivered to a different consumer. If false, messages will be
                 *  redelivered to the same consumer.
                 */
                // @ts-ignore
                basicRecover(requeue: boolean): com.rabbitmq.client.AMQP.Basic.RecoverOk
                /**
                 * Enables TX mode on this channel.
                 * @see com.rabbitmq.client.AMQP.Tx.Select
                 * @see com.rabbitmq.client.AMQP.Tx.SelectOk
                 * @return a transaction-selection method to indicate the transaction was successfully initiated
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                txSelect(): com.rabbitmq.client.AMQP.Tx.SelectOk
                /**
                 * Commits a TX transaction on this channel.
                 * @see com.rabbitmq.client.AMQP.Tx.Commit
                 * @see com.rabbitmq.client.AMQP.Tx.CommitOk
                 * @return a transaction-commit method to indicate the transaction was successfully committed
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                txCommit(): com.rabbitmq.client.AMQP.Tx.CommitOk
                /**
                 * Rolls back a TX transaction on this channel.
                 * @see com.rabbitmq.client.AMQP.Tx.Rollback
                 * @see com.rabbitmq.client.AMQP.Tx.RollbackOk
                 * @return a transaction-rollback method to indicate the transaction was successfully rolled back
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                txRollback(): com.rabbitmq.client.AMQP.Tx.RollbackOk
                /**
                 * Enables publisher acknowledgements on this channel.
                 * @see com.rabbitmq.client.AMQP.Confirm.Select
                 * @throws java.io.IOException if an error is encountered
                 */
                // @ts-ignore
                confirmSelect(): com.rabbitmq.client.AMQP.Confirm.SelectOk
                /**
                 * When in confirm mode, returns the sequence number of the next
                 * message to be published.
                 * @return the sequence number of the next message to be published
                 */
                // @ts-ignore
                getNextPublishSeqNo(): number /*long*/
                /**
                 * Wait until all messages published since the last call have been
                 * either ack'd or nack'd by the broker.  Note, when called on a
                 * non-Confirm channel, waitForConfirms throws an IllegalStateException.
                 * @return whether all the messages were ack'd (and none were nack'd)
                 * @throws java.lang.IllegalStateException
                 */
                // @ts-ignore
                waitForConfirms(): boolean
                /**
                 * Wait until all messages published since the last call have been
                 * either ack'd or nack'd by the broker; or until timeout elapses.
                 * If the timeout expires a TimeoutException is thrown.  When
                 * called on a non-Confirm channel, waitForConfirms throws an
                 * IllegalStateException.
                 * @return whether all the messages were ack'd (and none were nack'd)
                 * @throws java.lang.IllegalStateException
                 */
                // @ts-ignore
                waitForConfirms(timeout: number /*long*/): boolean
                /**
                 * Wait until all messages published since the last call have
                 * been either ack'd or nack'd by the broker.  If any of the
                 * messages were nack'd, waitForConfirmsOrDie will throw an
                 * IOException.  When called on a non-Confirm channel, it will
                 * throw an IllegalStateException.
                 * @throws java.lang.IllegalStateException
                 */
                // @ts-ignore
                waitForConfirmsOrDie(): void
                /**
                 * Wait until all messages published since the last call have
                 * been either ack'd or nack'd by the broker; or until timeout elapses.
                 * If the timeout expires a TimeoutException is thrown.  If any of the
                 * messages were nack'd, waitForConfirmsOrDie will throw an
                 * IOException.  When called on a non-Confirm channel, it will
                 * throw an IllegalStateException.
                 * @throws java.lang.IllegalStateException
                 */
                // @ts-ignore
                waitForConfirmsOrDie(timeout: number /*long*/): void
                /**
                 * Asynchronously send a method over this channel.
                 * @param method method to transmit over this channel.
                 * @throws IOException Problem transmitting method.
                 */
                // @ts-ignore
                asyncRpc(method: com.rabbitmq.client.Method): void
                /**
                 * Synchronously send a method over this channel.
                 * @param method method to transmit over this channel.
                 * @return command response to method. Caller should cast as appropriate.
                 * @throws IOException Problem transmitting method.
                 */
                // @ts-ignore
                rpc(method: com.rabbitmq.client.Method): com.rabbitmq.client.Command
                /**
                 * Returns the number of messages in a queue ready to be delivered
                 * to consumers. This method assumes the queue exists. If it doesn't,
                 * the channels will be closed with an exception.
                 * @param queue the name of the queue
                 * @return the number of messages in ready state
                 * @throws IOException Problem transmitting method.
                 */
                // @ts-ignore
                messageCount(queue: java.lang.String | string): number /*long*/
                /**
                 * Returns the number of consumers on a queue.
                 * This method assumes the queue exists. If it doesn't,
                 * the channel will be closed with an exception.
                 * @param queue the name of the queue
                 * @return the number of consumers
                 * @throws IOException Problem transmitting method.
                 */
                // @ts-ignore
                consumerCount(queue: java.lang.String | string): number /*long*/
                /**
                 * Asynchronously send a method over this channel.
                 * @param method method to transmit over this channel.
                 * @return a completable future that completes when the result is received
                 * @throws IOException Problem transmitting method.
                 */
                // @ts-ignore
                asyncCompletableRpc(method: com.rabbitmq.client.Method): java.util.concurrent.CompletableFuture<com.rabbitmq.client.Command>
            }
        }
    }
}
