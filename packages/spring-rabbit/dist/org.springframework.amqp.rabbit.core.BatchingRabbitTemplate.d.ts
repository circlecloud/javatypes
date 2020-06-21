declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace core {
                    /**
                     * A {@link RabbitTemplate} that permits batching individual messages into a larger
                     * message. All {@code send()} methods (except
                     * {@link #send(String, String, org.springframework.amqp.core.Message,
                     * org.springframework.amqp.rabbit.connection.CorrelationData)})
                     * are eligible for batching.
                     * <p>
                     * <b>Experimental - APIs may change.</b>
                     * @author Gary Russell
                     * @since 1.4.1
                     */
                    // @ts-ignore
                    class BatchingRabbitTemplate extends org.springframework.amqp.rabbit.core.RabbitTemplate {
                        /**
                         * @param batchingStrategy the batching strategy.
                         * @param scheduler the scheduler.
                         */
                        // @ts-ignore
                        constructor(batchingStrategy: org.springframework.amqp.rabbit.core.support.BatchingStrategy, scheduler: TaskScheduler)
                        // @ts-ignore
                        public send(exchange: java.lang.String | string, routingKey: java.lang.String | string, message: Message, correlationData: org.springframework.amqp.rabbit.connection.CorrelationData): void
                        /**
                         * Flush any partial in-progress batches.
                         */
                        // @ts-ignore
                        public flush(): void
                        // @ts-ignore
                        public doStart(): void
                        // @ts-ignore
                        public doStop(): void
                        // @ts-ignore
                        public isRunning(): boolean
                    }
                }
            }
        }
    }
}
