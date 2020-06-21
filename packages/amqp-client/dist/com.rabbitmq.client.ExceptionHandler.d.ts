declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Interface to an exception-handling object.
             */
            // @ts-ignore
            interface ExceptionHandler {
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has an exception
                 * signalled to it that it can't otherwise deal with.
                 * @param conn the Connection that caught the exception
                 * @param exception the exception caught in the driver thread
                 */
                // @ts-ignore
                handleUnexpectedConnectionDriverException(conn: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has called a
                 * ReturnListener's handleReturn method, and that method has
                 * thrown an exception.
                 * @param channel the ChannelN that held the ReturnListener
                 * @param exception the exception thrown by ReturnListener.handleReturn
                 */
                // @ts-ignore
                handleReturnListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has called a
                 * ConfirmListener's handleAck or handleNack method, and that
                 * method has thrown an exception.
                 * @param channel the ChannelN that held the ConfirmListener
                 * @param exception the exception thrown by ConfirmListener.handleAck
                 */
                // @ts-ignore
                handleConfirmListenerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has called a
                 * BlockedListener's method, and that method has
                 * thrown an exception.
                 * @param connection the Connection that held the BlockedListener
                 * @param exception the exception thrown by the BlockedListener
                 */
                // @ts-ignore
                handleBlockedListenerException(connection: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has called a method
                 * on a Consumer, and that method has thrown an exception.
                 * @param channel the ChannelN that held the Consumer
                 * @param exception the exception thrown by the Consumer
                 * @param consumer the Consumer that caused the fault
                 * @param consumerTag the Consumer's consumerTag
                 * @param methodName the name of the method on the Consumer that threw the exception
                 */
                // @ts-ignore
                handleConsumerException(channel: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error, consumer: com.rabbitmq.client.Consumer, consumerTag: java.lang.String | string, methodName: java.lang.String | string): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has an exception
                 * during connection recovery that it can't otherwise deal with.
                 * @param conn the Connection that caught the exception
                 * @param exception the exception caught in the driver thread
                 */
                // @ts-ignore
                handleConnectionRecoveryException(conn: com.rabbitmq.client.Connection, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has an exception
                 * during channel recovery that it can't otherwise deal with.
                 * @param ch the Channel that caught the exception
                 * @param exception the exception caught in the driver thread
                 */
                // @ts-ignore
                handleChannelRecoveryException(ch: com.rabbitmq.client.Channel, exception: java.lang.Throwable | Error): void
                /**
                 * Perform any required exception processing for the situation
                 * when the driver thread for the connection has an exception
                 * during topology (exchanges, queues, bindings, consumers) recovery
                 * that it can't otherwise deal with.
                 * @param conn the Connection that caught the exception
                 * @param ch the Channel that caught the exception. May be null.
                 * @param exception the exception caught in the driver thread
                 */
                // @ts-ignore
                handleTopologyRecoveryException(conn: com.rabbitmq.client.Connection, ch: com.rabbitmq.client.Channel, exception: com.rabbitmq.client.TopologyRecoveryException): void
            }
        }
    }
}
