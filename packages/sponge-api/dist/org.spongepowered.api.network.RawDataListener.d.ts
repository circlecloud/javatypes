declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * Represents a listener for data being sent to a raw channel.
                 */
                // @ts-ignore
                interface RawDataListener {
                    /**
                     * Handles the given {@link ChannelBuf} data sent by a remote connection.
                     * @param data The raw data
                     * @param connection The remote connection
                     * @param side The side the data was received on (
                     *         {#link org.spongepowered.api.Platform.Type#CLIENT}
                     *         or {@link org.spongepowered.api.Platform.Type#SERVER})
                     */
                    // @ts-ignore
                    handlePayload(data: org.spongepowered.api.network.ChannelBuf, connection: org.spongepowered.api.network.RemoteConnection, side: org.spongepowered.api.Platform.Type): void
                }
            }
        }
    }
}
