declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event that involves a living entity having effects added and removed.
                     */
                    // @ts-ignore
                    interface ChangeEntityPotionEffectEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets a copy of all current effects applied on the entity.
                         * @return A copy of the potion effects
                         */
                        // @ts-ignore
                        getCurrentEffects(): Array<org.spongepowered.api.effect.potion.PotionEffect>
                        /**
                         * Gets the potion effect involved in this event.
                         * @return The potion effect involved in this event
                         */
                        // @ts-ignore
                        getPotionEffect(): org.spongepowered.api.effect.potion.PotionEffect
                    }
                }
            }
        }
    }
}
