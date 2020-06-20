declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    namespace MessageChannelEvent {
                        /**
                         * Fired when the {@link Text} being sent to a {@link MessageChannel} was
                         * due to chatting.
                         */
                        // @ts-ignore
                        interface Chat extends org.spongepowered.api.event.message.MessageChannelEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the 'raw' chat message.
                             * <p>This message is the original chat message, without any formatting
                             * whatsoever.</p>
                             * <p>In Vanilla, this is equivalent to what a player typed into the
                             * chat box (no name prefix or other elements).</p>
                             * @return The raw message
                             */
                            // @ts-ignore
                            getRawMessage(): org.spongepowered.api.text.Text
                        }
                    }
                }
            }
        }
    }
}
