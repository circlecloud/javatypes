declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} that handles the current "passenger" if
                             * the owning {@link Entity} is considered to be a "vehicle" or another
                             * {@link Entity} is currently riding the owning {@link Entity}.
                             */
                            // @ts-ignore
                            interface ImmutableVehicleData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableVehicleData, org.spongepowered.api.data.manipulator.mutable.entity.VehicleData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current "vehicle" being ridden.
                                 * @return The immutable value for the vehicle being ridden
                                 */
                                // @ts-ignore
                                vehicle(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.entity.EntitySnapshot>
                                /**
                                 * Gets the base {@link ImmutableValue} for the "base vehicle" being ridden
                                 * such that the current vehicle may be riding another {@link Entity},
                                 * causing that entity to be called the "base vehicle".
                                 * @return The immutable value for the base vehicle
                                 */
                                // @ts-ignore
                                baseVehicle(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.entity.EntitySnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
