declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * An {@link DataManipulator} for the "screaming" state of an {@link Enderman}.
                             * Usually, when an {@link Enderman} is "screaming", they are standing still
                             * and "shaking".
                             */
                            // @ts-ignore
                            interface ScreamingData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.ScreamingData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableScreamingData> {
                                /**
                                 * Gets the {@link Value} for the "screaming" state.
                                 * @return The value for the screaming state
                                 * @see Keys#IS_SCREAMING
                                 */
                                // @ts-ignore
                                screaming(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
