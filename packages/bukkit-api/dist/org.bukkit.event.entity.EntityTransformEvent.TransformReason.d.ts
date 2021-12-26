declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityTransformEvent {
                    // @ts-ignore
                    class TransformReason extends java.lang.Enum<org.bukkit.event.entity.EntityTransformEvent.TransformReason> {
                        /**
                         * When a zombie gets cured and a villager is spawned.
                         */
                        // @ts-ignore
                        public static readonly CURED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a villager gets infected and a zombie villager spawns.
                         */
                        // @ts-ignore
                        public static readonly INFECTION: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a entity drowns in water and a new entity spawns.
                         */
                        // @ts-ignore
                        public static readonly DROWNED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a mooshroom (or MUSHROOM_COW) is sheared and a cow spawns.
                         */
                        // @ts-ignore
                        public static readonly SHEARED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When lightning strikes a entity.
                         */
                        // @ts-ignore
                        public static readonly LIGHTNING: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a slime splits into multiple smaller slimes.
                         */
                        // @ts-ignore
                        public static readonly SPLIT: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When reason is unknown.
                         */
                        // @ts-ignore
                        public static readonly UNKNOWN: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        // @ts-ignore
                        public static values(): org.bukkit.event.entity.EntityTransformEvent.TransformReason[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityTransformEvent.TransformReason
                    }
                }
            }
        }
    }
}
