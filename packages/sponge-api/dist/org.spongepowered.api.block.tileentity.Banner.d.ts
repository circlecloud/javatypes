declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a Banner {@link TileEntity}.
                     */
                    // @ts-ignore
                    interface Banner extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the {@link BannerData data} of this {@link Banner banner}.
                         * @return The current banner data for this banner
                         */
                        // @ts-ignore
                        getBannerData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BannerData
                        /**
                         * Gets the {@link Value} for the base {@link DyeColor}.
                         * @return The value for the base color
                         */
                        // @ts-ignore
                        baseColor(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                        /**
                         * Gets the {@link PatternListValue} of all patterns for the
                         * {@link Banner}.
                         * @return The pattern list
                         */
                        // @ts-ignore
                        patternsList(): org.spongepowered.api.data.value.mutable.PatternListValue
                    }
                }
            }
        }
    }
}
