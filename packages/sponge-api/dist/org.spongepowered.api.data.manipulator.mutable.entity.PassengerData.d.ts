declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Signifies that an {@link Entity} is a "passenger" of another {@link Entity}.
                             */
                            // @ts-ignore
                            interface PassengerData extends org.spongepowered.api.data.manipulator.mutable.ListData<java.util.UUID, org.spongepowered.api.data.manipulator.mutable.entity.PassengerData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutablePassengerData> {
                                /**
                                 * Gets the {@link Value} for the current {@link Entity} acting
                                 * as a passenger.
                                 * @return The value for the passenger entity
                                 * @see Keys#PASSENGERS
                                 */
                                // @ts-ignore
                                passengers(): org.spongepowered.api.data.value.mutable.ListValue<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
