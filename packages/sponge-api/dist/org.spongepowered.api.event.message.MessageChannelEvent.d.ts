declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    /**
                     * Describes events when a involving a {@link Text} message and {@link MessageChannel}s.
                     */
                    // @ts-ignore
                    interface MessageChannelEvent extends org.spongepowered.api.event.message.MessageEvent {
                        /**
                         * Gets the original channel that this message will be sent to.
                         * @return The original message channel to send to
                         */
                        // @ts-ignore
                        getOriginalChannel(): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Gets the current channel that this message will be sent to.
                         * <p>Note that an {@link Optional#empty()} channel is different from a
                         * {@link MessageChannel#TO_NONE} channel.</p>
                         * @return The message channel the message in this event will be sent to
                         */
                        // @ts-ignore
                        getChannel(): java.util.Optional<org.spongepowered.api.text.channel.MessageChannel>
                        /**
                         * Sets the channel for this message to go to.
                         * <p>Note that an {@link Optional#empty()} channel is different from a
                         * {@link MessageChannel#TO_NONE} channel.</p>
                         * @param channel The channel to set
                         */
                        // @ts-ignore
                        setChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void
                    }
                }
            }
        }
    }
}
