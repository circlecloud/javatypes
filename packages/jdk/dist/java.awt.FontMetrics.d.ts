declare namespace java {
    namespace awt {
        /**
         * The <code>FontMetrics</code> class defines a font metrics object, which
         * encapsulates information about the rendering of a particular font on a
         * particular screen.
         * <p>
         * <b>Note to subclassers</b>: Since many of these methods form closed,
         * mutually recursive loops, you must take care that you implement
         * at least one of the methods in each such loop to prevent
         * infinite recursion when your subclass is used.
         * In particular, the following is the minimal suggested set of methods
         * to override in order to ensure correctness and prevent infinite
         * recursion (though other subsets are equally feasible):
         * <ul>
         * <li>{@link #getAscent()}
         * <li>{@link #getLeading()}
         * <li>{@link #getMaxAdvance()}
         * <li>{@link #charWidth(char)}
         * <li>{@link #charsWidth(char[], int, int)}
         * </ul>
         * <p>
         * <img src="doc-files/FontMetrics-1.gif" alt="The letter 'p' showing its 'reference point'"
         * style="border:15px; float:right; margin: 7px 10px;">
         * Note that the implementations of these methods are
         * inefficient, so they are usually overridden with more efficient
         * toolkit-specific implementations.
         * <p>
         * When an application asks to place a character at the position
         * (<i>x</i>,&nbsp;<i>y</i>), the character is placed so that its
         * reference point (shown as the dot in the accompanying image) is
         * put at that position. The reference point specifies a horizontal
         * line called the <i>baseline</i> of the character. In normal
         * printing, the baselines of characters should align.
         * <p>
         * In addition, every character in a font has an <i>ascent</i>, a
         * <i>descent</i>, and an <i>advance width</i>. The ascent is the
         * amount by which the character ascends above the baseline. The
         * descent is the amount by which the character descends below the
         * baseline. The advance width indicates the position at which AWT
         * should place the next character.
         * <p>
         * An array of characters or a string can also have an ascent, a
         * descent, and an advance width. The ascent of the array is the
         * maximum ascent of any character in the array. The descent is the
         * maximum descent of any character in the array. The advance width
         * is the sum of the advance widths of each of the characters in the
         * character array.  The advance of a <code>String</code> is the
         * distance along the baseline of the <code>String</code>.  This
         * distance is the width that should be used for centering or
         * right-aligning the <code>String</code>.
         * <p>Note that the advance of a <code>String</code> is not necessarily
         * the sum of the advances of its characters measured in isolation
         * because the width of a character can vary depending on its context.
         * For example, in Arabic text, the shape of a character can change
         * in order to connect to other characters.  Also, in some scripts,
         * certain character sequences can be represented by a single shape,
         * called a <em>ligature</em>.  Measuring characters individually does
         * not account for these transformations.
         * <p>Font metrics are baseline-relative, meaning that they are
         * generally independent of the rotation applied to the font (modulo
         * possible grid hinting effects).  See {@link java.awt.Font Font}.
         * @author Jim Graham
         * @see java.awt.Font
         * @since JDK1.0
         */
        // @ts-ignore
        class FontMetrics extends java.lang.Object implements java.io.Serializable {
            /**
             * Creates a new <code>FontMetrics</code> object for finding out
             * height and width information about the specified <code>Font</code>
             * and specific character glyphs in that <code>Font</code>.
             * @param font the <code>Font</code>
             * @see java.awt.Font
             */
            // @ts-ignore
            constructor(font: java.awt.Font)
            /**
             * The actual {@link Font} from which the font metrics are
             * created.
             * This cannot be null.
             * @serial 
             * @see #getFont()
             */
            // @ts-ignore
            font: java.awt.Font
            /**
             * Gets the <code>Font</code> described by this
             * <code>FontMetrics</code> object.
             * @return the <code>Font</code> described by this
             *  <code>FontMetrics</code> object.
             */
            // @ts-ignore
            getFont(): java.awt.Font
            /**
             * Gets the <code>FontRenderContext</code> used by this
             * <code>FontMetrics</code> object to measure text.
             * <p>
             * Note that methods in this class which take a <code>Graphics</code>
             * parameter measure text using the <code>FontRenderContext</code>
             * of that <code>Graphics</code> object, and not this
             * <code>FontRenderContext</code>
             * @return the <code>FontRenderContext</code> used by this
             *  <code>FontMetrics</code> object.
             * @since 1.6
             */
            // @ts-ignore
            getFontRenderContext(): java.awt.font.FontRenderContext
            /**
             * Determines the <em>standard leading</em> of the
             * <code>Font</code> described by this <code>FontMetrics</code>
             * object.  The standard leading, or
             * interline spacing, is the logical amount of space to be reserved
             * between the descent of one line of text and the ascent of the next
             * line. The height metric is calculated to include this extra space.
             * @return the standard leading of the <code>Font</code>.
             * @see #getHeight()
             * @see #getAscent()
             * @see #getDescent()
             */
            // @ts-ignore
            getLeading(): int
            /**
             * Determines the <em>font ascent</em> of the <code>Font</code>
             * described by this <code>FontMetrics</code> object. The font ascent
             * is the distance from the font's baseline to the top of most
             * alphanumeric characters. Some characters in the <code>Font</code>
             * might extend above the font ascent line.
             * @return the font ascent of the <code>Font</code>.
             * @see #getMaxAscent()
             */
            // @ts-ignore
            getAscent(): int
            /**
             * Determines the <em>font descent</em> of the <code>Font</code>
             * described by this
             * <code>FontMetrics</code> object. The font descent is the distance
             * from the font's baseline to the bottom of most alphanumeric
             * characters with descenders. Some characters in the
             * <code>Font</code> might extend
             * below the font descent line.
             * @return the font descent of the <code>Font</code>.
             * @see #getMaxDescent()
             */
            // @ts-ignore
            getDescent(): int
            /**
             * Gets the standard height of a line of text in this font.  This
             * is the distance between the baseline of adjacent lines of text.
             * It is the sum of the leading + ascent + descent. Due to rounding
             * this may not be the same as getAscent() + getDescent() + getLeading().
             * There is no guarantee that lines of text spaced at this distance are
             * disjoint; such lines may overlap if some characters overshoot
             * either the standard ascent or the standard descent metric.
             * @return the standard height of the font.
             * @see #getLeading()
             * @see #getAscent()
             * @see #getDescent()
             */
            // @ts-ignore
            getHeight(): int
            /**
             * Determines the maximum ascent of the <code>Font</code>
             * described by this <code>FontMetrics</code> object.  No character
             * extends further above the font's baseline than this height.
             * @return the maximum ascent of any character in the
             *  <code>Font</code>.
             * @see #getAscent()
             */
            // @ts-ignore
            getMaxAscent(): int
            /**
             * Determines the maximum descent of the <code>Font</code>
             * described by this <code>FontMetrics</code> object.  No character
             * extends further below the font's baseline than this height.
             * @return the maximum descent of any character in the
             *  <code>Font</code>.
             * @see #getDescent()
             */
            // @ts-ignore
            getMaxDescent(): int
            /**
             * For backward compatibility only.
             * @return the maximum descent of any character in the
             *  <code>Font</code>.
             * @see #getMaxDescent()
             * @deprecated As of JDK version 1.1.1,
             *  replaced by <code>getMaxDescent()</code>.
             */
            // @ts-ignore
            getMaxDecent(): int
            /**
             * Gets the maximum advance width of any character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code> is
             * not necessarily the sum of the advances of its characters.
             * @return the maximum advance width of any character
             *             in the <code>Font</code>, or <code>-1</code> if the
             *             maximum advance width is not known.
             */
            // @ts-ignore
            getMaxAdvance(): int
            /**
             * Returns the advance width of the specified character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             * <p>This method doesn't validate the specified character to be a
             * valid Unicode code point. The caller must validate the
             * character value using {@link
             * java.lang.Character#isValidCodePoint(int)
             * Character.isValidCodePoint} if necessary.
             * @param codePoint the character (Unicode code point) to be measured
             * @return the advance width of the specified character
             *             in the <code>Font</code> described by this
             *             <code>FontMetrics</code> object.
             * @see #charsWidth(char[], int, int)
             * @see #stringWidth(String)
             */
            // @ts-ignore
            charWidth(codePoint: number /*int*/): int
            /**
             * Returns the advance width of the specified character in this
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             * <p><b>Note:</b> This method cannot handle <a
             * href="../lang/Character.html#supplementary"> supplementary
             * characters</a>. To support all Unicode characters, including
             * supplementary characters, use the {@link #charWidth(int)} method.
             * @param ch the character to be measured
             * @return the advance width of the specified character
             *                   in the <code>Font</code> described by this
             *                   <code>FontMetrics</code> object.
             * @see #charsWidth(char[], int, int)
             * @see #stringWidth(String)
             */
            // @ts-ignore
            charWidth(ch: string): int
            /**
             * Returns the total advance width for showing the specified
             * <code>String</code> in this <code>Font</code>.  The advance
             * is the distance from the leftmost point to the rightmost point
             * on the string's baseline.
             * <p>
             * Note that the advance of a <code>String</code> is
             * not necessarily the sum of the advances of its characters.
             * @param str the <code>String</code> to be measured
             * @return the advance width of the specified <code>String</code>
             *                   in the <code>Font</code> described by this
             *                   <code>FontMetrics</code>.
             * @throws NullPointerException if str is null.
             * @see #bytesWidth(byte[], int, int)
             * @see #charsWidth(char[], int, int)
             * @see #getStringBounds(String, Graphics)
             */
            // @ts-ignore
            stringWidth(str: string): int
            /**
             * Returns the total advance width for showing the specified array
             * of characters in this <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code>
             * is not necessarily the sum of the advances of its characters.
             * This is equivalent to measuring a <code>String</code> of the
             * characters in the specified range.
             * @param data the array of characters to be measured
             * @param off the start offset of the characters in the array
             * @param len the number of characters to be measured from the array
             * @return the advance width of the subarray of the specified
             *                <code>char</code> array in the font described by
             *                this <code>FontMetrics</code> object.
             * @throws NullPointerException if <code>data</code> is null.
             * @throws IndexOutOfBoundsException if the <code>off</code>
             *             and <code>len</code> arguments index characters outside
             *             the bounds of the <code>data</code> array.
             * @see #charWidth(int)
             * @see #charWidth(char)
             * @see #bytesWidth(byte[], int, int)
             * @see #stringWidth(String)
             */
            // @ts-ignore
            charsWidth(data: string[], off: number /*int*/, len: number /*int*/): int
            /**
             * Returns the total advance width for showing the specified array
             * of bytes in this <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * string's baseline.  The advance of a <code>String</code>
             * is not necessarily the sum of the advances of its characters.
             * This is equivalent to measuring a <code>String</code> of the
             * characters in the specified range.
             * @param data the array of bytes to be measured
             * @param off the start offset of the bytes in the array
             * @param len the number of bytes to be measured from the array
             * @return the advance width of the subarray of the specified
             *                <code>byte</code> array in the <code>Font</code>
             *                   described by
             *                this <code>FontMetrics</code> object.
             * @throws NullPointerException if <code>data</code> is null.
             * @throws IndexOutOfBoundsException if the <code>off</code>
             *             and <code>len</code> arguments index bytes outside
             *             the bounds of the <code>data</code> array.
             * @see #charsWidth(char[], int, int)
             * @see #stringWidth(String)
             */
            // @ts-ignore
            bytesWidth(data: number /*byte*/[], off: number /*int*/, len: number /*int*/): int
            /**
             * Gets the advance widths of the first 256 characters in the
             * <code>Font</code>.  The advance is the
             * distance from the leftmost point to the rightmost point on the
             * character's baseline.  Note that the advance of a
             * <code>String</code> is not necessarily the sum of the advances
             * of its characters.
             * @return an array storing the advance widths of the
             *                  characters in the <code>Font</code>
             *                  described by this <code>FontMetrics</code> object.
             */
            // @ts-ignore
            getWidths(): int[]
            /**
             * Checks to see if the <code>Font</code> has uniform line metrics.  A
             * composite font may consist of several different fonts to cover
             * various character sets.  In such cases, the
             * <code>FontLineMetrics</code> objects are not uniform.
             * Different fonts may have a different ascent, descent, metrics and
             * so on.  This information is sometimes necessary for line
             * measuring and line breaking.
             * @return <code>true</code> if the font has uniform line metrics;
             *  <code>false</code> otherwise.
             * @see java.awt.Font#hasUniformLineMetrics()
             */
            // @ts-ignore
            hasUniformLineMetrics(): boolean
            /**
             * Returns the {@link LineMetrics} object for the specified
             * <code>String</code> in the specified {@link Graphics} context.
             * @param str the specified <code>String</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>LineMetrics</code> object created with the
             *  specified <code>String</code> and <code>Graphics</code> context.
             * @see java.awt.Font#getLineMetrics(String, FontRenderContext)
             */
            // @ts-ignore
            getLineMetrics(str: string, context: java.awt.Graphics): java.awt.font.LineMetrics
            /**
             * Returns the {@link LineMetrics} object for the specified
             * <code>String</code> in the specified {@link Graphics} context.
             * @param str the specified <code>String</code>
             * @param beginIndex the initial offset of <code>str</code>
             * @param limit the end offset of <code>str</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>LineMetrics</code> object created with the
             *  specified <code>String</code> and <code>Graphics</code> context.
             * @see java.awt.Font#getLineMetrics(String, int, int, FontRenderContext)
             */
            // @ts-ignore
            getLineMetrics(str: string, beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.font.LineMetrics
            /**
             * Returns the {@link LineMetrics} object for the specified
             * character array in the specified {@link Graphics} context.
             * @param chars the specified character array
             * @param beginIndex the initial offset of <code>chars</code>
             * @param limit the end offset of <code>chars</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>LineMetrics</code> object created with the
             *  specified character array and <code>Graphics</code> context.
             * @see java.awt.Font#getLineMetrics(char[], int, int, FontRenderContext)
             */
            // @ts-ignore
            getLineMetrics(chars: string[], beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.font.LineMetrics
            /**
             * Returns the {@link LineMetrics} object for the specified
             * {@link CharacterIterator} in the specified {@link Graphics}
             * context.
             * @param ci the specified <code>CharacterIterator</code>
             * @param beginIndex the initial offset in <code>ci</code>
             * @param limit the end index of <code>ci</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>LineMetrics</code> object created with the
             *  specified arguments.
             * @see java.awt.Font#getLineMetrics(CharacterIterator, int, int, FontRenderContext)
             */
            // @ts-ignore
            getLineMetrics(ci: java.text.CharacterIterator, beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.font.LineMetrics
            /**
             * Returns the bounds of the specified <code>String</code> in the
             * specified <code>Graphics</code> context.  The bounds is used
             * to layout the <code>String</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             * @param str the specified <code>String</code>
             * @param context the specified <code>Graphics</code> context
             * @return a {#link Rectangle2D} that is the bounding box of the
             *  specified <code>String</code> in the specified
             *  <code>Graphics</code> context.
             * @see java.awt.Font#getStringBounds(String, FontRenderContext)
             */
            // @ts-ignore
            getStringBounds(str: string, context: java.awt.Graphics): java.awt.geom.Rectangle2D
            /**
             * Returns the bounds of the specified <code>String</code> in the
             * specified <code>Graphics</code> context.  The bounds is used
             * to layout the <code>String</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             * @param str the specified <code>String</code>
             * @param beginIndex the offset of the beginning of <code>str</code>
             * @param limit the end offset of <code>str</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>Rectangle2D</code> that is the bounding box of the
             *  specified <code>String</code> in the specified
             *  <code>Graphics</code> context.
             * @see java.awt.Font#getStringBounds(String, int, int, FontRenderContext)
             */
            // @ts-ignore
            getStringBounds(str: string, beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.geom.Rectangle2D
            /**
             * Returns the bounds of the specified array of characters
             * in the specified <code>Graphics</code> context.
             * The bounds is used to layout the <code>String</code>
             * created with the specified array of characters,
             * <code>beginIndex</code> and <code>limit</code>.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             * @param chars an array of characters
             * @param beginIndex the initial offset of the array of
             *  characters
             * @param limit the end offset of the array of characters
             * @param context the specified <code>Graphics</code> context
             * @return a <code>Rectangle2D</code> that is the bounding box of the
             *  specified character array in the specified
             *  <code>Graphics</code> context.
             * @see java.awt.Font#getStringBounds(char[], int, int, FontRenderContext)
             */
            // @ts-ignore
            getStringBounds(chars: string[], beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.geom.Rectangle2D
            /**
             * Returns the bounds of the characters indexed in the specified
             * <code>CharacterIterator</code> in the
             * specified <code>Graphics</code> context.
             * <p>Note: The returned bounds is in baseline-relative coordinates
             * (see {@link java.awt.FontMetrics class notes}).
             * @param ci the specified <code>CharacterIterator</code>
             * @param beginIndex the initial offset in <code>ci</code>
             * @param limit the end index of <code>ci</code>
             * @param context the specified <code>Graphics</code> context
             * @return a <code>Rectangle2D</code> that is the bounding box of the
             *  characters indexed in the specified <code>CharacterIterator</code>
             *  in the specified <code>Graphics</code> context.
             * @see java.awt.Font#getStringBounds(CharacterIterator, int, int, FontRenderContext)
             */
            // @ts-ignore
            getStringBounds(ci: java.text.CharacterIterator, beginIndex: number /*int*/, limit: number /*int*/, context: java.awt.Graphics): java.awt.geom.Rectangle2D
            /**
             * Returns the bounds for the character with the maximum bounds
             * in the specified <code>Graphics</code> context.
             * @param context the specified <code>Graphics</code> context
             * @return a <code>Rectangle2D</code> that is the
             *  bounding box for the character with the maximum bounds.
             * @see java.awt.Font#getMaxCharBounds(FontRenderContext)
             */
            // @ts-ignore
            getMaxCharBounds(context: java.awt.Graphics): java.awt.geom.Rectangle2D
            /**
             * Returns a representation of this <code>FontMetrics</code>
             * object's values as a <code>String</code>.
             * @return a <code>String</code> representation of this
             *  <code>FontMetrics</code> object.
             * @since JDK1.0.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
