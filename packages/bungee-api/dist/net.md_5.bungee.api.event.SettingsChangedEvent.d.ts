declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace event {
                    /**
                     * Called after a {@link ProxiedPlayer} changed one or more of the following
                     * (client-side) settings:
                     * <ul>
                     * <li>View distance</li>
                     * <li>Locale</li>
                     * <li>Displayed skin parts</li>
                     * <li>Chat visibility</li>
                     * <li>Chat colors</li>
                     * <li>Main hand side (left or right)</li>
                     * </ul>
                     */
                    // @ts-ignore
                    class SettingsChangedEvent extends net.md_5.bungee.api.plugin.Event {
                        // @ts-ignore
                        constructor(player: net.md_5.bungee.api.connection.ProxiedPlayer)
                        /**
                         * Player who changed the settings.
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
