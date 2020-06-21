declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    /**
                     * Represents a destination which this proxy might connect to.
                     */
                    // @ts-ignore
                    interface Server extends net.md_5.bungee.api.connection.Connection {
                        /**
                         * Returns the basic information about this server.
                         * @return the {#link ServerInfo} for this server
                         */
                        // @ts-ignore
                        getInfo(): net.md_5.bungee.api.config.ServerInfo
                        /**
                         * Send data by any available means to this server.
                         * In recent Minecraft versions channel names must contain a colon separator
                         * and consist of [a-z0-9/._-]. This will be enforced in a future version.
                         * The "BungeeCord" channel is an exception and may only take this form.
                         * @param channel the channel to send this data via
                         * @param data the data to send
                         */
                        // @ts-ignore
                        sendData(channel: java.lang.String | string, data: number /*byte*/[]): void
                    }
                }
            }
        }
    }
}
