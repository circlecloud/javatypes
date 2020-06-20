declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    /**
                     * Custom world generation is done using this interface. Any plugin that wishes
                     * to modify the world generator should implement this interface. When the
                     * server admin/player has chosen to use this modifier for a world, the method
                     * {@link #modifyWorldGenerator(WorldProperties, DataContainer, WorldGenerator)}
                     * will be called.
                     * <p>The modifier can change every aspect of terrain generation using the
                     * {@link WorldGenerator} provided as a parameter to
                     * {@code modifyWorldGenerator}. This is no requirement, you can for example
                     * replace only the biome generator. Multiple world generator modifiers can be
                     * applied on a single world.</p>
                     * <p>Implementations of this interface must be registered using the
                     * {@link GameRegistry}.</p>
                     */
                    // @ts-ignore
                    interface WorldGeneratorModifier extends org.spongepowered.api.CatalogType {
                        /**
                         * Modifies the given world generator. This method is called by the
                         * implementation when the server is set to use this plugin for world
                         * generation.
                         * <p>To replace the base chunk generator, replace the main generator
                         * populator using
                         * {@link WorldGenerator#setBaseGenerationPopulator(GenerationPopulator)}.
                         * To replace the biome generator, use
                         * {@link WorldGenerator#setBiomeGenerator(BiomeGenerator)}. To change
                         * terrain population, modify the populator list returned by
                         * {@link WorldGenerator#getPopulators()} or
                         * {@link WorldGenerator#getGenerationPopulators()}.</p>
                         * @param world The properties of the world.
                         * @param settings A data container with (usually) user-provided settings,
                         *         can be used by the plugin to modify the world generator.
                         * @param worldGenerator The world generator, should be modified.
                         * @see WorldGenerator Additional information on the generation process
                         */
                        // @ts-ignore
                        modifyWorldGenerator(world: org.spongepowered.api.world.storage.WorldProperties, settings: org.spongepowered.api.data.DataContainer, worldGenerator: org.spongepowered.api.world.gen.WorldGenerator): void
                    }
                }
            }
        }
    }
}
