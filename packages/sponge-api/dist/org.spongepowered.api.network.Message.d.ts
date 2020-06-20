declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * A message transmitted over the connection of a client and a server.
                 * <p>Note to plugin implementations: This must have a publicly accessible
                 * no-args constructor.</p>
                 */
                // @ts-ignore
                interface Message {
                    /**
                     * Read the data from the channel buffer into this message.
                     * @param buf The buffer to read from
                     */
                    // @ts-ignore
                    readFrom(buf: org.spongepowered.api.network.ChannelBuf): void
                    /**
                     * Write the data from this message to the channel buffer.
                     * @param buf The buffer to write to
                     */
                    // @ts-ignore
                    writeTo(buf: org.spongepowered.api.network.ChannelBuf): void
                }
            }
        }
    }
}
