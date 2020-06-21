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
                public getAccessibleName(): string
                /**
                 * Get the role of this object.
                 * @return an instance of AccessibleRole describing the role of the
                 *  object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Get the AccessibleIcons associated with this object if one
                 * or more exist.  Otherwise return null.
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
                /**
                 * Get the AccessibleRelationSet associated with this object if one
                 * exists.  Otherwise return null.
                 * @see AccessibleRelation
                 * @since 1.3
                 */
                // @ts-ignore
                public getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
                // @ts-ignore
                public getAccessibleText(): javax.accessibility.AccessibleText
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
                public getIndexAtPoint(p: java.awt.Point): number /*int*/
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
                public getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                /**
                 * Return the number of characters (valid indicies)
                 * @return the number of characters
                 * @since 1.3
                 */
                // @ts-ignore
                public getCharCount(): number /*int*/
                /**
                 * Return the zero-based offset of the caret.
                 * Note: That to the right of the caret will have the same index
                 * value as the offset (the caret is between two characters).
                 * @return the zero-based offset of the caret.
                 * @since 1.3
                 */
                // @ts-ignore
                public getCaretPosition(): number /*int*/
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
                public getAtIndex(part: number /*int*/, index: number /*int*/): string
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
                public getAfterIndex(part: number /*int*/, index: number /*int*/): string
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
                public getBeforeIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Return the AttributeSet for a given character at a given index
                 * @param i the zero-based index into the text
                 * @return the AttributeSet of the character
                 * @since 1.3
                 */
                // @ts-ignore
                public getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the start of the selection
                 * @since 1.3
                 */
                // @ts-ignore
                public getSelectionStart(): number /*int*/
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the end of the selection
                 * @since 1.3
                 */
                // @ts-ignore
                public getSelectionEnd(): number /*int*/
                /**
                 * Returns the portion of the text that is selected.
                 * @return the String portion of the text that is selected
                 * @since 1.3
                 */
                // @ts-ignore
                public getSelectedText(): string
                /**
                 * Returns the tool tip text
                 * @return the tool tip text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                public getToolTipText(): string
                /**
                 * Returns the titled border text
                 * @return the titled border text, if supported, of the object;
                 *  otherwise, null
                 * @since 1.4
                 */
                // @ts-ignore
                public getTitledBorderText(): string
                /**
                 * Returns key bindings associated with this object
                 * @return the key bindings, if supported, of the object;
                 *  otherwise, null
                 * @see AccessibleKeyBinding
                 * @since 1.4
                 */
                // @ts-ignore
                public getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
            }
        }
    }
}
