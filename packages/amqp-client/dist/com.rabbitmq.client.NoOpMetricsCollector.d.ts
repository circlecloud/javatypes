declare namespace com {
    namespace rabbitmq {
        namespace client {
            // @ts-ignore
            class NoOpMetricsCollector extends java.lang.Object implements com.rabbitmq.client.MetricsCollector {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public newConnection(connection: com.rabbitmq.client.Connection): void
                // @ts-ignore
                public closeConnection(connection: com.rabbitmq.client.Connection): void
                // @ts-ignore
                public newChannel(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                public closeChannel(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                public basicAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                public basicNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                // @ts-ignore
                public basicReject(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/): void
                // @ts-ignore
                public basicConsume(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string, autoAck: boolean): void
                // @ts-ignore
                public basicCancel(channel: com.rabbitmq.client.Channel, consumerTag: java.lang.String | string): void
                // @ts-ignore
                public basicPublish(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                public basicPublishFailure(channel: com.rabbitmq.client.Channel, cause: java.lang.Throwable | Error): void
                // @ts-ignore
                public basicPublishAck(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                public basicPublishNack(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, multiple: boolean): void
                // @ts-ignore
                public basicPublishUnrouted(channel: com.rabbitmq.client.Channel): void
                // @ts-ignore
                public consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, autoAck: boolean): void
                // @ts-ignore
                public consumedMessage(channel: com.rabbitmq.client.Channel, deliveryTag: number /*long*/, consumerTag: java.lang.String | string): void
            }
        }
    }
}
