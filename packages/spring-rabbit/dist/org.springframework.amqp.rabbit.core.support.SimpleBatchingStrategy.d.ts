declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    namespace support {
                        /**
                         * A simple batching strategy that supports only one exchange/routingKey; includes a batch
                         * size, a batched message size limit and a timeout. The message properties from the first
                         * message in the batch is used in the batch message. Each message is preceded by a 4 byte
                         * length field.
                         * @author Gary Russell
                         * @since 1.4.1
                         */
                        // @ts-ignore
                        class SimpleBatchingStrategy extends java.lang.Object implements org.springframework.amqp.rabbit.core.support.BatchingStrategy {
                            /**
                             * @param batchSize the batch size.
                             * @param bufferLimit the max buffer size; could trigger a short batch. Does not apply
                             *  to a single message.
                             * @param timeout the batch timeout.
                             */
                            // @ts-ignore
                            constructor(batchSize: number /*int*/, bufferLimit: number /*int*/, timeout: number /*long*/)
                            // @ts-ignore
                            public addToBatch(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message): org.springframework.amqp.rabbit.core.support.MessageBatch
                            // @ts-ignore
                            public nextRelease(): java.util.Date
                            // @ts-ignore
                            public releaseBatches(): Array<org.springframework.amqp.rabbit.core.support.MessageBatch>
                        }
                    }
                }
            }
        }
    }
}
