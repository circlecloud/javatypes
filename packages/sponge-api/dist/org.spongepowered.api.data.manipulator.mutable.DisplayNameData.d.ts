declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * Represents the display name of an {@link ItemStack}, {@link Entity}, or
                         * {@link TileEntity}.
                         * <p>Exceptions are made with written books as the title and display name
                         * are one and the same.</p>
                         */
                        // @ts-ignore
                        interface DisplayNameData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.DisplayNameData, org.spongepowered.api.data.manipulator.immutable.ImmutableDisplayNameData> {
                            /**
                             * Gets the display name as a {@link Text}. The display name may be
                             * player set, or it may be undefined.
                             * @return The display name, if available
                             * @see Keys#DISPLAY_NAME
                             */
                            // @ts-ignore
                            displayName(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.text.Text>
                        }
                    }
                }
            }
        }
    }
}
