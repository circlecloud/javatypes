declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents anything with a location.
                 */
                // @ts-ignore
                interface Locatable {
                    /**
                     * Gets the location of the source.
                     * @return The location
                     */
                    // @ts-ignore
                    getLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    /**
                     * Gets the world that this source resides in.
                     * @return The World
                     */
                    // @ts-ignore
                    getWorld(): org.spongepowered.api.world.World
                }
            }
        }
    }
}
