declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Not to be confused with {@link ServerConnectEvent}, this event is called once
                     * a connection to a server is fully operational, and is about to hand over
                     * control of the session to the player. It is useful if you wish to send
                     * information to the server before the player logs in.
                     */
                    // @ts-ignore
                    class ServerConnectedEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, server: net.md_5.bungee.api.connection.Server)
                        /**
                         * Player whom the server is for.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer
                        /**
                         * The server itself.
                         */
                        // @ts-ignore
                        public getServer(): net.md_5.bungee.api.connection.Server
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        canEqual(other: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                    }
                }
            }
        }
    }
}
