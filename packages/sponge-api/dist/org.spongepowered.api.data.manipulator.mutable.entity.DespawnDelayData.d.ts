declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for handling the "despawn delay" of an
                             * {@link Item}.
                             */
                            // @ts-ignore
                            interface DespawnDelayData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.DespawnDelayData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableDespawnDelayData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "despawn delay".
                                 * @return The mutable bounded value for the "despawn delay"
                                 * @see Keys#DESPAWN_DELAY
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link Value} for the "is infinite" state of
                                 * the despawn delay.
                                 * @return The value for the "is infinite" state
                                 * @see Keys#INFINITE_DESPAWN_DELAY
                                 */
                                // @ts-ignore
                                infinite(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
