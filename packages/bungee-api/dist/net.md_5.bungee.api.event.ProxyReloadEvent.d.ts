declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Called when somebody reloads BungeeCord
                     */
                    // @ts-ignore
                    class ProxyReloadEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(sender: net.md_5.bungee.api.CommandSender)
                        /**
                         * Creator of the action.
                         */
                        // @ts-ignore
                        public getSender(): net.md_5.bungee.api.CommandSender
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
