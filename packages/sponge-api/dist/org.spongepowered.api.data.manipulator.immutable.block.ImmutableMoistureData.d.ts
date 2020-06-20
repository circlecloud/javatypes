declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace block {
                            /**
                             * An {@link ImmutableDataManipulator} that handles the "moisture" state of a
                             * {@link BlockState}. The "moisture" value usually involves mechanics to do
                             * with crops and growth. Usually applies to {@link BlockTypes#FARMLAND}.
                             */
                            // @ts-ignore
                            interface ImmutableMoistureData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.block.ImmutableMoistureData, org.spongepowered.api.data.manipulator.mutable.block.MoistureData> {
                                /**
                                 * Gets the {@link ImmutableBoundedValue} for the "moisture" state.
                                 * @return The immutable bounded value for the "moisture" state
                                 */
                                // @ts-ignore
                                moisture(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
