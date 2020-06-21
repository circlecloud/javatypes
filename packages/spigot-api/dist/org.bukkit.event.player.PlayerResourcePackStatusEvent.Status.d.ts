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
                        readonly SUCCESSFULLY_LOADED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client refused to accept the resource pack.
                         */
                        // @ts-ignore
                        readonly DECLINED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client accepted the pack, but download failed.
                         */
                        // @ts-ignore
                        readonly FAILED_DOWNLOAD: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        /**
                         * The client accepted the pack and is beginning a download of it.
                         */
                        // @ts-ignore
                        readonly ACCEPTED: org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                        // @ts-ignore
                        values(): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerResourcePackStatusEvent.Status
                    }
                }
            }
        }
    }
}
