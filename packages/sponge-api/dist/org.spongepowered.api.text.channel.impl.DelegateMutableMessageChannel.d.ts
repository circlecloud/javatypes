declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace impl {
                        /**
                         * A mutable message channel that leaves transforming and
                         * members to the delegate channel passed.
                         */
                        // @ts-ignore
                        class DelegateMutableMessageChannel extends org.spongepowered.api.text.channel.AbstractMutableMessageChannel {
                            /**
                             * Constructs a delegate mutable message channel.
                             * <p>The members from the provided channel are copied into our
                             * own local collection.</p>
                             * @param delegate The delegate channel
                             */
                            // @ts-ignore
                            constructor(delegate: org.spongepowered.api.text.channel.MessageChannel)
                            // @ts-ignore
                            readonly delegate: org.spongepowered.api.text.channel.MessageChannel
                            // @ts-ignore
                            transformMessage(sender: any, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional<org.spongepowered.api.text.Text>
                        }
                    }
                }
            }
        }
    }
}
