declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Public API: Interface to an AMQ connection. See the see the <a href="https://www.amqp.org/">spec</a> for details.
             * <p>
             * To connect to a broker, fill in a {@link ConnectionFactory} and use a {@link ConnectionFactory} as follows:
             * <pre>
             * ConnectionFactory factory = new ConnectionFactory();
             * factory.setHost(hostName);
             * factory.setPort(portNumber);
             * factory.setVirtualHost(virtualHost);
             * factory.setUsername(username);
             * factory.setPassword(password);
             * Connection conn = factory.newConnection();
             * // Then open a channel:
             * Channel channel = conn.createChannel();
             * </pre>
             * Or, more compactly:
             * <pre>
             * ConnectionFactory factory = new ConnectionFactory();
             * factory.setUri("amqp://username:password@hostName:portNumber/virtualHost");
             * Connection conn = factory.newConnection();
             * Channel channel = conn.createChannel()
             * </pre>
             * Current implementations are thread-safe for code at the client API level,
             * and in fact thread-safe internally except for code within RPC calls.
             */
            // @ts-ignore
            interface Connection extends com.rabbitmq.client.ShutdownNotifier, java.io.Closeable {
                /**
                 * Retrieve the host.
                 * @return the hostname of the peer we're connected to.
                 */
                // @ts-ignore
                getAddress(): java.net.InetAddress
                /**
                 * Retrieve the port number.
                 * @return the port number of the peer we're connected to.
                 */
                // @ts-ignore
                getPort(): number /*int*/
                /**
                 * Get the negotiated maximum channel number. Usable channel
                 * numbers range from 1 to this number, inclusive.
                 * @return the maximum channel number permitted for this connection.
                 */
                // @ts-ignore
                getChannelMax(): number /*int*/
                /**
                 * Get the negotiated maximum frame size.
                 * @return the maximum frame size, in octets; zero if unlimited
                 */
                // @ts-ignore
                getFrameMax(): number /*int*/
                /**
                 * Get the negotiated heartbeat interval.
                 * @return the heartbeat interval, in seconds; zero if none
                 */
                // @ts-ignore
                getHeartbeat(): number /*int*/
                /**
                 * Get a copy of the map of client properties sent to the server
                 * @return a copy of the map of client properties
                 */
                // @ts-ignore
                getClientProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Returns client-provided connection name, if any. Note that the value
                 * returned does not uniquely identify a connection and cannot be used
                 * as a connection identifier in HTTP API requests.
                 * @return client-provided connection name, if any
                 * @see ConnectionFactory#newConnection(Address[], String)
                 * @see ConnectionFactory#newConnection(ExecutorService, Address[], String)
                 */
                // @ts-ignore
                getClientProvidedName(): string
                /**
                 * Retrieve the server properties.
                 * @return a map of the server properties. This typically includes the product name and version of the server.
                 */
                // @ts-ignore
                getServerProperties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Create a new channel, using an internally allocated channel number.
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the channel returned by this method will be {@link Recoverable}.
                 * <p>
                 * Use {@link #openChannel()} if you want to use an {@link Optional} to deal
                 * with a {@null} value.
                 * @return a new channel descriptor, or null if none is available
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                createChannel(): com.rabbitmq.client.Channel
                /**
                 * Create a new channel, using the specified channel number if possible.
                 * <p>
                 * Use {@link #openChannel(int)} if you want to use an {@link Optional} to deal
                 * with a {@null} value.
                 * @param channelNumber the channel number to allocate
                 * @return a new channel descriptor, or null if this channel number is already in use
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                createChannel(channelNumber: number /*int*/): com.rabbitmq.client.Channel
                /**
                 * Create a new channel wrapped in an {@link Optional}.
                 * The channel number is allocated internally.
                 * <p>
                 * If <a href="https://www.rabbitmq.com/api-guide.html#recovery">automatic connection recovery</a>
                 * is enabled, the channel returned by this method will be {@link Recoverable}.
                 * <p>
                 * Use {@link #createChannel()} to return directly a {@link Channel} or {@code null}.
                 * @return an {#link Optional} containing the channel;
                 *  never {@code null} but potentially empty if no channel is available
                 * @throws IOException if an I/O problem is encountered
                 * @see #createChannel()
                 * @since 5.6.0
                 */
                // @ts-ignore
                openChannel(): java.util.Optional<com.rabbitmq.client.Channel>
                /**
                 * Create a new channel, using the specified channel number if possible.
                 * <p>
                 * Use {@link #createChannel(int)} to return directly a {@link Channel} or {@code null}.
                 * @param channelNumber the channel number to allocate
                 * @return an {#link Optional} containing the channel,
                 *  never {@code null} but potentially empty if this channel number is already in use
                 * @throws IOException if an I/O problem is encountered
                 * @see #createChannel(int)
                 * @since 5.6.0
                 */
                // @ts-ignore
                openChannel(channelNumber: number /*int*/): java.util.Optional<com.rabbitmq.client.Channel>
                /**
                 * Close this connection and all its channels
                 * with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * Waits for all the close operations to complete.
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                close(): void
                /**
                 * Close this connection and all its channels.
                 * Waits for all the close operations to complete.
                 * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                 * @param closeMessage a message indicating the reason for closing the connection
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                close(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                /**
                 * Close this connection and all its channels
                 * with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * This method behaves in a similar way as {@link #close()}, with the only difference
                 * that it waits with a provided timeout for all the close operations to
                 * complete. When timeout is reached the socket is forced to close.
                 * @param timeout timeout (in milliseconds) for completing all the close-related
                 *  operations, use -1 for infinity
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                close(timeout: number /*int*/): void
                /**
                 * Close this connection and all its channels.
                 * Waits with the given timeout for all the close operations to complete.
                 * When timeout is reached the socket is forced to close.
                 * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                 * @param closeMessage a message indicating the reason for closing the connection
                 * @param timeout timeout (in milliseconds) for completing all the close-related
                 *  operations, use -1 for infinity
                 * @throws IOException if an I/O problem is encountered
                 */
                // @ts-ignore
                close(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
                /**
                 * Abort this connection and all its channels
                 * with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * Forces the connection to close.
                 * Any encountered exceptions in the close operations are silently discarded.
                 */
                // @ts-ignore
                abort(): void
                /**
                 * Abort this connection and all its channels.
                 * Forces the connection to close and waits for all the close operations to complete.
                 * Any encountered exceptions in the close operations are silently discarded.
                 * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                 * @param closeMessage a message indicating the reason for closing the connection
                 */
                // @ts-ignore
                abort(closeCode: number /*int*/, closeMessage: java.lang.String | string): void
                /**
                 * Abort this connection and all its channels
                 * with the {@link com.rabbitmq.client.AMQP#REPLY_SUCCESS} close code
                 * and message 'OK'.
                 * This method behaves in a similar way as {@link #abort()}, with the only difference
                 * that it waits with a provided timeout for all the close operations to
                 * complete. When timeout is reached the socket is forced to close.
                 * @param timeout timeout (in milliseconds) for completing all the close-related
                 *  operations, use -1 for infinity
                 */
                // @ts-ignore
                abort(timeout: number /*int*/): void
                /**
                 * Abort this connection and all its channels.
                 * Forces the connection to close and waits with the given timeout
                 * for all the close operations to complete. When timeout is reached
                 * the socket is forced to close.
                 * Any encountered exceptions in the close operations are silently discarded.
                 * @param closeCode the close code (See under "Reply Codes" in the AMQP specification)
                 * @param closeMessage a message indicating the reason for closing the connection
                 * @param timeout timeout (in milliseconds) for completing all the close-related
                 *  operations, use -1 for infinity
                 */
                // @ts-ignore
                abort(closeCode: number /*int*/, closeMessage: java.lang.String | string, timeout: number /*int*/): void
                /**
                 * Add a {@link BlockedListener}.
                 * @param listener the listener to add
                 */
                // @ts-ignore
                addBlockedListener(listener: com.rabbitmq.client.BlockedListener): void
                /**
                 * Add a lambda-based {@link BlockedListener}.
                 * @see BlockedListener
                 * @see BlockedCallback
                 * @see UnblockedCallback
                 * @param blockedCallback the callback when the connection is blocked
                 * @param unblockedCallback the callback when the connection is unblocked
                 * @return the listener that wraps the callback
                 */
                // @ts-ignore
                addBlockedListener(blockedCallback: com.rabbitmq.client.BlockedCallback, unblockedCallback: com.rabbitmq.client.UnblockedCallback): com.rabbitmq.client.BlockedListener
                /**
                 * Remove a {@link BlockedListener}.
                 * @param listener the listener to remove
                 * @return <code><b>true</b></code> if the listener was found and removed,
                 *  <code><b>false</b></code> otherwise
                 */
                // @ts-ignore
                removeBlockedListener(listener: com.rabbitmq.client.BlockedListener): boolean
                /**
                 * Remove all {@link BlockedListener}s.
                 */
                // @ts-ignore
                clearBlockedListeners(): void
                /**
                 * Get the exception handler.
                 * @see com.rabbitmq.client.ExceptionHandler
                 */
                // @ts-ignore
                getExceptionHandler(): com.rabbitmq.client.ExceptionHandler
                /**
                 * Returns a unique ID for this connection.
                 * This ID must be unique, otherwise some services
                 * like the metrics collector won't work properly.
                 * This ID doesn't have to be provided by the client,
                 * services that require it will be assigned automatically
                 * if not set.
                 * @return unique ID for this connection.
                 */
                // @ts-ignore
                getId(): string
                /**
                 * Sets a unique ID for this connection.
                 * This ID must be unique, otherwise some services
                 * like the metrics collector won't work properly.
                 * This ID doesn't have to be provided by the client,
                 * services that require it will be assigned automatically
                 * if not set.
                 */
                // @ts-ignore
                setId(id: java.lang.String | string): void
            }
        }
    }
}
