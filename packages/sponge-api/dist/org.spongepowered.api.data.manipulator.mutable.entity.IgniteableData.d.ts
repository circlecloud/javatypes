declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for an {@link Entity} that is on fire.
                             * Usually, this type of flame is expiring and not self inflicting.
                             */
                            // @ts-ignore
                            interface IgniteableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.IgniteableData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableIgniteableData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining amount of
                                 * "ticks" the {@link Entity} remains on fire.
                                 * @return The immutable value of "fire ticks"
                                 * @see Keys#FIRE_TICKS
                                 */
                                // @ts-ignore
                                fireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link MutableBoundedValue} for the remaining amount of
                                 * "ticks" before the fire will damage the owning {@link Entity}.
                                 * @return The immutable value
                                 * @see Keys#FIRE_DAMAGE_DELAY
                                 */
                                // @ts-ignore
                                fireDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
