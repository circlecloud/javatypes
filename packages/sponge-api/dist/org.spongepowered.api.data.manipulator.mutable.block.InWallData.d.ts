declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} for the "in-wall" state. Usually means that a
                             * {@link BlockState} will show up graphically as being "attached" to another
                             * block. Usually applies to {@link BlockTypes#FENCE}s and
                             * {@link BlockTypes#FENCE_GATE}s.
                             */
                            // @ts-ignore
                            interface InWallData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.InWallData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableInWallData> {
                                /**
                                 * Gets the {@link Value} for the "in-wall" state.
                                 * @return The value for the in "in-wall" state
                                 * @see Keys#IN_WALL
                                 */
                                // @ts-ignore
                                inWall(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
