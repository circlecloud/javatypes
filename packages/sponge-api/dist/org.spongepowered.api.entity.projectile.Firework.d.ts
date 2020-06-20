declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents a firework.
                     */
                    // @ts-ignore
                    interface Firework extends org.spongepowered.api.entity.projectile.Projectile, org.spongepowered.api.entity.explosive.FusedExplosive {
                        /**
                         * Gets a copy of the {@link FireworkEffectData} for this firework.
                         * @return A copy of the firework data
                         */
                        // @ts-ignore
                        getFireworkData(): org.spongepowered.api.data.manipulator.mutable.FireworkEffectData
                        /**
                         * Gets the {@link ListValue} of {@link FireworkEffect}s.
                         * <p>Note that for {@link ItemTypes#FIREWORK_CHARGE} only the first effect
                         * will apply to the charge.</p>
                         * @return The list value of firework effects
                         */
                        // @ts-ignore
                        effects(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.item.FireworkEffect>
                    }
                }
            }
        }
    }
}
