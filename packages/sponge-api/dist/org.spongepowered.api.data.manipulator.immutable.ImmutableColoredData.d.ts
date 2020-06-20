declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} for handling the {@link Color} of
                         * something such as {@link ItemStack}s, {@link BlockTypes#WOOL}, etc.
                         */
                        // @ts-ignore
                        interface ImmutableColoredData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableColoredData, org.spongepowered.api.data.manipulator.mutable.ColoredData> {
                            /**
                             * Gets the {@link ImmutableValue} for the {@link Color}.
                             * @return The immutable value for the color
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.util.Color>
                        }
                    }
                }
            }
        }
    }
}
