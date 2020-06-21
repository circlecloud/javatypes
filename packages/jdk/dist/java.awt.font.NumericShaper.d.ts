declare namespace java {
    namespace awt {
        namespace font {
            /**
             * The <code>NumericShaper</code> class is used to convert Latin-1 (European)
             * digits to other Unicode decimal digits.  Users of this class will
             * primarily be people who wish to present data using
             * national digit shapes, but find it more convenient to represent the
             * data internally using Latin-1 (European) digits.  This does not
             * interpret the deprecated numeric shape selector character (U+206E).
             * <p>
             * Instances of <code>NumericShaper</code> are typically applied
             * as attributes to text with the
             * {@link TextAttribute#NUMERIC_SHAPING NUMERIC_SHAPING} attribute
             * of the <code>TextAttribute</code> class.
             * For example, this code snippet causes a <code>TextLayout</code> to
             * shape European digits to Arabic in an Arabic context:<br>
             * <blockquote><pre>
             * Map map = new HashMap();
             * map.put(TextAttribute.NUMERIC_SHAPING,
             * NumericShaper.getContextualShaper(NumericShaper.ARABIC));
             * FontRenderContext frc = ...;
             * TextLayout layout = new TextLayout(text, map, frc);
             * layout.draw(g2d, x, y);
             * </pre></blockquote>
             * <br>
             * It is also possible to perform numeric shaping explicitly using instances
             * of <code>NumericShaper</code>, as this code snippet demonstrates:<br>
             * <blockquote><pre>
             * char[] text = ...;
             * // shape all EUROPEAN digits (except zero) to ARABIC digits
             * NumericShaper shaper = NumericShaper.getShaper(NumericShaper.ARABIC);
             * shaper.shape(text, start, count);
             * // shape European digits to ARABIC digits if preceding text is Arabic, or
             * // shape European digits to TAMIL digits if preceding text is Tamil, or
             * // leave European digits alone if there is no preceding text, or
             * // preceding text is neither Arabic nor Tamil
             * NumericShaper shaper =
             * NumericShaper.getContextualShaper(NumericShaper.ARABIC |
             * NumericShaper.TAMIL,
             * NumericShaper.EUROPEAN);
             * shaper.shape(text, start, count);
             * </pre></blockquote>
             * <p><b>Bit mask- and enum-based Unicode ranges</b></p>
             * <p>This class supports two different programming interfaces to
             * represent Unicode ranges for script-specific digits: bit
             * mask-based ones, such as {@link #ARABIC NumericShaper.ARABIC}, and
             * enum-based ones, such as {@link NumericShaper.Range#ARABIC}.
             * Multiple ranges can be specified by ORing bit mask-based constants,
             * such as:
             * <blockquote><pre>
             * NumericShaper.ARABIC | NumericShaper.TAMIL
             * </pre></blockquote>
             * or creating a {@code Set} with the {@link NumericShaper.Range}
             * constants, such as:
             * <blockquote><pre>
             * EnumSet.of(NumericShaper.Scirpt.ARABIC, NumericShaper.Range.TAMIL)
             * </pre></blockquote>
             * The enum-based ranges are a super set of the bit mask-based ones.
             * <p>If the two interfaces are mixed (including serialization),
             * Unicode range values are mapped to their counterparts where such
             * mapping is possible, such as {@code NumericShaper.Range.ARABIC}
             * from/to {@code NumericShaper.ARABIC}.  If any unmappable range
             * values are specified, such as {@code NumericShaper.Range.BALINESE},
             * those ranges are ignored.
             * <p><b>Decimal Digits Precedence</b></p>
             * <p>A Unicode range may have more than one set of decimal digits. If
             * multiple decimal digits sets are specified for the same Unicode
             * range, one of the sets will take precedence as follows.
             * <table border=1 cellspacing=3 cellpadding=0 summary="NumericShaper constants precedence.">
             * <tr>
             * <th class="TableHeadingColor">Unicode Range</th>
             * <th class="TableHeadingColor"><code>NumericShaper</code> Constants</th>
             * <th class="TableHeadingColor">Precedence</th>
             * </tr>
             * <tr>
             * <td rowspan="2">Arabic</td>
             * <td>{@link NumericShaper#ARABIC NumericShaper.ARABIC}<br>
             * {@link NumericShaper#EASTERN_ARABIC NumericShaper.EASTERN_ARABIC}</td>
             * <td>{@link NumericShaper#EASTERN_ARABIC NumericShaper.EASTERN_ARABIC}</td>
             * </tr>
             * <tr>
             * <td>{@link NumericShaper.Range#ARABIC}<br>
             * {@link NumericShaper.Range#EASTERN_ARABIC}</td>
             * <td>{@link NumericShaper.Range#EASTERN_ARABIC}</td>
             * </tr>
             * <tr>
             * <td>Tai Tham</td>
             * <td>{@link NumericShaper.Range#TAI_THAM_HORA}<br>
             * {@link NumericShaper.Range#TAI_THAM_THAM}</td>
             * <td>{@link NumericShaper.Range#TAI_THAM_THAM}</td>
             * </tr>
             * </table>
             * @since 1.4
             */
            // @ts-ignore
            class NumericShaper extends java.lang.Object implements java.io.Serializable {
                /**
                 * Identifies the Latin-1 (European) and extended range, and
                 * Latin-1 (European) decimal base.
                 */
                // @ts-ignore
                public static readonly EUROPEAN: number /*int*/
                /**
                 * Identifies the ARABIC range and decimal base.
                 */
                // @ts-ignore
                public static readonly ARABIC: number /*int*/
                /**
                 * Identifies the ARABIC range and ARABIC_EXTENDED decimal base.
                 */
                // @ts-ignore
                public static readonly EASTERN_ARABIC: number /*int*/
                /**
                 * Identifies the DEVANAGARI range and decimal base.
                 */
                // @ts-ignore
                public static readonly DEVANAGARI: number /*int*/
                /**
                 * Identifies the BENGALI range and decimal base.
                 */
                // @ts-ignore
                public static readonly BENGALI: number /*int*/
                /**
                 * Identifies the GURMUKHI range and decimal base.
                 */
                // @ts-ignore
                public static readonly GURMUKHI: number /*int*/
                /**
                 * Identifies the GUJARATI range and decimal base.
                 */
                // @ts-ignore
                public static readonly GUJARATI: number /*int*/
                /**
                 * Identifies the ORIYA range and decimal base.
                 */
                // @ts-ignore
                public static readonly ORIYA: number /*int*/
                /**
                 * Identifies the TAMIL range and decimal base.
                 */
                // @ts-ignore
                public static readonly TAMIL: number /*int*/
                /**
                 * Identifies the TELUGU range and decimal base.
                 */
                // @ts-ignore
                public static readonly TELUGU: number /*int*/
                /**
                 * Identifies the KANNADA range and decimal base.
                 */
                // @ts-ignore
                public static readonly KANNADA: number /*int*/
                /**
                 * Identifies the MALAYALAM range and decimal base.
                 */
                // @ts-ignore
                public static readonly MALAYALAM: number /*int*/
                /**
                 * Identifies the THAI range and decimal base.
                 */
                // @ts-ignore
                public static readonly THAI: number /*int*/
                /**
                 * Identifies the LAO range and decimal base.
                 */
                // @ts-ignore
                public static readonly LAO: number /*int*/
                /**
                 * Identifies the TIBETAN range and decimal base.
                 */
                // @ts-ignore
                public static readonly TIBETAN: number /*int*/
                /**
                 * Identifies the MYANMAR range and decimal base.
                 */
                // @ts-ignore
                public static readonly MYANMAR: number /*int*/
                /**
                 * Identifies the ETHIOPIC range and decimal base.
                 */
                // @ts-ignore
                public static readonly ETHIOPIC: number /*int*/
                /**
                 * Identifies the KHMER range and decimal base.
                 */
                // @ts-ignore
                public static readonly KHMER: number /*int*/
                /**
                 * Identifies the MONGOLIAN range and decimal base.
                 */
                // @ts-ignore
                public static readonly MONGOLIAN: number /*int*/
                /**
                 * Identifies all ranges, for full contextual shaping.
                 * <p>This constant specifies all of the bit mask-based
                 * ranges. Use {@code EmunSet.allOf(NumericShaper.Range.class)} to
                 * specify all of the enum-based ranges.
                 */
                // @ts-ignore
                public static readonly ALL_RANGES: number /*int*/
                /**
                 * Returns a shaper for the provided unicode range.  All
                 * Latin-1 (EUROPEAN) digits are converted
                 * to the corresponding decimal unicode digits.
                 * @param singleRange the specified Unicode range
                 * @return a non-contextual numeric shaper
                 * @throws IllegalArgumentException if the range is not a single range
                 */
                // @ts-ignore
                public static getShaper(singleRange: number /*int*/): java.awt.font.NumericShaper
                /**
                 * Returns a shaper for the provided Unicode
                 * range. All Latin-1 (EUROPEAN) digits are converted to the
                 * corresponding decimal digits of the specified Unicode range.
                 * @param singleRange the Unicode range given by a {#link
                 *                     NumericShaper.Range} constant.
                 * @return a non-contextual {#code NumericShaper}.
                 * @throws NullPointerException if {#code singleRange} is {@code null}
                 * @since 1.7
                 */
                // @ts-ignore
                public static getShaper(singleRange: java.awt.font.NumericShaper.Range): java.awt.font.NumericShaper
                /**
                 * Returns a contextual shaper for the provided unicode range(s).
                 * Latin-1 (EUROPEAN) digits are converted to the decimal digits
                 * corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges.  Multiple ranges are
                 * represented by or-ing the values together, such as,
                 * <code>NumericShaper.ARABIC | NumericShaper.THAI</code>.  The
                 * shaper assumes EUROPEAN as the starting context, that is, if
                 * EUROPEAN digits are encountered before any strong directional
                 * text in the string, the context is presumed to be EUROPEAN, and
                 * so the digits will not shape.
                 * @param ranges the specified Unicode ranges
                 * @return a shaper for the specified ranges
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: number /*int*/): java.awt.font.NumericShaper
                /**
                 * Returns a contextual shaper for the provided Unicode
                 * range(s). The Latin-1 (EUROPEAN) digits are converted to the
                 * decimal digits corresponding to the range of the preceding
                 * text, if the range is one of the provided ranges.
                 * <p>The shaper assumes EUROPEAN as the starting context, that
                 * is, if EUROPEAN digits are encountered before any strong
                 * directional text in the string, the context is presumed to be
                 * EUROPEAN, and so the digits will not shape.
                 * @param ranges the specified Unicode ranges
                 * @return a contextual shaper for the specified ranges
                 * @throws NullPointerException if {#code ranges} is {@code null}.
                 * @since 1.7
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: java.util.Set<java.awt.font.NumericShaper.Range> | Array<java.awt.font.NumericShaper.Range>): java.awt.font.NumericShaper
                /**
                 * Returns a contextual shaper for the provided unicode range(s).
                 * Latin-1 (EUROPEAN) digits will be converted to the decimal digits
                 * corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges.  Multiple ranges are
                 * represented by or-ing the values together, for example,
                 * <code>NumericShaper.ARABIC | NumericShaper.THAI</code>.  The
                 * shaper uses defaultContext as the starting context.
                 * @param ranges the specified Unicode ranges
                 * @param defaultContext the starting context, such as
                 *  <code>NumericShaper.EUROPEAN</code>
                 * @return a shaper for the specified Unicode ranges.
                 * @throws IllegalArgumentException if the specified
                 *  <code>defaultContext</code> is not a single valid range.
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: number /*int*/, defaultContext: number /*int*/): java.awt.font.NumericShaper
                /**
                 * Returns a contextual shaper for the provided Unicode range(s).
                 * The Latin-1 (EUROPEAN) digits will be converted to the decimal
                 * digits corresponding to the range of the preceding text, if the
                 * range is one of the provided ranges. The shaper uses {@code
                 * defaultContext} as the starting context.
                 * @param ranges the specified Unicode ranges
                 * @param defaultContext the starting context, such as
                 *                        {#code NumericShaper.Range.EUROPEAN}
                 * @return a contextual shaper for the specified Unicode ranges.
                 * @throws NullPointerException
                 *          if {#code ranges} or {@code defaultContext} is {@code null}
                 * @since 1.7
                 */
                // @ts-ignore
                public static getContextualShaper(ranges: java.util.Set<java.awt.font.NumericShaper.Range> | Array<java.awt.font.NumericShaper.Range>, defaultContext: java.awt.font.NumericShaper.Range): java.awt.font.NumericShaper
                /**
                 * Converts the digits in the text that occur between start and
                 * start + count.
                 * @param text an array of characters to convert
                 * @param start the index into <code>text</code> to start
                 *         converting
                 * @param count the number of characters in <code>text</code>
                 *         to convert
                 * @throws IndexOutOfBoundsException if start or start + count is
                 *         out of bounds
                 * @throws NullPointerException if text is null
                 */
                // @ts-ignore
                public shape(text: string[], start: number /*int*/, count: number /*int*/): void
                /**
                 * Converts the digits in the text that occur between start and
                 * start + count, using the provided context.
                 * Context is ignored if the shaper is not a contextual shaper.
                 * @param text an array of characters
                 * @param start the index into <code>text</code> to start
                 *         converting
                 * @param count the number of characters in <code>text</code>
                 *         to convert
                 * @param context the context to which to convert the
                 *         characters, such as <code>NumericShaper.EUROPEAN</code>
                 * @throws IndexOutOfBoundsException if start or start + count is
                 *         out of bounds
                 * @throws NullPointerException if text is null
                 * @throws IllegalArgumentException if this is a contextual shaper
                 *  and the specified <code>context</code> is not a single valid
                 *  range.
                 */
                // @ts-ignore
                public shape(text: string[], start: number /*int*/, count: number /*int*/, context: number /*int*/): void
                /**
                 * Converts the digits in the text that occur between {@code
                 * start} and {@code start + count}, using the provided {@code
                 * context}. {@code Context} is ignored if the shaper is not a
                 * contextual shaper.
                 * @param text  a {#code char} array
                 * @param start the index into {#code text} to start converting
                 * @param count the number of {#code char}s in {@code text}
                 *               to convert
                 * @param context the context to which to convert the characters,
                 *                 such as {#code NumericShaper.Range.EUROPEAN}
                 * @throws IndexOutOfBoundsException
                 *          if {#code start} or {@code start + count} is out of bounds
                 * @throws NullPointerException
                 *          if {#code text} or {@code context} is null
                 * @since 1.7
                 */
                // @ts-ignore
                public shape(text: string[], start: number /*int*/, count: number /*int*/, context: java.awt.font.NumericShaper.Range): void
                /**
                 * Returns a <code>boolean</code> indicating whether or not
                 * this shaper shapes contextually.
                 * @return <code>true</code> if this shaper is contextual;
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                public isContextual(): boolean
                /**
                 * Returns an <code>int</code> that ORs together the values for
                 * all the ranges that will be shaped.
                 * <p>
                 * For example, to check if a shaper shapes to Arabic, you would use the
                 * following:
                 * <blockquote>
                 * {@code if ((shaper.getRanges() & shaper.ARABIC) != 0) &#123; ... }
                 * </blockquote>
                 * <p>Note that this method supports only the bit mask-based
                 * ranges. Call {@link #getRangeSet()} for the enum-based ranges.
                 * @return the values for all the ranges to be shaped.
                 */
                // @ts-ignore
                public getRanges(): number /*int*/
                /**
                 * Returns a {@code Set} representing all the Unicode ranges in
                 * this {@code NumericShaper} that will be shaped.
                 * @return all the Unicode ranges to be shaped.
                 * @since 1.7
                 */
                // @ts-ignore
                public getRangeSet(): Array<java.awt.font.NumericShaper.Range>
                /**
                 * Returns a hash code for this shaper.
                 * @return this shaper's hash code.
                 * @see java.lang.Object#hashCode
                 */
                // @ts-ignore
                public hashCode(): number /*int*/
                /**
                 * Returns {@code true} if the specified object is an instance of
                 * <code>NumericShaper</code> and shapes identically to this one,
                 * regardless of the range representations, the bit mask or the
                 * enum. For example, the following code produces {@code "true"}.
                 * <blockquote><pre>
                 * NumericShaper ns1 = NumericShaper.getShaper(NumericShaper.ARABIC);
                 * NumericShaper ns2 = NumericShaper.getShaper(NumericShaper.Range.ARABIC);
                 * System.out.println(ns1.equals(ns2));
                 * </pre></blockquote>
                 * @param o the specified object to compare to this
                 *           <code>NumericShaper</code>
                 * @return <code>true</code> if <code>o</code> is an instance
                 *          of <code>NumericShaper</code> and shapes in the same way;
                 *          <code>false</code> otherwise.
                 * @see java.lang.Object#equals(java.lang.Object)
                 */
                // @ts-ignore
                public equals(o: java.lang.Object | any): boolean
                /**
                 * Returns a <code>String</code> that describes this shaper. This method
                 * is used for debugging purposes only.
                 * @return a <code>String</code> describing this shaper.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
