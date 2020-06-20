declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} that handles the color of a potion.
                         */
                        // @ts-ignore
                        interface ImmutablePotionColorData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutablePotionColorData, org.spongepowered.api.data.manipulator.mutable.PotionColorData> {
                            /**
                             * Gets the {@link ImmutableValue} of the color.
                             * @return The immutable value of the color
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
