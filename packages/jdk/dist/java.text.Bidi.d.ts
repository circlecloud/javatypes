declare namespace java {
    namespace text {
        /**
         * This class implements the Unicode Bidirectional Algorithm.
         * <p>
         * A Bidi object provides information on the bidirectional reordering of the text
         * used to create it.  This is required, for example, to properly display Arabic
         * or Hebrew text.  These languages are inherently mixed directional, as they order
         * numbers from left-to-right while ordering most other text from right-to-left.
         * <p>
         * Once created, a Bidi object can be queried to see if the text it represents is
         * all left-to-right or all right-to-left.  Such objects are very lightweight and
         * this text is relatively easy to process.
         * <p>
         * If there are multiple runs of text, information about the runs can be accessed
         * by indexing to get the start, limit, and level of a run.  The level represents
         * both the direction and the 'nesting level' of a directional run.  Odd levels
         * are right-to-left, while even levels are left-to-right.  So for example level
         * 0 represents left-to-right text, while level 1 represents right-to-left text, and
         * level 2 represents left-to-right text embedded in a right-to-left run.
         * @since 1.4
         */
        // @ts-ignore
        class Bidi extends java.lang.Object {
            /**
             * Create Bidi from the given paragraph of text and base direction.
             * @param paragraph a paragraph of text
             * @param flags a collection of flags that control the algorithm.  The
             *  algorithm understands the flags DIRECTION_LEFT_TO_RIGHT, DIRECTION_RIGHT_TO_LEFT,
             *  DIRECTION_DEFAULT_LEFT_TO_RIGHT, and DIRECTION_DEFAULT_RIGHT_TO_LEFT.
             *  Other values are reserved.
             */
            // @ts-ignore
            constructor(paragraph: java.lang.String | string, flags: number /*int*/)
            /**
             * Create Bidi from the given paragraph of text.
             * <p>
             * The RUN_DIRECTION attribute in the text, if present, determines the base
             * direction (left-to-right or right-to-left).  If not present, the base
             * direction is computes using the Unicode Bidirectional Algorithm, defaulting to left-to-right
             * if there are no strong directional characters in the text.  This attribute, if
             * present, must be applied to all the text in the paragraph.
             * <p>
             * The BIDI_EMBEDDING attribute in the text, if present, represents embedding level
             * information.  Negative values from -1 to -62 indicate overrides at the absolute value
             * of the level.  Positive values from 1 to 62 indicate embeddings.  Where values are
             * zero or not defined, the base embedding level as determined by the base direction
             * is assumed.
             * <p>
             * The NUMERIC_SHAPING attribute in the text, if present, converts European digits to
             * other decimal digits before running the bidi algorithm.  This attribute, if present,
             * must be applied to all the text in the paragraph.
             * @param paragraph a paragraph of text with optional character and paragraph attribute information
             * @see java.awt.font.TextAttribute#BIDI_EMBEDDING
             * @see java.awt.font.TextAttribute#NUMERIC_SHAPING
             * @see java.awt.font.TextAttribute#RUN_DIRECTION
             */
            // @ts-ignore
            constructor(paragraph: java.text.AttributedCharacterIterator)
            /**
             * Create Bidi from the given text, embedding, and direction information.
             * The embeddings array may be null.  If present, the values represent embedding level
             * information.  Negative values from -1 to -61 indicate overrides at the absolute value
             * of the level.  Positive values from 1 to 61 indicate embeddings.  Where values are
             * zero, the base embedding level as determined by the base direction is assumed.
             * @param text an array containing the paragraph of text to process.
             * @param textStart the index into the text array of the start of the paragraph.
             * @param embeddings an array containing embedding values for each character in the paragraph.
             *  This can be null, in which case it is assumed that there is no external embedding information.
             * @param embStart the index into the embedding array of the start of the paragraph.
             * @param paragraphLength the length of the paragraph in the text and embeddings arrays.
             * @param flags a collection of flags that control the algorithm.  The
             *  algorithm understands the flags DIRECTION_LEFT_TO_RIGHT, DIRECTION_RIGHT_TO_LEFT,
             *  DIRECTION_DEFAULT_LEFT_TO_RIGHT, and DIRECTION_DEFAULT_RIGHT_TO_LEFT.
             *  Other values are reserved.
             */
            // @ts-ignore
            constructor(text: string[], textStart: number /*int*/, embeddings: number /*byte*/[], embStart: number /*int*/, paragraphLength: number /*int*/, flags: number /*int*/)
            /**
             * Constant indicating base direction is left-to-right.
             */
            // @ts-ignore
            public static readonly DIRECTION_LEFT_TO_RIGHT: number /*int*/
            /**
             * Constant indicating base direction is right-to-left.
             */
            // @ts-ignore
            public static readonly DIRECTION_RIGHT_TO_LEFT: number /*int*/
            /**
             * Constant indicating that the base direction depends on the first strong
             * directional character in the text according to the Unicode
             * Bidirectional Algorithm.  If no strong directional character is present,
             * the base direction is left-to-right.
             */
            // @ts-ignore
            public static readonly DIRECTION_DEFAULT_LEFT_TO_RIGHT: number /*int*/
            /**
             * Constant indicating that the base direction depends on the first strong
             * directional character in the text according to the Unicode
             * Bidirectional Algorithm.  If no strong directional character is present,
             * the base direction is right-to-left.
             */
            // @ts-ignore
            public static readonly DIRECTION_DEFAULT_RIGHT_TO_LEFT: number /*int*/
            /**
             * Create a Bidi object representing the bidi information on a line of text within
             * the paragraph represented by the current Bidi.  This call is not required if the
             * entire paragraph fits on one line.
             * @param lineStart the offset from the start of the paragraph to the start of the line.
             * @param lineLimit the offset from the start of the paragraph to the limit of the line.
             * @return a {#code Bidi} object
             */
            // @ts-ignore
            public createLineBidi(lineStart: number /*int*/, lineLimit: number /*int*/): java.text.Bidi
            /**
             * Return true if the line is not left-to-right or right-to-left.  This means it either has mixed runs of left-to-right
             * and right-to-left text, or the base direction differs from the direction of the only run of text.
             * @return true if the line is not left-to-right or right-to-left.
             */
            // @ts-ignore
            public isMixed(): boolean
            /**
             * Return true if the line is all left-to-right text and the base direction is left-to-right.
             * @return true if the line is all left-to-right text and the base direction is left-to-right
             */
            // @ts-ignore
            public isLeftToRight(): boolean
            /**
             * Return true if the line is all right-to-left text, and the base direction is right-to-left.
             * @return true if the line is all right-to-left text, and the base direction is right-to-left
             */
            // @ts-ignore
            public isRightToLeft(): boolean
            /**
             * Return the length of text in the line.
             * @return the length of text in the line
             */
            // @ts-ignore
            public getLength(): number /*int*/
            /**
             * Return true if the base direction is left-to-right.
             * @return true if the base direction is left-to-right
             */
            // @ts-ignore
            public baseIsLeftToRight(): boolean
            /**
             * Return the base level (0 if left-to-right, 1 if right-to-left).
             * @return the base level
             */
            // @ts-ignore
            public getBaseLevel(): number /*int*/
            /**
             * Return the resolved level of the character at offset.  If offset is
             * {@literal <} 0 or &ge; the length of the line, return the base direction
             * level.
             * @param offset the index of the character for which to return the level
             * @return the resolved level of the character at offset
             */
            // @ts-ignore
            public getLevelAt(offset: number /*int*/): number /*int*/
            /**
             * Return the number of level runs.
             * @return the number of level runs
             */
            // @ts-ignore
            public getRunCount(): number /*int*/
            /**
             * Return the level of the nth logical run in this line.
             * @param run the index of the run, between 0 and <code>getRunCount()</code>
             * @return the level of the run
             */
            // @ts-ignore
            public getRunLevel(run: number /*int*/): number /*int*/
            /**
             * Return the index of the character at the start of the nth logical run in this line, as
             * an offset from the start of the line.
             * @param run the index of the run, between 0 and <code>getRunCount()</code>
             * @return the start of the run
             */
            // @ts-ignore
            public getRunStart(run: number /*int*/): number /*int*/
            /**
             * Return the index of the character past the end of the nth logical run in this line, as
             * an offset from the start of the line.  For example, this will return the length
             * of the line for the last run on the line.
             * @param run the index of the run, between 0 and <code>getRunCount()</code>
             * @return limit the limit of the run
             */
            // @ts-ignore
            public getRunLimit(run: number /*int*/): number /*int*/
            /**
             * Return true if the specified text requires bidi analysis.  If this returns false,
             * the text will display left-to-right.  Clients can then avoid constructing a Bidi object.
             * Text in the Arabic Presentation Forms area of Unicode is presumed to already be shaped
             * and ordered for display, and so will not cause this function to return true.
             * @param text the text containing the characters to test
             * @param start the start of the range of characters to test
             * @param limit the limit of the range of characters to test
             * @return true if the range of characters requires bidi analysis
             */
            // @ts-ignore
            public static requiresBidi(text: string[], start: number /*int*/, limit: number /*int*/): boolean
            /**
             * Reorder the objects in the array into visual order based on their levels.
             * This is a utility function to use when you have a collection of objects
             * representing runs of text in logical order, each run containing text
             * at a single level.  The elements at <code>index</code> from
             * <code>objectStart</code> up to <code>objectStart + count</code>
             * in the objects array will be reordered into visual order assuming
             * each run of text has the level indicated by the corresponding element
             * in the levels array (at <code>index - objectStart + levelStart</code>).
             * @param levels an array representing the bidi level of each object
             * @param levelStart the start position in the levels array
             * @param objects the array of objects to be reordered into visual order
             * @param objectStart the start position in the objects array
             * @param count the number of objects to reorder
             */
            // @ts-ignore
            public static reorderVisually(levels: number /*byte*/[], levelStart: number /*int*/, objects: java.lang.Object[] | any[], objectStart: number /*int*/, count: number /*int*/): void
            /**
             * Display the bidi internal state, used in debugging.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
