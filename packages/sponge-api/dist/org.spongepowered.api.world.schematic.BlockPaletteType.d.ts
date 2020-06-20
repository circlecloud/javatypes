declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    /**
                     * Represents a type of {@link BlockPalette}.
                     * @deprecated Use {#link PaletteType} for better generics
                     */
                    // @ts-ignore
                    interface BlockPaletteType extends org.spongepowered.api.CatalogType, org.spongepowered.api.world.schematic.PaletteType<org.spongepowered.api.block.BlockState> {
                        /**
                         * Gets an instance of this palette type.
                         * <p>If this is the global type then the global palette instance will be
                         * returned, otherwise a new instance will be created.</p>
                         * @return The palette instance
                         */
                        // @ts-ignore
                        create(): org.spongepowered.api.world.schematic.BlockPalette
                    }
                }
            }
        }
    }
}
