declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "charged" state of a {@link Creeper}.
                             */
                            // @ts-ignore
                            interface ChargedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ChargedData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableChargedData> {
                                /**
                                 * Gets the {@link Value} for the current "charged" state.
                                 * @return The value for the "charged" state
                                 * @see Keys#CREEPER_CHARGED
                                 */
                                // @ts-ignore
                                charged(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
