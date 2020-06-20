declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * An {@link DataManipulator} that represents the delay on a redstone repeater.
                             */
                            // @ts-ignore
                            interface DelayableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.DelayableData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableDelayableData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the delay.
                                 * @return The mutable bounded value delay.
                                 * @see Keys#DELAY
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
