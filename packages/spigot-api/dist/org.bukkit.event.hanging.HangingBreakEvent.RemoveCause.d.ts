declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                namespace HangingBreakEvent {
                    /**
                     * An enum to specify the cause of the removal
                     */
                    // @ts-ignore
                    class RemoveCause extends java.lang.Enum<org.bukkit.event.hanging.HangingBreakEvent.RemoveCause> {
                        /**
                         * Removed by an entity
                         */
                        // @ts-ignore
                        public static readonly ENTITY: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                        /**
                         * Removed by an explosion
                         */
                        // @ts-ignore
                        public static readonly EXPLOSION: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                        /**
                         * Removed by placing a block on it
                         */
                        // @ts-ignore
                        public static readonly OBSTRUCTION: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                        /**
                         * Removed by destroying the block behind it, etc
                         */
                        // @ts-ignore
                        public static readonly PHYSICS: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                        /**
                         * Removed by an uncategorised cause
                         */
                        // @ts-ignore
                        public static readonly DEFAULT: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                        // @ts-ignore
                        public static values(): org.bukkit.event.hanging.HangingBreakEvent.RemoveCause[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.hanging.HangingBreakEvent.RemoveCause
                    }
                }
            }
        }
    }
}
