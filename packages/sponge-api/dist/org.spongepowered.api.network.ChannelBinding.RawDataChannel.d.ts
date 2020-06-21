declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace ChannelBinding {
                    /**
                     * Represents a channel that sends and receives raw data.
                     */
                    // @ts-ignore
                    interface RawDataChannel extends org.spongepowered.api.network.ChannelBinding {
                        /**
                         * Adds a listener to this channel that is invoked every time data is
                         * sent to it on <strong>either</strong> side.
                         * @param listener The listener
                         */
                        // @ts-ignore
                        addListener(listener: org.spongepowered.api.network.RawDataListener): void
                        /**
                         * Adds a listener to this channel that is invoked every time data is
                         * sent to it on the given side.
                         * @param side The side to listen to data on
                         * @param listener The listener
                         */
                        // @ts-ignore
                        addListener(side: org.spongepowered.api.Platform.Type, listener: org.spongepowered.api.network.RawDataListener): void
                        /**
                         * Removes the listener from handling data.
                         * @param listener The listener
                         */
                        // @ts-ignore
                        removeListener(listener: org.spongepowered.api.network.RawDataListener): void
                        /**
                         * Sends the raw payload to the player across this channel. The data may
                         * not be sent if the player doesn't have a registered handler.
                         * @param player The player to send the message to
                         * @param payload A consumer to write the data to
                         */
                        // @ts-ignore
                        sendTo(player: org.spongepowered.api.entity.living.player.Player, payload: java.util.function$.Consumer<org.spongepowered.api.network.ChannelBuf>): void
                        /**
                         * Sends the raw payload to the server. The data may not be sent if
                         * there is no registered handler. This <strong>must</strong> be called
                         * from the client side.
                         * @param payload A consumer to write the data to
                         */
                        // @ts-ignore
                        sendToServer(payload: java.util.function$.Consumer<org.spongepowered.api.network.ChannelBuf>): void
                        /**
                         * Sends the raw payload to all players on the server.
                         * @param payload A consumer to write the data to
                         */
                        // @ts-ignore
                        sendToAll(payload: java.util.function$.Consumer<org.spongepowered.api.network.ChannelBuf>): void
                    }
                }
            }
        }
    }
}
