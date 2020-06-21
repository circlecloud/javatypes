declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Basic builder class to create bindings for a more fluent API style in code based configuration.
                 * @author Mark Pollack
                 * @author Mark Fisher
                 * @author Dave Syer
                 * @author Gary Russell
                 */
                // @ts-ignore
                class BindingBuilder extends java.lang.Object {
                    // @ts-ignore
                    public static bind(queue: org.springframework.amqp.core.Queue): org.springframework.amqp.core.BindingBuilder.DestinationConfigurer
                    // @ts-ignore
                    public static bind(exchange: org.springframework.amqp.core.Exchange): org.springframework.amqp.core.BindingBuilder.DestinationConfigurer
                }
            }
        }
    }
}
