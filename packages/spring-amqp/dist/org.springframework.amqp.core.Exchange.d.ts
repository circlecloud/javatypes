declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Interface for all exchanges.
                 * @author Mark Fisher
                 * @author Gary Russell
                 * @author Artem Bilan
                 */
                // @ts-ignore
                interface Exchange extends org.springframework.amqp.core.Declarable {
                    /**
                     * The name of the exchange.
                     * @return the name of the exchange.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * The type of the exchange. See {@link ExchangeTypes} for some well-known examples.
                     * @return the type of the exchange.
                     */
                    // @ts-ignore
                    getType(): java.lang.String
                    /**
                     * A durable exchange will survive a server restart.
                     * @return true if durable.
                     */
                    // @ts-ignore
                    isDurable(): boolean
                    /**
                     * True if the server should delete the exchange when it is no longer in use (if all bindings are deleted).
                     * @return true if auto-delete.
                     */
                    // @ts-ignore
                    isAutoDelete(): boolean
                    /**
                     * A map of arguments used to declare the exchange. These are stored by the broker, but do not necessarily have any
                     * meaning to the broker (depending on the exchange type).
                     * @return the arguments.
                     */
                    // @ts-ignore
                    getArguments(): java.util.Map<java.lang.String, java.lang.Object>
                    /**
                     * Is a delayed message exchange; currently requires a broker plugin.
                     * @return true if delayed.
                     * @since 1.6
                     */
                    // @ts-ignore
                    isDelayed(): boolean
                    /**
                     * Is an exchange internal; i.e. can't be directly published to by a client,
                     * used for exchange-to-exchange binding only.
                     * @return true if internal.
                     * @since 1.6
                     */
                    // @ts-ignore
                    isInternal(): boolean
                }
            }
        }
    }
}
