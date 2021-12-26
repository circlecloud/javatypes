declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                namespace CauldronLevelChangeEvent {
                    // @ts-ignore
                    class ChangeReason extends java.lang.Enum<org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason> {
                        /**
                         * Player emptying the cauldron by filling their bucket.
                         */
                        // @ts-ignore
                        public static readonly BUCKET_FILL: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Player filling the cauldron by emptying their bucket.
                         */
                        // @ts-ignore
                        public static readonly BUCKET_EMPTY: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Player emptying the cauldron by filling their bottle.
                         */
                        // @ts-ignore
                        public static readonly BOTTLE_FILL: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Player filling the cauldron by emptying their bottle.
                         */
                        // @ts-ignore
                        public static readonly BOTTLE_EMPTY: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Player cleaning their banner.
                         */
                        // @ts-ignore
                        public static readonly BANNER_WASH: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Player cleaning their armor.
                         */
                        // @ts-ignore
                        public static readonly ARMOR_WASH: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Entity being extinguished.
                         */
                        // @ts-ignore
                        public static readonly EXTINGUISH: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Evaporating due to biome dryness.
                         */
                        // @ts-ignore
                        public static readonly EVAPORATE: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        /**
                         * Unknown.
                         */
                        // @ts-ignore
                        public static readonly UNKNOWN: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                        // @ts-ignore
                        public static values(): org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason
                    }
                }
            }
        }
    }
}
