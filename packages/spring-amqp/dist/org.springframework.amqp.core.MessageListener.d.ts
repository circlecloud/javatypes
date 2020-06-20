declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Listener interface to receive asynchronous delivery of Amqp Messages.
                 * @author Mark Pollack
                 * @author Gary Russell
                 */
                // @ts-ignore
                interface MessageListener {
                    // @ts-ignore
                    onMessage(message: org.springframework.amqp.core.Message): void
                    /**
                     * Called by the container to inform the listener of its acknowledgement
                     * mode.
                     * @param mode the {#link AcknowledgeMode}.
                     * @since 2.1.4
                     */
                    // @ts-ignore
                    containerAckMode(mode: org.springframework.amqp.core.AcknowledgeMode): void
                }
            }
        }
    }
}
