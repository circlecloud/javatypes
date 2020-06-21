declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                namespace PortalCreateEvent {
                    /**
                     * An enum to specify the various reasons for a portal's creation
                     */
                    // @ts-ignore
                    class CreateReason extends java.lang.Enum<org.bukkit.event.world.PortalCreateEvent.CreateReason> {
                        /**
                         * When the blocks inside a portal are created due to a portal frame
                         * being set on fire.
                         */
                        // @ts-ignore
                        readonly FIRE: org.bukkit.event.world.PortalCreateEvent.CreateReason
                        /**
                         * When a nether portal frame and portal is created at the exit of an
                         * entered nether portal.
                         */
                        // @ts-ignore
                        readonly NETHER_PAIR: org.bukkit.event.world.PortalCreateEvent.CreateReason
                        /**
                         * When the target end platform is created as a result of a player
                         * entering an end portal.
                         */
                        // @ts-ignore
                        readonly END_PLATFORM: org.bukkit.event.world.PortalCreateEvent.CreateReason
                        // @ts-ignore
                        values(): org.bukkit.event.world.PortalCreateEvent.CreateReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.world.PortalCreateEvent.CreateReason
                    }
                }
            }
        }
    }
}
