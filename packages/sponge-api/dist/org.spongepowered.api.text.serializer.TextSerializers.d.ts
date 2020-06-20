declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * The list of {@link TextSerializer} available together with SpongeAPI.
                     */
                    // @ts-ignore
                    class TextSerializers extends java.lang.Object {
                        /**
                         * The {@link TextSerializer} for plain text input, without support for
                         * formatting or special text types.
                         */
                        // @ts-ignore
                        readonly PLAIN: org.spongepowered.api.text.serializer.SafeTextSerializer
                        /**
                         * The {@link FormattingCodeTextSerializer} using the internal formatting
                         * char.
                         * <p><b>Note:</b> This serializer is ONLY available for compatibility
                         * reasons. Using texts with legacy formatting codes as-is, without using
                         * this {@link FormattingCodeTextSerializer} is broken in many ways and
                         * should not be used anymore unless really necessary. It is recommended to
                         * use a different text serializer such as {@link #FORMATTING_CODE}
                         * instead.</p>
                         * @see FormattingCodeTextSerializer
                         * @deprecated Legacy formatting codes are being phased out of Minecraft
                         */
                        // @ts-ignore
                        readonly LEGACY_FORMATTING_CODE: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer
                        /**
                         * A {@link FormattingCodeTextSerializer} for a simple {@link Text}
                         * representation similar to {@link #LEGACY_FORMATTING_CODE} but using the
                         * formatting character {@code &} instead of the internal one.
                         * <p>Example of a string parsed by this {@link TextSerializer}
                         * {@code &cHello &eSponge!}, would refer to a red and yellow formatted
                         * text.</p>
                         * <p><b>Note:</b> Unlike the {@link #LEGACY_FORMATTING_CODE}
                         * {@link TextSerializer} this is safe to use as simple {@link Text} format
                         * for plugins as long as you keep in mind that it does not support
                         * additional {@link Text} features such as {@link ClickAction}s or
                         * {@link HoverAction}s.</p>
                         * @see FormattingCodeTextSerializer
                         */
                        // @ts-ignore
                        readonly FORMATTING_CODE: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer
                        /**
                         * The {@link TextSerializer} for Mojang's JSON (<i>Mojangson</i>)
                         * representation of a {@link Text} object.
                         */
                        // @ts-ignore
                        readonly JSON: org.spongepowered.api.text.serializer.TextSerializer
                        /**
                         * Returns a representation that accepts and outputs formatting codes, using
                         * the provided formatting character.
                         * @param formattingChar The formatting character to parse and serialize
                         *         with
                         * @return The appropriate legacy representation handler
                         */
                        // @ts-ignore
                        formattingCode(formattingChar: string): org.spongepowered.api.text.serializer.FormattingCodeTextSerializer
                    }
                }
            }
        }
    }
}
