declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                namespace PlayerTeleportEvent {
                    // @ts-ignore
                    class TeleportCause extends java.lang.Enum<org.bukkit.event.player.PlayerTeleportEvent.TeleportCause> {
                        /**
                         * Indicates the teleporation was caused by a player throwing an Ender
                         * Pearl
                         */
                        // @ts-ignore
                        readonly ENDER_PEARL: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player executing a
                         * command
                         */
                        // @ts-ignore
                        readonly COMMAND: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a plugin
                         */
                        // @ts-ignore
                        readonly PLUGIN: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player entering a
                         * Nether portal
                         */
                        // @ts-ignore
                        readonly NETHER_PORTAL: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player entering an End
                         * portal
                         */
                        // @ts-ignore
                        readonly END_PORTAL: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player teleporting to a
                         * Entity/Player via the spectator menu
                         */
                        // @ts-ignore
                        readonly SPECTATE: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player entering an End
                         * gateway
                         */
                        // @ts-ignore
                        readonly END_GATEWAY: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by a player consuming chorus
                         * fruit
                         */
                        // @ts-ignore
                        readonly CHORUS_FRUIT: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        /**
                         * Indicates the teleportation was caused by an event not covered by
                         * this enum
                         */
                        // @ts-ignore
                        readonly UNKNOWN: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                        // @ts-ignore
                        values(): org.bukkit.event.player.PlayerTeleportEvent.TeleportCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
                    }
                }
            }
        }
    }
}
