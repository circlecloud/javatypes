declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Represents the "connected" {@link Direction}s that a block may have.
                             * Examples may include {@link BlockTypes#GLASS_PANE},
                             * {@link BlockTypes#IRON_BARS}, etc.
                             */
                            // @ts-ignore
                            interface ConnectedDirectionData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.ConnectedDirectionData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableConnectedDirectionData> {
                                /**
                                 * Gets the {@link SetValue} for the currently "connected"
                                 * {@link Direction}s.
                                 * @return The immutable set value for connected directions
                                 * @see Keys#CONNECTED_DIRECTIONS
                                 */
                                // @ts-ignore
                                connectedDirections(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.util.Direction>
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#NORTH} is
                                 * "connected".
                                 * @return The value for the north direction
                                 * @see Keys#CONNECTED_NORTH
                                 */
                                // @ts-ignore
                                connectedNorth(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#SOUTH} is
                                 * "connected".
                                 * @return The value for the south direction
                                 * @see Keys#CONNECTED_SOUTH
                                 */
                                // @ts-ignore
                                connectedSouth(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#EAST} is
                                 * "connected".
                                 * @return The value for the east direction
                                 * @see Keys#CONNECTED_WEST
                                 */
                                // @ts-ignore
                                connectedEast(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the {@link Value} for whether {@link Direction#WEST} is
                                 * "connected".
                                 * @return The value for the west direction
                                 * @see Keys#CONNECTED_EAST
                                 */
                                // @ts-ignore
                                connectedWest(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
