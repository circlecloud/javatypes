declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} for the "decayable" state of a
                             * {@link BlockState}. Usually applicable for {@link BlockTypes#LEAVES}.
                             */
                            // @ts-ignore
                            interface ImmutableDecayableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableDecayableData, org.spongepowered.api.data.manipulator.mutable.block.DecayableData> {
                                /**
                                 * Gets the {@link ImmutableValue} for whether the "decayable" state is
                                 * {@code true} or {@code false}.
                                 * @return The immutable value for the "decayable" state
                                 */
                                // @ts-ignore
                                decayable(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
