declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents item data that uses colors. Examples may include leather armor.
                         */
                        // @ts-ignore
                        interface ColoredData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.ColoredData, org.spongepowered.api.data.manipulator.immutable.ImmutableColoredData> {
                            /**
                             * Gets the {@link Value} for the {@link Color}.
                             * @return The value for the color
                             * @see Keys#COLOR
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
