declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityPotionEffectEvent {
                    /**
                     * An enum to specify the action to be performed.
                     */
                    // @ts-ignore
                    class Action extends java.lang.Enum<org.bukkit.event.entity.EntityPotionEffectEvent.Action> {
                        /**
                         * When the potion effect is added because the entity didn't have it's
                         * type.
                         */
                        // @ts-ignore
                        public static readonly ADDED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the entity already had the potion effect type, but the effect is
                         * changed.
                         */
                        // @ts-ignore
                        public static readonly CHANGED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the effect is removed due to all effects being removed.
                         */
                        // @ts-ignore
                        public static readonly CLEARED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the potion effect type is completely removed.
                         */
                        // @ts-ignore
                        public static readonly REMOVED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        // @ts-ignore
                        public static values(): org.bukkit.event.entity.EntityPotionEffectEvent.Action[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityPotionEffectEvent.Action
                    }
                }
            }
        }
    }
}
