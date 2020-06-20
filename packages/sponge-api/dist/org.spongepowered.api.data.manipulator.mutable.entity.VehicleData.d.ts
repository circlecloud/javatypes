declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} that handles the current "vehicle" if
                             * the owning {@link Entity} is considered to be a "passenger" or another
                             * {@link Entity} is currently being ridden by the owning {@link Entity}.
                             */
                            // @ts-ignore
                            interface VehicleData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.VehicleData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableVehicleData> {
                                /**
                                 * Gets the {@link Value} for the current "vehicle" being ridden.
                                 * @return The value for the vehicle being ridden
                                 * @see Keys#VEHICLE
                                 */
                                // @ts-ignore
                                vehicle(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>
                                /**
                                 * Gets the base {@link Value} for the "base vehicle" being ridden
                                 * such that the current vehicle may be riding another {@link Entity},
                                 * causing that entity to be called the "base vehicle".
                                 * @return The value for the base vehicle
                                 * @see Keys#BASE_VEHICLE
                                 */
                                // @ts-ignore
                                baseVehicle(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
