declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Event called when a backend server sends a response to a player asking to
                     * tab-complete a chat message or command. Note that this is not called when
                     * BungeeCord or a plugin responds to a tab-complete request. Use
                     * {@link TabCompleteEvent} for that.
                     */
                    // @ts-ignore
                    class TabCompleteResponseEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, suggestions: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                        /**
                         * Whether the event is cancelled.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean
                        /**
                         * Mutable list of suggestions sent back to the player. If this list is
                         * empty, an empty list is sent back to the client.
                         */
                        // @ts-ignore
                        public getSuggestions(): Array<java.lang.String | string>
                        /**
                         * Whether the event is cancelled.
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
