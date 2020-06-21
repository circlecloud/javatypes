declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace support {
                        /**
                         * Strategy for batching messages. The methods will never be called concurrently.
                         * <p>
                         * <b>Experimental - APIs may change.</b>
                         * @author Gary Russell
                         * @since 1.4.1
                         */
                        // @ts-ignore
                        interface BatchingStrategy {
                            /**
                             * Add a message to the batch and optionally release the batch.
                             * @param exchange The exchange.
                             * @param routingKey The routing key.
                             * @param message The message.
                             * @return The batched message ({#link MessageBatch}), or null if not ready to release.
                             */
                            // @ts-ignore
                            addToBatch(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message): org.springframework.amqp.rabbit.core.support.MessageBatch
                            /**
                             * @return the date the next scheduled release should run, or null if no data to release.
                             */
                            // @ts-ignore
                            nextRelease(): java.util.Date
                            /**
                             * Release batch(es), perhaps due to a timeout.
                             * @return The batched message(s).
                             */
                            // @ts-ignore
                            releaseBatches(): Array<org.springframework.amqp.rabbit.core.support.MessageBatch>
                        }
                    }
                }
            }
        }
    }
}
