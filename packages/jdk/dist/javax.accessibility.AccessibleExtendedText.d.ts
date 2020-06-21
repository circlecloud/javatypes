declare namespace javax {
    namespace accessibility {
        /**
         * <P>The AccessibleExtendedText interface contains additional methods
         * not provided by the AccessibleText interface
         * Applications can determine if an object supports the AccessibleExtendedText
         * interface by first obtaining its AccessibleContext (see {@link Accessible})
         * and then calling the {@link AccessibleContext#getAccessibleText} method of
         * AccessibleContext.  If the return value is an instance of
         * AccessibleExtendedText, the object supports this interface.
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleText
         * @author Peter Korn
         * @author Lynn Monsanto
         * @since 1.5
         */
        // @ts-ignore
        interface AccessibleExtendedText {
            /**
             * Constant used to indicate that the part of the text that should be
             * retrieved is a line of text.
             * @see AccessibleText#getAtIndex
             * @see AccessibleText#getAfterIndex
             * @see AccessibleText#getBeforeIndex
             */
            // @ts-ignore
            readonly LINE: number /*int*/
            /**
             * Constant used to indicate that the part of the text that should be
             * retrieved is contiguous text with the same text attributes.
             * @see AccessibleText#getAtIndex
             * @see AccessibleText#getAfterIndex
             * @see AccessibleText#getBeforeIndex
             */
            // @ts-ignore
            readonly ATTRIBUTE_RUN: number /*int*/
            /**
             * Returns the text between two indices
             * @param startIndex the start index in the text
             * @param endIndex the end index in the text
             * @return the text string if the indices are valid.
             *  Otherwise, null is returned.
             */
            // @ts-ignore
            getTextRange(startIndex: number /*int*/, endIndex: number /*int*/): string
            /**
             * Returns the <code>AccessibleTextSequence</code> at a given index.
             * @param part the <code>CHARACTER</code>, <code>WORD</code>,
             *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code>
             *  to retrieve
             * @param index an index within the text
             * @return an <code>AccessibleTextSequence</code> specifying the text
             *  if part and index are valid.  Otherwise, null is returned.
             * @see AccessibleText#CHARACTER
             * @see AccessibleText#WORD
             * @see AccessibleText#SENTENCE
             */
            // @ts-ignore
            getTextSequenceAt(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
            /**
             * Returns the <code>AccessibleTextSequence</code> after a given index.
             * @param part the <code>CHARACTER</code>, <code>WORD</code>,
             *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code>
             *  to retrieve
             * @param index an index within the text
             * @return an <code>AccessibleTextSequence</code> specifying the text
             *  if part and index are valid.  Otherwise, null is returned.
             * @see AccessibleText#CHARACTER
             * @see AccessibleText#WORD
             * @see AccessibleText#SENTENCE
             */
            // @ts-ignore
            getTextSequenceAfter(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
            /**
             * Returns the <code>AccessibleTextSequence</code> before a given index.
             * @param part the <code>CHARACTER</code>, <code>WORD</code>,
             *  <code>SENTENCE</code>, <code>LINE</code> or <code>ATTRIBUTE_RUN</code>
             *  to retrieve
             * @param index an index within the text
             * @return an <code>AccessibleTextSequence</code> specifying the text
             *  if part and index are valid.  Otherwise, null is returned.
             * @see AccessibleText#CHARACTER
             * @see AccessibleText#WORD
             * @see AccessibleText#SENTENCE
             */
            // @ts-ignore
            getTextSequenceBefore(part: number /*int*/, index: number /*int*/): javax.accessibility.AccessibleTextSequence
            /**
             * Returns the bounding rectangle of the text between two indices.
             * @param startIndex the start index in the text
             * @param endIndex the end index in the text
             * @return the bounding rectangle of the text if the indices are valid.
             *  Otherwise, null is returned.
             */
            // @ts-ignore
            getTextBounds(startIndex: number /*int*/, endIndex: number /*int*/): java.awt.Rectangle
        }
    }
}
