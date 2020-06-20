declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * Signifies that a block can "decay" under various circumstances.
                             * Usually applicable to {@link BlockTypes#LEAVES}.
                             */
                            // @ts-ignore
                            interface DecayableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.DecayableData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableDecayableData> {
                                /**
                                 * Gets the {@link Value} for whether the "decayable" state is
                                 * {@code true} or {@code false}.
                                 * @return The value for the "decayable" state
                                 * @see Keys#DECAYABLE
                                 */
                                // @ts-ignore
                                decayable(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
