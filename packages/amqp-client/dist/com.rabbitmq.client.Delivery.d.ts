declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates an arbitrary message - simple "bean" holder structure.
             */
            // @ts-ignore
            class Delivery extends java.lang.Object {
                // @ts-ignore
                constructor(envelope: com.rabbitmq.client.Envelope, properties: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[])
                /**
                 * Retrieve the message envelope.
                 * @return the message envelope
                 */
                // @ts-ignore
                public getEnvelope(): com.rabbitmq.client.Envelope
                /**
                 * Retrieve the message properties.
                 * @return the message properties
                 */
                // @ts-ignore
                public getProperties(): com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Retrieve the message body.
                 * @return the message body
                 */
                // @ts-ignore
                public getBody(): number /*byte*/[]
            }
        }
    }
}
