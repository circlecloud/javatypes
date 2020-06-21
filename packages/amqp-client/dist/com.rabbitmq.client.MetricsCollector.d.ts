declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Interface to gather execution data of the client.
             * Note transactions are not supported: they deal with
             * publishing and acknowledgments and the collector contract
             * assumes then that published messages and acks sent
             * in a transaction are always counted, even if the
             * transaction is rolled back.
             */
            // @ts-ignore
            interface MetricsCollector {
                // @ts-ignore
                newConnection(connection: com.rabbitmq.client.Connection): void
                // @ts-ignore
                closeConnection(connection: com.rabbitmq.client.Connection): void
                // @ts-ignore
                newChannel(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                closeChannel(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                basicPublish(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                basicPublishFailure(channel: com.rabbitmq.client.Channel, cause: java.lang.Throwable | Error): void
                // @ts-ignore
                basicPublishAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                basicPublishNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                basicPublishUnrouted(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, autoAck: boolean): void
                // @ts-ignore
                consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, consumerTag: java.lang.String | string): void
                // @ts-ignore
                basicAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                basicNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                // @ts-ignore
                basicReject(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                // @ts-ignore
                basicConsume(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string, autoAck: boolean): void
                // @ts-ignore
                basicCancel(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string): void
            }
        }
    }
}
