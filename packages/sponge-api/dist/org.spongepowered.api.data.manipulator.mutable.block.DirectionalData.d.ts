declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} for the {@link Direction} state of a
                             * {@link BlockState} or an {@link Entity}. Usually applicable for {@link BlockTypes#STANDING_SIGN},
                             * {@link BlockTypes#WALL_SIGN}, {@link BlockTypes#WOODEN_DOOR}, {@link EntityTypes#SHULKER}, etc.
                             */
                            // @ts-ignore
                            interface DirectionalData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.DirectionalData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableDirectionalData> {
                                /**
                                 * Gets the {@link Value} for the current "facing" {@link Direction}.
                                 * @return The current "facing" direction value
                                 * @see Keys#DIRECTION
                                 */
                                // @ts-ignore
                                direction(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Direction>
                            }
                        }
                    }
                }
            }
        }
    }
}
