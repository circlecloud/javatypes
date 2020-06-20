declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents a world type. This is in general a {@link WorldGenerator} and the
                 * settings for the generator.
                 */
                // @ts-ignore
                interface GeneratorType extends org.spongepowered.api.CatalogType {
                    /**
                     * Gets a copy of the default settings for this generator type.
                     * @return The settings
                     */
                    // @ts-ignore
                    getGeneratorSettings(): org.spongepowered.api.data.DataContainer
                    /**
                     * Creates a new {@link WorldGenerator} for this generator type.
                     * <p>This will use the default settings of this generator type.</p>
                     * @param world The world to create the world generator for.
                     * @return The new generator
                     */
                    // @ts-ignore
                    createGenerator(world: org.spongepowered.api.world.World): org.spongepowered.api.world.gen.WorldGenerator
                }
            }
        }
    }
}
