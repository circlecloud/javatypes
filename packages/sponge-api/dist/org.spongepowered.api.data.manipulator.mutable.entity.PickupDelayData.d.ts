declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for handling the "pickup delay" of an
                             * {@link Item}.
                             */
                            // @ts-ignore
                            interface PickupDelayData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.PickupDelayData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePickupDelayData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "pickup delay".
                                 * @return The mutable bounded value for the "pickup delay"
                                 * @see Keys#PICKUP_DELAY
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link Value} for the "is infinite" state of
                                 * the pickup delay.
                                 * @return The value for the "is infinite" state
                                 * @see Keys#INFINITE_PICKUP_DELAY
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
