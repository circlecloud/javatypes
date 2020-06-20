declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace impl {
                        /**
                         * An immutable message channel that leaves transforming and
                         * members to the delegate channel passed.
                         * <p>The delegate channel may be immutable or mutable.</p>
                         */
                        // @ts-ignore
                        class DelegateMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a delegate {@link MessageChannel} that delegates all functions
                             * to the delegated message channel.
                             * @param delegate The delegated message channel
                             */
                            // @ts-ignore
                            constructor(delegate: org.spongepowered.api.text.channel.MessageChannel)
                            // @ts-ignore
                            readonly delegate: org.spongepowered.api.text.channel.MessageChannel
                            // @ts-ignore
                            transformMessage(sender: any, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional<org.spongepowered.api.text.Text>
                            // @ts-ignore
                            getMembers(): java.util.Collection<org.spongepowered.api.text.channel.MessageReceiver>
                        }
                    }
                }
            }
        }
    }
}
