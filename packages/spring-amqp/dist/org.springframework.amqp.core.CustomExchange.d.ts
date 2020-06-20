declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Simple container collecting information to describe a custom exchange. Custom exchange types are allowed by the AMQP
                 * specification, and their names should start with "x-" (but this is not enforced here). Used in conjunction with
                 * administrative operations.
                 * @author Dave Syer
                 * @see AmqpAdmin
                 */
                // @ts-ignore
                class CustomExchange extends org.springframework.amqp.core.AbstractExchange {
                    // @ts-ignore
                    constructor(name: string, type: string)
                    // @ts-ignore
                    constructor(name: string, type: string, durable: boolean, autoDelete: boolean)
                    // @ts-ignore
                    constructor(name: string, type: string, durable: boolean, autoDelete: boolean, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    getType(): java.lang.String
                }
            }
        }
    }
}
