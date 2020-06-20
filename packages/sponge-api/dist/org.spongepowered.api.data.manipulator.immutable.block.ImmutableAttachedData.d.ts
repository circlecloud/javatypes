declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} representing the "attached".
                             */
                            // @ts-ignore
                            interface ImmutableAttachedData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableAttachedData, org.spongepowered.api.data.manipulator.mutable.block.AttachedData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "attached" state.
                                 * @return The "attached" immutable value state
                                 */
                                // @ts-ignore
                                attached(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
