declare namespace java {
    namespace text {
        /**
         * The <code>CollationElementIterator</code> class is used as an iterator
         * to walk through each character of an international string. Use the iterator
         * to return the ordering priority of the positioned character. The ordering
         * priority of a character, which we refer to as a key, defines how a character
         * is collated in the given collation object.
         * <p>
         * For example, consider the following in Spanish:
         * <blockquote>
         * <pre>
         * "ca" &rarr; the first key is key('c') and second key is key('a').
         * "cha" &rarr; the first key is key('ch') and second key is key('a').
         * </pre>
         * </blockquote>
         * And in German,
         * <blockquote>
         * <pre>
         * "äb" &rarr; the first key is key('a'), the second key is key('e'), and
         * the third key is key('b').
         * </pre>
         * </blockquote>
         * The key of a character is an integer composed of primary order(short),
         * secondary order(byte), and tertiary order(byte). Java strictly defines
         * the size and signedness of its primitive data types. Therefore, the static
         * functions <code>primaryOrder</code>, <code>secondaryOrder</code>, and
         * <code>tertiaryOrder</code> return <code>int</code>, <code>short</code>,
         * and <code>short</code> respectively to ensure the correctness of the key
         * value.
         * <p>
         * Example of the iterator usage,
         * <blockquote>
         * <pre>
         * String testString = "This is a test";
         * Collator col = Collator.getInstance();
         * if (col instanceof RuleBasedCollator) {
         * RuleBasedCollator ruleBasedCollator = (RuleBasedCollator)col;
         * CollationElementIterator collationElementIterator = ruleBasedCollator.getCollationElementIterator(testString);
         * int primaryOrder = CollationElementIterator.primaryOrder(collationElementIterator.next());
         * :
         * }
         * </pre>
         * </blockquote>
         * <p>
         * <code>CollationElementIterator.next</code> returns the collation order
         * of the next character. A collation order consists of primary order,
         * secondary order and tertiary order. The data type of the collation
         * order is <strong>int</strong>. The first 16 bits of a collation order
         * is its primary order; the next 8 bits is the secondary order and the
         * last 8 bits is the tertiary order.
         * <p><b>Note:</b> <code>CollationElementIterator</code> is a part of
         * <code>RuleBasedCollator</code> implementation. It is only usable
         * with <code>RuleBasedCollator</code> instances.
         * @see Collator
         * @see RuleBasedCollator
         * @author Helena Shih, Laura Werner, Richard Gillam
         */
        // @ts-ignore
        class CollationElementIterator extends java.lang.Object {
            /**
             * Null order which indicates the end of string is reached by the
             * cursor.
             */
            // @ts-ignore
            public static readonly NULLORDER: number /*int*/
            /**
             * Resets the cursor to the beginning of the string.  The next call
             * to next() will return the first collation element in the string.
             */
            // @ts-ignore
            public reset(): void
            /**
             * Get the next collation element in the string.  <p>This iterator iterates
             * over a sequence of collation elements that were built from the string.
             * Because there isn't necessarily a one-to-one mapping from characters to
             * collation elements, this doesn't mean the same thing as "return the
             * collation element [or ordering priority] of the next character in the
             * string".</p>
             * <p>This function returns the collation element that the iterator is currently
             * pointing to and then updates the internal pointer to point to the next element.
             * previous() updates the pointer first and then returns the element.  This
             * means that when you change direction while iterating (i.e., call next() and
             * then call previous(), or call previous() and then call next()), you'll get
             * back the same element twice.</p>
             * @return the next collation element
             */
            // @ts-ignore
            public next(): number /*int*/
            /**
             * Get the previous collation element in the string.  <p>This iterator iterates
             * over a sequence of collation elements that were built from the string.
             * Because there isn't necessarily a one-to-one mapping from characters to
             * collation elements, this doesn't mean the same thing as "return the
             * collation element [or ordering priority] of the previous character in the
             * string".</p>
             * <p>This function updates the iterator's internal pointer to point to the
             * collation element preceding the one it's currently pointing to and then
             * returns that element, while next() returns the current element and then
             * updates the pointer.  This means that when you change direction while
             * iterating (i.e., call next() and then call previous(), or call previous()
             * and then call next()), you'll get back the same element twice.</p>
             * @return the previous collation element
             * @since 1.2
             */
            // @ts-ignore
            public previous(): number /*int*/
            /**
             * Return the primary component of a collation element.
             * @param order the collation element
             * @return the element's primary component
             */
            // @ts-ignore
            public static primaryOrder(order: number /*int*/): number /*int*/
            /**
             * Return the secondary component of a collation element.
             * @param order the collation element
             * @return the element's secondary component
             */
            // @ts-ignore
            public static secondaryOrder(order: number /*int*/): number /*short*/
            /**
             * Return the tertiary component of a collation element.
             * @param order the collation element
             * @return the element's tertiary component
             */
            // @ts-ignore
            public static tertiaryOrder(order: number /*int*/): number /*short*/
            /**
             * Sets the iterator to point to the collation element corresponding to
             * the specified character (the parameter is a CHARACTER offset in the
             * original string, not an offset into its corresponding sequence of
             * collation elements).  The value returned by the next call to next()
             * will be the collation element corresponding to the specified position
             * in the text.  If that position is in the middle of a contracting
             * character sequence, the result of the next call to next() is the
             * collation element for that sequence.  This means that getOffset()
             * is not guaranteed to return the same value as was passed to a preceding
             * call to setOffset().
             * @param newOffset The new character offset into the original text.
             * @since 1.2
             */
            // @ts-ignore
            public setOffset(newOffset: number /*int*/): void
            /**
             * Returns the character offset in the original text corresponding to the next
             * collation element.  (That is, getOffset() returns the position in the text
             * corresponding to the collation element that will be returned by the next
             * call to next().)  This value will always be the index of the FIRST character
             * corresponding to the collation element (a contracting character sequence is
             * when two or more characters all correspond to the same collation element).
             * This means if you do setOffset(x) followed immediately by getOffset(), getOffset()
             * won't necessarily return x.
             * @return The character offset in the original text corresponding to the collation
             *  element that will be returned by the next call to next().
             * @since 1.2
             */
            // @ts-ignore
            public getOffset(): number /*int*/
            /**
             * Return the maximum length of any expansion sequences that end
             * with the specified comparison order.
             * @param order a collation order returned by previous or next.
             * @return the maximum length of any expansion sequences ending
             *          with the specified order.
             * @since 1.2
             */
            // @ts-ignore
            public getMaxExpansion(order: number /*int*/): number /*int*/
            /**
             * Set a new string over which to iterate.
             * @param source  the new source text
             * @since 1.2
             */
            // @ts-ignore
            public setText(source: java.lang.String | string): void
            /**
             * Set a new string over which to iterate.
             * @param source  the new source text.
             * @since 1.2
             */
            // @ts-ignore
            public setText(source: java.text.CharacterIterator): void
        }
    }
}
