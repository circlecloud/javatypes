declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Represents a skull.
                     */
                    // @ts-ignore
                    interface Skull extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Gets the current {@link SkullData} for this {@link Skull}
                         * {@link TileEntity}.
                         * @return The skull data for this skull
                         */
                        // @ts-ignore
                        getSkullData(): org.spongepowered.api.data.manipulator.mutable.SkullData
                        /**
                         * Gets the current {@link SkullType} for this {@link Skull}.
                         * @return The current skull type value
                         */
                        // @ts-ignore
                        skullType(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.SkullType>
                    }
                }
            }
        }
    }
}
