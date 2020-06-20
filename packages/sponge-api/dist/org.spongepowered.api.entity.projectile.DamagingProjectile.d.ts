declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents a {@link Projectile} that inflicts damage.
                     */
                    // @ts-ignore
                    interface DamagingProjectile extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the damaging data for this {@link DamagingProjectile}.
                         * <p>The damaging data defines how much damage the projectile will deal
                         * upon hitting an {@link Entity}, before the explosion.</p>
                         * @return A copy of the damaging data
                         */
                        // @ts-ignore
                        getDamagingData(): org.spongepowered.api.data.manipulator.mutable.entity.DamagingData
                        /**
                         * Gets the damage this projectile will deal to a {@link Living}
                         * if hit.
                         * @return The damage to deal
                         */
                        // @ts-ignore
                        damage(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>
                        /**
                         * Gets the {@link MapValue} for representing the custom damage values to
                         * use if the owner strikes an entity of that type.
                         * <p>Note that in events, the damage defined for the provided
                         * {@link EntityType} will take priority over the "default" damage as
                         * defined from {@link #damage()}.</p>
                         * @return The immutable map value for the entity damage values
                         */
                        // @ts-ignore
                        damageForEntity(): org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.entity.EntityType, java.lang.Double>
                    }
                }
            }
        }
    }
}
