declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Constant holder class with useful static instances of {@link AMQContentHeader}.
             * These are intended for use with {@link Channel#basicPublish} and other Channel methods.
             */
            // @ts-ignore
            class MessageProperties extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Empty basic properties, with no fields set
                 */
                // @ts-ignore
                public static readonly MINIMAL_BASIC: com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Empty basic properties, with only deliveryMode set to 2 (persistent)
                 */
                // @ts-ignore
                public static readonly MINIMAL_PERSISTENT_BASIC: com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Content-type "application/octet-stream", deliveryMode 1 (nonpersistent), priority zero
                 */
                // @ts-ignore
                public static readonly BASIC: com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Content-type "application/octet-stream", deliveryMode 2 (persistent), priority zero
                 */
                // @ts-ignore
                public static readonly PERSISTENT_BASIC: com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Content-type "text/plain", deliveryMode 1 (nonpersistent), priority zero
                 */
                // @ts-ignore
                public static readonly TEXT_PLAIN: com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Content-type "text/plain", deliveryMode 2 (persistent), priority zero
                 */
                // @ts-ignore
                public static readonly PERSISTENT_TEXT_PLAIN: com.rabbitmq.client.AMQP.BasicProperties
            }
        }
    }
}
