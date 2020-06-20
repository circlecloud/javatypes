declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace type {
                    /**
                     * Represents a color of dye that can be used by various items and blocks.
                     */
                    // @ts-ignore
                    interface DyeColor extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable {
                        /**
                         * Gets this dye color as a {@link Color} for easy translation.
                         * @return The color as a {#link Color}
                         */
                        // @ts-ignore
                        getColor(): org.spongepowered.api.util.Color
                    }
                }
            }
        }
    }
}
