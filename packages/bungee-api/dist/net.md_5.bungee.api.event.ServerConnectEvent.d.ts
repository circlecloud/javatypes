declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Called when deciding to connect to a server. At the time when this event is
                     * called, no connection has actually been made. Cancelling the event will
                     * ensure that the connection does not proceed and can be useful to prevent
                     * certain players from accessing certain servers.
                     */
                    // @ts-ignore
                    class ServerConnectEvent extends net.md_5.bungee.api.plugin.Event implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, target: net.md_5.bungee.api.config.ServerInfo)
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer, target: net.md_5.bungee.api.config.ServerInfo, reason: net.md_5.bungee.api.event.ServerConnectEvent.Reason)
                        /**
                         * Player connecting to a new server.
                         */
                        // @ts-ignore
                        public getPlayer(): net.md_5.bungee.api.connection.ProxiedPlayer
                        /**
                         * Server the player will be connected to.
                         */
                        // @ts-ignore
                        public getTarget(): net.md_5.bungee.api.config.ServerInfo
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean
                        // @ts-ignore
                        public getReason(): net.md_5.bungee.api.event.ServerConnectEvent.Reason
                        /**
                         * Server the player will be connected to.
                         */
                        // @ts-ignore
                        public setTarget(target: net.md_5.bungee.api.config.ServerInfo): void
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public setCancelled(cancelled: boolean): void
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
