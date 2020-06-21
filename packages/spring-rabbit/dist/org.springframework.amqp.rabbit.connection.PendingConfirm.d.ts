declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Instances of this object track pending publisher confirms.
                     * The timestamp allows the pending confirmation to be
                     * expired. It also holds {@link CorrelationData} for
                     * the client to correlate a confirm with a sent message.
                     * @author Gary Russell
                     * @since 1.0.1
                     */
                    // @ts-ignore
                    class PendingConfirm extends java.lang.Object {
                        /**
                         * @param correlationData The correlation data.
                         * @param timestamp The timestamp.
                         */
                        // @ts-ignore
                        constructor(correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, timestamp: number /*long*/)
                        /**
                         * The correlation data supplied by the client when sending the message
                         * corresponding to this confirmation.
                         * @return The correlation data.
                         */
                        // @ts-ignore
                        public getCorrelationData(): org.springframework.amqp.rabbit.connection.CorrelationData
                        /**
                         * @return The time the message was sent.
                         */
                        // @ts-ignore
                        public getTimestamp(): number /*long*/
                        /**
                         * When the confirmation is nacked, set the cause when available.
                         * @param cause The cause.
                         * @since 1.4
                         */
                        // @ts-ignore
                        public setCause(cause: java.lang.String | string): void
                        /**
                         * @return the cause.
                         * @since 1.4
                         */
                        // @ts-ignore
                        public getCause(): string
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
