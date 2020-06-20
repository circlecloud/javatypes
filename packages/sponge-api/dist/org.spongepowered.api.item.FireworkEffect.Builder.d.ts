declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace FireworkEffect {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.FireworkEffect, org.spongepowered.api.item.FireworkEffect.Builder> {
                        /**
                         * Sets whether the {@link FireworkEffect} is going to have a trail
                         * or not.
                         * @param trail Whether the firework will have a trail
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        trail(trail: boolean): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Sets whether the {@link FireworkEffect} is going to flicker
                         * on explosion.
                         * @param flicker Whether the explosion will flicker
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        flicker(flicker: boolean): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color} to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param color The color to add to the explosion
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        color(color: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color}s to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param colors The colors to add to the explosion
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        colors(...colors: org.spongepowered.api.util.Color[]): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color}s to the initial explosion colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param colors The colors to add to the explosion
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        colors(colors: java.lang.Iterable<org.spongepowered.api.util.Color>): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color} to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param color The colors to add to the fade
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        fade(color: org.spongepowered.api.util.Color): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color}s to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param colors The colors to add to the fade
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        fades(...colors: org.spongepowered.api.util.Color[]): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Adds the given {@link Color}s to the fade colors.
                         * <p>Colors can be mixed and matched in the order they are added
                         * in.</p>
                         * @param colors The colors to add to the fade
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        fades(colors: java.lang.Iterable<org.spongepowered.api.util.Color>): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Sets the shape of the {@link FireworkEffect} explosion.
                         * @param shape The shape of the explosion
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        shape(shape: org.spongepowered.api.item.FireworkShape): org.spongepowered.api.item.FireworkEffect.Builder
                        /**
                         * Builds a {@link FireworkEffect} based on the current state of this
                         * builder.
                         * @return A newly created firework effect
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.item.FireworkEffect
                    }
                }
            }
        }
    }
}
