declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents the {@link Color} of a potion.
                         */
                        // @ts-ignore
                        interface PotionColorData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.PotionColorData, org.spongepowered.api.data.manipulator.immutable.ImmutablePotionColorData> {
                            /**
                             * Gets the {@link Value} of the color.
                             * @return The value of the color
                             * @see Keys#POTION_COLOR
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Color>
                        }
                    }
                }
            }
        }
    }
}
