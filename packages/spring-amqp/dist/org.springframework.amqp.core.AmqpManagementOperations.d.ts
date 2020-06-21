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
                    addExchange(vhost: java.lang.String | string, exchange: org.springframework.amqp.core.Exchange): void
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
                    purgeQueue(vhost: java.lang.String | string, queue: org.springframework.amqp.core.Queue): void
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
                    deleteQueue(vhost: java.lang.String | string, queue: org.springframework.amqp.core.Queue): void
                    /**
                     * Get a specific queue from the default vhost ('/').
                     * @param name the queue name.
                     * @return the Queue.
                     */
                    // @ts-ignore
                    getQueue(name: java.lang.String | string): org.springframework.amqp.core.Queue
                    /**
                     * Get a specific queue from the provided vhost.
                     * @param vhost the vhost.
                     * @param name the queue name.
                     * @return the Queue.
                     */
                    // @ts-ignore
                    getQueue(vhost: java.lang.String | string, name: java.lang.String | string): org.springframework.amqp.core.Queue
                    /**
                     * Get all queues.
                     * @return the queues.
                     */
                    // @ts-ignore
                    getQueues(): Array<org.springframework.amqp.core.Queue>
                    /**
                     * Get all queues in the provided vhost.
                     * @param vhost the vhost.
                     * @return the queues.
                     */
                    // @ts-ignore
                    getQueues(vhost: java.lang.String | string): Array<org.springframework.amqp.core.Queue>
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
                    addQueue(vhost: java.lang.String | string, queue: org.springframework.amqp.core.Queue): void
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
                    deleteExchange(vhost: java.lang.String | string, exchange: org.springframework.amqp.core.Exchange): void
                    /**
                     * Get a specific queue from the default vhost ('/').
                     * @param name the exchange name.
                     * @return the Exchange.
                     */
                    // @ts-ignore
                    getExchange(name: java.lang.String | string): org.springframework.amqp.core.Exchange
                    /**
                     * Get a specific exchange from the provided vhost.
                     * @param vhost the vhost.
                     * @param name the exchange name.
                     * @return the Exchange.
                     */
                    // @ts-ignore
                    getExchange(vhost: java.lang.String | string, name: java.lang.String | string): org.springframework.amqp.core.Exchange
                    /**
                     * Get all exchanges.
                     * @return the exchanges.
                     */
                    // @ts-ignore
                    getExchanges(): Array<org.springframework.amqp.core.Exchange>
                    /**
                     * Get all exchanges in the provided vhost. Only {@link DirectExchange},
                     * {@link FanoutExchange}, {@link HeadersExchange} and {@link TopicExchange}s
                     * are returned.
                     * @param vhost the vhost.
                     * @return the exchanges.
                     */
                    // @ts-ignore
                    getExchanges(vhost: java.lang.String | string): Array<org.springframework.amqp.core.Exchange>
                    /**
                     * Get all bindings.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindings(): Array<org.springframework.amqp.core.Binding>
                    /**
                     * Get all bindings in the provided vhost.
                     * @param vhost the vhost.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindings(vhost: java.lang.String | string): Array<org.springframework.amqp.core.Binding>
                    /**
                     * Get all bindings from the provided exchange in the provided vhost.
                     * @param vhost the vhost.
                     * @param exchange the exchange name.
                     * @return the bindings.
                     */
                    // @ts-ignore
                    getBindingsForExchange(vhost: java.lang.String | string, exchange: java.lang.String | string): Array<org.springframework.amqp.core.Binding>
                }
            }
        }
    }
}
