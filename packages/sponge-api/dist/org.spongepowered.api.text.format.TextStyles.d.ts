declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    /**
                     * Represents a list of the text styles provided by Vanilla Minecraft.
                     */
                    // @ts-ignore
                    class TextStyles extends java.lang.Object {
                        /**
                         * Represents an empty {@link TextStyle}.
                         */
                        // @ts-ignore
                        public static readonly NONE: org.spongepowered.api.text.format.TextStyle
                        // @ts-ignore
                        public static readonly OBFUSCATED: org.spongepowered.api.text.format.TextStyle.Base
                        // @ts-ignore
                        public static readonly BOLD: org.spongepowered.api.text.format.TextStyle.Base
                        // @ts-ignore
                        public static readonly STRIKETHROUGH: org.spongepowered.api.text.format.TextStyle.Base
                        // @ts-ignore
                        public static readonly UNDERLINE: org.spongepowered.api.text.format.TextStyle.Base
                        // @ts-ignore
                        public static readonly ITALIC: org.spongepowered.api.text.format.TextStyle.Base
                        /**
                         * Represents a {@link TextStyle} with all bases set to {@code false}.
                         */
                        // @ts-ignore
                        public static readonly RESET: org.spongepowered.api.text.format.TextStyle.Base
                        /**
                         * Returns an empty {@link TextStyle}.
                         * @return An empty text style
                         */
                        // @ts-ignore
                        public static of(): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Constructs a composite text style from the specified styles. This will
                         * result in the same as calling {@link TextStyle#and(TextStyle...)} on all
                         * of the text styles.
                         * @param styles The styles to combine
                         * @return A composite text style from the specified styles
                         */
                        // @ts-ignore
                        public static of(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.format.TextStyle
                    }
                }
            }
        }
    }
}
