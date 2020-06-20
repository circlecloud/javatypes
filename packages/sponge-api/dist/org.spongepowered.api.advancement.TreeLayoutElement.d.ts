declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                /**
                 * Represents a element in the {@link TreeLayout}.
                 */
                // @ts-ignore
                interface TreeLayoutElement {
                    /**
                     * Gets the {@link Advancement}.
                     * @return The advancement
                     */
                    // @ts-ignore
                    getAdvancement(): org.spongepowered.api.advancement.Advancement
                    /**
                     * Gets the position of the {@link Advancement}.
                     * @return The position
                     */
                    // @ts-ignore
                    getPosition(): Vector2d
                    /**
                     * Sets the position of the {@link Advancement}.
                     * @param position The position
                     */
                    // @ts-ignore
                    setPosition(position: Vector2d): void
                    /**
                     * Sets the position of the {@link Advancement}.
                     * @param x The x coordinate
                     * @param y The y coordinate
                     */
                    // @ts-ignore
                    setPosition(x: number /*double*/, y: number /*double*/): void
                }
            }
        }
    }
}
