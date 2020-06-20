declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a Bed {@link TileEntity}.
                     */
                    // @ts-ignore
                    interface Bed extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the {@link org.spongepowered.api.data.manipulator.mutable.tileentity.BedData data} of this {@link Bed bed}.
                         * @return The current bed data for this bed
                         * @deprecated Use {#link #getDyeableData()} instead
                         */
                        // @ts-ignore
                        getBedData(): org.spongepowered.api.data.manipulator.mutable.tileentity.BedData
                        /**
                         * Gets the {@link DyeableData data} of this {@link Bed bed}.
                         * @return The current bed data for this bed
                         */
                        // @ts-ignore
                        getDyeableData(): org.spongepowered.api.data.manipulator.mutable.DyeableData
                        /**
                         * Gets the {@link Value} for the {@link DyeColor color}.
                         * @return The value for the color
                         */
                        // @ts-ignore
                        color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                    }
                }
            }
        }
    }
}
