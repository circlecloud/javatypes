declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityPotionEffectEvent {
                    /**
                     * An enum to specify the cause why an effect was changed.
                     */
                    // @ts-ignore
                    class Cause extends java.lang.Enum<org.bukkit.event.entity.EntityPotionEffectEvent.Cause> {
                        /**
                         * When the entity stands inside an area effect cloud.
                         */
                        // @ts-ignore
                        public static readonly AREA_EFFECT_CLOUD: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity is hit by an spectral or tipped arrow.
                         */
                        // @ts-ignore
                        public static readonly ARROW: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity is inflicted with a potion effect due to an entity
                         * attack (e.g. a cave spider or a shulker bullet).
                         */
                        // @ts-ignore
                        public static readonly ATTACK: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When beacon effects get applied due to the entity being nearby.
                         */
                        // @ts-ignore
                        public static readonly BEACON: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a potion effect is changed due to the /effect command.
                         */
                        // @ts-ignore
                        public static readonly COMMAND: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity gets the effect from a conduit.
                         */
                        // @ts-ignore
                        public static readonly CONDUIT: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a conversion from a villager zombie to a villager is started or
                         * finished.
                         */
                        // @ts-ignore
                        public static readonly CONVERSION: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When all effects are removed due to death (Note: This is called on
                         * respawn, so it's player only!)
                         */
                        // @ts-ignore
                        public static readonly DEATH: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity gets the effect from a dolphin.
                         */
                        // @ts-ignore
                        public static readonly DOLPHIN: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the effect was removed due to expiration.
                         */
                        // @ts-ignore
                        public static readonly EXPIRATION: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When an effect is inflicted due to food (e.g. when a player eats or a
                         * cookie is given to a parrot).
                         */
                        // @ts-ignore
                        public static readonly FOOD: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When an illusion illager makes himself disappear.
                         */
                        // @ts-ignore
                        public static readonly ILLUSION: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When all effects are removed due to a bucket of milk.
                         */
                        // @ts-ignore
                        public static readonly MILK: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a player gets bad omen after killing a patrol captain.
                         */
                        // @ts-ignore
                        public static readonly PATROL_CAPTAIN: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a potion effect is modified through the plugin methods.
                         */
                        // @ts-ignore
                        public static readonly PLUGIN: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity drinks a potion.
                         */
                        // @ts-ignore
                        public static readonly POTION_DRINK: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity is inflicted with an effect due to a splash potion.
                         */
                        // @ts-ignore
                        public static readonly POTION_SPLASH: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a spider gets effects when spawning on hard difficulty.
                         */
                        // @ts-ignore
                        public static readonly SPIDER_SPAWN: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity gets effects from a totem item saving it's life.
                         */
                        // @ts-ignore
                        public static readonly TOTEM: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the entity gets water breathing by wearing a turtle helmet.
                         */
                        // @ts-ignore
                        public static readonly TURTLE_HELMET: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When the Cause is missing.
                         */
                        // @ts-ignore
                        public static readonly UNKNOWN: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When a villager gets regeneration after a trade.
                         */
                        // @ts-ignore
                        public static readonly VILLAGER_TRADE: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        /**
                         * When an entity comes in contact with a wither rose.
                         */
                        // @ts-ignore
                        public static readonly WITHER_ROSE: org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                        // @ts-ignore
                        public static values(): org.bukkit.event.entity.EntityPotionEffectEvent.Cause[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                    }
                }
            }
        }
    }
}
