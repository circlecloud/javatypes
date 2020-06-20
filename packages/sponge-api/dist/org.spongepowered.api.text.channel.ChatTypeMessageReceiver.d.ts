declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    /**
                     * Represents something that can receive messages of certain types.
                     */
                    // @ts-ignore
                    interface ChatTypeMessageReceiver {
                        /**
                         * Sends a message with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param type The chat type to send the messages to
                         * @param message The message to send
                         */
                        // @ts-ignore
                        sendMessage(type: org.spongepowered.api.text.chat.ChatType, message: org.spongepowered.api.text.Text): void
                        /**
                         * Sends a message constructed from the {@link TextTemplate} with the
                         * specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param type The chat type to send the messages to
                         * @param template The text template
                         */
                        // @ts-ignore
                        sendMessage(type: org.spongepowered.api.text.chat.ChatType, template: org.spongepowered.api.text.TextTemplate): void
                        /**
                         * Sends a message constructed from the {@link TextTemplate} and
                         * {@code parameters} with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param type The chat type to send the messages to
                         * @param template The text template
                         * @param parameters The parameters to apply to the template
                         */
                        // @ts-ignore
                        sendMessage(type: org.spongepowered.api.text.chat.ChatType, template: org.spongepowered.api.text.TextTemplate, parameters: java.util.Map<java.lang.String, org.spongepowered.api.text.TextElement>): void
                        /**
                         * Sends the message(s) with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param type The chat type to send the messages to
                         * @param messages The message(s) to send
                         */
                        // @ts-ignore
                        sendMessages(type: org.spongepowered.api.text.chat.ChatType, ...messages: org.spongepowered.api.text.Text[]): void
                        /**
                         * Sends the message(s) with the specified {@link ChatType} to this receiver.
                         * <p>If text formatting is not supported in the implementation
                         * it will be displayed as plain text.</p>
                         * @param type The chat type to send the messages to
                         * @param messages The message(s) to send
                         */
                        // @ts-ignore
                        sendMessages(type: org.spongepowered.api.text.chat.ChatType, messages: java.lang.Iterable<org.spongepowered.api.text.Text>): void
                    }
                }
            }
        }
    }
}
