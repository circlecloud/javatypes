declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityRegainHealthEvent {
                    /**
                     * An enum to specify the type of health regaining that is occurring
                     */
                    // @ts-ignore
                    class RegainReason extends java.lang.Enum<org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason> {
                        /**
                         * When a player regains health from regenerating due to Peaceful mode
                         * (difficulty=0)
                         */
                        // @ts-ignore
                        readonly REGEN: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When a player regains health from regenerating due to their hunger
                         * being satisfied
                         */
                        // @ts-ignore
                        readonly SATIATED: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When a player regains health from eating consumables
                         */
                        // @ts-ignore
                        readonly EATING: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When an ender dragon regains health from an ender crystal
                         */
                        // @ts-ignore
                        readonly ENDER_CRYSTAL: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When a player is healed by a potion or spell
                         */
                        // @ts-ignore
                        readonly MAGIC: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When a player is healed over time by a potion or spell
                         */
                        // @ts-ignore
                        readonly MAGIC_REGEN: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When a wither is filling its health during spawning
                         */
                        // @ts-ignore
                        readonly WITHER_SPAWN: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * When an entity is damaged by the Wither potion effect
                         */
                        // @ts-ignore
                        readonly WITHER: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        /**
                         * Any other reason not covered by the reasons above
                         */
                        // @ts-ignore
                        readonly CUSTOM: org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                        // @ts-ignore
                        values(): org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityRegainHealthEvent.RegainReason
                    }
                }
            }
        }
    }
}
