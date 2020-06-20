declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} for an owner that will deal a certain amount of
                             * damage on the next "attack". Usually applicable to {@link Arrow}s and other
                             * {@link Projectile}s.
                             */
                            // @ts-ignore
                            interface ImmutableDamagingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDamagingData, org.spongepowered.api.data.manipulator.mutable.entity.DamagingData> {
                                /**
                                 * Gets the damage this projectile will deal to an {@link Entity} if hit.
                                 * @return The damage to deal as a value
                                 */
                                // @ts-ignore
                                damage(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                                /**
                                 * Gets the {@link ImmutableMapValue} for representing the custom damage
                                 * values to use if the owner strikes an entity of that type.
                                 * <p>Note that in events, the damage defined for the provided
                                 * {@link EntityType} will take priority over the "default" damage as
                                 * defined from {@link #damage()}.</p>
                                 * @return The immutable map value for the entity damage values
                                 */
                                // @ts-ignore
                                damageForEntityTypes(): org.spongepowered.api.data.value.immutable.ImmutableMapValue<org.spongepowered.api.entity.EntityType, java.lang.Double>
                            }
                        }
                    }
                }
            }
        }
    }
}
