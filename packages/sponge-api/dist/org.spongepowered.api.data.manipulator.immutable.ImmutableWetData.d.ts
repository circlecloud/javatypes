declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} that handles the "wet" state of various
                         * {@link DataHolder}s that can include {@link BlockTypes#SPONGE} blocks to
                         * {@link Wolf} entities being "wet".
                         */
                        // @ts-ignore
                        interface ImmutableWetData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableWetData, org.spongepowered.api.data.manipulator.mutable.WetData> {
                            /**
                             * Gets the {@link ImmutableValue} for the "wet" state.
                             * @return The immutable value for the wet state
                             */
                            // @ts-ignore
                            wet(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                        }
                    }
                }
            }
        }
    }
}
