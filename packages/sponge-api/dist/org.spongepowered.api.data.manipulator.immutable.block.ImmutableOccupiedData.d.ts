declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "occupied" state. Usually
                             * applicable to {@link BlockTypes#BED}.
                             */
                            // @ts-ignore
                            interface ImmutableOccupiedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableOccupiedData, org.spongepowered.api.data.manipulator.mutable.block.OccupiedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "occupied" state.
                                 * @return The immutable value for the "occupied" state
                                 */
                                // @ts-ignore
                                occupied(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
