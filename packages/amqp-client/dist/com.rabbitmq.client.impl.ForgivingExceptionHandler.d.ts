declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * An implementation of {@link com.rabbitmq.client.ExceptionHandler} that does not
                 * close channels on unhandled consumer and listener exception.
                 * Used by {@link AMQConnection}.
                 * @see ExceptionHandler
                 * @see com.rabbitmq.client.ConnectionFactory#setExceptionHandler(com.rabbitmq.client.ExceptionHandler)
                 */
                // @ts-ignore
                class ForgivingExceptionHandler extends java.lang.Object implements com.rabbitmq.client.ExceptionHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handleUnexpectedConnectionDriverException(conn: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleReturnListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleConfirmListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleBlockedListenerException(connection: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleConsumerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, consumer: com.rabbitmq.client.Consumer, consumerTag: java.lang.String | string, methodName: java.lang.String | string): void
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    public handleConnectionRecoveryException(conn: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    public handleChannelRecoveryException(ch: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                    /**
                     * @since 3.3.0
                     */
                    // @ts-ignore
                    public handleTopologyRecoveryException(conn: com.rabbitmq.client.Connection, ch: com.rabbitmq.client.Channel, exception: com.rabbitmq.client.TopologyRecoveryException): void
                    // @ts-ignore
                    handleChannelKiller(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, what: java.lang.String | string): void
                    // @ts-ignore
                    handleConnectionKiller(connection: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error, what: java.lang.String | string): void
                    // @ts-ignore
                    log(message: java.lang.String | string, e: java.lang.Throwable | Error): void
                }
            }
        }
    }
}
