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
                abstract class ExchangeTypes extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Direct exchange.
                     */
                    // @ts-ignore
                    public static readonly DIRECT: java.lang.String | string
                    /**
                     * Topic exchange.
                     */
                    // @ts-ignore
                    public static readonly TOPIC: java.lang.String | string
                    /**
                     * Fanout exchange.
                     */
                    // @ts-ignore
                    public static readonly FANOUT: java.lang.String | string
                    /**
                     * Headers exchange.
                     */
                    // @ts-ignore
                    public static readonly HEADERS: java.lang.String | string
                    /**
                     * System exchange.
                     */
                    // @ts-ignore
                    public static readonly SYSTEM: java.lang.String | string
                }
            }
        }
    }
}
