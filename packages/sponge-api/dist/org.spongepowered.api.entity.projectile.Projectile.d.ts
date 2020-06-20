declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    /**
                     * Represents entities that act as projectiles and can fly in the air.
                     * For example, Arrows.
                     */
                    // @ts-ignore
                    interface Projectile extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets the shooter of this projectile.
                         * <p>All projectiles have a {@link ProjectileSource} regardless of whether
                         * the projectile was launched via plugin or mod.</p>
                         * @return The projectile source that shot this projectile
                         */
                        // @ts-ignore
                        getShooter(): org.spongepowered.api.entity.projectile.source.ProjectileSource
                        /**
                         * Sets the shooter of this projectile.
                         * <p>All projectiles have a {@link ProjectileSource} regardless of whether
                         * the projectile was launched via plugin or mod.</p>
                         * @param shooter The projectile source that shot this projectile
                         */
                        // @ts-ignore
                        setShooter(shooter: org.spongepowered.api.entity.projectile.source.ProjectileSource): void
                    }
                }
            }
        }
    }
}
