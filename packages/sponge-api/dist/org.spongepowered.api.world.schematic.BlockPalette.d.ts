declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    /**
                     * Represents a mapping for block states to a local identifier.
                     * @deprecated Use {#link Palette} for improved generics
                     */
                    // @ts-ignore
                    interface BlockPalette extends org.spongepowered.api.world.schematic.Palette<org.spongepowered.api.block.BlockState> {
                        /**
                         * Gets the type of this palette.
                         * @return The palette type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.world.schematic.BlockPaletteType
                        /**
                         * Gets the highest identifier in this palette.
                         * @return The highest id
                         */
                        // @ts-ignore
                        getHighestId(): number /*int*/
                        /**
                         * Gets the blockstate represented by the given identifier from the mapping.
                         * @param id The identifier
                         * @return The blockstate, if found
                         */
                        // @ts-ignore
                        get(id: number /*int*/): java.util.Optional<org.spongepowered.api.block.BlockState>
                        /**
                         * Gets the identifier for the given blockstate if it exists within the
                         * mapping.
                         * @param state The block state
                         * @return The identifier, if found
                         */
                        // @ts-ignore
                        get(state: org.spongepowered.api.block.BlockState): java.util.Optional<java.lang.Integer | number>
                        /**
                         * Gets the identifier for the given blockstate from the mapping. If the
                         * blockstate is not yet registered in the mapping then it is registered and
                         * given the next available identifier.
                         * @param state The blockstate
                         * @return The identifier
                         */
                        // @ts-ignore
                        getOrAssign(state: org.spongepowered.api.block.BlockState): number /*int*/
                        /**
                         * Removes the given blockstate from the mapping.
                         * <p>If this palette is the {@link BlockPaletteTypes#GLOBAL} palette then
                         * removal is not supported.</p>
                         * @param state The blockstate to remove
                         * @return If the blockstate existed in the mapping
                         */
                        // @ts-ignore
                        remove(state: org.spongepowered.api.block.BlockState): boolean
                        /**
                         * Gets all {@link BlockState}s contained in this palette.
                         * @return All contained block states
                         */
                        // @ts-ignore
                        getEntries(): Array<org.spongepowered.api.block.BlockState>
                    }
                }
            }
        }
    }
}
