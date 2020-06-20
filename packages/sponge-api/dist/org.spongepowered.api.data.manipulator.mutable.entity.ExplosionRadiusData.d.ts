declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the radius of an explosion.
                             */
                            // @ts-ignore
                            interface ExplosionRadiusData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ExplosionRadiusData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExplosionRadiusData> {
                                /**
                                 * The radius in blocks that the explosion will affect. This value may be
                                 * missing if the explosion radius is unknown such as when it is generated
                                 * randomly on detonation. Setting this value on such explosives will
                                 * override that behavior.
                                 * @return Explosion radius
                                 * @see Keys#EXPLOSION_RADIUS
                                 */
                                // @ts-ignore
                                explosionRadius(): org.spongepowered.api.data.value.mutable.OptionalValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
