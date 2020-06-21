declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    namespace VirtualBiomeType {
                        /**
                         * A builder for {@link VirtualBiomeType}s.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.biome.VirtualBiomeType, org.spongepowered.api.world.biome.VirtualBiomeType.Builder> {
                            /**
                             * Sets the name of the new virtual biome.
                             * @param name The biome name
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            name(name: java.lang.String | string): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                            /**
                             * Sets the temperature of the virtual biome.
                             * @param temp The temperature
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            temperature(temp: number /*double*/): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                            /**
                             * Sets the humidity of the virtual biome.
                             * @param humidity The humidity
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            humidity(humidity: number /*double*/): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                            /**
                             * Sets the {@link BiomeType} that this virtual biome is persisted as
                             * after generation is complete.
                             * @param biome The persisted biome type
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            persistedType(biome: org.spongepowered.api.world.biome.BiomeType): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                            /**
                             * Sets the function used for creating new
                             * {@link BiomeGenerationSettings}s for this virtual biome.
                             * @param settingsBuilder The settings builder function
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            settingsBuilder(settingsBuilder: java.util.function$.Function<org.spongepowered.api.world.World, org.spongepowered.api.world.biome.BiomeGenerationSettings>): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                            /**
                             * Builds a new {@link VirtualBiomeType} with the given unique id.
                             * @param id The biome id, must be unique
                             * @return The new virtual biome
                             * @throws IllegalStateException If any required fields were missing
                             */
                            // @ts-ignore
                            build(id: java.lang.String | string): org.spongepowered.api.world.biome.VirtualBiomeType
                        }
                    }
                }
            }
        }
    }
}
