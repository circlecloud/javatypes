declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents a {@link Projectile} targeting an {@link Entity}
                     */
                    // @ts-ignore
                    interface EntityTargetingProjectile extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the targeted entity data for this {@link EntityTargetingProjectile}.
                         * <p>The targeted entity data defines which entity this projectile will target.</p>
                         * @return A copy of the targeted entity data
                         */
                        // @ts-ignore
                        getTargetData(): org.spongepowered.api.data.manipulator.mutable.entity.TargetedEntityData
                        /**
                         * Gets the entity this projectile will target.
                         * @return The targeted entity
                         */
                        // @ts-ignore
                        target(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>
                    }
                }
            }
        }
    }
}
