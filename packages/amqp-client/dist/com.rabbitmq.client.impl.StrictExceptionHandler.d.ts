declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * An implementation of {@link com.rabbitmq.client.ExceptionHandler} that does
                 * close channels on unhandled consumer exception.
                 * Used by {@link AMQConnection}.
                 * @see ExceptionHandler
                 * @see com.rabbitmq.client.ConnectionFactory#setExceptionHandler(ExceptionHandler)
                 */
                // @ts-ignore
                class StrictExceptionHandler extends com.rabbitmq.client.impl.ForgivingExceptionHandler implements com.rabbitmq.client.ExceptionHandler {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public handleReturnListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleConfirmListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleBlockedListenerException(connection: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                    // @ts-ignore
                    public handleConsumerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, consumer: com.rabbitmq.client.Consumer, consumerTag: java.lang.String | string, methodName: java.lang.String | string): void
                    // @ts-ignore
                    handleChannelKiller(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, what: java.lang.String | string): void
                    // @ts-ignore
                    handleChannelKiller(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, logMessage: java.lang.String | string, closeMessage: java.lang.String | string): void
                }
            }
        }
    }
}
