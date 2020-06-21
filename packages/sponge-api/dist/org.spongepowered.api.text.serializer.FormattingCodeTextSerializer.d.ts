declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace serializer {
                    /**
                     * Represents a {@link TextSerializer} for the old "formatting code" strings. A
                     * formatted message consists out of plain text with a special character
                     * indicating a formatting follows and a unique character for each formatting.
                     * <p><b>Example:</b> {@code &cHello &eSponge!}<br> With the special character
                     * {@code &} this would represent a red and yellow message. (With {@code c}, and
                     * {@code e} being the formatting characters.)</p>
                     * @see <a href="http://minecraft.gamepedia.com/Formatting_codes">
                     *      Formatting codes on the Minecraft Wiki</a>
                     */
                    // @ts-ignore
                    interface FormattingCodeTextSerializer extends org.spongepowered.api.text.serializer.SafeTextSerializer {
                        /**
                         * Returns the formatting character for this
                         * {@link FormattingCodeTextSerializer}.
                         * @return The formatting character
                         */
                        // @ts-ignore
                        getCharacter(): string
                        /**
                         * Removes the color codes for this {@link FormattingCodeTextSerializer}
                         * from a string.
                         * @param text The string
                         * @return The stripped text
                         */
                        // @ts-ignore
                        stripCodes(text: java.lang.String | string): string
                        /**
                         * Replaces the formatting codes in the specified string with a different
                         * specified character, e.g. {@code &cHello &eSponge! -> $cHello $eSponge!}
                         * @param text The string to replace the formatting codes in
                         * @param to The special character to replace with
                         * @return The replaced text
                         */
                        // @ts-ignore
                        replaceCodes(text: java.lang.String | string, to: string): string
                        /**
                         * Replaces the formatting codes in the specified string with a different
                         * character for the specified {@link FormattingCodeTextSerializer},
                         * e.g. {@code &cHello &eSponge! -> $cHello $eSponge!}
                         * @param text The string to replace the formatting codes in
                         * @param serializer The serializer to replace for
                         * @return The replaced text
                         */
                        // @ts-ignore
                        replaceCodes(text: java.lang.String | string, serializer: org.spongepowered.api.text.serializer.FormattingCodeTextSerializer): string
                    }
                }
            }
        }
    }
}
