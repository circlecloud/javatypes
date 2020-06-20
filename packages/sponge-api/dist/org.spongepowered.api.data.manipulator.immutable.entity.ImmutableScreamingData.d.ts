declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the "screaming" state of an
                             * {@link Enderman}. Usually, when an {@link Enderman} is "screaming", they
                             * are standing still and "shaking".
                             */
                            // @ts-ignore
                            interface ImmutableScreamingData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableScreamingData, org.spongepowered.api.data.manipulator.mutable.entity.ScreamingData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "screaming" state.
                                 * @return The immutable value for the screaming state
                                 */
                                // @ts-ignore
                                screaming(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
