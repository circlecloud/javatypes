declare namespace org {
    namespace bukkit {
        namespace FireworkEffect {
            /**
             * This is a builder for FireworkEffects.
             * @see FireworkEffect#builder()
             */
            // @ts-ignore
            class Builder extends java.lang.Object {
                /**
                 * Specify the type of the firework effect.
                 * @param type The effect type
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If type is null
                 */
                // @ts-ignore
                with(type: org.bukkit.FireworkEffect.Type): org.bukkit.FireworkEffect.Builder
                /**
                 * Add a flicker to the firework effect.
                 * @return This object, for chaining
                 */
                // @ts-ignore
                withFlicker(): org.bukkit.FireworkEffect.Builder
                /**
                 * Set whether the firework effect should flicker.
                 * @param flicker true if it should flicker, false if not
                 * @return This object, for chaining
                 */
                // @ts-ignore
                flicker(flicker: boolean): org.bukkit.FireworkEffect.Builder
                /**
                 * Add a trail to the firework effect.
                 * @return This object, for chaining
                 */
                // @ts-ignore
                withTrail(): org.bukkit.FireworkEffect.Builder
                /**
                 * Set whether the firework effect should have a trail.
                 * @param trail true if it should have a trail, false for no trail
                 * @return This object, for chaining
                 */
                // @ts-ignore
                trail(trail: boolean): org.bukkit.FireworkEffect.Builder
                /**
                 * Add a primary color to the firework effect.
                 * @param color The color to add
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If color is null
                 */
                // @ts-ignore
                withColor(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder
                /**
                 * Add several primary colors to the firework effect.
                 * @param colors The colors to add
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If colors is null
                 * @throws IllegalArgumentException If any color is null (may be
                 *      thrown after changes have occurred)
                 */
                // @ts-ignore
                withColor(...colors: org.bukkit.Color[]): org.bukkit.FireworkEffect.Builder
                /**
                 * Add several primary colors to the firework effect.
                 * @param colors An iterable object whose iterator yields the desired
                 *      colors
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If colors is null
                 * @throws IllegalArgumentException If any color is null (may be
                 *      thrown after changes have occurred)
                 */
                // @ts-ignore
                withColor(colors: java.lang.Iterable<any>): org.bukkit.FireworkEffect.Builder
                /**
                 * Add a fade color to the firework effect.
                 * @param color The color to add
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If colors is null
                 * @throws IllegalArgumentException If any color is null (may be
                 *      thrown after changes have occurred)
                 */
                // @ts-ignore
                withFade(color: org.bukkit.Color): org.bukkit.FireworkEffect.Builder
                /**
                 * Add several fade colors to the firework effect.
                 * @param colors The colors to add
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If colors is null
                 * @throws IllegalArgumentException If any color is null (may be
                 *      thrown after changes have occurred)
                 */
                // @ts-ignore
                withFade(...colors: org.bukkit.Color[]): org.bukkit.FireworkEffect.Builder
                /**
                 * Add several fade colors to the firework effect.
                 * @param colors An iterable object whose iterator yields the desired
                 *      colors
                 * @return This object, for chaining
                 * @throws IllegalArgumentException If colors is null
                 * @throws IllegalArgumentException If any color is null (may be
                 *      thrown after changes have occurred)
                 */
                // @ts-ignore
                withFade(colors: java.lang.Iterable<any>): org.bukkit.FireworkEffect.Builder
                /**
                 * Create a {@link FireworkEffect} from the current contents of this
                 * builder.
                 * <p>
                 * To successfully build, you must have specified at least one color.
                 * @return The representative firework effect
                 */
                // @ts-ignore
                build(): org.bukkit.FireworkEffect
            }
        }
    }
}
