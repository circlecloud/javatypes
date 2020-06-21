declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates the response from a {@link Channel#basicGet} message-retrieval method call
             * - essentially a static bean "holder" with message response data.
             */
            // @ts-ignore
            class GetResponse extends java.lang.Object {
                /**
                 * Construct a {@link GetResponse} with the specified construction parameters
                 * @param envelope the {#link Envelope}
                 * @param props message properties
                 * @param body the message body
                 * @param messageCount the server's most recent estimate of the number of messages remaining on the queue
                 */
                // @ts-ignore
                constructor(envelope: com.rabbitmq.client.Envelope, props: com.rabbitmq.client.AMQP.BasicProperties, body: number /*byte*/[], messageCount: number /*int*/)
                /**
                 * Get the {@link Envelope} included in this response
                 * @return the envelope
                 */
                // @ts-ignore
                public getEnvelope(): com.rabbitmq.client.Envelope
                /**
                 * Get the {@link BasicProperties} included in this response
                 * @return the properties
                 */
                // @ts-ignore
                public getProps(): com.rabbitmq.client.AMQP.BasicProperties
                /**
                 * Get the message body included in this response
                 * @return the message body
                 */
                // @ts-ignore
                public getBody(): number /*byte*/[]
                /**
                 * Get the server's most recent estimate of the number of messages
                 * remaining on the queue. This number can only ever be a rough
                 * estimate, because of concurrent activity at the server and the
                 * delay between the server sending its estimate and the client
                 * receiving and processing the message containing the estimate.
                 * <p>According to the AMQP specification, this figure does not
                 * include the message being delivered. For example, this field
                 * will be zero in the simplest case of a single reader issuing a
                 * Basic.Get on a private queue holding a single message (the
                 * message being delivered in this GetResponse).
                 * @return an estimate of the number of messages remaining to be
                 *  read from the queue
                 */
                // @ts-ignore
                public getMessageCount(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
