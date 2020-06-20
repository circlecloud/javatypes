declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for representing the absorption
                             * of a {@link Living living entity}.
                             */
                            // @ts-ignore
                            interface ImmutableAbsorptionData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAbsorptionData, org.spongepowered.api.data.manipulator.mutable.entity.AbsorptionData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the absorption.
                                 * @return The value for the absorption
                                 */
                                // @ts-ignore
                                absorption(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                            }
                        }
                    }
                }
            }
        }
    }
}
