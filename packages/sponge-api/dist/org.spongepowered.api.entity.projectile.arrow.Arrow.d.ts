declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace arrow {
                        /**
                         * Represents an arrow projectile.
                         */
                        // @ts-ignore
                        interface Arrow extends org.spongepowered.api.entity.projectile.DamagingProjectile {
                            /**
                             * Gets a copy of the current {@link KnockbackData} that this arrow
                             * has.
                             * @return A copy of the knockback data
                             */
                            // @ts-ignore
                            getKnockbackData(): org.spongepowered.api.data.manipulator.mutable.entity.KnockbackData
                            /**
                             * Gets the {@link MutableBoundedValue} for the "knockback strength"
                             * that this arrow has.
                             * @return The immutable value for the knockback strength
                             */
                            // @ts-ignore
                            knockbackStrength(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                        }
                    }
                }
            }
        }
    }
}
