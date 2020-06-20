declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} that handles the "wet" state of various
                         * {@link DataHolder}s that can include {@link BlockTypes#SPONGE} blocks to
                         * {@link Wolf} entities being "wet".
                         */
                        // @ts-ignore
                        interface WetData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.WetData, org.spongepowered.api.data.manipulator.immutable.ImmutableWetData> {
                            /**
                             * Gets the {@link Value} for the "wet" state.
                             * @return The value for the wet state
                             * @see Keys#IS_WET
                             */
                            // @ts-ignore
                            wet(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        }
                    }
                }
            }
        }
    }
}
