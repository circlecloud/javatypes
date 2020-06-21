declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * A {@link org.springframework.amqp.rabbit.listener.RabbitListenerContainerFactory}
                     * implementation to build a regular {@link DirectMessageListenerContainer}.
                     * @author Gary Russell
                     * @author Sud Ramasamy
                     * @since 2.0
                     */
                    // @ts-ignore
                    class DirectRabbitListenerContainerFactory extends org.springframework.amqp.rabbit.config.AbstractRabbitListenerContainerFactory<org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the task scheduler to use for the task that monitors idle containers and
                         * failed consumers.
                         * @param taskScheduler the scheduler.
                         */
                        // @ts-ignore
                        public setTaskScheduler(taskScheduler: TaskScheduler): void
                        /**
                         * Set how often to run a task to check for failed consumers and idle containers.
                         * @param monitorInterval the interval; default 10000 but it will be adjusted down
                         *  to the smallest of this, {#link #setIdleEventInterval(Long) idleEventInterval} / 2
                         *  (if configured) or
                         *  {@link #setFailedDeclarationRetryInterval(Long) failedDeclarationRetryInterval}.
                         */
                        // @ts-ignore
                        public setMonitorInterval(monitorInterval: number /*long*/): void
                        /**
                         * Each queue runs in its own consumer; set this property to create multiple
                         * consumers for each queue.
                         * If the container is already running, the number of consumers per queue will
                         * be adjusted up or down as necessary.
                         * @param consumersPerQueue the consumers per queue.
                         */
                        // @ts-ignore
                        public setConsumersPerQueue(consumersPerQueue: java.lang.Integer | number): void
                        /**
                         * Set the number of messages to receive before acknowledging (success).
                         * A failed message will short-circuit this counter.
                         * @param messagesPerAck the number of messages.
                         * @see #setAckTimeout(Long)
                         */
                        // @ts-ignore
                        public setMessagesPerAck(messagesPerAck: java.lang.Integer | number): void
                        /**
                         * An approximate timeout; when {@link #setMessagesPerAck(Integer) messagesPerAck} is
                         * greater than 1, and this time elapses since the last ack, the pending acks will be
                         * sent either when the next message arrives, or a short time later if no additional
                         * messages arrive. In that case, the actual time depends on the
                         * {@link #setMonitorInterval(long) monitorInterval}.
                         * @param ackTimeout the timeout in milliseconds (default 20000);
                         * @see #setMessagesPerAck(Integer)
                         */
                        // @ts-ignore
                        public setAckTimeout(ackTimeout: java.lang.Long | number): void
                        // @ts-ignore
                        createContainerInstance(): org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer
                        // @ts-ignore
                        initializeContainer(instance: org.springframework.amqp.rabbit.listener.DirectMessageListenerContainer, endpoint: org.springframework.amqp.rabbit.listener.RabbitListenerEndpoint): void
                    }
                }
            }
        }
    }
}
