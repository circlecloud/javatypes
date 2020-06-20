declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for handling the "despawn delay" of an
                             * {@link Item}.
                             */
                            // @ts-ignore
                            interface ImmutableDespawnDelayData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDespawnDelayData, org.spongepowered.api.data.manipulator.mutable.entity.DespawnDelayData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "despawn delay".
                                 * @return The immutable bounded value for the "despawn delay"
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableValue} for the "is infinite" state of
                                 * the despawn delay.
                                 * @return The immutable value for the "is infinite" state
                                 */
                                // @ts-ignore
                                infinite(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
