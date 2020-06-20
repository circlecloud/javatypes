declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents the dimension of a {@link World}.
                 */
                // @ts-ignore
                interface Dimension extends org.spongepowered.api.service.context.ContextSource {
                    /**
                     * Gets the type of dimension.
                     * @return The type of dimension
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.world.DimensionType
                    /**
                     * Gets the generator type of dimension.
                     * @return The generator type of dimension.
                     */
                    // @ts-ignore
                    getGeneratorType(): org.spongepowered.api.world.GeneratorType
                    /**
                     * Returns whether players can respawn within {@link Dimension} after death.
                     * @return True if players can respawn, false if not
                     */
                    // @ts-ignore
                    allowsPlayerRespawns(): boolean
                    /**
                     * Returns the minimum spawn height for {@link Dimension}.
                     * @return The minimum spawn height
                     */
                    // @ts-ignore
                    getMinimumSpawnHeight(): int
                    /**
                     * Returns whether water evaporates for {@link Dimension}.
                     * @return True if water evaporates, false if not
                     */
                    // @ts-ignore
                    doesWaterEvaporate(): boolean
                    /**
                     * Returns whether this {@link Dimension} has a sky (lack of bedrock).
                     * @return True if sky is present, false if not
                     */
                    // @ts-ignore
                    hasSky(): boolean
                    /**
                     * Gets the highest naturally generated y-coordinate of {@link World}s in
                     * this dimension. Usually 128 (no sky) or 256 (sky).
                     * @return The generated height
                     */
                    // @ts-ignore
                    getHeight(): int
                    /**
                     * Gets the maximum y-coordinate a non-air cuboid can exist at of
                     * {@link World}s in this dimension. Usually 256.
                     * @return The build height
                     */
                    // @ts-ignore
                    getBuildHeight(): int
                }
            }
        }
    }
}
