declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Signifies that the block is considered "occupied". Usually applicable to
                             * {@link BlockTypes#BED}.
                             */
                            // @ts-ignore
                            interface OccupiedData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.OccupiedData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableOccupiedData> {
                                /**
                                 * Gets the {@link Value} for the "occupied" state.
                                 * @return The value for the "occupied" state
                                 * @see Keys#OCCUPIED
                                 */
                                // @ts-ignore
                                occupied(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
