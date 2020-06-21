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
                        readonly CURED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a villager gets infected and a zombie villager spawns.
                         */
                        // @ts-ignore
                        readonly INFECTION: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a entity drowns in water and a new entity spawns.
                         */
                        // @ts-ignore
                        readonly DROWNED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a mooshroom (or MUSHROOM_COW) is sheared and a cow spawns.
                         */
                        // @ts-ignore
                        readonly SHEARED: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When lightning strikes a entity.
                         */
                        // @ts-ignore
                        readonly LIGHTNING: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        /**
                         * When a slime splits into multiple smaller slimes.
                         */
                        // @ts-ignore
                        readonly SPLIT: org.bukkit.event.entity.EntityTransformEvent.TransformReason
                        // @ts-ignore
                        values(): org.bukkit.event.entity.EntityTransformEvent.TransformReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityTransformEvent.TransformReason
                    }
                }
            }
        }
    }
}
