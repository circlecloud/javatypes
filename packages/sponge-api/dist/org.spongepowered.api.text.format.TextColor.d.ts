declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    /**
                     * Represents the color of the text of a {@link Text}.
                     * @see TextColors
                     */
                    // @ts-ignore
                    interface TextColor extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.TextElement {
                        /**
                         * Returns the corresponding {@link Color} for this {@link TextColor}.
                         * @return The RGB color of this text color
                         */
                        // @ts-ignore
                        getColor(): org.spongepowered.api.util.Color
                        // @ts-ignore
                        applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                    }
                }
            }
        }
    }
}
