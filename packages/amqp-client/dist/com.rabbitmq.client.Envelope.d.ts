declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates a group of parameters used for AMQP's Basic methods
             */
            // @ts-ignore
            class Envelope extends java.lang.Object {
                /**
                 * Construct an {@link Envelope} with the specified construction parameters
                 * @param deliveryTag the delivery tag
                 * @param redeliver true if this is a redelivery following a failed ack
                 * @param exchange the exchange used for the current operation
                 * @param routingKey the associated routing key
                 */
                // @ts-ignore
                constructor(deliveryTag: number /*long*/, redeliver: boolean, exchange: java.lang.String | string, routingKey: java.lang.String | string)
                /**
                 * Get the delivery tag included in this parameter envelope
                 * @return the delivery tag
                 */
                // @ts-ignore
                public getDeliveryTag(): number /*long*/
                /**
                 * Get the redelivery flag included in this parameter envelope. This is a
                 * hint as to whether this message may have been delivered before (but not
                 * acknowledged). If the flag is not set, the message definitely has not
                 * been delivered before. If it is set, it may have been delivered before.
                 * @return the redelivery flag
                 */
                // @ts-ignore
                public isRedeliver(): boolean
                /**
                 * Get the name of the exchange included in this parameter envelope
                 * @return the exchange
                 */
                // @ts-ignore
                public getExchange(): string
                /**
                 * Get the routing key included in this parameter envelope
                 * @return the routing key
                 */
                // @ts-ignore
                public getRoutingKey(): string
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
