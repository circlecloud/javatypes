declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>LineMetrics</code> class allows access to the
             * metrics needed to layout characters along a line
             * and to layout of a set of lines.  A <code>LineMetrics</code>
             * object encapsulates the measurement information associated
             * with a run of text.
             * <p>
             * Fonts can have different metrics for different ranges of
             * characters.  The <code>getLineMetrics</code> methods of
             * {@link java.awt.Font Font} take some text as an argument
             * and return a <code>LineMetrics</code> object describing the
             * metrics of the initial number of characters in that text, as
             * returned by {@link #getNumChars}.
             */
            // @ts-ignore
            class LineMetrics extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of characters (<code>char</code> values) in the text whose
                 * metrics are encapsulated by this <code>LineMetrics</code>
                 * object.
                 * @return the number of characters (<code>char</code> values) in the text with which
                 *          this <code>LineMetrics</code> was created.
                 */
                // @ts-ignore
                abstract getNumChars(): int
                /**
                 * Returns the ascent of the text.  The ascent
                 * is the distance from the baseline
                 * to the ascender line.  The ascent usually represents the
                 * the height of the capital letters of the text.  Some characters
                 * can extend above the ascender line.
                 * @return the ascent of the text.
                 */
                // @ts-ignore
                abstract getAscent(): float
                /**
                 * Returns the descent of the text.  The descent
                 * is the distance from the baseline
                 * to the descender line.  The descent usually represents
                 * the distance to the bottom of lower case letters like
                 * 'p'.  Some characters can extend below the descender
                 * line.
                 * @return the descent of the text.
                 */
                // @ts-ignore
                abstract getDescent(): float
                /**
                 * Returns the leading of the text. The
                 * leading is the recommended
                 * distance from the bottom of the descender line to the
                 * top of the next line.
                 * @return the leading of the text.
                 */
                // @ts-ignore
                abstract getLeading(): float
                /**
                 * Returns the height of the text.  The
                 * height is equal to the sum of the ascent, the
                 * descent and the leading.
                 * @return the height of the text.
                 */
                // @ts-ignore
                abstract getHeight(): float
                /**
                 * Returns the baseline index of the text.
                 * The index is one of
                 * {@link java.awt.Font#ROMAN_BASELINE ROMAN_BASELINE},
                 * {@link java.awt.Font#CENTER_BASELINE CENTER_BASELINE},
                 * {@link java.awt.Font#HANGING_BASELINE HANGING_BASELINE}.
                 * @return the baseline of the text.
                 */
                // @ts-ignore
                abstract getBaselineIndex(): int
                /**
                 * Returns the baseline offsets of the text,
                 * relative to the baseline of the text.  The
                 * offsets are indexed by baseline index.  For
                 * example, if the baseline index is
                 * <code>CENTER_BASELINE</code> then
                 * <code>offsets[HANGING_BASELINE]</code> is usually
                 * negative, <code>offsets[CENTER_BASELINE]</code>
                 * is zero, and <code>offsets[ROMAN_BASELINE]</code>
                 * is usually positive.
                 * @return the baseline offsets of the text.
                 */
                // @ts-ignore
                abstract getBaselineOffsets(): float[]
                /**
                 * Returns the position of the strike-through line
                 * relative to the baseline.
                 * @return the position of the strike-through line.
                 */
                // @ts-ignore
                abstract getStrikethroughOffset(): float
                /**
                 * Returns the thickness of the strike-through line.
                 * @return the thickness of the strike-through line.
                 */
                // @ts-ignore
                abstract getStrikethroughThickness(): float
                /**
                 * Returns the position of the underline relative to
                 * the baseline.
                 * @return the position of the underline.
                 */
                // @ts-ignore
                abstract getUnderlineOffset(): float
                /**
                 * Returns the thickness of the underline.
                 * @return the thickness of the underline.
                 */
                // @ts-ignore
                abstract getUnderlineThickness(): float
            }
        }
    }
}
