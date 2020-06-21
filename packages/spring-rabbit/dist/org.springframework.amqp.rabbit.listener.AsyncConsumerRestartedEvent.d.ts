declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    /**
                     * An event that is published whenever a consumer is restarted.
                     * @author Gary Russell
                     * @since 1.7
                     */
                    // @ts-ignore
                    class AsyncConsumerRestartedEvent extends AmqpEvent {
                        /**
                         * @param source the listener container.
                         * @param oldConsumer the old consumer.
                         * @param newConsumer the new consumer.
                         */
                        // @ts-ignore
                        constructor(source: java.lang.Object | any, oldConsumer: java.lang.Object | any, newConsumer: java.lang.Object | any)
                        // @ts-ignore
                        public getOldConsumer(): any
                        // @ts-ignore
                        public getNewConsumer(): any
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
