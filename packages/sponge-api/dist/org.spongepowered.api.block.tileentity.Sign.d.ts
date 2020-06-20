declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a sign.
                     */
                    // @ts-ignore
                    interface Sign extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the current {@link SignData} for this {@link Sign} tile entity.
                         * @return The current sign data
                         */
                        // @ts-ignore
                        getSignData(): org.spongepowered.api.data.manipulator.mutable.tileentity.SignData
                        /**
                         * Gets the {@link ListValue} of {@link Text} for the {@link Sign}
                         * to show.
                         * @return The list of text lines
                         */
                        // @ts-ignore
                        lines(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>
                    }
                }
            }
        }
    }
}
