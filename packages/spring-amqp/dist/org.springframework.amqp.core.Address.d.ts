declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Represents an address for publication of an AMQP message. The AMQP 0-8 and 0-9
                 * specifications have an unstructured string that is used as a "reply to" address.
                 * There are however conventions in use and this class makes it easier to
                 * follow these conventions, which can be easily summarised as:
                 * <pre class="code">
                 * (exchange)/(routingKey)
                 * </pre>
                 * Here we also the exchange name to default to empty
                 * (so just a routing key will work if you know the queue name).
                 * @author Mark Pollack
                 * @author Mark Fisher
                 * @author Dave Syer
                 * @author Artem Bilan
                 * @author Gary Russell
                 */
                // @ts-ignore
                class Address extends java.lang.Object {
                    /**
                     * Create an Address instance from a structured String with the form
                     * <pre class="code">
                     * (exchange)/(routingKey)
                     * </pre>
                     * .
                     * @param address a structured string.
                     */
                    // @ts-ignore
                    constructor(address: java.lang.String | string)
                    /**
                     * Create an Address given the exchange name and routing key.
                     * This will set the exchange type, name and the routing key explicitly.
                     * @param exchangeName The exchange name.
                     * @param routingKey The routing key.
                     */
                    // @ts-ignore
                    constructor(exchangeName: java.lang.String | string, routingKey: java.lang.String | string)
                    /**
                     * Use this value in {@code RabbitTemplate#setReplyAddress(String)} to explicitly
                     * indicate that direct reply-to is to be used.
                     */
                    // @ts-ignore
                    public static readonly AMQ_RABBITMQ_REPLY_TO: java.lang.String | string
                    // @ts-ignore
                    public getExchangeName(): string
                    // @ts-ignore
                    public getRoutingKey(): string
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
