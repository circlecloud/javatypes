declare namespace java {
    namespace awt {
        namespace TextComponent {
            /**
             * This class implements accessibility support for the
             * <code>TextComponent</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to text component user-interface
             * elements.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTTextComponent extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.AccessibleText, java.awt.event.TextListener {
                /**
                 * Constructs an AccessibleAWTTextComponent.  Adds a listener to track
                 * caret change.
                 */
                // @ts-ignore
                constructor()
                /**
                 * TextListener notification of a text value change.
                 */
                // @ts-ignore
                textValueChanged(textEvent: java.awt.event.TextEvent): void
                /**
                 * Gets the state set of the TextComponent.
                 * The AccessibleStateSet of an object is composed of a set of
                 * unique AccessibleStates.  A change in the AccessibleStateSet
                 * of an object will cause a PropertyChangeEvent to be fired
                 * for the AccessibleContext.ACCESSIBLE_STATE_PROPERTY property.
                 * @return an instance of AccessibleStateSet containing the
                 *  current state set of the object
                 * @see AccessibleStateSet
                 * @see AccessibleState
                 * @see #addPropertyChangeListener
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Gets the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object (AccessibleRole.TEXT)
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the AccessibleText associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleText interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 * @param p the Point in local coordinates
                 * @return the zero-based index of the character under Point p.
                 */
                // @ts-ignore
                getIndexAtPoint(p: java.awt.Point): int
                /**
                 * Determines the bounding box of the character at the given
                 * index into the string.  The bounds are returned in local
                 * coordinates.  If the index is invalid a null rectangle
                 * is returned.
                 * @param i the index into the String &gt;= 0
                 * @return the screen coordinates of the character's bounding box
                 */
                // @ts-ignore
                getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                /**
                 * Returns the number of characters (valid indicies)
                 * @return the number of characters &gt;= 0
                 */
                // @ts-ignore
                getCharCount(): int
                /**
                 * Returns the zero-based offset of the caret.
                 * Note: The character to the right of the caret will have the
                 * same index value as the offset (the caret is between
                 * two characters).
                 * @return the zero-based offset of the caret.
                 */
                // @ts-ignore
                getCaretPosition(): int
                /**
                 * Returns the AttributeSet for a given character (at a given index).
                 * @param i the zero-based index into the text
                 * @return the AttributeSet of the character
                 */
                // @ts-ignore
                getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * Return 0 if the text is empty, or the caret position
                 * if no selection.
                 * @return the index into the text of the start of the selection &gt;= 0
                 */
                // @ts-ignore
                getSelectionStart(): int
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * Return 0 if the text is empty, or the caret position
                 * if no selection.
                 * @return the index into the text of the end of the selection &gt;= 0
                 */
                // @ts-ignore
                getSelectionEnd(): int
                /**
                 * Returns the portion of the text that is selected.
                 * @return the text, null if no selection
                 */
                // @ts-ignore
                getSelectedText(): java.lang.String
                /**
                 * Returns the String at a given index.
                 * @param part the AccessibleText.CHARACTER, AccessibleText.WORD,
                 *  or AccessibleText.SENTENCE to retrieve
                 * @param index an index within the text &gt;= 0
                 * @return the letter, word, or sentence,
                 *    null for an invalid index or part
                 */
                // @ts-ignore
                getAtIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                /**
                 * Returns the String after a given index.
                 * @param part the AccessibleText.CHARACTER, AccessibleText.WORD,
                 *  or AccessibleText.SENTENCE to retrieve
                 * @param index an index within the text &gt;= 0
                 * @return the letter, word, or sentence, null for an invalid
                 *   index or part
                 */
                // @ts-ignore
                getAfterIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                /**
                 * Returns the String before a given index.
                 * @param part the AccessibleText.CHARACTER, AccessibleText.WORD,
                 *    or AccessibleText.SENTENCE to retrieve
                 * @param index an index within the text &gt;= 0
                 * @return the letter, word, or sentence, null for an invalid index
                 *   or part
                 */
                // @ts-ignore
                getBeforeIndex(part: number /*int*/, index: number /*int*/): java.lang.String
            }
        }
    }
}
