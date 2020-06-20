declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the link to the current
                             * vehicle being ridden by an {@link Entity}. With any "vehicle", there is
                             * always a "base" vehicle.
                             */
                            // @ts-ignore
                            interface ImmutablePassengerData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<java.util.UUID, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePassengerData, org.spongepowered.api.data.manipulator.mutable.entity.PassengerData> {
                                /**
                                 * Gets the {@link ImmutableListValue} for the current {@link Entity}
                                 * acting as a passenger.
                                 * @return The immutable value for the passenger entity
                                 */
                                // @ts-ignore
                                passengers(): org.spongepowered.api.data.value.immutable.ImmutableListValue<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
