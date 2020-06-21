declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace block {
                            /**
                             * A {@link DataManipulator} that handles the "moisture" state of a
                             * {@link BlockState}. The "moisture" value usually involves mechanics to do
                             * with crops and growth. Usually applies to {@link BlockTypes#FARMLAND}.
                             */
                            // @ts-ignore
                            interface MoistureData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.block.MoistureData, org.spongepowered.api.data.manipulator.immutable.block.ImmutableMoistureData> {
                                /**
                                 * Gets the {@link MutableBoundedValue} for the "moisture" state.
                                 * @return The bounded value for the "moisture" state
                                 * @see Keys#MOISTURE
                                 */
                                // @ts-ignore
                                moisture(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
