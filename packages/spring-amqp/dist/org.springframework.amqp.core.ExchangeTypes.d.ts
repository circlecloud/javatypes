declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Constants for the standard Exchange type names.
                 * @author Mark Fisher
                 * @author Gary Russell
                 */
                // @ts-ignore
                class ExchangeTypes extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Direct exchange.
                     */
                    // @ts-ignore
                    readonly DIRECT: string
                    /**
                     * Topic exchange.
                     */
                    // @ts-ignore
                    readonly TOPIC: string
                    /**
                     * Fanout exchange.
                     */
                    // @ts-ignore
                    readonly FANOUT: string
                    /**
                     * Headers exchange.
                     */
                    // @ts-ignore
                    readonly HEADERS: string
                    /**
                     * System exchange.
                     */
                    // @ts-ignore
                    readonly SYSTEM: string
                }
            }
        }
    }
}
