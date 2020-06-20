declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * {@link Message} exchanging contract of {@link ReceiveAndReplyCallback}.
                 * @author Artem Bilan
                 * @author Gary Russell
                 * @since 1.3
                 */
                // @ts-ignore
                interface ReceiveAndReplyMessageCallback extends org.springframework.amqp.core.ReceiveAndReplyCallback<org.springframework.amqp.core.Message, org.springframework.amqp.core.Message> {
                }
            }
        }
    }
}
