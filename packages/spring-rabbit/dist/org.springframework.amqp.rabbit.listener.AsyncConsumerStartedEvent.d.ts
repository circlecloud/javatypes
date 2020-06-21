declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * An event that is published whenever a new consumer is started.
                     * @author Gary Russell
                     * @since 1.7
                     */
                    // @ts-ignore
                    class AsyncConsumerStartedEvent extends AmqpEvent {
                        /**
                         * @param source the listener container.
                         * @param consumer the old consumer.
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, consumer: java.lang.Object | any)
                        // @ts-ignore
                        public getConsumer(): any
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
