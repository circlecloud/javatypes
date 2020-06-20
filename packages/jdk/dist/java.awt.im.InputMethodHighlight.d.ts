declare namespace java {
    namespace awt {
        namespace im {
            /**
             * An InputMethodHighlight is used to describe the highlight
             * attributes of text being composed.
             * The description can be at two levels:
             * at the abstract level it specifies the conversion state and whether the
             * text is selected; at the concrete level it specifies style attributes used
             * to render the highlight.
             * An InputMethodHighlight must provide the description at the
             * abstract level; it may or may not provide the description at the concrete
             * level.
             * If no concrete style is provided, a renderer should use
             * {@link java.awt.Toolkit#mapInputMethodHighlight} to map to a concrete style.
             * <p>
             * The abstract description consists of three fields: <code>selected</code>,
             * <code>state</code>, and <code>variation</code>.
             * <code>selected</code> indicates whether the text range is the one that the
             * input method is currently working on, for example, the segment for which
             * conversion candidates are currently shown in a menu.
             * <code>state</code> represents the conversion state. State values are defined
             * by the input method framework and should be distinguished in all
             * mappings from abstract to concrete styles. Currently defined state values
             * are raw (unconverted) and converted.
             * These state values are recommended for use before and after the
             * main conversion step of text composition, say, before and after kana-&gt;kanji
             * or pinyin-&gt;hanzi conversion.
             * The <code>variation</code> field allows input methods to express additional
             * information about the conversion results.
             * <p>
             * InputMethodHighlight instances are typically used as attribute values
             * returned from AttributedCharacterIterator for the INPUT_METHOD_HIGHLIGHT
             * attribute. They may be wrapped into {@link java.text.Annotation Annotation}
             * instances to indicate separate text segments.
             * @see java.text.AttributedCharacterIterator
             * @since 1.2
             */
            // @ts-ignore
            class InputMethodHighlight extends java.lang.Object {
                /**
                 * Constructs an input method highlight record.
                 * The variation is set to 0, the style to null.
                 * @param selected Whether the text range is selected
                 * @param state The conversion state for the text range - RAW_TEXT or CONVERTED_TEXT
                 * @see InputMethodHighlight#RAW_TEXT
                 * @see InputMethodHighlight#CONVERTED_TEXT
                 * @exception IllegalArgumentException if a state other than RAW_TEXT or CONVERTED_TEXT is given
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number /*int*/)
                /**
                 * Constructs an input method highlight record.
                 * The style is set to null.
                 * @param selected Whether the text range is selected
                 * @param state The conversion state for the text range - RAW_TEXT or CONVERTED_TEXT
                 * @param variation The style variation for the text range
                 * @see InputMethodHighlight#RAW_TEXT
                 * @see InputMethodHighlight#CONVERTED_TEXT
                 * @exception IllegalArgumentException if a state other than RAW_TEXT or CONVERTED_TEXT is given
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number /*int*/, variation: number /*int*/)
                /**
                 * Constructs an input method highlight record.
                 * The style attributes map provided must be unmodifiable.
                 * @param selected whether the text range is selected
                 * @param state the conversion state for the text range - RAW_TEXT or CONVERTED_TEXT
                 * @param variation the variation for the text range
                 * @param style the rendering style attributes for the text range, or null
                 * @see InputMethodHighlight#RAW_TEXT
                 * @see InputMethodHighlight#CONVERTED_TEXT
                 * @exception IllegalArgumentException if a state other than RAW_TEXT or CONVERTED_TEXT is given
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(selected: boolean, state: number /*int*/, variation: number /*int*/, style: java.util.Map<java.awt.font.TextAttribute, any>)
                /**
                 * Constant for the raw text state.
                 */
                // @ts-ignore
                readonly RAW_TEXT: number /*int*/
                /**
                 * Constant for the converted text state.
                 */
                // @ts-ignore
                readonly CONVERTED_TEXT: number /*int*/
                /**
                 * Constant for the default highlight for unselected raw text.
                 */
                // @ts-ignore
                readonly UNSELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
                /**
                 * Constant for the default highlight for selected raw text.
                 */
                // @ts-ignore
                readonly SELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
                /**
                 * Constant for the default highlight for unselected converted text.
                 */
                // @ts-ignore
                readonly UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
                /**
                 * Constant for the default highlight for selected converted text.
                 */
                // @ts-ignore
                readonly SELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
                /**
                 * Returns whether the text range is selected.
                 */
                // @ts-ignore
                isSelected(): boolean
                /**
                 * Returns the conversion state of the text range.
                 * @return The conversion state for the text range - RAW_TEXT or CONVERTED_TEXT.
                 * @see InputMethodHighlight#RAW_TEXT
                 * @see InputMethodHighlight#CONVERTED_TEXT
                 */
                // @ts-ignore
                getState(): int
                /**
                 * Returns the variation of the text range.
                 */
                // @ts-ignore
                getVariation(): int
                /**
                 * Returns the rendering style attributes for the text range, or null.
                 * @since 1.3
                 */
                // @ts-ignore
                getStyle(): java.util.Map<java.awt.font.TextAttribute, ?>
            }
        }
    }
}
