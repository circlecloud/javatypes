declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * To be used with the receive-and-reply methods of {@link org.springframework.amqp.core.AmqpTemplate}
                 * to determine {@link org.springframework.amqp.core.Address} for {@link org.springframework.amqp.core.Message}
                 * to send at runtime.
                 * <p>This often as an anonymous class within a method implementation.
                 * @param <T> the reply type.
                 * @author Artem Bilan
                 * @author Gary Russell
                 * @since 1.3
                 */
                // @ts-ignore
                interface ReplyToAddressCallback<T> {
                    // @ts-ignore
                    getReplyToAddress(request: org.springframework.amqp.core.Message, reply: T): org.springframework.amqp.core.Address
                }
            }
        }
    }
}
