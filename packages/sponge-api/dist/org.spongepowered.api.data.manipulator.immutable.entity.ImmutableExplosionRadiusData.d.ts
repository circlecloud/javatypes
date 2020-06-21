declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * Represents the radius of an explosion.
                             */
                            // @ts-ignore
                            interface ImmutableExplosionRadiusData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableExplosionRadiusData, org.spongepowered.api.data.manipulator.mutable.entity.ExplosionRadiusData> {
                                /**
                                 * The radius in blocks that the explosion will affect. This value may be
                                 * missing if the explosion radius is unknown such as when it is generated
                                 * randomly on detonation. Setting this value on such explosives will
                                 * override that behavior.
                                 * @return Explosion radius
                                 */
                                // @ts-ignore
                                explosionRadius(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
