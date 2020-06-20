declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Builds a Spring AMQP Queue using a fluent API.
                 * @author Maciej Walkowiak
                 * @since 1.6
                 */
                // @ts-ignore
                class QueueBuilder extends org.springframework.amqp.core.AbstractBuilder {
                    /**
                     * Creates a builder for a durable queue with a generated
                     * unique name - {@code spring.gen-<random>}.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    durable(): org.springframework.amqp.core.QueueBuilder
                    /**
                     * Creates a builder for a non-durable (transient) queue.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    nonDurable(): org.springframework.amqp.core.QueueBuilder
                    /**
                     * Creates a builder for a durable queue.
                     * @param name the name of the queue.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    durable(name: string): org.springframework.amqp.core.QueueBuilder
                    /**
                     * Creates a builder for a non-durable (transient) queue.
                     * @param name the name of the queue.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    nonDurable(name: string): org.springframework.amqp.core.QueueBuilder
                    /**
                     * The final queue will be exclusive.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    exclusive(): org.springframework.amqp.core.QueueBuilder
                    /**
                     * The final queue will auto delete.
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    autoDelete(): org.springframework.amqp.core.QueueBuilder
                    /**
                     * The final queue will contain argument used to declare a queue.
                     * @param key argument name
                     * @param value argument value
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    withArgument(key: string, value: any): org.springframework.amqp.core.QueueBuilder
                    /**
                     * The final queue will contain arguments used to declare a queue.
                     * @param arguments the arguments map
                     * @return the QueueBuilder instance.
                     */
                    // @ts-ignore
                    withArguments(arguments: java.util.Map<java.lang.String, java.lang.Object>): org.springframework.amqp.core.QueueBuilder
                    /**
                     * Builds a final queue.
                     * @return the Queue instance.
                     */
                    // @ts-ignore
                    build(): org.springframework.amqp.core.Queue
                }
            }
        }
    }
}
