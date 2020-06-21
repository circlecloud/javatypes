declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        /**
                         * A message channel that targets all subjects contained within the given
                         * channels and applies the message transformations of each channel in
                         * order (so with n channels,
                         * {@code channels[n-1].transformMessage(channels[n-2]
                         * .transformMessage(channels[...]
                         * .transformMessage(channels[0].transformMessage(input))))} would occur).
                         */
                        // @ts-ignore
                        class CombinedMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new combined message channel of the provided
                             * {@link MessageChannel}s.
                             * @param channels The channels to combine into a single message channel
                             */
                            // @ts-ignore
                            constructor(...channels: org.spongepowered.api.text.channel.MessageChannel[])
                            /**
                             * Creates a new combined message channel of the provided {@link Collection}
                             * of {@link MessageChannel}s.
                             * @param channels The channels to combine into a single message channel
                             */
                            // @ts-ignore
                            constructor(channels: java.util.Collection<org.spongepowered.api.text.channel.MessageChannel> | Array<org.spongepowered.api.text.channel.MessageChannel>)
                            // @ts-ignore
                            readonly channels: java.util.Collection<org.spongepowered.api.text.channel.MessageChannel> | Array<org.spongepowered.api.text.channel.MessageChannel>
                            // @ts-ignore
                            public transformMessage(sender: java.lang.Object | any, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional<org.spongepowered.api.text.Text>
                            // @ts-ignore
                            public getMembers(): Array<org.spongepowered.api.text.channel.MessageReceiver>
                        }
                    }
                }
            }
        }
    }
}
