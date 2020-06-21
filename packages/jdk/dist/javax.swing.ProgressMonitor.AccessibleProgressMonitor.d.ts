declare namespace javax {
    namespace swing {
        namespace ProgressMonitor {
            /**
             * <code>AccessibleProgressMonitor</code> implements accessibility
             * support for the <code>ProgressMonitor</code> class.
             * @since 1.5
             */
            // @ts-ignore
            class AccessibleProgressMonitor extends javax.accessibility.AccessibleContext implements javax.accessibility.AccessibleText, javax.swing.event.ChangeListener, java.beans.PropertyChangeListener {
                /**
                 * AccessibleProgressMonitor constructor
                 */
                // @ts-ignore
                constructor()
                /**
                 * Invoked when the target of the listener has changed its state.
                 * @param e  a <code>ChangeEvent</code> object. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 */
                // @ts-ignore
                public stateChanged(e: javax.swing.event.ChangeEvent): void
                /**
                 * This method gets called when a bound property is changed.
                 * @param e A <code>PropertyChangeEvent</code> object describing
                 *  the event source and the property that has changed. Must not be null.
                 * @throws NullPointerException if the parameter is null.
                 */
                // @ts-ignore
                public propertyChange(e: java.beans.PropertyChangeEvent): void
                /**
                 * Gets the accessibleName property of this object.  The accessibleName
                 * property of an object is a localized String that designates the purpose
                 * of the object.  For example, the accessibleName property of a label
                 * or button might be the text of the label or button itself.  In the
                 * case of an object that doesn't display its name, the accessibleName
                 * should still be set.  For example, in the case of a text field used
                 * to enter the name of a city, the accessibleName for the en_US locale
                 * could be 'city.'
                 * @return the localized name of the object; null if this
                 *  object does not have a name
                 * @see #setAccessibleName
                 */
                // @ts-ignore
                public getAccessibleName(): string
                /**
                 * Gets the accessibleDescription property of this object.  The
                 * accessibleDescription property of this object is a short localized
                 * phrase describing the purpose of the object.  For example, in the
                 * case of a 'Cancel' button, the accessibleDescription could be
                 * 'Ignore changes and close dialog box.'
                 * @return the localized description of the object; null if
                 *  this object does not have a description
                 * @see #setAccessibleDescription
                 */
                // @ts-ignore
                public getAccessibleDescription(): string
                /**
                 * Gets the role of this object.  The role of the object is the generic
                 * purpose or use of the class of this object.  For example, the role
                 * of a push button is AccessibleRole.PUSH_BUTTON.  The roles in
                 * AccessibleRole are provided so component developers can pick from
                 * a set of predefined roles.  This enables assistive technologies to
                 * provide a consistent interface to various tweaked subclasses of
                 * components (e.g., use AccessibleRole.PUSH_BUTTON for all components
                 * that act like a push button) as well as distinguish between subclasses
                 * that behave differently (e.g., AccessibleRole.CHECK_BOX for check boxes
                 * and AccessibleRole.RADIO_BUTTON for radio buttons).
                 * <p>Note that the AccessibleRole class is also extensible, so
                 * custom component developers can define their own AccessibleRole's
                 * if the set of predefined roles is inadequate.
                 * @return an instance of AccessibleRole describing the role of the object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                public getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Gets the state set of this object.  The AccessibleStateSet of an object
                 * is composed of a set of unique AccessibleStates.  A change in the
                 * AccessibleStateSet of an object will cause a PropertyChangeEvent to
                 * be fired for the ACCESSIBLE_STATE_PROPERTY property.
                 * @return an instance of AccessibleStateSet containing the
                 *  current state set of the object
                 * @see AccessibleStateSet
                 * @see AccessibleState
                 * @see #addPropertyChangeListener
                 */
                // @ts-ignore
                public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Gets the Accessible parent of this object.
                 * @return the Accessible parent of this object; null if this
                 *  object does not have an Accessible parent
                 */
                // @ts-ignore
                public getAccessibleParent(): javax.accessibility.Accessible
                /**
                 * Gets the 0-based index of this object in its accessible parent.
                 * @return the 0-based index of this object in its parent; -1 if this
                 *  object does not have an accessible parent.
                 * @see #getAccessibleParent
                 * @see #getAccessibleChildrenCount
                 * @see #getAccessibleChild
                 */
                // @ts-ignore
                public getAccessibleIndexInParent(): number /*int*/
                /**
                 * Returns the number of accessible children of the object.
                 * @return the number of accessible children of the object.
                 */
                // @ts-ignore
                public getAccessibleChildrenCount(): number /*int*/
                /**
                 * Returns the specified Accessible child of the object.  The Accessible
                 * children of an Accessible object are zero-based, so the first child
                 * of an Accessible child is at index 0, the second child is at index 1,
                 * and so on.
                 * @param i zero-based index of child
                 * @return the Accessible child of the object
                 * @see #getAccessibleChildrenCount
                 */
                // @ts-ignore
                public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Gets the locale of the component. If the component does not have a
                 * locale, then the locale of its parent is returned.
                 * @return this component's locale.  If this component does not have
                 *  a locale, the locale of its parent is returned.
                 * @exception IllegalComponentStateException
                 *  If the Component does not have its own locale and has not yet been
                 *  added to a containment hierarchy such that the locale can be
                 *  determined from the containing parent.
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale
                /**
                 * Gets the AccessibleComponent associated with this object that has a
                 * graphical representation.
                 * @return AccessibleComponent if supported by object; else return null
                 * @see AccessibleComponent
                 */
                // @ts-ignore
                public getAccessibleComponent(): javax.accessibility.AccessibleComponent
                /**
                 * Gets the AccessibleValue associated with this object that supports a
                 * Numerical value.
                 * @return AccessibleValue if supported by object; else return null
                 * @see AccessibleValue
                 */
                // @ts-ignore
                public getAccessibleValue(): javax.accessibility.AccessibleValue
                /**
                 * Gets the AccessibleText associated with this object presenting
                 * text on the display.
                 * @return AccessibleText if supported by object; else return null
                 * @see AccessibleText
                 */
                // @ts-ignore
                public getAccessibleText(): javax.accessibility.AccessibleText
                /**
                 * Given a point in local coordinates, return the zero-based index
                 * of the character under that Point.  If the point is invalid,
                 * this method returns -1.
                 * @param p the Point in local coordinates
                 * @return the zero-based index of the character under Point p; if
                 *  Point is invalid return -1.
                 */
                // @ts-ignore
                public getIndexAtPoint(p: java.awt.Point): number /*int*/
                /**
                 * Determines the bounding box of the character at the given
                 * index into the string.  The bounds are returned in local
                 * coordinates.  If the index is invalid an empty rectangle is returned.
                 * @param i the index into the String
                 * @return the screen coordinates of the character's bounding box,
                 *  if index is invalid return an empty rectangle.
                 */
                // @ts-ignore
                public getCharacterBounds(i: number /*int*/): java.awt.Rectangle
                /**
                 * Returns the number of characters (valid indicies)
                 * @return the number of characters
                 */
                // @ts-ignore
                public getCharCount(): number /*int*/
                /**
                 * Returns the zero-based offset of the caret.
                 * Note: That to the right of the caret will have the same index
                 * value as the offset (the caret is between two characters).
                 * @return the zero-based offset of the caret.
                 */
                // @ts-ignore
                public getCaretPosition(): number /*int*/
                /**
                 * Returns the String at a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getAtIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the String after a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getAfterIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the String before a given index.
                 * @param part the CHARACTER, WORD, or SENTENCE to retrieve
                 * @param index an index within the text
                 * @return the letter, word, or sentence
                 */
                // @ts-ignore
                public getBeforeIndex(part: number /*int*/, index: number /*int*/): string
                /**
                 * Returns the AttributeSet for a given character at a given index
                 * @param i the zero-based index into the text
                 * @return the AttributeSet of the character
                 */
                // @ts-ignore
                public getCharacterAttribute(i: number /*int*/): javax.swing.text.AttributeSet
                /**
                 * Returns the start offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the start of the selection
                 */
                // @ts-ignore
                public getSelectionStart(): number /*int*/
                /**
                 * Returns the end offset within the selected text.
                 * If there is no selection, but there is
                 * a caret, the start and end offsets will be the same.
                 * @return the index into the text of the end of the selection
                 */
                // @ts-ignore
                public getSelectionEnd(): number /*int*/
                /**
                 * Returns the portion of the text that is selected.
                 * @return the String portion of the text that is selected
                 */
                // @ts-ignore
                public getSelectedText(): string
            }
        }
    }
}
