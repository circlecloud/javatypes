declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for an {@link Entity} that is on fire.
                             * Usually, this type of flame is expiring and not self inflicting.
                             */
                            // @ts-ignore
                            interface ImmutableIgniteableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableIgniteableData, org.spongepowered.api.data.manipulator.mutable.entity.IgniteableData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining amount of
                                 * "ticks" the {@link Entity} remains on fire.
                                 * @return The immutable value of "fire ticks"
                                 */
                                // @ts-ignore
                                fireTicks(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the remaining amount of
                                 * "ticks" before the fire will damage the owning {@link Entity}.
                                 * @return The immutable value
                                 */
                                // @ts-ignore
                                fireDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
