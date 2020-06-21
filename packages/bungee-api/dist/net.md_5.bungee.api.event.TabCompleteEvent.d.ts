declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Event called when a player uses tab completion.
                     */
                    // @ts-ignore
                    class TabCompleteEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, cursor: java.lang.String | string, suggestions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean
                        /**
                         * The message the player has already entered.
                         */
                        // @ts-ignore
                        public getCursor(): string
                        /**
                         * The suggestions that will be sent to the client. This list is mutable. If
                         * this list is empty, the request will be forwarded to the server.
                         */
                        // @ts-ignore
                        public getSuggestions(): Array<java.lang.String | string>
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
