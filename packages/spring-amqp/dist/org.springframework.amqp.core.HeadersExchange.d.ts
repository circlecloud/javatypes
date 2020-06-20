declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Headers exchange.
                 * @author Mark Fisher
                 * @author Dave Syer
                 */
                // @ts-ignore
                class HeadersExchange extends org.springframework.amqp.core.AbstractExchange {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    constructor(name: string, durable: boolean, autoDelete: boolean)
                    // @ts-ignore
                    constructor(name: string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    getType(): java.lang.String
                }
            }
        }
    }
}
