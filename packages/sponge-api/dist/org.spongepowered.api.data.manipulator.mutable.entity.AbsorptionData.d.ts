declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for representing the absorption
                             * of a {@link Living living entity}.
                             */
                            // @ts-ignore
                            interface AbsorptionData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AbsorptionData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAbsorptionData> {
                                /**
                                 * Gets the {@link Value} for the absorption.
                                 * @return The value for the absorption
                                 */
                                // @ts-ignore
                                absorption(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
