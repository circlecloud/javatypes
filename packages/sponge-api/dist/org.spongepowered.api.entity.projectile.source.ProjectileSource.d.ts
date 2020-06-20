declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace source {
                        /**
                         * Represents a valid source of a projectile.
                         */
                        // @ts-ignore
                        interface ProjectileSource {
                            // @ts-ignore
                            
                            /**
                             * Launches a {@link Projectile} from this projectile source.
                             * @param projectileClass The class of the projectile
                             * @param <T> The Type of Projectile
                             * @return The projectile instance if it was launched, or absent
                             */
                            // @ts-ignore
                            launchProjectile<T extends org.spongepowered.api.entity.projectile.Projectile>(projectileClass: java.lang.Class<T>): java.util.Optional<T>
                            /**
                             * Launches a {@link Projectile} from this projectile source.
                             * @param projectileClass The class of the projectile
                             * @param velocity The velocity to launch the projectile
                             * @param <T> The Type of Projectile
                             * @return The projectile instance if it was launched, or absent
                             */
                            // @ts-ignore
                            launchProjectile<T extends org.spongepowered.api.entity.projectile.Projectile>(projectileClass: java.lang.Class<T>, velocity: Vector3d): java.util.Optional<T>
                        }
                    }
                }
            }
        }
    }
}
