declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    /**
                     * A virtual biome is one which exists purely for generation and therefore
                     * requires no modifications to clients in order to use it. After generation for
                     * a chunk is complete the biome is persisted as its specified persisted biome
                     * type.
                     */
                    // @ts-ignore
                    interface VirtualBiomeType extends org.spongepowered.api.world.biome.BiomeType {
                        /**
                         * Gets a new builder for creating new VirtualBiomeTypes.
                         * @return The builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.world.biome.VirtualBiomeType.Builder
                        /**
                         * Gets the biome type which this virtual biome is persisted as.
                         * @return The persisted biome type
                         */
                        // @ts-ignore
                        getPersistedType(): org.spongepowered.api.world.biome.BiomeType
                    }
                }
            }
        }
    }
}
