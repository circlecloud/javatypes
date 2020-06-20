declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "sheared" state of a
                             * {@link Sheep}.
                             */
                            // @ts-ignore
                            interface ImmutableShearedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableShearedData, org.spongepowered.api.data.manipulator.mutable.entity.ShearedData> {
                                /**
                                 * Gets the {@link ImmutableValue} of the "sheared" state.
                                 * @return The immutable value for the "sheared" state
                                 */
                                // @ts-ignore
                                sheared(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
