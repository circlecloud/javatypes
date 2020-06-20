declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    namespace BiomeGenerationSettings {
                        /**
                         * A builder for {@link BiomeGenerationSettings}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.biome.BiomeGenerationSettings, org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder> {
                            /**
                             * Sets the min height for the biome.
                             * @param height The min height
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            minHeight(height: number /*float*/): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the max height for the biome.
                             * @param height The max height
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            maxHeight(height: number /*float*/): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the ground cover layers.
                             * @param coverLayers The ground cover layers
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            groundCover(...coverLayers: org.spongepowered.api.world.biome.GroundCoverLayer[]): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the ground cover layers.
                             * @param coverLayers The ground cover layers
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            groundCover(coverLayers: java.lang.Iterable<org.spongepowered.api.world.biome.GroundCoverLayer>): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the generation populators.
                             * @param genpop The generation populators
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            generationPopulators(...genpop: org.spongepowered.api.world.gen.GenerationPopulator[]): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the generation populators.
                             * @param genpop The generation populators
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            generationPopulators(genpop: java.lang.Iterable<org.spongepowered.api.world.gen.GenerationPopulator>): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the populators.
                             * @param populators The populators
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            populators(...populators: org.spongepowered.api.world.gen.Populator[]): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Sets the populators.
                             * @param populators The populators
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            populators(populators: java.lang.Iterable<org.spongepowered.api.world.gen.Populator>): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                            /**
                             * Creates a new set of {@link BiomeGenerationSettings}s.
                             * @return The settings
                             * @throws IllegalStateException If any required values were left unset
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.world.biome.BiomeGenerationSettings
                        }
                    }
                }
            }
        }
    }
}
