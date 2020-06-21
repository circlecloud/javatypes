declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * A {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory}
                     * implementation to build a regular {@link SimpleMessageListenerContainer}.
                     * <p>
                     * This should be the default for most users and a good transition paths for those that
                     * are used to build such container definition manually.
                     * @author Stephane Nicoll
                     * @author Gary Russell
                     * @author Artem Bilan
                     * @author Dustin Schultz
                     * @since 1.4
                     */
                    // @ts-ignore
                    class SimpleRabbitListenerContainerFactory extends org.springframework.amqp.rabbit.config.AbstractRabbitListenerContainerFactory<org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer> {
                        // @ts-ignore
                        constructor()
                        /**
                         * @param txSize the transaction size.
                         * @see SimpleMessageListenerContainer#setTxSize
                         */
                        // @ts-ignore
                        public setTxSize(txSize: java.lang.Integer | number): void
                        /**
                         * @param concurrency the minimum number of consumers to create.
                         * @see SimpleMessageListenerContainer#setConcurrentConsumers
                         */
                        // @ts-ignore
                        public setConcurrentConsumers(concurrency: java.lang.Integer | number): void
                        /**
                         * @param maxConcurrency the maximum number of consumers.
                         * @see SimpleMessageListenerContainer#setMaxConcurrentConsumers
                         */
                        // @ts-ignore
                        public setMaxConcurrentConsumers(maxConcurrency: java.lang.Integer | number): void
                        /**
                         * @param minStartInterval The minimum interval between new consumer starts.
                         * @see SimpleMessageListenerContainer#setStartConsumerMinInterval
                         */
                        // @ts-ignore
                        public setStartConsumerMinInterval(minStartInterval: java.lang.Long | number): void
                        /**
                         * @param minStopInterval The minimum interval between consumer stops.
                         * @see SimpleMessageListenerContainer#setStopConsumerMinInterval
                         */
                        // @ts-ignore
                        public setStopConsumerMinInterval(minStopInterval: java.lang.Long | number): void
                        /**
                         * @param minConsecutiveActive The number of consecutive receives to trigger a new consumer.
                         * @see SimpleMessageListenerContainer#setConsecutiveActiveTrigger
                         */
                        // @ts-ignore
                        public setConsecutiveActiveTrigger(minConsecutiveActive: java.lang.Integer | number): void
                        /**
                         * @param minConsecutiveIdle The number of consecutive timeouts to trigger stopping a consumer.
                         * @see SimpleMessageListenerContainer#setConsecutiveIdleTrigger
                         */
                        // @ts-ignore
                        public setConsecutiveIdleTrigger(minConsecutiveIdle: java.lang.Integer | number): void
                        /**
                         * @param receiveTimeout the timeout.
                         * @see SimpleMessageListenerContainer#setReceiveTimeout
                         */
                        // @ts-ignore
                        public setReceiveTimeout(receiveTimeout: java.lang.Long | number): void
                        /**
                         * Determine whether or not the container should de-batch batched
                         * messages (true) or call the listener with the batch (false). Default: true.
                         * @param deBatchingEnabled whether or not to disable de-batching of messages.
                         * @see SimpleMessageListenerContainer#setDeBatchingEnabled(boolean)
                         */
                        // @ts-ignore
                        public setDeBatchingEnabled(deBatchingEnabled: java.lang.Boolean): void
                        // @ts-ignore
                        createContainerInstance(): org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer
                        // @ts-ignore
                        initializeContainer(instance: org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer, endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): void
                    }
                }
            }
        }
    }
}
