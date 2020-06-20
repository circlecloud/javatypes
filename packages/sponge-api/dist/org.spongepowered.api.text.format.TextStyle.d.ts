declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace format {
                    /**
                     * Represents an immutable text style of a {@link Text}. It is a utility that is
                     * not normally present in Minecraft. It can be either empty, a {@link Base}
                     * with an additional legacy formatting code or a composite.
                     * <p>Combined styles can be created using {@link TextStyles#of(TextStyle...)}
                     * or using one of the {@link #and(TextStyle...)}, {@link #andNot(TextStyle...)}
                     * or {@link #negate()} method.</p>
                     * <p>Each individual style within a TextStyle, e.g. bold, italic is not just a
                     * boolean, but an {@code Optional&lt;Boolean&gt;} since it can be unapplied
                     * (or, in Optional terms, "empty"). These styles will hereafter be referred to
                     * as properties.<br> See the {@link OptBool} utility class for working with
                     * properties.</p>
                     * <p>Implementation note: Absent styles should not appear in the final chat
                     * component JSON. Properties that are set to true or false should appear, even
                     * if they override inherited properties.</p>
                     * @see TextStyles
                     */
                    // @ts-ignore
                    class TextStyle extends java.lang.Object implements org.spongepowered.api.text.TextElement {
                        /**
                         * Constructs a new {@link TextStyle}.
                         * @param bold Whether text where this style is applied is bolded
                         * @param italic Whether text where this style is applied is italicized
                         * @param underline Whether text where this style is applied is underlined
                         * @param obfuscated Whether text where this style is applied is obfuscated
                         * @param strikethrough Whether text where this style is applied has a
                         *         strikethrough
                         */
                        // @ts-ignore
                        constructor(bold: java.lang.Boolean, italic: java.lang.Boolean, underline: java.lang.Boolean, strikethrough: java.lang.Boolean, obfuscated: java.lang.Boolean)

                        /**
                         * Returns whether this {@link TextStyle} is a composite of multiple text
                         * styles.
                         * @return {#code true} if this text style is a composite
                         */
                        // @ts-ignore
                        isComposite(): boolean
                        /**
                         * Returns whether this {@link TextStyle} has no set properties.
                         * @return {#code true} if this style is empty
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Returns a new {@link TextStyle} with the bold property changed.
                         * @param bold Whether text where the new style is applied is bolded
                         * @return The new text style
                         */
                        // @ts-ignore
                        bold(bold: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Returns a new {@link TextStyle} with the italic property changed.
                         * @param italic Whether text where the new style is applied is italicized
                         * @return The new text style
                         */
                        // @ts-ignore
                        italic(italic: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Returns a new {@link TextStyle} with the underline property changed.
                         * @param underline Whether text where the new style is applied is underline
                         * @return The new text style
                         */
                        // @ts-ignore
                        underline(underline: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Returns a new {@link TextStyle} with the strikethrough property changed.
                         * @param strikethrough Whether text where the new style is applied has a
                         *         strikethrough
                         * @return The new text style
                         */
                        // @ts-ignore
                        strikethrough(strikethrough: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Returns a new {@link TextStyle} with the obfuscated property changed.
                         * @param obfuscated Whether text where the new style is applied is
                         *         obfuscated
                         * @return The new text style
                         */
                        // @ts-ignore
                        obfuscated(obfuscated: java.lang.Boolean): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Checks for whether text where this style is applied is bolded.
                         * @return The value for the bold property, or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        isBold(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Checks for whether text where this style is applied is italicized.
                         * @return The value for the italic property, or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        isItalic(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Checks for whether text where this style is applied has an underline.
                         * @return The value for the underline property, or {#link Optional#empty()}
                         */
                        // @ts-ignore
                        hasUnderline(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Checks for whether text where this style is applied has a strikethrough.
                         * @return The value for the strikethrough property, or
                         *          {#link Optional#empty()}
                         */
                        // @ts-ignore
                        hasStrikethrough(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Checks for whether text where this style is obfuscated.
                         * @return The value for the obfuscated property, or
                         *          {#link Optional#empty()}
                         */
                        // @ts-ignore
                        isObfuscated(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Returns whether the given {@link TextStyle} is contained in this
                         * {@link TextStyle}.
                         * <p>For example, a {@link TextStyle} with {@code bold: true, italic:
                         * true}} would return {@code true} for <code>contains(
                         * {@link TextStyles#BOLD})</code> and <code>contains(
                         * {@link TextStyles#ITALIC}).</code></p>
                         * <p>If the specified {@link TextStyle} is a composite of multiple styles
                         * it returns {@code true} if this style has at least all of the properties
                         * set in the specified style.</p>
                         * @param styles The text styles to check
                         * @return {#code true} if the given text styles are contained in this text
                         *          style
                         */
                        // @ts-ignore
                        contains(...styles: org.spongepowered.api.text.format.TextStyle[]): boolean
                        /**
                         * Negates this {@link TextStyle}. This is useful for undoing text styles
                         * that are inherited from parent messages.
                         * @return The inverse of this text style
                         */
                        // @ts-ignore
                        negate(): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Composes this {@link TextStyle} with the specified text styles.
                         * @param styles The text styles to compose this one with
                         * @return A new text style composed out of the given text styles
                         */
                        // @ts-ignore
                        and(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.format.TextStyle
                        /**
                         * Composes this {@link TextStyle} with the passed in TextStyles, but
                         * negates them before composition. This is the same as negating all the
                         * passed in {@link TextStyle} and then using the {@link #and(TextStyle...)}
                         * method.
                         * @param styles The text styles to compose this one with
                         * @return A new text style composed out of the given text styles
                         */
                        // @ts-ignore
                        andNot(...styles: org.spongepowered.api.text.format.TextStyle[]): org.spongepowered.api.text.format.TextStyle
                        // @ts-ignore
                        applyTo(builder: org.spongepowered.api.text.Text.Builder): void
                        // @ts-ignore
                        equals(o: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
