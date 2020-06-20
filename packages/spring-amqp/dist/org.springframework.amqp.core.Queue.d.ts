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
                    constructor(name: string)
                    /**
                     * Construct a new queue, given a name and durability flag. The queue is non-exclusive and non auto-delete.
                     * @param name the name of the queue.
                     * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                     */
                    // @ts-ignore
                    constructor(name: string, durable: boolean)
                    /**
                     * Construct a new queue, given a name, durability, exclusive and auto-delete flags.
                     * @param name the name of the queue.
                     * @param durable true if we are declaring a durable queue (the queue will survive a server restart)
                     * @param exclusive true if we are declaring an exclusive queue (the queue will only be used by the declarer's
                     *  connection)
                     * @param autoDelete true if the server should delete the queue when it is no longer in use
                     */
                    // @ts-ignore
                    constructor(name: string, durable: boolean, exclusive: boolean, autoDelete: boolean)
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
                    constructor(name: string, durable: boolean, exclusive: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    /**
                     * Argument key for the master locator.
                     * @since 2.1
                     */
                    // @ts-ignore
                    readonly X_QUEUE_MASTER_LOCATOR: string
                    /**
                     * Return the name provided in the constructor.
                     * @return the name.
                     * @see #getActualName()
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * A durable queue will survive a server restart.
                     * @return true if durable.
                     */
                    // @ts-ignore
                    isDurable(): boolean
                    /**
                     * True if the server should only send messages to the declarer's connection.
                     * @return true if exclusive.
                     */
                    // @ts-ignore
                    isExclusive(): boolean
                    /**
                     * True if the server should delete the queue when it is no longer in use (the last consumer is cancelled). A queue
                     * that never has any consumers will not be deleted automatically.
                     * @return true if auto-delete.
                     */
                    // @ts-ignore
                    isAutoDelete(): boolean
                    // @ts-ignore
                    getArguments(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Set the name from the DeclareOk.
                     * @param name the name.
                     * @since 2.1
                     */
                    // @ts-ignore
                    setActualName(name: string): void
                    /**
                     * Return the name provided to the constructor or the broker-generated name
                     * if that name is an empty String.
                     * @return the name.
                     * @since 2.1
                     */
                    // @ts-ignore
                    getActualName(): java.lang.String
                    /**
                     * Set the master locator strategy argument for this queue.
                     * @param locator the locator; null to clear the argument.
                     * @since 2.1
                     */
                    // @ts-ignore
                    setMasterLocator(locator: string): void
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
