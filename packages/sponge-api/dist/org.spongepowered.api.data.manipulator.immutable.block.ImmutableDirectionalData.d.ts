declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the {@link Direction} state of a
                             * {@link BlockState}. Usually applicable for {@link BlockTypes#STANDING_SIGN},
                             * {@link BlockTypes#WALL_SIGN}, {@link BlockTypes#WOODEN_DOOR}, etc.
                             */
                            // @ts-ignore
                            interface ImmutableDirectionalData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableDirectionalData, org.spongepowered.api.data.manipulator.mutable.block.DirectionalData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the current "facing"
                                 * {@link Direction}.
                                 * @return The current "facing" direction value
                                 */
                                // @ts-ignore
                                direction(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.util.Direction>
                            }
                        }
                    }
                }
            }
        }
    }
}
