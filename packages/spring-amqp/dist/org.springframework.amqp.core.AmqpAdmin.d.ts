declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Specifies a basic set of portable AMQP administrative operations for AMQP &gt; 0.9.
                 * @author Mark Pollack
                 * @author Dave Syer
                 * @author Gary Russell
                 */
                // @ts-ignore
                interface AmqpAdmin {
                    /**
                     * Declare an exchange.
                     * @param exchange the exchange to declare.
                     */
                    // @ts-ignore
                    declareExchange(exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Delete an exchange. Look at implementation specific subclass for implementation specific behavior, for example
                     * for RabbitMQ this will delete the exchange without regard for whether it is in use or not.
                     * @param exchangeName the name of the exchange
                     * @return true if the exchange existed and was deleted
                     */
                    // @ts-ignore
                    deleteExchange(exchangeName: string): boolean
                    /**
                     * Declare a queue whose name is automatically named. It is created with exclusive = true, autoDelete=true, and
                     * durable = false.
                     * @return The queue.
                     */
                    // @ts-ignore
                    declareQueue(): org.springframework.amqp.core.Queue
                    /**
                     * Declare the given queue.
                     * @param queue the queue to declare.
                     * @return the name of the queue.
                     */
                    // @ts-ignore
                    declareQueue(queue: org.springframework.amqp.core.Queue): java.lang.String
                    /**
                     * Delete a queue, without regard for whether it is in use or has messages on it.
                     * @param queueName the name of the queue.
                     * @return true if the queue existed and was deleted.
                     */
                    // @ts-ignore
                    deleteQueue(queueName: string): boolean
                    /**
                     * Delete a queue.
                     * @param queueName the name of the queue.
                     * @param unused true if the queue should be deleted only if not in use.
                     * @param empty true if the queue should be deleted only if empty.
                     */
                    // @ts-ignore
                    deleteQueue(queueName: string, unused: boolean, empty: boolean): void
                    /**
                     * Purges the contents of the given queue.
                     * @param queueName the name of the queue.
                     * @param noWait true to not await completion of the purge.
                     */
                    // @ts-ignore
                    purgeQueue(queueName: string, noWait: boolean): void
                    /**
                     * Purges the contents of the given queue.
                     * @param queueName the name of the queue.
                     * @return the number of messages purged.
                     * @since 2.1
                     */
                    // @ts-ignore
                    purgeQueue(queueName: string): int
                    /**
                     * Declare a binding of a queue to an exchange.
                     * @param binding a description of the binding to declare.
                     */
                    // @ts-ignore
                    declareBinding(binding: org.springframework.amqp.core.Binding): void
                    /**
                     * Remove a binding of a queue to an exchange. Note unbindQueue/removeBinding was not introduced until 0.9 of the
                     * specification.
                     * @param binding a description of the binding to remove.
                     */
                    // @ts-ignore
                    removeBinding(binding: org.springframework.amqp.core.Binding): void
                    /**
                     * Returns an implementation-specific Map of properties if the queue exists.
                     * @param queueName the name of the queue.
                     * @return the properties or null if the queue doesn't exist.
                     */
                    // @ts-ignore
                    getQueueProperties(queueName: string): java.util.Properties
                    /**
                     * Initialize the admin.
                     * @since 2.1
                     */
                    // @ts-ignore
                    initialize(): void
                }
            }
        }
    }
}
