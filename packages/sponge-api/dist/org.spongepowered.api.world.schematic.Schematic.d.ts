declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    /**
                     * A special archetype volume designed to be persisted. Contains additional
                     * metadata to assist with this persistence.
                     */
                    // @ts-ignore
                    interface Schematic extends org.spongepowered.api.world.extent.ArchetypeVolume {
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        // @ts-ignore
                        
                        /**
                         * Gets a new builder for schematics.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.world.schematic.Schematic.Builder
                        /**
                         * Gets the {@link BlockPalette} used by this schematic for serialization.
                         * @return The palette
                         */
                        // @ts-ignore
                        getPalette(): org.spongepowered.api.world.schematic.BlockPalette
                        /**
                         * Gets the {@link BlockPalette} used by this schematic for serialization.
                         * @return The block palette
                         */
                        // @ts-ignore
                        getBlockPalette(): org.spongepowered.api.world.schematic.Palette<org.spongepowered.api.block.BlockState>
                        /**
                         * Gets the {@link Palette Palette<BiomeType>} used by this schematic for serialization.
                         * @return The biome palette used for this schematic
                         */
                        // @ts-ignore
                        getBiomePalette(): org.spongepowered.api.world.schematic.Palette<org.spongepowered.api.world.biome.BiomeType>
                        /**
                         * Gets any additional metadata attached to this schematic.
                         * @return The additional metadata
                         */
                        // @ts-ignore
                        getMetadata(): org.spongepowered.api.data.DataView
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<org.spongepowered.api.world.schematic.Schematic>
                        /**
                         * Gets the {@link MutableBiomeVolume} of this schematic. As biomes are
                         * {@link Optional optionally} included and not required, they may be
                         * optionally excluded. If the schematic would contain them, they will be
                         * present during deserialization via {@link DataTranslator}.
                         * @return The biomes volume, if they're included
                         */
                        // @ts-ignore
                        getBiomes(): java.util.Optional<org.spongepowered.api.world.extent.MutableBiomeVolume>
                        // @ts-ignore
                        getEntitiesByPosition(): <any>
                        // @ts-ignore
                        getEntityArchetypes(): java.util.Collection<org.spongepowered.api.entity.EntityArchetype>
                    }
                }
            }
        }
    }
}
