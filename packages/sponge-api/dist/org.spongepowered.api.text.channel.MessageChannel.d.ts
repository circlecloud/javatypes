declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    /**
                     * Represents a channel that takes a message and transforms it for distribution
                     * to the members.
                     */
                    // @ts-ignore
                    interface MessageChannel {
                        /**
                         * A channel with no members.
                         */
                        // @ts-ignore
                        
                        /**
                         * A channel with all online players as members.
                         */
                        // @ts-ignore
                        
                        /**
                         * A channel with the server console as a member.
                         */
                        // @ts-ignore
                        
                        /**
                         * A channel with all online players, as well as the server console, as
                         * members.
                         */
                        // @ts-ignore
                        
                        /**
                         * Creates a message channel that targets all subjects with the given
                         * permission.
                         * @param permission The permission to target
                         * @return The channel
                         * @see PermissionMessageChannel
                         */
                        // @ts-ignore
                        permission(permission: string): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Creates a message channel that targets all subjects contained within the
                         * given channels and applies the message transformations of each channel in
                         * order.
                         * @param channels The channels to combine
                         * @return The channel
                         * @see CombinedMessageChannel
                         */
                        // @ts-ignore
                        combined(...channels: org.spongepowered.api.text.channel.MessageChannel[]): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Gets a message channel that targets all subjects contained within the
                         * given channels and applies the message transformations of each channel in
                         * order.
                         * @param channels The channels to combine
                         * @return The channel
                         * @see CombinedMessageChannel
                         */
                        // @ts-ignore
                        combined(channels: Array<org.spongepowered.api.text.channel.MessageChannel>): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Creates a message channel that targets the given sources.
                         * @param recipients The recipients
                         * @return The channel
                         * @see FixedMessageChannel
                         */
                        // @ts-ignore
                        fixed(...recipients: org.spongepowered.api.text.channel.MessageReceiver[]): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Creates a message channel that targets the given recipients.
                         * @param recipients The recipients
                         * @return The channel
                         * @see FixedMessageChannel
                         */
                        // @ts-ignore
                        fixed(recipients: Array<org.spongepowered.api.text.channel.MessageReceiver>): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Creates a message channel that targets the given world.
                         * @param world The world
                         * @return The channel
                         * @see WorldMessageChannel
                         */
                        // @ts-ignore
                        world(world: org.spongepowered.api.world.World): org.spongepowered.api.text.channel.MessageChannel
                        /**
                         * Broadcast a message to this channel, transforming and sending it to
                         * the members.
                         * @param original The original text to send
                         */
                        // @ts-ignore
                        send(original: org.spongepowered.api.text.Text): void
                        /**
                         * Sends a message to this channel, transforming and sending it to
                         * the members.
                         * <p>By default, the {@link ChatTypes#SYSTEM} type is used when sending
                         * messages to applicable recipients of this channel.</p>
                         * @param original The original text to send
                         * @param type The type of message
                         */
                        // @ts-ignore
                        send(original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): void
                        /**
                         * Send a message to this channel, transforming and sending it to the
                         * members.
                         * @param sender The sender of the message
                         * @param original The original message to send
                         */
                        // @ts-ignore
                        send(sender: any, original: org.spongepowered.api.text.Text): void
                        /**
                         * Send a message to this channel, transforming and sending it to the
                         * members.
                         * @param sender The sender of the message
                         * @param original The original message to send
                         * @param type The type of message
                         */
                        // @ts-ignore
                        send(sender: any, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): void
                        /**
                         * Handle transforming the input message appropriately.
                         * @param sender The sender of the message
                         * @param recipient The recipient of the message
                         * @param original The original message, to optionally transform
                         * @param type The type of message
                         * @return The message to send, if present, otherwise {#link Optional#empty()}
                         */
                        // @ts-ignore
                        transformMessage(sender: any, recipient: org.spongepowered.api.text.channel.MessageReceiver, original: org.spongepowered.api.text.Text, type: org.spongepowered.api.text.chat.ChatType): java.util.Optional<org.spongepowered.api.text.Text>
                        /**
                         * Gets a collection of all members in this channel.
                         * @return A collection of all members of this channel
                         */
                        // @ts-ignore
                        getMembers(): java.util.Collection<org.spongepowered.api.text.channel.MessageReceiver>
                        /**
                         * Gets or creates a mutable version of this channel.
                         * <p>The default behaviour of this method is to copy the current member
                         * list into a {@link DelegateMutableMessageChannel}, which calls the
                         * {@link #transformMessage(Object, MessageReceiver, Text, ChatType)} method
                         * on this channel.</p>
                         * @return A mutable channel
                         */
                        // @ts-ignore
                        asMutable(): org.spongepowered.api.text.channel.MutableMessageChannel
                    }
                }
            }
        }
    }
}
