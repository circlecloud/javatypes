declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    namespace explosive {
                        namespace fireball {
                            /**
                             * Represents an abstract fireball, such as {@link SmallFireball}.
                             */
                            // @ts-ignore
                            interface Fireball extends org.spongepowered.api.entity.projectile.DamagingProjectile {
                                /**
                                 * @see Keys#ACCELERATION
                                 */
                                // @ts-ignore
                                acceleration(): org.spongepowered.api.data.value.mutable.Value<Vector3d>
                            }
                        }
                    }
                }
            }
        }
    }
}
