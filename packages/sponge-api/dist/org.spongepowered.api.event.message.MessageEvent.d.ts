declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    /**
                     * Describes events when a involving a {@link Text} message.
                     */
                    // @ts-ignore
                    interface MessageEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Parameter for header section in header partition.
                         */
                        // @ts-ignore
                        
                        /**
                         * Parameter for body section in body partition.
                         */
                        // @ts-ignore
                        
                        /**
                         * Parameter for footer section in footer partition.
                         */
                        // @ts-ignore
                        
                        /**
                         * Gets the original {@link Text} message.
                         * @return The message
                         */
                        // @ts-ignore
                        getOriginalMessage(): org.spongepowered.api.text.Text
                        /**
                         * Returns true if the {@link Text} returned by
                         * {@link #getMessage()} should not be sent.
                         * @return True if message should not be sent
                         */
                        // @ts-ignore
                        isMessageCancelled(): boolean
                        /**
                         * Sets whether the {@link Text} returned by
                         * {@link #getMessage()} should be sent.
                         * @param cancelled True if should not be sent
                         */
                        // @ts-ignore
                        setMessageCancelled(cancelled: boolean): void
                        /**
                         * Returns the {@link MessageFormatter} used to mutate the event's message.
                         * @return MessageFormatter of event
                         */
                        // @ts-ignore
                        getFormatter(): org.spongepowered.api.event.message.MessageEvent.MessageFormatter
                        /**
                         * Returns the formatted message.
                         * @return Message
                         */
                        // @ts-ignore
                        getMessage(): org.spongepowered.api.text.Text
                        /**
                         * Clears the currently set message and returns the empty formatter.
                         * @return Empty {#link MessageFormatter}
                         */
                        // @ts-ignore
                        clearMessage(): org.spongepowered.api.event.message.MessageEvent.MessageFormatter
                        /**
                         * Clears any existing components and sets the header, body, and footer
                         * respectively.
                         * @param header Header value
                         * @param body Body value
                         * @param footer Footer value
                         */
                        // @ts-ignore
                        setMessage(header: org.spongepowered.api.text.TextRepresentable, body: org.spongepowered.api.text.TextRepresentable, footer: org.spongepowered.api.text.TextRepresentable): void
                        /**
                         * Clears any existing components and sets the header and body
                         * respectively.
                         * @param header Header value
                         * @param body Body value
                         */
                        // @ts-ignore
                        setMessage(header: org.spongepowered.api.text.TextRepresentable, body: org.spongepowered.api.text.TextRepresentable): void
                        /**
                         * Clears any existing components and sets the body.
                         * @param body Body value
                         */
                        // @ts-ignore
                        setMessage(body: org.spongepowered.api.text.TextRepresentable): void
                    }
                }
            }
        }
    }
}
