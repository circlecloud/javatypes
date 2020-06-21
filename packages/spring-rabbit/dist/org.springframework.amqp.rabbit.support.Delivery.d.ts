declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace support {
                    /**
                     * Encapsulates an arbitrary message - simple "bean" holder structure.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    class Delivery extends java.lang.Object {
                        // @ts-ignore
                        constructor(consumerTag: java.lang.String | string, envelope: Envelope, properties: AMQP.BasicProperties, body: number /*byte*/[], queue: java.lang.String | string)
                        /**
                         * Retrieve the consumer tag.
                         * @return the consumer tag.
                         */
                        // @ts-ignore
                        public getConsumerTag(): string
                        /**
                         * Retrieve the message envelope.
                         * @return the message envelope.
                         */
                        // @ts-ignore
                        public getEnvelope(): Envelope
                        /**
                         * Retrieve the message properties.
                         * @return the message properties.
                         */
                        // @ts-ignore
                        public getProperties(): BasicProperties
                        /**
                         * Retrieve the message body.
                         * @return the message body.
                         */
                        // @ts-ignore
                        public getBody(): number /*byte*/[]
                        /**
                         * Retrieve the queue.
                         * @return the queue.
                         */
                        // @ts-ignore
                        public getQueue(): string
                    }
                }
            }
        }
    }
}
