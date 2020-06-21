declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Event called when a player sends a message to a server.
                     */
                    // @ts-ignore
                    class ChatEvent extends net.md_5.bungee.api.event.TargetedEvent implements net.md_5.bungee.api.plugin.Cancellable {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.connection.Connection, receiver: net.md_5.bungee.api.connection.Connection, message: java.lang.String | string)
                        /**
                         * Checks whether this message is valid as a command
                         * @return if this message is a command
                         */
                        // @ts-ignore
                        public isCommand(): boolean
                        /**
                         * Checks whether this message is run on this proxy server.
                         * @return if this command runs on the proxy
                         * @see PluginManager#isExecutableCommand(java.lang.String,
                         *  net.md_5.bungee.api.CommandSender)
                         */
                        // @ts-ignore
                        public isProxyCommand(): boolean
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public isCancelled(): boolean
                        /**
                         * Text contained in this chat.
                         */
                        // @ts-ignore
                        public getMessage(): string
                        /**
                         * Cancelled state.
                         */
                        // @ts-ignore
                        public setCancelled(cancelled: boolean): void
                        /**
                         * Text contained in this chat.
                         */
                        // @ts-ignore
                        public setMessage(message: java.lang.String | string): void
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
