declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "affects spawning" state of
                             * a {@link Player}.
                             */
                            // @ts-ignore
                            interface ImmutableAffectsSpawningData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAffectsSpawningData, org.spongepowered.api.data.manipulator.mutable.entity.AffectsSpawningData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "affects spawning" state.
                                 * @return The immutable value for the affects spawning state
                                 */
                                // @ts-ignore
                                affectsSpawning(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
