declare namespace javax {
    namespace swing {
        namespace AbstractButton {
            /**
             * This class implements accessibility support for the
             * <code>AbstractButton</code> class.  It provides an implementation of the
             * Java Accessibility API appropriate to button and menu item
             * user-interface elements.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @since 1.4
             */
            // @ts-ignore
            class AccessibleAbstractButton extends javax.swing.JComponent.AccessibleJComponent implements javax.accessibility.AccessibleAction, javax.accessibility.AccessibleValue, javax.accessibility.AccessibleText, javax.accessibility.AccessibleExtendedComponent {
                // @ts-ignore
                constructor()
                /**
                 * Returns the accessible name of this object.
                 * @return the localized name of the object -- can be
                 *               <code>null</code> if this
                 *               object does not have a name
                 */
                // @ts-ignore
                getAccessibleName(): java.lang.String
                /**
                 * Get the AccessibleIcons associated with this object if one
                 * or more exist.  Otherwise return null.
                 * @since 1.3
                 */
                // @ts-ignore
                getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
                /**
                 * Get the state set of this object.
                 * @return an instance of AccessibleState containing the current state
                 *  of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Get the AccessibleRelationSet associated with this object if one
                 * exists.  Otherwise return null.
                 * @see AccessibleRelation
                 * @since 1.3
                 */
                // @ts-ignore
                getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleAction(): javax.accessibility.AccessibleAction
                /**
                 * Get the AccessibleValue associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleValue interface on behalf of itself.
                 * @return this object
                 */
                // @ts-ignore
                getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Returns the number of Actions available in this object.  The
                 * default behavior of a button is to have one action - toggle
                 * the button.
                 * @return 1, the number of Actions in this object
                 */
                // @ts-ignore
                getAccessibleActionCount(): int
                /**
                 * Return a description of the specified action of the object.
                 * @param i zero-based index of the actions
                 */
                // @ts-ignore
                getAccessibleActionDescription(i: number /*int*/): java.lang.String
                /**
                 * Perform the specified Action on the object
                 * @param i zero-based index of actions
                 * @return true if the the action was performed; else false.
                 */
                // @ts-ignore
                doAccessibleAction(i: number /*int*/): boolean
                /**
                 * Get the value of this object as a Number.
                 * @return An Integer of 0 if this isn't selected or an Integer of 1 if
                 *  this is selected.
                 * @see AbstractButton#isSelected
                 */
                // @ts-ignore
                getCurrentAccessibleValue(): java.lang.Number
                /**
                 * Set the value of this object as a Number.
                 * @return True if the value was set.
                 */
                // @ts-ignore
                setCurrentAccessibleValue(n: java.lang.Number): boolean
                /**
                 * Get the minimum value of this object as a Number.
                 * @return an Integer of 0.
                 */
                // @ts-ignore
                getMinimumAccessibleValue(): java.lang.Number
                /**
                 * Get the maximum value of this object as a Number.
                 * @return An Integer of 1.
                 */
                // @ts-ignore
                getMaximumAccessibleValue(): java.lang.Number
                // @ts-ignore
                getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 * Note: the AbstractButton must have a valid size (e.g. have
                 * been added to a parent container whose ancestor container
                 * is a valid top-level window) for this method to be able
                 * to return a meaningful value.
                 * @param p the Point in local coordinates
                 * @return the zero-based index of the character under Point p; if
                 *  Point is invalid returns -1.
                 * @since 1.3
                 */
                // @ts-ignore
                getIndexAtPoint(p: java.awt.Point): int
                /**
                 * Determine the bounding box of the character at the given
                 * index into the string.  The bounds are returned in local
                 * coordinates.  If the index is invalid an empty rectangle is
                 * returned.
                 * Note: the AbstractButton must have a valid size (e.g. have
                 * been added to a parent container whose ancestor container
                 * is a valid top-level window) for this method to be able
                 * to return a meaningful value.
                 * @param i the index into the String
                 * @return the screen coordinates of the character's the bounding box,
                 *  if index is invalid returns an empty rectangle.
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
