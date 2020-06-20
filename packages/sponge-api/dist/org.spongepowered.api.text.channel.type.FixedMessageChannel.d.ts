declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        /**
                         * A message channel that targets the given recipients.
                         */
                        // @ts-ignore
                        class FixedMessageChannel extends java.lang.Object implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the
                             * provided {@link MessageReceiver}s.
                             * @param recipients The array of recipients
                             */
                            // @ts-ignore
                            constructor(...recipients: org.spongepowered.api.text.channel.MessageReceiver[])
                            /**
                             * Creates an unmodifiable {@link MessageChannel} with the provided
                             * {@link Collection} of {@link MessageReceiver}s.
                             * @param provided The message receivers
                             */
                            // @ts-ignore
                            constructor(provided: Array<org.spongepowered.api.text.channel.MessageReceiver>)
                            // @ts-ignore
                            readonly recipients: Array<org.spongepowered.api.text.channel.MessageReceiver>
                            // @ts-ignore
                            getMembers(): java.util.Collection<org.spongepowered.api.text.channel.MessageReceiver>
                        }
                    }
                }
            }
        }
    }
}
