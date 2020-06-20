declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for representing the "droppable" state.
                             * If the state is {@code false}, whatever {@link DataHolder} or
                             * {@link ImmutableDataHolder} will not "drop" in the world. Usually applicable
                             * to {@link BlockTypes#SKULL}.
                             */
                            // @ts-ignore
                            interface ImmutableDropData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableDropData, org.spongepowered.api.data.manipulator.mutable.block.DropData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "droppable" state.
                                 * @return The value for the "droppable" state
                                 */
                                // @ts-ignore
                                willDrop(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
