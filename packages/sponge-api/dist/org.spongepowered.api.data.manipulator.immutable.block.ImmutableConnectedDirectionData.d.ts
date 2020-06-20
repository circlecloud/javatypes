declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} handling the values of the connected
                             * {@link Direction}s a {@link BlockState} may have. Usually the connected
                             * directions are all cartesian directions (north, east, south, west).
                             */
                            // @ts-ignore
                            interface ImmutableConnectedDirectionData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableConnectedDirectionData, org.spongepowered.api.data.manipulator.mutable.block.ConnectedDirectionData> {
                                /**
                                 * Gets the {@link ImmutableSetValue} for the currently "connected"
                                 * {@link Direction}s.
                                 * @return The immutable set value for connected directions
                                 */
                                // @ts-ignore
                                connectedDirections(): org.spongepowered.api.data.value.immutable.ImmutableSetValue<org.spongepowered.api.util.Direction>
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#NORTH} is
                                 * "connected".
                                 * @return The immutable value for the north direction
                                 */
                                // @ts-ignore
                                connectedNorth(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#SOUTH} is
                                 * "connected".
                                 * @return The immutable value for the south direction
                                 */
                                // @ts-ignore
                                connectedSouth(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#EAST} is
                                 * "connected".
                                 * @return The immutable value for the east direction
                                 */
                                // @ts-ignore
                                connectedEast(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the {@link ImmutableValue} for whether {@link Direction#WEST} is
                                 * "connected".
                                 * @return The immutable value for the west direction
                                 */
                                // @ts-ignore
                                connectedWest(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
