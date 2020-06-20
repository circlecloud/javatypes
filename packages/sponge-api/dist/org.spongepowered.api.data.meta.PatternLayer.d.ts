declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace meta {
                    /**
                     * A representation on a single layer of a {@link BannerData}'s pattern.
                     */
                    // @ts-ignore
                    interface PatternLayer extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a {@link PatternLayer} with the desired
                         * {@link BannerPatternShape} and {@link DyeColor}.
                         * @param shape The shape
                         * @param color The color
                         * @return The new pattern layer
                         */
                        // @ts-ignore
                        of(shape: org.spongepowered.api.data.type.BannerPatternShape, color: org.spongepowered.api.data.type.DyeColor): org.spongepowered.api.data.meta.PatternLayer
                        /**
                         * Gets the pattern shape for this layer.
                         * @return The shape
                         */
                        // @ts-ignore
                        getShape(): org.spongepowered.api.data.type.BannerPatternShape
                        /**
                         * Gets the color for this layer.
                         * @return The color
                         */
                        // @ts-ignore
                        getColor(): org.spongepowered.api.data.type.DyeColor
                    }
                }
            }
        }
    }
}
