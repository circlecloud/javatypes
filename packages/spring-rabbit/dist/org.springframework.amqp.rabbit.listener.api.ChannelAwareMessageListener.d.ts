declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace api {
                        /**
                         * A message listener that is aware of the Channel on which the message was received.
                         * @author Mark Pollack
                         * @author Gary Russell
                         */
                        // @ts-ignore
                        interface ChannelAwareMessageListener {
                            /**
                             * Callback for processing a received Rabbit message.
                             * <p>Implementors are supposed to process the given Message,
                             * typically sending reply messages through the given Session.
                             * @param message the received AMQP message (never <code>null</code>)
                             * @param channel the underlying Rabbit Channel (never <code>null</code>)
                             * @throws Exception Any.
                             */
                            // @ts-ignore
                            onMessage(message: Message, channel: Channel): void
                            // @ts-ignore
                            onMessage(message: Message): void
                        }
                    }
                }
            }
        }
    }
}
