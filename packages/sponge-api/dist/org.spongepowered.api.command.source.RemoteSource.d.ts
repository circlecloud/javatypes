declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    /**
                     * Represents a source that is not local to the server. This includes Rcon,
                     * player connections, and others.
                     */
                    // @ts-ignore
                    interface RemoteSource extends org.spongepowered.api.command.CommandSource {
                        /**
                         * Gets connection information for this source.
                         * @return This source's connection
                         */
                        // @ts-ignore
                        getConnection(): org.spongepowered.api.network.RemoteConnection
                    }
                }
            }
        }
    }
}
