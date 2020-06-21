declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for an owner that will deal a certain amount of
                             * damage on the next "attack". Usually applicable to {@link Arrow}s and other
                             * {@link Projectile}s.
                             */
                            // @ts-ignore
                            interface DamagingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.DamagingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDamagingData> {
                                /**
                                 * Gets the damage this projectile will deal to a {@link Living}
                                 * if hit.
                                 * @return The damage to deal
                                 * @see Keys#ATTACK_DAMAGE
                                 */
                                // @ts-ignore
                                damage(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the {@link MapValue} for representing the custom damage
                                 * values to use if the owner strikes an entity of that type.
                                 * <p>Note that in events, the damage defined for the provided
                                 * {@link EntityType} will take priority over the "default" damage as
                                 * defined from {@link #damage()}.</p>
                                 * @return The immutable map value for the entity damage values
                                 * @see Keys#DAMAGE_ENTITY_MAP
                                 */
                                // @ts-ignore
                                damageForEntity(): org.spongepowered.api.data.value.mutable.MapValue<org.spongepowered.api.entity.EntityType, java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
