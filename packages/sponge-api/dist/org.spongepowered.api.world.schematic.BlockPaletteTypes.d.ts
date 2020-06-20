declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    /**
                     * An enumeration of known {@link BlockPaletteType}s.
                     * @deprecated Use {#link PaletteTypes}.
                     */
                    // @ts-ignore
                    class BlockPaletteTypes extends java.lang.Object {
                        /**
                         * The global palette containing a mapping of all block states to ids.
                         * @deprecated See {#link PaletteTypes#GLOBAL_BLOCKS}
                         */
                        // @ts-ignore
                        readonly GLOBAL: org.spongepowered.api.world.schematic.BlockPaletteType
                        /**
                         * A local palette containing only a subset of the global palette.
                         * @deprecated See {#link PaletteTypes#LOCAL_BLOCKS}
                         */
                        // @ts-ignore
                        readonly LOCAL: org.spongepowered.api.world.schematic.BlockPaletteType
                    }
                }
            }
        }
    }
}
