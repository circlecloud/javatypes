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
                        readonly ADDED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the entity already had the potion effect type, but the effect is
                         * changed.
                         */
                        // @ts-ignore
                        readonly CHANGED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the effect is removed due to all effects being removed.
                         */
                        // @ts-ignore
                        readonly CLEARED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        /**
                         * When the potion effect type is completely removed.
                         */
                        // @ts-ignore
                        readonly REMOVED: org.bukkit.event.entity.EntityPotionEffectEvent.Action
                        // @ts-ignore
                        values(): org.bukkit.event.entity.EntityPotionEffectEvent.Action[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityPotionEffectEvent.Action
                    }
                }
            }
        }
    }
}
