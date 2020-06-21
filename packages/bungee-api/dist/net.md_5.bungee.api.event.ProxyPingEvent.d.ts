declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Called when the proxy is pinged with packet 0xFE from the server list.
                     */
                    // @ts-ignore
                    class ProxyPingEvent extends net.md_5.bungee.api.event.AsyncEvent<net.md_5.bungee.api.event.ProxyPingEvent> {
                        // @ts-ignore
                        constructor(connection: net.md_5.bungee.api.connection.PendingConnection, response: net.md_5.bungee.api.ServerPing, done: net.md_5.bungee.api.Callback<net.md_5.bungee.api.event.ProxyPingEvent>)
                        /**
                         * The connection asking for a ping response.
                         */
                        // @ts-ignore
                        public getConnection(): net.md_5.bungee.api.connection.PendingConnection
                        /**
                         * The data to respond with.
                         */
                        // @ts-ignore
                        public getResponse(): net.md_5.bungee.api.ServerPing
                        /**
                         * The data to respond with.
                         */
                        // @ts-ignore
                        public setResponse(response: net.md_5.bungee.api.ServerPing): void
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
