declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Rabbit resource holder, wrapping a RabbitMQ Connection and Channel.
                     * RabbitTransactionManager binds instances of this
                     * class to the thread, for a given Rabbit ConnectionFactory.
                     * <p>
                     * Note: This is an SPI class, not intended to be used by applications.
                     * @author Mark Fisher
                     * @author Dave Syer
                     * @author Gary Russell
                     * @see org.springframework.amqp.rabbit.transaction.RabbitTransactionManager
                     * @see org.springframework.amqp.rabbit.core.RabbitTemplate
                     */
                    // @ts-ignore
                    class RabbitResourceHolder extends ResourceHolderSupport {
                        /**
                         * Create a new RabbitResourceHolder that is open for resources to be added.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Construct an instance for the channel.
                         * @param channel a channel to add
                         * @param releaseAfterCompletion true if the channel should be released after completion.
                         */
                        // @ts-ignore
                        constructor(channel: Channel, releaseAfterCompletion: boolean)
                        // @ts-ignore
                        public isFrozen(): boolean
                        /**
                         * Whether the resources should be released after transaction completion.
                         * Default true. Listener containers set to false because the listener continues
                         * to use the channel.
                         * @return true if the resources should be released.
                         */
                        // @ts-ignore
                        public isReleaseAfterCompletion(): boolean
                        /**
                         * Set to true to requeue a message on rollback; default true.
                         * @param requeueOnRollback true to requeue
                         * @since 1.7.1
                         */
                        // @ts-ignore
                        public setRequeueOnRollback(requeueOnRollback: boolean): void
                        // @ts-ignore
                        public addConnection(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        // @ts-ignore
                        public addChannel(channel: Channel): void
                        // @ts-ignore
                        public addChannel(channel: Channel, connection: org.springframework.amqp.rabbit.connection.Connection): void
                        // @ts-ignore
                        public containsChannel(channel: Channel): boolean
                        // @ts-ignore
                        public getConnection(): org.springframework.amqp.rabbit.connection.Connection
                        /**
                         * Find a single connection of this type.
                         * @param connectionType the type.
                         * @return the connection or null.
                         * @deprecated Not used.
                         */
                        // @ts-ignore
                        public getConnection(connectionType: java.lang.Class<any>): org.springframework.amqp.rabbit.connection.Connection
                        // @ts-ignore
                        public getChannel(): Channel
                        // @ts-ignore
                        public commitAll(): void
                        // @ts-ignore
                        public closeAll(): void
                        // @ts-ignore
                        public addDeliveryTag(channel: Channel, deliveryTag: number /*long*/): void
                        // @ts-ignore
                        public rollbackAll(): void
                    }
                }
            }
        }
    }
}
