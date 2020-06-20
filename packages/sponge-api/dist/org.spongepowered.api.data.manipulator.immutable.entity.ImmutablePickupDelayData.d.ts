declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for handling the "pickup delay" of an
                             * {@link Item}.
                             */
                            // @ts-ignore
                            interface ImmutablePickupDelayData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePickupDelayData, org.spongepowered.api.data.manipulator.mutable.entity.PickupDelayData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "pickup delay".
                                 * @return The immutable bounded value for the "pickup delay"
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                                /**
                                 * Gets the {@link ImmutableValue} for the "is infinite" state of
                                 * the pickup delay.
                                 * @return The value for the "is infinite" state
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
