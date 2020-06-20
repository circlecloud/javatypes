declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace meta {
                    namespace PatternLayer {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.data.meta.PatternLayer> {
                            /**
                             * Sets the {@link BannerPatternShape} to be used.
                             * @param shape The shape
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            pattern(shape: org.spongepowered.api.data.type.BannerPatternShape): org.spongepowered.api.data.meta.PatternLayer.Builder
                            /**
                             * Sets the {@link DyeColor} to be used.
                             * @param color The color
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            color(color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.meta.PatternLayer.Builder
                            /**
                             * Builds a {@link PatternLayer} provided that the
                             * color and pattern are set.
                             * @return The new pattern layer
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.data.meta.PatternLayer
                            // @ts-ignore
                            reset(): org.spongepowered.api.data.meta.PatternLayer.Builder
                        }
                    }
                }
            }
        }
    }
}
