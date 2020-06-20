declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                /**
                 * Represents an immutable tree-structure of formatted (text) components. Each
                 * instance consists of content and a list of children texts appended after the
                 * content of this text. The content of the text is available through one of the
                 * subclasses.
                 * <p>Text is primarily used for sending formatted chat messages to players, but
                 * also in other places like books or signs.</p>
                 * <p>Text instances can be created through the available {@link #of()} methods
                 * or using one of the {@link Builder}s available through one of the
                 * {@link #builder()} methods.</p>
                 * @see Text#builder()
                 * @see Builder
                 * @see LiteralText
                 * @see TranslatableText
                 * @see SelectorText
                 * @see ScoreText
                 */
                // @ts-ignore
                class Text extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable, org.spongepowered.api.data.DataSerializable, java.lang.Comparable<org.spongepowered.api.text.Text> {
                    /**
                     * The empty, unformatted {@link Text} instance.
                     */
                    // @ts-ignore
                    readonly EMPTY: org.spongepowered.api.text.Text
                    /**
                     * An unformatted {@link Text} that will start a new line (if supported).
                     */
                    // @ts-ignore
                    readonly NEW_LINE: org.spongepowered.api.text.LiteralText
                    /**
                     * A {@link Comparator} for texts that compares the plain text of two text
                     * instances.
                     */
                    // @ts-ignore
                    PLAIN_COMPARATOR: java.util.Comparator<org.spongepowered.api.text.Text>
                    /**
                     * Returns the format of this {@link Text}.
                     * @return The format of this text
                     */
                    // @ts-ignore
                    getFormat(): org.spongepowered.api.text.format.TextFormat
                    /**
                     * Returns the color of this {@link Text}.
                     * @return The color of this text
                     */
                    // @ts-ignore
                    getColor(): org.spongepowered.api.text.format.TextColor
                    /**
                     * Returns the style of this {@link Text}. This will return a compound
                     * {@link TextStyle} if multiple different styles have been set.
                     * @return The style of this text
                     */
                    // @ts-ignore
                    getStyle(): org.spongepowered.api.text.format.TextStyle
                    /**
                     * Returns the immutable list of children appended after the content of this
                     * {@link Text}.
                     * @return The immutable list of children
                     */
                    // @ts-ignore
                    getChildren(): <any>
                    /**
                     * Returns an immutable {@link Iterable} over this text and all of its
                     * children. This is recursive, the children of the children will be also
                     * included.
                     * @return An iterable over this text and the children texts
                     */
                    // @ts-ignore
                    withChildren(): java.lang.Iterable<org.spongepowered.api.text.Text>
                    /**
                     * Returns the {@link ClickAction} executed on the client when this
                     * {@link Text} gets clicked.
                     * @return The click action of this text, or {#link Optional#empty()} if not
                     *          set
                     */
                    // @ts-ignore
                    getClickAction(): java.util.Optional<org.spongepowered.api.text.action.ClickAction<?>>
                    /**
                     * Returns the {@link HoverAction} executed on the client when this
                     * {@link Text} gets hovered.
                     * @return The hover action of this text, or {#link Optional#empty()} if not
                     *          set
                     */
                    // @ts-ignore
                    getHoverAction(): java.util.Optional<org.spongepowered.api.text.action.HoverAction<?>>
                    /**
                     * Returns the {@link ShiftClickAction} executed on the client when this
                     * {@link Text} gets shift-clicked.
                     * @return The shift-click action of this text, or {#link Optional#empty()}
                     *          if not set
                     */
                    // @ts-ignore
                    getShiftClickAction(): java.util.Optional<org.spongepowered.api.text.action.ShiftClickAction<?>>
                    /**
                     * Returns whether this {@link Text} is empty.
                     * @return {#code true} if this text is empty
                     */
                    // @ts-ignore
                    isEmpty(): boolean
                    /**
                     * Returns a new {@link Builder} with the content, formatting and actions of
                     * this text. This can be used to edit an otherwise immutable {@link Text}
                     * instance.
                     * @return A new message builder with the content of this text
                     */
                    // @ts-ignore
                    abstract toBuilder(): org.spongepowered.api.text.Text.Builder
                    /**
                     * Returns a plain text representation of this {@link Text} without any
                     * formatting.
                     * @return This text converted to plain text
                     */
                    // @ts-ignore
                    toPlain(): java.lang.String
                    /**
                     * Returns a plain text representation of this {@link Text} without any
                     * children.
                     * @return This text (without children) converted to plain text
                     */
                    // @ts-ignore
                    toPlainSingle(): java.lang.String
                    /**
                     * Concatenates the specified {@link Text} to this Text and returns the
                     * result.
                     * @param other To concatenate
                     * @return Concatenated text
                     */
                    // @ts-ignore
                    concat(other: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text
                    /**
                     * Removes all empty texts from the beginning and end of this
                     * text.
                     * @return Text result
                     */
                    // @ts-ignore
                    trim(): org.spongepowered.api.text.Text
                    /**
                     * Replaces a pattern in this text with a {@link Text}, preserving
                     * formatting where possible.
                     * <p>If {@code lossy} is true, this will replace the pattern if this finds
                     * it spanning multiple child {@link Text}s, resulting in a potential loss
                     * of formatting; if false, it will only replace the pattern where it is
                     * contained within one child {@link Text}, to preserve all formatting.</p>
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     * @param oldValue The pattern to replace
                     * @param newValue The value to replace with
                     * @param lossy Whether lossy mode is enabled
                     * @return The resulting (copied) text
                     */
                    // @ts-ignore
                    replace(oldValue: java.util.regex.Pattern, newValue: org.spongepowered.api.text.Text, lossy: boolean): org.spongepowered.api.text.Text
                    /**
                     * Replaces a pattern in this text with a {@link Text}, preserving all
                     * formatting.
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     * @param oldValue The pattern to replace
                     * @param newValue The value to replace with
                     * @return The resulting (copied) text
                     */
                    // @ts-ignore
                    replace(oldValue: java.util.regex.Pattern, newValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text
                    /**
                     * Replaces a string within this text with a {@link Text}, preserving
                     * formatting where possible.
                     * <p>If {@code lossy} is true, this will replace the pattern if this finds
                     * it spanning multiple child {@link Text}s, resulting in a potential loss
                     * of formatting; if false, it will only replace the pattern where it is
                     * contained within one child {@link Text}, to preserve all formatting.</p>
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     * @param oldValue The string to replace
                     * @param newValue The value to replace with
                     * @param lossy Whether lossy mode is enabled
                     * @return The resulting (copied) text
                     */
                    // @ts-ignore
                    replace(oldValue: string, newValue: org.spongepowered.api.text.Text, lossy: boolean): org.spongepowered.api.text.Text
                    /**
                     * Replaces a string within this text with a {@link Text}, preserving all
                     * formatting.
                     * <p>This method produces a copy with the specified replacements. The
                     * original is not modified.</p>
                     * @param oldValue The string to replace
                     * @param newValue The value to replace with
                     * @return The resulting (copied) text
                     */
                    // @ts-ignore
                    replace(oldValue: string, newValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.Text
                    // @ts-ignore
                    getContentVersion(): int
                    // @ts-ignore
                    toContainer(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    compareTo(o: org.spongepowered.api.text.Text): int
                    // @ts-ignore
                    equals(o: any): boolean
                    // @ts-ignore
                    hashCode(): int
                    // @ts-ignore
                    toString(): java.lang.String
                    // @ts-ignore
                    toText(): org.spongepowered.api.text.Text
                    /**
                     * Returns an empty, unformatted {@link Text} instance.
                     * @return An empty text
                     */
                    // @ts-ignore
                    of(): org.spongepowered.api.text.Text
                    /**
                     * Creates a {@link Text} with the specified plain text. The created text
                     * won't have any formatting or events configured.
                     * @param content The content of the text
                     * @return The created text
                     * @see LiteralText
                     */
                    // @ts-ignore
                    of(content: string): org.spongepowered.api.text.LiteralText
                    /**
                     * Creates a {@link Text} with the specified char as plain text. The created
                     * text won't have any formatting or events configured.
                     * @param content The content of the text as char
                     * @return The created text
                     * @see LiteralText
                     */
                    // @ts-ignore
                    of(content: string): org.spongepowered.api.text.LiteralText
                    /**
                     * Creates a new unformatted {@link TranslatableText} with the given
                     * {@link Translation} and arguments.
                     * @param translation The translation for the text
                     * @param args The arguments for the translation
                     * @return The created text
                     * @see TranslatableText
                     */
                    // @ts-ignore
                    of(translation: org.spongepowered.api.text.translation.Translation, ...args: any[]): org.spongepowered.api.text.TranslatableText
                    /**
                     * Creates a new unformatted {@link TranslatableText} from the given
                     * {@link Translatable}.
                     * @param translatable The translatable for the text
                     * @param args The arguments for the translation
                     * @return The created text
                     * @see TranslatableText
                     */
                    // @ts-ignore
                    of(translatable: org.spongepowered.api.text.translation.Translatable, ...args: any[]): org.spongepowered.api.text.TranslatableText
                    /**
                     * Creates a new unformatted {@link SelectorText} with the given selector.
                     * @param selector The selector for the text
                     * @return The created text
                     * @see SelectorText
                     */
                    // @ts-ignore
                    of(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText
                    /**
                     * Creates a new unformatted {@link ScoreText} with the given score.
                     * @param score The score for the text
                     * @return The created text
                     * @see ScoreText
                     */
                    // @ts-ignore
                    of(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText
                    /**
                     * Builds a {@link Text} from a given array of objects.
                     * <p>For instance, you can use this like
                     * <code>Text.of(TextColors.DARK_AQUA, "Hi", TextColors.AQUA, "Bye")</code>
                     * </p>
                     * <p>This will create the correct {@link Text} instance if the input object
                     * is the input for one of the {@link Text} types or convert the object to a
                     * string otherwise.</p>
                     * <p>For instances of type {@link TextRepresentable} (e.g. {@link Text},
                     * {@link Builder}, ...) the formatting of appended text has priority over
                     * the current formatting in the method, e.g. the following results in a
                     * green, then yellow and at the end green again {@link Text}:</p>
                     * <code>Text.of(TextColors.GREEN, "Hello ", Text.of(TextColors.YELLOW,
                     * "Spongie"), '!');</code>
                     * @param objects The object array
                     * @return The built text object
                     */
                    // @ts-ignore
                    of(...objects: any[]): org.spongepowered.api.text.Text
                    /**
                     * Creates a {@link Text.Builder} with empty text.
                     * @return A new text builder with empty text
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.text.Text.Builder
                    /**
                     * Creates a new unformatted {@link LiteralText.Builder} with the specified
                     * content.
                     * @param content The content of the text
                     * @return The created text builder
                     * @see LiteralText
                     * @see LiteralText.Builder
                     */
                    // @ts-ignore
                    builder(content: string): org.spongepowered.api.text.LiteralText.Builder
                    /**
                     * Creates a new unformatted {@link LiteralText.Builder} with the specified
                     * content.
                     * @param content The content of the text as char
                     * @return The created text builder
                     * @see LiteralText
                     * @see LiteralText.Builder
                     */
                    // @ts-ignore
                    builder(content: string): org.spongepowered.api.text.LiteralText.Builder
                    /**
                     * Creates a new {@link LiteralText.Builder} with the formatting and actions
                     * of the specified {@link Text} and the given content.
                     * @param text The text to apply the properties from
                     * @param content The content for the text builder
                     * @return The created text builder
                     * @see LiteralText
                     * @see LiteralText.Builder
                     */
                    // @ts-ignore
                    builder(text: org.spongepowered.api.text.Text, content: string): org.spongepowered.api.text.LiteralText.Builder
                    /**
                     * Creates a new unformatted {@link TranslatableText.Builder} with the given
                     * {@link Translation} and arguments.
                     * @param translation The translation for the builder
                     * @param args The arguments for the translation
                     * @return The created text builder
                     * @see TranslatableText
                     * @see TranslatableText.Builder
                     */
                    // @ts-ignore
                    builder(translation: org.spongepowered.api.text.translation.Translation, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                    /**
                     * Creates a new unformatted {@link TranslatableText.Builder} from the given
                     * {@link Translatable}.
                     * @param translatable The translatable for the builder
                     * @param args The arguments for the translation
                     * @return The created text builder
                     * @see TranslatableText
                     * @see TranslatableText.Builder
                     */
                    // @ts-ignore
                    builder(translatable: org.spongepowered.api.text.translation.Translatable, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                    /**
                     * Creates a new {@link TranslatableText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given {@link Translation}
                     * and arguments.
                     * @param text The text to apply the properties from
                     * @param translation The translation for the builder
                     * @param args The arguments for the translation
                     * @return The created text builder
                     * @see TranslatableText
                     * @see TranslatableText.Builder
                     */
                    // @ts-ignore
                    builder(text: org.spongepowered.api.text.Text, translation: org.spongepowered.api.text.translation.Translation, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                    /**
                     * Creates a new {@link TranslatableText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given {@link Translatable}.
                     * @param text The text to apply the properties from
                     * @param translatable The translatable for the builder
                     * @param args The arguments for the translation
                     * @return The created text builder
                     * @see TranslatableText
                     * @see TranslatableText.Builder
                     */
                    // @ts-ignore
                    builder(text: org.spongepowered.api.text.Text, translatable: org.spongepowered.api.text.translation.Translatable, ...args: any[]): org.spongepowered.api.text.TranslatableText.Builder
                    /**
                     * Creates a new unformatted {@link SelectorText.Builder} with the given
                     * selector.
                     * @param selector The selector for the builder
                     * @return The created text builder
                     * @see SelectorText
                     * @see SelectorText.Builder
                     */
                    // @ts-ignore
                    builder(selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder
                    /**
                     * Creates a new {@link SelectorText.Builder} with the formatting and
                     * actions of the specified {@link Text} and the given selector.
                     * @param text The text to apply the properties from
                     * @param selector The selector for the builder
                     * @return The created text builder
                     * @see SelectorText
                     * @see SelectorText.Builder
                     */
                    // @ts-ignore
                    builder(text: org.spongepowered.api.text.Text, selector: org.spongepowered.api.text.selector.Selector): org.spongepowered.api.text.SelectorText.Builder
                    /**
                     * Creates a new unformatted {@link ScoreText.Builder} with the given score.
                     * @param score The score for the text builder
                     * @return The created text builder
                     * @see ScoreText
                     * @see ScoreText.Builder
                     */
                    // @ts-ignore
                    builder(score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder
                    /**
                     * Creates a new {@link ScoreText.Builder} with the formatting and actions
                     * of the specified {@link Text} and the given score.
                     * @param text The text to apply the properties from
                     * @param score The score for the text builder
                     * @return The created text builder
                     * @see ScoreText
                     * @see ScoreText.Builder
                     */
                    // @ts-ignore
                    builder(text: org.spongepowered.api.text.Text, score: org.spongepowered.api.scoreboard.Score): org.spongepowered.api.text.ScoreText.Builder
                    /**
                     * Joins a sequence of text objects together.
                     * @param texts The texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    join(...texts: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.Text
                    /**
                     * Joins a sequence of text objects together.
                     * @param texts The texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    join(texts: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.Text
                    /**
                     * Joins a sequence of text objects together.
                     * @param texts The texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    join(texts: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.Text
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     * @param separator The separator
                     * @param texts The texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    joinWith(separator: org.spongepowered.api.text.Text, ...texts: org.spongepowered.api.text.Text[]): org.spongepowered.api.text.Text
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     * @param separator The separator
                     * @param texts The texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    joinWith(separator: org.spongepowered.api.text.Text, texts: java.lang.Iterable<org.spongepowered.api.text.Text>): org.spongepowered.api.text.Text
                    /**
                     * Joins a sequence of text objects together along with a separator.
                     * @param separator The separator
                     * @param texts An iterator for the texts to join
                     * @return A text object that joins the given text objects
                     */
                    // @ts-ignore
                    joinWith(separator: org.spongepowered.api.text.Text, texts: java.util.Iterator<org.spongepowered.api.text.Text>): org.spongepowered.api.text.Text
                }
            }
        }
    }
}
