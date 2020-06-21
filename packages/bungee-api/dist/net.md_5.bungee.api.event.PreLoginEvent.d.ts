declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Event called to represent a player first making their presence and username
                     * known.
                     * This will NOT contain many attributes relating to the player which are filled
                     * in after authentication with Mojang's servers. Examples of attributes which
                     * are not available include their UUID.
                     */
                    // @ts-ignore
                    class PreLoginEvent extends net.md_5.bungee.api.event.AsyncEvent<net.md_5.bungee.api.event.PreLoginEvent> implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(connection: net.md_5.bungee.api.connection.PendingConnection, done: net.md_5.bungee.api.Callback<net.md_5.bungee.api.event.PreLoginEvent>)
                        /**
                         * @return reason to be displayed
                         * @deprecated Use component methods instead.
                         */
                        // @ts-ignore
                        public getCancelReason(): string
                        /**
                         * @param cancelReason reason to be displayed
                         * @deprecated Use
                         *  {#link #setCancelReason(net.md_5.bungee.api.chat.BaseComponent...)}
                         *  instead.
                         */
                        // @ts-ignore
                        public setCancelReason(cancelReason: java.lang.String | string): void
                        // @ts-ignore
                        public setCancelReason(...cancelReason: BaseComponent[]): void
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean
                        /**
                         * Message to use when kicking if this event is canceled.
                         */
                        // @ts-ignore
                        public getCancelReasonComponents(): BaseComponent[]
                        /**
                         * Connection attempting to login.
                         */
                        // @ts-ignore
                        public getConnection(): net.md_5.bungee.api.connection.PendingConnection
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
