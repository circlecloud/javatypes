declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    namespace TextStyle {
                        /**
                         * Represents a {@link TextStyle} that is not a composite, for example
                         * {@link TextStyles#BOLD}. It is a base text style in Minecraft with a
                         * name.
                         * @see TextStyle
                         * @see Base
                         */
                        // @ts-ignore
                        abstract class Base extends org.spongepowered.api.text.format.TextStyle implements org.spongepowered.api.CatalogType {
                            /**
                             * Constructs a new {@link Base}.
                             * @param bold Whether text where this style is applied is bolded
                             * @param italic Whether text where this style is applied is italicized
                             * @param underline Whether text where this style is applied is
                             *         underlined
                             * @param obfuscated Whether text where this style is applied is
                             *         obfuscated
                             * @param strikethrough Whether text where this style is applied has a
                             *         strikethrough
                             */
                            // @ts-ignore
                            constructor(bold: java.lang.Boolean, italic: java.lang.Boolean, underline: java.lang.Boolean, strikethrough: java.lang.Boolean, obfuscated: java.lang.Boolean)
                            // @ts-ignore
                            public isComposite(): boolean
                        }
                    }
                }
            }
        }
    }
}
