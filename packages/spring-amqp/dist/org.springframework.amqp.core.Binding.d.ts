declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Simple container collecting information to describe a binding. Takes String destination and exchange names as
                 * arguments to facilitate wiring using code based configuration. Can be used in conjunction with {@link AmqpAdmin}, or
                 * created via a {@link BindingBuilder}.
                 * @author Mark Pollack
                 * @author Mark Fisher
                 * @author Dave Syer
                 * @author Gary Russell
                 * @see AmqpAdmin
                 */
                // @ts-ignore
                class Binding extends org.springframework.amqp.core.AbstractDeclarable {
                    // @ts-ignore
                    constructor(destination: string, destinationType: org.springframework.amqp.core.Binding.DestinationType, exchange: string, routingKey: string, arguments: java.util.Map<java.lang.String, java.lang.Object>)
                    // @ts-ignore
                    getDestination(): java.lang.String
                    // @ts-ignore
                    getDestinationType(): org.springframework.amqp.core.Binding.DestinationType
                    // @ts-ignore
                    getExchange(): java.lang.String
                    // @ts-ignore
                    getRoutingKey(): java.lang.String
                    // @ts-ignore
                    getArguments(): java.util.Map<java.lang.String, java.lang.Object>
                    // @ts-ignore
                    isDestinationQueue(): boolean
                    // @ts-ignore
                    toString(): java.lang.String
                }
            }
        }
    }
}
