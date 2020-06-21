declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Common properties that describe all exchange types.
                 * <p>Subclasses of this class are typically used with administrative operations that declare an exchange.
                 * @author Mark Pollack
                 * @author Gary Russell
                 * @author Artem Bilan
                 * @see AmqpAdmin
                 */
                // @ts-ignore
                abstract class AbstractExchange extends org.springframework.amqp.core.AbstractDeclarable implements org.springframework.amqp.core.Exchange {
                    /**
                     * Construct a new durable, non-auto-delete Exchange with the provided name.
                     * @param name the name of the exchange.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Construct a new Exchange, given a name, durability flag, auto-delete flag.
                     * @param name the name of the exchange.
                     * @param durable true if we are declaring a durable exchange (the exchange will
                     *  survive a server restart)
                     * @param autoDelete true if the server should delete the exchange when it is no
                     *  longer in use
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, durable: boolean, autoDelete: boolean)
                    /**
                     * Construct a new Exchange, given a name, durability flag, and auto-delete flag, and
                     * arguments.
                     * @param name the name of the exchange.
                     * @param durable true if we are declaring a durable exchange (the exchange will
                     *  survive a server restart)
                     * @param autoDelete true if the server should delete the exchange when it is no
                     *  longer in use
                     * @param arguments the arguments used to declare the exchange
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public abstract getType(): string
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public isDurable(): boolean
                    // @ts-ignore
                    public isAutoDelete(): boolean
                    /**
                     * Add an argument to the arguments.
                     * @param argName the argument name.
                     * @param argValue the argument value.
                     */
                    // @ts-ignore
                    addArgument(argName: java.lang.String | string, argValue: java.lang.Object | any): void
                    // @ts-ignore
                    public getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public isDelayed(): boolean
                    /**
                     * Set the delayed flag.
                     * @param delayed the delayed.
                     * @since 1.6
                     * @see Exchange#isDelayed()
                     */
                    // @ts-ignore
                    public setDelayed(delayed: boolean): void
                    // @ts-ignore
                    public isInternal(): boolean
                    /**
                     * Set the internal flag.
                     * @param internal the internal.
                     * @since 1.6
                     * @see Exchange#isInternal()
                     */
                    // @ts-ignore
                    public setInternal(internal: boolean): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
