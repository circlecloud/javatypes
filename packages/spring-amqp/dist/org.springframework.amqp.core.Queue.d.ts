declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Simple container collecting information to describe a queue. Used in conjunction with AmqpAdmin.
                 * @author Mark Pollack
                 * @author Gary Russell
                 * @see AmqpAdmin
                 */
                // @ts-ignore
                class Queue extends org.springframework.amqp.core.AbstractDeclarable {
                    /**
                     * The queue is durable, non-exclusive and non auto-delete.
                     * @param name the name of the queue.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * Construct a new queue, given a name and durability flag. The queue is non-exclusive and non auto-delete.
                     * @param name the name of the queue.
                     * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, durable: boolean)
                    /**
                     * Construct a new queue, given a name, durability, exclusive and auto-delete flags.
                     * @param name the name of the queue.
                     * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                     * @param exclusive true if we are declaring an exclusive queue (the queue will only be used by the declarer's
                     *  connection)
                     * @param autoDelete true if the server should delete the queue when it is no longer in use
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean)
                    /**
                     * Construct a new queue, given a name, durability flag, and auto-delete flag, and arguments.
                     * @param name the name of the queue - must not be null; set to "" to have the broker generate the name.
                     * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                     * @param exclusive true if we are declaring an exclusive queue (the queue will only be used by the declarer's
                     *  connection)
                     * @param autoDelete true if the server should delete the queue when it is no longer in use
                     * @param arguments the arguments used to declare the queue
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    /**
                     * Argument key for the master locator.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public static readonly X_QUEUE_MASTER_LOCATOR: java.lang.String | string
                    /**
                     * Return the name provided in the constructor.
                     * @return the name.
                     * @see #getActualName()
                     */
                    // @ts-ignore
                    public getName(): string
                    /**
                     * A durable queue will survive a server restart.
                     * @return true if durable.
                     */
                    // @ts-ignore
                    public isDurable(): boolean
                    /**
                     * True if the server should only send messages to the declarer's connection.
                     * @return true if exclusive.
                     */
                    // @ts-ignore
                    public isExclusive(): boolean
                    /**
                     * True if the server should delete the queue when it is no longer in use (the last consumer is cancelled). A queue
                     * that never has any consumers will not be deleted automatically.
                     * @return true if auto-delete.
                     */
                    // @ts-ignore
                    public isAutoDelete(): boolean
                    // @ts-ignore
                    public getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    /**
                     * Set the name from the DeclareOk.
                     * @param name the name.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public setActualName(name: java.lang.String | string): void
                    /**
                     * Return the name provided to the constructor or the broker-generated name
                     * if that name is an empty String.
                     * @return the name.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public getActualName(): string
                    /**
                     * Set the master locator strategy argument for this queue.
                     * @param locator the locator; null to clear the argument.
                     * @since 2.1
                     */
                    // @ts-ignore
                    public setMasterLocator(locator: java.lang.String | string): void
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
