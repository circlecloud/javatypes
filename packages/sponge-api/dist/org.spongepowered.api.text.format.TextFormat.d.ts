declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    /**
                     * Represents a pair of {@link TextStyle} and {@link TextColor}.
                     */
                    // @ts-ignore
                    class TextFormat extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        /**
                         * An empty {@link TextFormat} with no {@link TextColor} and no {@link TextStyle}.
                         */
                        // @ts-ignore
                        public static readonly NONE: org.spongepowered.api.text.format.TextFormat
                        /**
                         * Gets the {@link TextFormat} with the default style and color.
                         * @return The empty text format
                         */
                        // @ts-ignore
                        public static of(): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Constructs a new {@link TextFormat} with the specific style.
                         * @param style The style
                         * @return The new text format
                         */
                        // @ts-ignore
                        public static of(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Constructs a new {@link TextFormat} with the specific color.
                         * @param color The color
                         * @return The new text format
                         */
                        // @ts-ignore
                        public static of(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Constructs a new {@link TextFormat} with the specific color and style.
                         * @param color The color
                         * @param style The style
                         * @return The new text format
                         */
                        // @ts-ignore
                        public static of(color: org.spongepowered.api.text.format.TextColor, style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Returns the {@link TextColor} in this format.
                         * @return The color
                         */
                        // @ts-ignore
                        public getColor(): org.spongepowered.api.text.format.TextColor
                        /**
                         * Returns the {@link TextStyle} in this format.
                         * @return The style
                         */
                        // @ts-ignore
                        public getStyle(): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Returns a new {@link TextFormat} with the given color.
                         * @param color The color
                         * @return The new text format
                         */
                        // @ts-ignore
                        public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Returns a new {@link TextFormat} with the given style.
                         * @param style The style
                         * @return The new text format
                         */
                        // @ts-ignore
                        public style(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Returns a new {@link TextFormat} that combines this and the given format.
                         * The given format takes higher priority than this one. Due to this the
                         * color will only fallback to this one if the given format's color is
                         * {@link TextColors#NONE}. If the given format's color is
                         * {@link TextColors#RESET} then {@link TextColors#NONE} will be used.
                         * Styles are combined using {@link TextStyle#and(TextStyle...)}.
                         * @param format The format to merge
                         * @return The new text format
                         */
                        // @ts-ignore
                        public merge(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.format.TextFormat
                        /**
                         * Returns whether this {@link TextFormat} has no color and format
                         * specified.
                         * @return If the format does not contain a color or any styles
                         */
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
