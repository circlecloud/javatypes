declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} for representing the "droppable" state.
                             * If the state is {@code false}, whatever {@link DataHolder} or
                             * {@link ImmutableDataHolder} will not "drop" in the world. Usually applicable
                             * to {@link BlockTypes#SKULL}.
                             */
                            // @ts-ignore
                            interface DropData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.DropData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableDropData> {
                                /**
                                 * Gets the {@link Value} for the "droppable" state.
                                 * @return The value for the "droppable" state
                                 * @see Keys#SHOULD_DROP
                                 */
                                // @ts-ignore
                                willDrop(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
