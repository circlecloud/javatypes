declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                /**
                 * Represents a firework explosion.
                 * <p>{@link FireworkEffect}s are immutable once created. To change one
                 * or create one, use {@link Builder}.</p>
                 */
                // @ts-ignore
                interface FireworkEffect extends org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new {@link Builder} to build a {@link FireworkEffect}.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.item.FireworkEffect.Builder
                    /**
                     * Gets whether this {@link FireworkEffect} will flicker when
                     * detonated.
                     * @return Whether this effect will flicker
                     */
                    // @ts-ignore
                    flickers(): boolean
                    /**
                     * Gets whether this {@link FireworkEffect} will have a trail
                     * when detonated.
                     * @return Whether this effect will have a trail
                     */
                    // @ts-ignore
                    hasTrail(): boolean
                    /**
                     * Gets the ordered list of colors.
                     * <p>In some implementations, the order of colors defines the colors
                     * showing from edge to center of the firework explosion.</p>
                     * @return The list of colors
                     */
                    // @ts-ignore
                    getColors(): Array<org.spongepowered.api.util.Color>
                    /**
                     * Gets the ordered list of colors.
                     * <p>Normally in vanilla, the order of colors defines the colors
                     * showing from edge to center of the firework explosion.</p>
                     * @return The list of colors
                     */
                    // @ts-ignore
                    getFadeColors(): Array<org.spongepowered.api.util.Color>
                    /**
                     * Gets the explosion shape.
                     * @return The explosion shape
                     */
                    // @ts-ignore
                    getShape(): org.spongepowered.api.item.FireworkShape
                }
            }
        }
    }
}
