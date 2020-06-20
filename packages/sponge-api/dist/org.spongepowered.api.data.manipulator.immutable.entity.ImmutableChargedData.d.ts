declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} for the "charged" state of a
                             * {@link Creeper}.
                             */
                            // @ts-ignore
                            interface ImmutableChargedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableChargedData, org.spongepowered.api.data.manipulator.mutable.entity.ChargedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current "charged" state.
                                 * @return The value for the "charged" state
                                 */
                                // @ts-ignore
                                charged(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
