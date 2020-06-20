declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace ChannelBinding {
                    /**
                     * Represents a channel binding that sends and receives messages.
                     */
                    // @ts-ignore
                    interface IndexedMessageChannel extends org.spongepowered.api.network.ChannelBinding {
                        /**
                         * Register a message class to this channel without a receiving handler.
                         * This will only allow the message to be sent, this channel binding
                         * will <strong>not</strong> be able to receive the message.
                         * <p>The message ID is used to identify this message class as it is
                         * sent and received across the network, it is a single byte and thus
                         * has a range of 0 to 255.</p>
                         * @param messageClass The class of the message being registered. Note:
                         *         the class must have a publicly accessible no-args constructor
                         * @param messageId A unique ID for this message
                         */
                        // @ts-ignore
                        registerMessage(messageClass: java.lang.Class<org.spongepowered.api.network.Message>, messageId: number /*int*/): void
                        /**
                         * Register a message class to this channel and a handler for receiving
                         * the message. The handler is invoked every time the message is sent to
                         * <strong>either</strong> side.
                         * @param messageClass The class of the message being registered
                         * @param messageId A unique ID for this message
                         * @param handler The handler that acts upon the message being received
                         */
                        // @ts-ignore
                        registerMessage<M extends org.spongepowered.api.network.Message>(messageClass: java.lang.Class<M>, messageId: number /*int*/, handler: org.spongepowered.api.network.MessageHandler<M>): void
                        /**
                         * Register a message class to this channel and a handler for receiving
                         * the message. The handler is invoked every time the message is sent to
                         * the given side.
                         * @param messageClass The class of the message being registered
                         * @param messageId A unique ID for this message
                         * @param side The side to listen to messages on
                         * @param handler The handler that acts upon the message being received
                         */
                        // @ts-ignore
                        registerMessage<M extends org.spongepowered.api.network.Message>(messageClass: java.lang.Class<M>, messageId: number /*int*/, side: org.spongepowered.api.Platform.Type, handler: org.spongepowered.api.network.MessageHandler<M>): void
                        /**
                         * Register a {@link MessageHandler} for a {@link Message}.
                         * @param messageClass The class to handle
                         * @param side The side being handled
                         * @param handler The handler
                         * @param <M> The type of message
                         */
                        // @ts-ignore
                        addHandler<M extends org.spongepowered.api.network.Message>(messageClass: java.lang.Class<M>, side: org.spongepowered.api.Platform.Type, handler: org.spongepowered.api.network.MessageHandler<M>): void
                        /**
                         * Register a {@link MessageHandler} for a {@link Message}
                         * @param messageClass The class to handle
                         * @param handler The handler
                         * @param <M> The type of message
                         */
                        // @ts-ignore
                        addHandler<M extends org.spongepowered.api.network.Message>(messageClass: java.lang.Class<M>, handler: org.spongepowered.api.network.MessageHandler<M>): void
                        /**
                         * Sends the message to the player across this channel. The message may
                         * not be sent if the player doesn't have a registered handler.
                         * @param player The player to send the message to
                         * @param message The message to send
                         */
                        // @ts-ignore
                        sendTo(player: org.spongepowered.api.entity.living.player.Player, message: org.spongepowered.api.network.Message): void
                        /**
                         * Sends the message to the server. The message may not be sent if there
                         * is no registered handler. This <strong>must</strong> be called from
                         * the client side.
                         * @param message The message to send
                         */
                        // @ts-ignore
                        sendToServer(message: org.spongepowered.api.network.Message): void
                        /**
                         * Sends the message to all players on the server.
                         * @param message The message to send
                         */
                        // @ts-ignore
                        sendToAll(message: org.spongepowered.api.network.Message): void
                    }
                }
            }
        }
    }
}
