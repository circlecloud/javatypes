declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    /**
                     * Represents something that can receive (and send) messages.
                     */
                    // @ts-ignore
                    interface MessageReceiver {
                        /**
                         * Sends a message to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param message The message
                         */
                        // @ts-ignore
                        sendMessage(message: org.spongepowered.api.text.Text): void
                        /**
                         * Sends a message constructed from the {@link TextTemplate} to
                         * this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param template The text template
                         */
                        // @ts-ignore
                        sendMessage(template: org.spongepowered.api.text.TextTemplate): void
                        /**
                         * Sends a message constructed from the {@link TextTemplate} and
                         * {@code parameters} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param template The text template
                         * @param parameters The parameters to apply to the template
                         */
                        // @ts-ignore
                        sendMessage(template: org.spongepowered.api.text.TextTemplate, parameters: java.util.Map<java.lang.String | string, org.spongepowered.api.text.TextElement>): void
                        /**
                         * Sends the message(s) to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param messages The message(s)
                         */
                        // @ts-ignore
                        sendMessages(...messages: org.spongepowered.api.text.Text[]): void
                        /**
                         * Sends the message(s) to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param messages The messages
                         */
                        // @ts-ignore
                        sendMessages(messages: java.lang.Iterable<org.spongepowered.api.text.Text>): void
                        /**
                         * Return the message channel that messages from this source should be sent
                         * to.
                         * @return This source's active message channel
                         */
                        // @ts-ignore
                        getMessageChannel(): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Sets the message channel that messages sent by this source should be sent
                         * to.
                         * @param channel The message channel to send messages to
                         */
                        // @ts-ignore
                        setMessageChannel(channel: org.spongepowered.api.text.channel.MessageChannel): void
                    }
                }
            }
        }
    }
}
