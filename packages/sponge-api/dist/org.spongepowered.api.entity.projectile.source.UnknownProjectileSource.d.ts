declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace source {
                        /**
                         * Represents a {@link ProjectileSource} that is not part of the API, such as a
                         * plugin or mod spawning a Projectile.
                         */
                        // @ts-ignore
                        class UnknownProjectileSource extends java.lang.Object implements org.spongepowered.api.entity.projectile.source.ProjectileSource {
                            // @ts-ignore
                            launchProjectile<T extends org.spongepowered.api.entity.projectile.Projectile>(projectileClass: java.lang.Class<T>): java.util.Optional<T>
                            // @ts-ignore
                            launchProjectile<T extends org.spongepowered.api.entity.projectile.Projectile>(projectileClass: java.lang.Class<T>, velocity: Vector3d): java.util.Optional<T>
                        }
                    }
                }
            }
        }
    }
}
