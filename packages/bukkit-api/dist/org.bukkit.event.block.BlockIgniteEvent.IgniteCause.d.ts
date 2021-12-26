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
                        public static readonly LAVA: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by a player or dispenser using flint-and-steel.
                         */
                        // @ts-ignore
                        public static readonly FLINT_AND_STEEL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by dynamic spreading of fire.
                         */
                        // @ts-ignore
                        public static readonly SPREAD: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by lightning.
                         */
                        // @ts-ignore
                        public static readonly LIGHTNING: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by an entity using a fireball.
                         */
                        // @ts-ignore
                        public static readonly FIREBALL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by an Ender Crystal.
                         */
                        // @ts-ignore
                        public static readonly ENDER_CRYSTAL: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by explosion.
                         */
                        // @ts-ignore
                        public static readonly EXPLOSION: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        /**
                         * Block ignition caused by a flaming arrow.
                         */
                        // @ts-ignore
                        public static readonly ARROW: org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                        // @ts-ignore
                        public static values(): org.bukkit.event.block.BlockIgniteEvent.IgniteCause[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                    }
                }
            }
        }
    }
}
