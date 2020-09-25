declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerResourcePackStatusEvent {
                    /**
                     * Status of the resource pack.
                     */
                    // @ts-ignore
                    class Status extends java.lang.Enum<org.bukkit.event.player.PlayerResourcePackStatusEvent.Status> {
                        /**
                         * The resource pack has been successfully downloaded and applied to the
                         * client.
                         */
                        // @ts-ignore
                        public static readonly SUCCESSFULLY_LOADED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client refused to accept the resource pack.
                         */
                        // @ts-ignore
                        public static readonly DECLINED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client accepted the pack, but download failed.
                         */
                        // @ts-ignore
                        public static readonly FAILED_DOWNLOAD: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client accepted the pack and is beginning a download of it.
                         */
                        // @ts-ignore
                        public static readonly ACCEPTED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        // @ts-ignore
                        public static values(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                    }
                }
            }
        }
    }
}
