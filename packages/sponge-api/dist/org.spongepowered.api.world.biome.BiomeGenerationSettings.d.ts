declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    /**
                     * A representation of the biome-specific generation settings.
                     */
                    // @ts-ignore
                    interface BiomeGenerationSettings {
                        /**
                         * Gets a new builder for creating new BiomeGenerationSettings.
                         * @return The builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.world.biome.BiomeGenerationSettings.Builder
                        /**
                         * Gets the minimum terrain height of this biome.
                         * @return The min height
                         */
                        // @ts-ignore
                        getMinHeight(): number /*float*/
                        /**
                         * Sets the minimum terrain height of this biome.
                         * @param height The new min height
                         */
                        // @ts-ignore
                        setMinHeight(height: number /*float*/): void
                        /**
                         * Gets the maximum terrain height of this biome.
                         * @return The max height
                         */
                        // @ts-ignore
                        getMaxHeight(): number /*float*/
                        /**
                         * Sets the maximum terrain height of this biome.
                         * @param height The new max height
                         */
                        // @ts-ignore
                        setMaxHeight(height: number /*float*/): void
                        /**
                         * Gets a mutable ordered list of {@link GroundCoverLayer}s. These layers
                         * will be applied to the base terrain during the generation phase starting
                         * at the topmost stone block in each column.
                         * @return The ground cover layers
                         */
                        // @ts-ignore
                        getGroundCoverLayers(): Array<org.spongepowered.api.world.biome.GroundCoverLayer>
                        /**
                         * Gets a mutable list of {@link GenerationPopulator}s. These populators
                         * work strictly on a single chunk. They will be executed directly after the
                         * {@link #getGroundCoverLayers() ground cover layers} are applied. These
                         * generation populators are typically used to generate large terrain
                         * features, like caves and ravines.
                         * @return The generation populators
                         */
                        // @ts-ignore
                        getGenerationPopulators(): Array<org.spongepowered.api.world.gen.GenerationPopulator>
                        /**
                         * Gets an immutable list of {@link GenerationPopulator}s matching the given
                         * class type.
                         * @param type the generation populator type to return
                         * @return The generation populators
                         */
                        // @ts-ignore
                        getGenerationPopulators(type: java.lang.Class<any>): Array<org.spongepowered.api.world.gen.GenerationPopulator>
                        /**
                         * Returns a mutable list of {@link Populator}s specific to this biome.
                         * Changing this list will affect population of all new chunks.
                         * @return The populators
                         */
                        // @ts-ignore
                        getPopulators(): Array<org.spongepowered.api.world.gen.Populator>
                        /**
                         * Returns an immutable list of {@link Populator}s specific to this biome
                         * which match the given class type.
                         * @param type the populator type to return
                         * @param <T> The populator type
                         * @return The populators
                         */
                        // @ts-ignore
                        getPopulators<T extends org.spongepowered.api.world.gen.Populator>(type: java.lang.Class<T>): Array<T>
                        /**
                         * Returns a new biome generation settings which is a copy of this set of
                         * generation settings at this point in time.
                         * @return The copy of these settings
                         */
                        // @ts-ignore
                        copy(): org.spongepowered.api.world.biome.BiomeGenerationSettings
                    }
                }
            }
        }
    }
}
