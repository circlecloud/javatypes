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
                    constructor(destination: java.lang.String | string, destinationType: org.springframework.amqp.core.Binding.DestinationType, exchange: java.lang.String | string, routingKey: java.lang.String | string, arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                    // @ts-ignore
                    public getDestination(): string
                    // @ts-ignore
                    public getDestinationType(): org.springframework.amqp.core.Binding.DestinationType
                    // @ts-ignore
                    public getExchange(): string
                    // @ts-ignore
                    public getRoutingKey(): string
                    // @ts-ignore
                    public getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    public isDestinationQueue(): boolean
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
