declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Subclass of RpcServer which accepts UTF-8 string requests.
             */
            // @ts-ignore
            class StringRpcServer extends com.rabbitmq.client.RpcServer {
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel)
                // @ts-ignore
                constructor(channel: com.rabbitmq.client.Channel, queueName: java.lang.String | string)
                // @ts-ignore
                public static readonly STRING_ENCODING: java.lang.String | string
                /**
                 * Overridden to do UTF-8 processing, and delegate to
                 * handleStringCall. If UTF-8 is not understood by this JVM, falls
                 * back to the platform default.
                 */
                // @ts-ignore
                public handleCall(requestBody: number /*byte*/[], replyProperties: com.rabbitmq.client.AMQP.BasicProperties): number /*byte*/[]
                /**
                 * Delegates to handleStringCall(String).
                 */
                // @ts-ignore
                public handleStringCall(request: java.lang.String | string, replyProperties: com.rabbitmq.client.AMQP.BasicProperties): string
                /**
                 * Default implementation - override in subclasses. Returns the empty string.
                 */
                // @ts-ignore
                public handleStringCall(request: java.lang.String | string): string
                /**
                 * Overridden to do UTF-8 processing, and delegate to
                 * handleStringCast. If requestBody cannot be interpreted as UTF-8
                 * tries the platform default.
                 */
                // @ts-ignore
                public handleCast(requestBody: number /*byte*/[]): void
                /**
                 * Default implementation - override in subclasses. Does nothing.
                 */
                // @ts-ignore
                public handleStringCast(requestBody: java.lang.String | string): void
            }
        }
    }
}
