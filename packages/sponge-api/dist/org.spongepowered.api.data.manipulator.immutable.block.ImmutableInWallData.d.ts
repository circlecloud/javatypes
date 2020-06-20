declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "in-wall" state. Usually means
                             * that a {@link BlockState} will show up graphically as being "attached" to
                             * another block. Usually applies to {@link BlockTypes#FENCE}s and
                             * {@link BlockTypes#FENCE_GATE}s.
                             */
                            // @ts-ignore
                            interface ImmutableInWallData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableInWallData, org.spongepowered.api.data.manipulator.mutable.block.InWallData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "in-wall" state.
                                 * @return The immutable value for the in "in-wall" state
                                 */
                                // @ts-ignore
                                inWall(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
