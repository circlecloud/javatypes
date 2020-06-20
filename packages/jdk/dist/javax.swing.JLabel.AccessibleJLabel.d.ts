declare namespace javax {
    namespace swing {
        namespace JLabel {
            /**
             * The class used to obtain the accessible role for this object.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class AccessibleJLabel extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleText, javax.accessibility.AccessibleExtendedComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 * @return the localized name of the object -- can be null if this
                 *  object does not have a name
                 * @see AccessibleContext#setAccessibleName
                 */
                // @ts-ignore
                getAccessibleName(): java.lang.String
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the AccessibleIcons associated with this object if one
                 * or more exist.  Otherwise return null.
                 * @since 1.3
                 */
                // @ts-ignore
                getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
                /**
                 * Get the AccessibleRelationSet associated with this object if one
                 * exists.  Otherwise return null.
                 * @see AccessibleRelation
                 * @since 1.3
                 */
                // @ts-ignore
                getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
                // @ts-ignore
                getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 * @param p the Point in local coordinates
                 * @return the zero-based index of the character under Point p; if
                 *  Point is invalid returns -1.
                 * @since 1.3
                 */
                // @ts-ignore
                getIndexAtPoint(p: java.awt.Point): int
                /**
                 * Returns the bounding box of the character at the given
                 * index in the string.  The bounds are returned in local
                 * coordinates. If the index is invalid, <code>null</code> is returned.
                 * @param i the index into the String
                 * @return the screen coordinates of the character's bounding box.
                 *  If the index is invalid, <code>null</code> is returned.
                 * @since 1.3
                 */
                // @ts-ignore
                getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                /**
                 * Return the number of characters (valid indicies)
                 * @return the number of characters
                 * @since 1.3
                 */
                // @ts-ignore
                getCharCount(): int
                /**
                 * Return the zero-based offset of the caret.
                 * Note: That to the right of the caret will have the same index
                 * value as the offset (the caret is between two characters).
                 * @return the zero-based offset of the caret.
                 * @since 1.3
                 */
                // @ts-ignore
                getCaretPosition(): int
                /**
                 * Returns the String at a given index.
                 * @param part the AccessibleText.CHARACTER, AccessibleText.WORD,
                 *  or AccessibleText.SENTENCE to retrieve
                 * @param index an index within the text &gt;= 0
                 * @return the letter, word, or sentence,
                 *    null for an invalid index or part
                 * @since 1.3
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
                 * @since 1.3
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
                 * @since 1.3
                 */
                // @ts-ignore
                getBeforeIndex(part: number /*int*/, index: number /*int*/): java.lang.String
                /**
                 * Return the AttributeSet for a given character at a given index
                 * @param i the zero-based index into the text
                 * @return the AttributeSet of the character
                 * @since 1.3
                 */
                // @ts-ignore
                getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the start of the selection
                 * @since 1.3
                 */
                // @ts-ignore
                getSelectionStart(): int
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the end of the selection
                 * @since 1.3
                 */
                // @ts-ignore
                getSelectionEnd(): int
                /**
                 * Returns the portion of the text that is selected.
                 * @return the String portion of the text that is selected
                 * @since 1.3
                 */
                // @ts-ignore
                getSelectedText(): java.lang.String
                /**
                 * Returns the tool tip text
                 * @return the tool tip text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                getToolTipText(): java.lang.String
                /**
                 * Returns the titled border text
                 * @return the titled border text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                getTitledBorderText(): java.lang.String
                /**
                 * Returns key bindings associated with this object
                 * @return the key bindings, if supported, of the object;
                 *  otherwise, null
                 * @see AccessibleKeyBinding
                 * @since 1.4
                 */
                // @ts-ignore
                getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
            }
        }
    }
}
