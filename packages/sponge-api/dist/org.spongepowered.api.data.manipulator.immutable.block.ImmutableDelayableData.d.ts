declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} that represents the delay on a redstone repeater.
                             */
                            // @ts-ignore
                            interface ImmutableDelayableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableDelayableData, org.spongepowered.api.data.manipulator.mutable.block.DelayableData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the delay.
                                 * @return The Immutable bounded value delay.
                                 */
                                // @ts-ignore
                                delay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
