declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace schematic {
                    namespace Schematic {
                        /**
                         * A builder for {@link Schematic}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.schematic.Schematic, org.spongepowered.api.world.schematic.Schematic.Builder> {
                            /**
                             * Specifies an archetype volume for the world data of the schematic.
                             * <p>If purely creating a schematic it is recommended to instead use
                             * the {@link #volume(Extent)} method and pass in an extent view (See
                             * {@link Extent#getExtentView}) of the volume to prevent creating
                             * multiple copies of the world data. Likewise, if {@link BiomeType}s
                             * are needed to be copied, only {@link #volume(Extent)} will support
                             * copying the {@link BiomeType}s at the desired positions. This also
                             * has the same limit for capturing {@link EntityArchetype}s, unless
                             * otherwise manually placed in with {@link #entity(EntityArchetype)}.
                             * </p>
                             * @param volume The archetype volume
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            volume(volume: org.spongepowered.api.world.extent.ArchetypeVolume): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies an extent view for the schematic to load its world data
                             * from.
                             * @param volume The extent view
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            volume(volume: org.spongepowered.api.world.extent.Extent): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies a palette for the schematic to use for serialization. This
                             * overrides the {@link #paletteType} value.
                             * @param palette The palette to use for serialization
                             * @return This builder, for chaining
                             * @deprecated Use {#link #blockPalette(Palette)}
                             */
                            // @ts-ignore
                            palette(palette: org.spongepowered.api.world.schematic.BlockPalette): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies a palette for the schematic to use for serialization. This
                             * overrides the {@link #paletteType} value.
                             * @param palette The palette to use for serialization
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            blockPalette(palette: org.spongepowered.api.world.schematic.Palette<org.spongepowered.api.block.BlockState>): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies a palette for the schemtic to use for serialization.
                             * @param palette The palette to use for serialization
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            biomePalette(palette: org.spongepowered.api.world.schematic.Palette<org.spongepowered.api.world.biome.BiomeType>): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies the palette type to use if the {@link #palette} is not
                             * specified.
                             * @param type The palette type
                             * @return This builder, for chaining
                             * @deprecated Use {#link #blockPaletteType(PaletteType)}
                             */
                            // @ts-ignore
                            paletteType(type: org.spongepowered.api.world.schematic.BlockPaletteType): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies the palette type to use if the {@link #palette} is not
                             * specified.
                             * @param type The palette type
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            blockPaletteType(type: org.spongepowered.api.world.schematic.PaletteType<org.spongepowered.api.block.BlockState>): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies the palette type to use for biomes if the {@link #biomePalette(Palette)}
                             * is not specified.
                             * @param type The type of biome palette
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            biomePaletteType(type: org.spongepowered.api.world.schematic.PaletteType<org.spongepowered.api.world.biome.BiomeType>): org.spongepowered.api.world.schematic.Schematic.Builder
                            // @ts-ignore
                            entity(entityArchetype: org.spongepowered.api.entity.EntityArchetype): org.spongepowered.api.world.schematic.Schematic.Builder
                            // @ts-ignore
                            entity(entityArchetype: org.spongepowered.api.entity.EntityArchetype, position: Vector3d): org.spongepowered.api.world.schematic.Schematic.Builder
                            // @ts-ignore
                            entities(entities: Array<org.spongepowered.api.entity.EntityArchetype>): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies the metadata container.
                             * @param metadata The metadata container
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            metadata(metadata: org.spongepowered.api.data.DataView): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Specifies a metadata value which will be included in the metadata of
                             * the schematic.
                             * @param key The metadata key
                             * @param value The value
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            metaValue(key: string, value: any): org.spongepowered.api.world.schematic.Schematic.Builder
                            /**
                             * Constructs a new {@link Schematic} from this builder.
                             * @return The new schematic
                             * @throws IllegalArgumentException If any required data was not
                             *          specified
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.world.schematic.Schematic
                        }
                    }
                }
            }
        }
    }
}
