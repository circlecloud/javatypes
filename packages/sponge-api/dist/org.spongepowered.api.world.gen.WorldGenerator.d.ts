declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    /**
                     * Represents the world generator of a world. This interface contains all
                     * settings for the world generator, like which populators are in use, but also
                     * the world seed.
                     * <p>The generation process for chunks is divided into two phases, generation
                     * and population. The generation phase is in charge of creating the base
                     * terrain shape and generating large terrain features. All operations during
                     * the generation phase act upon a MutableBlockVolume rather than a live chunk
                     * object.</p>
                     * <p>Conversely the population phase operates against a live chunk object and
                     * has the guarantee that all immediately surrounding chunks have at least
                     * passed the generation phase. The population phase is typically used for the
                     * placement of small features and objects placed may cross chunk
                     * boundaries.</p>
                     * <ol><strong>The generation phase:</strong>
                     * <li>Create a BlockBuffer representing the chunk's volume</li>
                     * <li>Call the {@link #getBaseGenerationPopulator() base GenerationPopulator}
                     * from the WorldGenerator to create the base terrain shape.</li>
                     * <li>Call each of the
                     * {@link BiomeGenerationSettings#getGenerationPopulators()
                     * GenerationPopulators} registered to the BiomeType (or from an override if
                     * found).</li>
                     * <li>Call each of the {@link #getGenerationPopulators() GenerationPopulators}
                     * registered to the WorldGenerator.</li>
                     * <li>Build the final Chunk object from the contents of the BlockBuffer.</li>
                     * </ol>
                     * <ol><strong>The population phase:</strong>
                     * <li>Validate surrounding chunks.</li>
                     * <li>Using the biome at an arbitrary point within the chunk ({16, 0, 16} in
                     * the vanilla game), pass the chunk to each of the
                     * {@link BiomeGenerationSettings#getPopulators() Populators} registered to
                     * the chosen biome (or from an override if found).</li>
                     * <li>Pass the chunk to each of the {@link #getPopulators() Populators}
                     * registered to the WorldGenerator.</li>
                     * </ol>
                     */
                    // @ts-ignore
                    interface WorldGenerator {
                        /**
                         * Gets the main {@link GenerationPopulator}. This generator populator is
                         * responsible for generating the base terrain of the chunk.
                         * @return The {#link GenerationPopulator}.
                         * @see #setBaseGenerationPopulator(GenerationPopulator)
                         */
                        // @ts-ignore
                        getBaseGenerationPopulator(): org.spongepowered.api.world.gen.GenerationPopulator
                        /**
                         * Sets the {@link GenerationPopulator}. This generator populator is
                         * responsible for generating the base terrain of the chunk.
                         * @param generator The generator.
                         */
                        // @ts-ignore
                        setBaseGenerationPopulator(generator: org.spongepowered.api.world.gen.GenerationPopulator): void
                        /**
                         * Gets a mutable list of {@link GenerationPopulator}s. These populators
                         * work strictly on a single chunk. They will be executed directly after the
                         * {@link BiomeGenerationSettings#getGroundCoverLayers() biome ground cover
                         * layers} and the {@link BiomeGenerationSettings#getGenerationPopulators()
                         * biome generator populators} have been called. These generator populators
                         * are typically used to generate large terrain features, like caves and
                         * ravines.
                         * <p>This list does not include {@link #getBaseGenerationPopulator() the
                         * base generator}.</p>
                         * @return The generator populators
                         */
                        // @ts-ignore
                        getGenerationPopulators(): java.util.List<org.spongepowered.api.world.gen.GenerationPopulator>
                        /**
                         * Gets an immutable list of {@link GenerationPopulator}s which match the
                         * given class type.
                         * @param type The type to match
                         * @return The generation populator which match the type
                         */
                        // @ts-ignore
                        getGenerationPopulators(type: java.lang.Class<org.spongepowered.api.world.gen.GenerationPopulator>): java.util.List<org.spongepowered.api.world.gen.GenerationPopulator>
                        /**
                         * Gets a mutable list of {@link Populator}s which are applied globally (in
                         * the whole world).
                         * @see BiomeGenerationSettings#getPopulators()
                         * @return The populators
                         */
                        // @ts-ignore
                        getPopulators(): java.util.List<org.spongepowered.api.world.gen.Populator>
                        /**
                         * Gets an immutable list of {@link Populator}s which match the given class
                         * type.
                         * @param type The type to match
                         * @return The populators which match the type
                         */
                        // @ts-ignore
                        getPopulators(type: java.lang.Class<org.spongepowered.api.world.gen.Populator>): java.util.List<org.spongepowered.api.world.gen.Populator>
                        /**
                         * Gets the {@link BiomeGenerator} for this world generator.
                         * @return The biome generator
                         */
                        // @ts-ignore
                        getBiomeGenerator(): org.spongepowered.api.world.gen.BiomeGenerator
                        /**
                         * Sets the {@link BiomeGenerator} for this world generator.
                         * @param biomeGenerator The new biome generator
                         */
                        // @ts-ignore
                        setBiomeGenerator(biomeGenerator: org.spongepowered.api.world.gen.BiomeGenerator): void
                        /**
                         * Gets this world generator settings for the given {@link BiomeType}..
                         * @param type The biome type
                         * @return The generation settings
                         */
                        // @ts-ignore
                        getBiomeSettings(type: org.spongepowered.api.world.biome.BiomeType): org.spongepowered.api.world.biome.BiomeGenerationSettings
                    }
                }
            }
        }
    }
}
