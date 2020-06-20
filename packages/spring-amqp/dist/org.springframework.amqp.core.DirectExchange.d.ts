declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Simple container collecting information to describe a direct exchange.
                 * Used in conjunction with administrative operations.
                 * @author Mark Pollack
                 * @author Dave Syer
                 * @see AmqpAdmin
                 */
                // @ts-ignore
                class DirectExchange extends org.springframework.amqp.core.AbstractExchange {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, durable: boolean, autoDelete: boolean)
                    // @ts-ignore
                    constructor(name: string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    /**
                     * The default exchange.
                     */
                    // @ts-ignore
                    readonly DEFAULT: org.springframework.amqp.core.DirectExchange
                    // @ts-ignore
                    getType(): java.lang.String
                }
            }
        }
    }
}
