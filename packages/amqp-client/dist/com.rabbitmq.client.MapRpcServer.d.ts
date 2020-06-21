declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Subclass of RpcServer which uses AMQP wire-format encoded tables as
             * requests and replies.
             */
            // @ts-ignore
            class MapRpcServer extends com.rabbitmq.client.RpcServer {
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel)
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, queueName: java.lang.String | string)
                /**
                 * Overridden to delegate to handleMapCall.
                 */
                // @ts-ignore
                public handleCall(requestBody: number /*byte*/[], replyProperties: com.rabbitmq.client.AMQP.BasicProperties): number /*byte*/[]
                // @ts-ignore
                public static decode(requestBody: number /*byte*/[]): java.util.Map<java.lang.String | string, java.lang.Object | any>
                // @ts-ignore
                public static encode(reply: java.util.Map<java.lang.String | string, java.lang.Object | any>): number /*byte*/[]
                /**
                 * Delegates to {@link MapRpcServer#handleMapCall(Map)}.
                 */
                // @ts-ignore
                public handleMapCall(request: java.util.Map<java.lang.String | string, java.lang.Object | any>, replyProperties: com.rabbitmq.client.AMQP.BasicProperties): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Default implementation override in subclasses. Returns the empty string.
                 */
                // @ts-ignore
                public handleMapCall(request: java.util.Map<java.lang.String | string, java.lang.Object | any>): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Overridden to delegate to handleMapCast.
                 */
                // @ts-ignore
                public handleCast(requestBody: number /*byte*/[]): void
                /**
                 * Default implementation override in subclasses. Does nothing.
                 */
                // @ts-ignore
                public handleMapCast(requestBody: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
            }
        }
    }
}
