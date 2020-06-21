declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    /**
                     * Describes a type of tile entity.
                     */
                    // @ts-ignore
                    interface TileEntityType extends org.spongepowered.api.CatalogType {
                        /**
                         * Returns the tile entity class for this type.
                         * @return The tile class for this type
                         */
                        // @ts-ignore
                        getTileEntityType(): java.lang.Class<any>
                    }
                }
            }
        }
    }
}
