declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                namespace BlockIgniteEvent {
                    /**
                     * An enum to specify the cause of the ignite
                     */
                    // @ts-ignore
                    class IgniteCause extends java.lang.Enum<org.bukkit.event.block.BlockIgniteEvent.IgniteCause> {
                        /**
                         * Block ignition caused by lava.
                         */
                        // @ts-ignore
                        readonly LAVA: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by a player or dispenser using flint-and-steel.
                         */
                        // @ts-ignore
                        readonly FLINT_AND_STEEL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by dynamic spreading of fire.
                         */
                        // @ts-ignore
                        readonly SPREAD: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by lightning.
                         */
                        // @ts-ignore
                        readonly LIGHTNING: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by an entity using a fireball.
                         */
                        // @ts-ignore
                        readonly FIREBALL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by an Ender Crystal.
                         */
                        // @ts-ignore
                        readonly ENDER_CRYSTAL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by explosion.
                         */
                        // @ts-ignore
                        readonly EXPLOSION: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by a flaming arrow.
                         */
                        // @ts-ignore
                        readonly ARROW: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        // @ts-ignore
                        values(): org.bukkit.event.block.BlockIgniteEvent.IgniteCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                    }
                }
            }
        }
    }
}
