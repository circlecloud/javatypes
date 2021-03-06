declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for retaining the last known "attacker"
                             * for an {@link Entity}. If there is no known last attacker, the
                             * {@link #lastAttacker()} may have an {@link Optional#EMPTY} value.
                             * <p>This data will usually only stay around for 100 ticks, which is generally
                             * around 5 or so seconds.</p>
                             */
                            // @ts-ignore
                            interface ImmutableDamageableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDamageableData, org.spongepowered.api.data.manipulator.mutable.entity.DamageableData> {
                                /**
                                 * Gets the {@link ImmutableOptionalValue} for the last attacker.
                                 * <p>This will usually be an entity snapshot of a {@link Living}.</p>
                                 * <p>This data will usually only be present within 100 ticks of the attack
                                 * occurring.</p>
                                 * @return The last attacker as an optional value
                                 */
                                // @ts-ignore
                                lastAttacker(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<org.spongepowered.api.entity.EntitySnapshot>
                                /**
                                 * Gets the last amount of damage taken by this entity as an optional value.
                                 * <p>This data will usually only be present within 100 ticks of the attack
                                 * occurring.</p>
                                 * @return The last damage dealt as an optional value
                                 */
                                // @ts-ignore
                                lastDamage(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
