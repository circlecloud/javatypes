declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Builder providing a fluent API for building {@link Exchange}s.
                 * @author Gary Russell
                 * @author Artem Bilan
                 * @since 1.6
                 */
                // @ts-ignore
                class ExchangeBuilder extends org.springframework.amqp.core.AbstractBuilder {
                    /**
                     * Construct an instance of the appropriate type.
                     * @param name the exchange name
                     * @param type the type name
                     * @since 1.6.7
                     * @see ExchangeTypes
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, type: java.lang.String | string)
                    /**
                     * Return a {@link DirectExchange} builder.
                     * @param name the name.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public static directExchange(name: java.lang.String | string): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Return a {@link TopicExchange} builder.
                     * @param name the name.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public static topicExchange(name: java.lang.String | string): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Return a {@link FanoutExchange} builder.
                     * @param name the name.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public static fanoutExchange(name: java.lang.String | string): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Return a {@link HeadersExchange} builder.
                     * @param name the name.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public static headersExchange(name: java.lang.String | string): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Set the auto delete flag.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public autoDelete(): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Set the durable flag.
                     * @param durable the durable flag (default true).
                     * @return the builder.
                     */
                    // @ts-ignore
                    public durable(durable: boolean): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Add an argument.
                     * @param key the argument key.
                     * @param value the argument value.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public withArgument(key: java.lang.String | string, value: java.lang.Object | any): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Add the arguments.
                     * @param arguments the arguments map.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public withArguments(arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Set the internal flag.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public internal(): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Set the delayed flag.
                     * @return the builder.
                     */
                    // @ts-ignore
                    public delayed(): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Switch on ignore exceptions such as mismatched properties when declaring.
                     * @return the builder.
                     * @since 2.0
                     */
                    // @ts-ignore
                    public ignoreDeclarationExceptions(): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Switch to disable declaration of the exchange by any admin.
                     * @return the builder.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public suppressDeclaration(): org.springframework.amqp.core.ExchangeBuilder
                    /**
                     * Admins, or admin bean names that should declare this exchange.
                     * @param admins the admins.
                     * @return the builder.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public admins(...admins: java.lang.Object[] | any[]): org.springframework.amqp.core.ExchangeBuilder
                    // @ts-ignore
                    public build(): org.springframework.amqp.core.Exchange
                }
            }
        }
    }
}
