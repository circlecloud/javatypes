declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Event called as soon as a connection has a {@link ProxiedPlayer} and is ready
                     * to be connected to a server.
                     */
                    // @ts-ignore
                    class PostLoginEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer)
                        /**
                         * The player involved with this event.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer
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
