declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Interface specifying management operations.
                 * @author Gary Russell
                 * @since 1.5
                 * @deprecated since 2.1 in favor of direct usage of target REST API client.
                 */
                // @ts-ignore
                interface AmqpManagementOperations {
                    /**
                     * Add an exchange to the default vhost ('/').
                     * @param exchange the exchange.
                     */
                    // @ts-ignore
                    addExchange(exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Add an exchange to the specified vhost.
                     * @param vhost the vhost.
                     * @param exchange the exchange.
                     */
                    // @ts-ignore
                    addExchange(vhost: string, exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Purge a queue in the default vhost ('/').
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    purgeQueue(queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Purge a queue in the provided vhost.
                     * @param vhost the vhost.
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    purgeQueue(vhost: string, queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Delete a queue from the default vhost ('/').
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    deleteQueue(queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Delete a queue from the provided vhost.
                     * @param vhost the vhost.
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    deleteQueue(vhost: string, queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Get a specific queue from the default vhost ('/').
                     * @param name the queue name.
                     * @return the Queue.
                     */
                    // @ts-ignore
                    getQueue(name: string): org.springframework.amqp.core.Queue
                    /**
                     * Get a specific queue from the provided vhost.
                     * @param vhost the vhost.
                     * @param name the queue name.
                     * @return the Queue.
                     */
                    // @ts-ignore
                    getQueue(vhost: string, name: string): org.springframework.amqp.core.Queue
                    /**
                     * Get all queues.
                     * @return the queues.
                     */
                    // @ts-ignore
                    getQueues(): java.util.List<org.springframework.amqp.core.Queue>
                    /**
                     * Get all queues in the provided vhost.
                     * @param vhost the vhost.
                     * @return the queues.
                     */
                    // @ts-ignore
                    getQueues(vhost: string): java.util.List<org.springframework.amqp.core.Queue>
                    /**
                     * Add a queue to the default vhost ('/').
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    addQueue(queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Add a queue to the specified vhost.
                     * @param vhost the vhost.
                     * @param queue the queue.
                     */
                    // @ts-ignore
                    addQueue(vhost: string, queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Delete an exchange from the default vhost ('/').
                     * @param exchange the queue.
                     */
                    // @ts-ignore
                    deleteExchange(exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Delete an exchange from the provided vhost.
                     * @param vhost the vhost.
                     * @param exchange the queue.
                     */
                    // @ts-ignore
                    deleteExchange(vhost: string, exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Get a specific queue from the default vhost ('/').
                     * @param name the exchange name.
                     * @return the Exchange.
                     */
                    // @ts-ignore
                    getExchange(name: string): org.springframework.amqp.core.Exchange
                    /**
                     * Get a specific exchange from the provided vhost.
                     * @param vhost the vhost.
                     * @param name the exchange name.
                     * @return the Exchange.
                     */
                    // @ts-ignore
                    getExchange(vhost: string, name: string): org.springframework.amqp.core.Exchange
                    /**
                     * Get all exchanges.
                     * @return the exchanges.
                     */
                    // @ts-ignore
                    getExchanges(): java.util.List<org.springframework.amqp.core.Exchange>
                    /**
                     * Get all exchanges in the provided vhost. Only {@link DirectExchange},
                     * {@link FanoutExchange}, {@link HeadersExchange} and {@link TopicExchange}s
                     * are returned.
                     * @param vhost the vhost.
                     * @return the exchanges.
                     */
                    // @ts-ignore
                    getExchanges(vhost: string): java.util.List<org.springframework.amqp.core.Exchange>
                    /**
                     * Get all bindings.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindings(): java.util.List<org.springframework.amqp.core.Binding>
                    /**
                     * Get all bindings in the provided vhost.
                     * @param vhost the vhost.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindings(vhost: string): java.util.List<org.springframework.amqp.core.Binding>
                    /**
                     * Get all bindings from the provided exchange in the provided vhost.
                     * @param vhost the vhost.
                     * @param exchange the exchange name.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindingsForExchange(vhost: string, exchange: string): java.util.List<org.springframework.amqp.core.Binding>
                }
            }
        }
    }
}
