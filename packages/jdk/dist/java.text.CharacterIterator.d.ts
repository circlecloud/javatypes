declare namespace java {
    namespace text {
        /**
         * This interface defines a protocol for bidirectional iteration over text.
         * The iterator iterates over a bounded sequence of characters.  Characters
         * are indexed with values beginning with the value returned by getBeginIndex() and
         * continuing through the value returned by getEndIndex()-1.
         * <p>
         * Iterators maintain a current character index, whose valid range is from
         * getBeginIndex() to getEndIndex(); the value getEndIndex() is included to allow
         * handling of zero-length text ranges and for historical reasons.
         * The current index can be retrieved by calling getIndex() and set directly
         * by calling setIndex(), first(), and last().
         * <p>
         * The methods previous() and next() are used for iteration. They return DONE if
         * they would move outside the range from getBeginIndex() to getEndIndex() -1,
         * signaling that the iterator has reached the end of the sequence. DONE is
         * also returned by other methods to indicate that the current index is
         * outside this range.
         * <P>Examples:<P>
         * Traverse the text from start to finish
         * <pre>{@code
         * public void traverseForward(CharacterIterator iter) {
         * for(char c = iter.first(); c != CharacterIterator.DONE; c = iter.next()) {
         * processChar(c);
         * }
         * }
         * }</pre>
         * Traverse the text backwards, from end to start
         * <pre>{@code
         * public void traverseBackward(CharacterIterator iter) {
         * for(char c = iter.last(); c != CharacterIterator.DONE; c = iter.previous()) {
         * processChar(c);
         * }
         * }
         * }</pre>
         * Traverse both forward and backward from a given position in the text.
         * Calls to notBoundary() in this example represents some
         * additional stopping criteria.
         * <pre>{@code
         * public void traverseOut(CharacterIterator iter, int pos) {
         * for (char c = iter.setIndex(pos);
         * c != CharacterIterator.DONE && notBoundary(c);
         * c = iter.next()) {
         * }
         * int end = iter.getIndex();
         * for (char c = iter.setIndex(pos);
         * c != CharacterIterator.DONE && notBoundary(c);
         * c = iter.previous()) {
         * }
         * int start = iter.getIndex();
         * processSection(start, end);
         * }
         * }</pre>
         * @see StringCharacterIterator
         * @see AttributedCharacterIterator
         */
        // @ts-ignore
        interface CharacterIterator extends java.lang.Cloneable {
            /**
             * Constant that is returned when the iterator has reached either the end
             * or the beginning of the text. The value is '\\uFFFF', the "not a
             * character" value which should not occur in any valid Unicode string.
             */
            // @ts-ignore
            
            /**
             * Sets the position to getBeginIndex() and returns the character at that
             * position.
             * @return the first character in the text, or DONE if the text is empty
             * @see #getBeginIndex()
             */
            // @ts-ignore
            first(): char
            /**
             * Sets the position to getEndIndex()-1 (getEndIndex() if the text is empty)
             * and returns the character at that position.
             * @return the last character in the text, or DONE if the text is empty
             * @see #getEndIndex()
             */
            // @ts-ignore
            last(): char
            /**
             * Gets the character at the current position (as returned by getIndex()).
             * @return the character at the current position or DONE if the current
             *  position is off the end of the text.
             * @see #getIndex()
             */
            // @ts-ignore
            current(): char
            /**
             * Increments the iterator's index by one and returns the character
             * at the new index.  If the resulting index is greater or equal
             * to getEndIndex(), the current index is reset to getEndIndex() and
             * a value of DONE is returned.
             * @return the character at the new position or DONE if the new
             *  position is off the end of the text range.
             */
            // @ts-ignore
            next(): char
            /**
             * Decrements the iterator's index by one and returns the character
             * at the new index. If the current index is getBeginIndex(), the index
             * remains at getBeginIndex() and a value of DONE is returned.
             * @return the character at the new position or DONE if the current
             *  position is equal to getBeginIndex().
             */
            // @ts-ignore
            previous(): char
            /**
             * Sets the position to the specified position in the text and returns that
             * character.
             * @param position the position within the text.  Valid values range from
             *  getBeginIndex() to getEndIndex().  An IllegalArgumentException is thrown
             *  if an invalid value is supplied.
             * @return the character at the specified position or DONE if the specified position is equal to getEndIndex()
             */
            // @ts-ignore
            setIndex(position: number /*int*/): char
            /**
             * Returns the start index of the text.
             * @return the index at which the text begins.
             */
            // @ts-ignore
            getBeginIndex(): int
            /**
             * Returns the end index of the text.  This index is the index of the first
             * character following the end of the text.
             * @return the index after the last character in the text
             */
            // @ts-ignore
            getEndIndex(): int
            /**
             * Returns the current index.
             * @return the current index.
             */
            // @ts-ignore
            getIndex(): int
            /**
             * Create a copy of this iterator
             * @return A copy of this
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}
