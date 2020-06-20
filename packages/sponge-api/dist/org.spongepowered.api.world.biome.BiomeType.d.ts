declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    /**
                     * Represents a biome.
                     */
                    // @ts-ignore
                    interface BiomeType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the temperature of this biome.
                         * @return The temperature
                         */
                        // @ts-ignore
                        getTemperature(): double
                        /**
                         * Gets the humidity of this biome.
                         * @return The humidity
                         */
                        // @ts-ignore
                        getHumidity(): double
                        /**
                         * Gets the default generation settings of this biome for the given world.
                         * @param world The world the settings are being made for
                         * @return The default generation settings
                         */
                        // @ts-ignore
                        createDefaultGenerationSettings(world: org.spongepowered.api.world.World): org.spongepowered.api.world.biome.BiomeGenerationSettings
                    }
                }
            }
        }
    }
}
