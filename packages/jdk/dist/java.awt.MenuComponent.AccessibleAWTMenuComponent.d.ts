declare namespace java {
    namespace awt {
        namespace MenuComponent {
            /**
             * Inner class of <code>MenuComponent</code> used to provide
             * default support for accessibility.  This class is not meant
             * to be used directly by application developers, but is instead
             * meant only to be subclassed by menu component developers.
             * <p>
             * The class used to obtain the accessible role for this object.
             * @since 1.3
             */
            // @ts-ignore
            class AccessibleAWTMenuComponent extends javax.accessibility.AccessibleContext implements java.io.Serializable, javax.accessibility.AccessibleComponent, javax.accessibility.AccessibleSelection {
                /**
                 * Although the class is abstract, this should be called by
                 * all sub-classes.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Gets the <code>AccessibleSelection</code> associated with this
                 * object which allows its <code>Accessible</code> children to be selected.
                 * @return <code>AccessibleSelection</code> if supported by object;
                 *       else return <code>null</code>
                 * @see AccessibleSelection
                 */
                // @ts-ignore
                getAccessibleSelection(): javax.accessibility.AccessibleSelection
                /**
                 * Gets the accessible name of this object.  This should almost never
                 * return <code>java.awt.MenuComponent.getName</code>, as that
                 * generally isn't a localized name, and doesn't have meaning for the
                 * user.  If the object is fundamentally a text object (e.g. a menu item), the
                 * accessible name should be the text of the object (e.g. "save").
                 * If the object has a tooltip, the tooltip text may also be an
                 * appropriate String to return.
                 * @return the localized name of the object -- can be <code>null</code>
                 *          if this object does not have a name
                 * @see AccessibleContext#setAccessibleName
                 */
                // @ts-ignore
                getAccessibleName(): java.lang.String
                /**
                 * Gets the accessible description of this object.  This should be
                 * a concise, localized description of what this object is - what
                 * is its meaning to the user.  If the object has a tooltip, the
                 * tooltip text may be an appropriate string to return, assuming
                 * it contains a concise description of the object (instead of just
                 * the name of the object - e.g. a "Save" icon on a toolbar that
                 * had "save" as the tooltip text shouldn't return the tooltip
                 * text as the description, but something like "Saves the current
                 * text document" instead).
                 * @return the localized description of the object -- can be
                 *      <code>null</code> if this object does not have a description
                 * @see AccessibleContext#setAccessibleDescription
                 */
                // @ts-ignore
                getAccessibleDescription(): java.lang.String
                /**
                 * Gets the role of this object.
                 * @return an instance of <code>AccessibleRole</code>
                 *      describing the role of the object
                 * @see AccessibleRole
                 */
                // @ts-ignore
                getAccessibleRole(): javax.accessibility.AccessibleRole
                /**
                 * Gets the state of this object.
                 * @return an instance of <code>AccessibleStateSet</code>
                 *      containing the current state set of the object
                 * @see AccessibleState
                 */
                // @ts-ignore
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                /**
                 * Gets the <code>Accessible</code> parent of this object.
                 * If the parent of this object implements <code>Accessible</code>,
                 * this method should simply return <code>getParent</code>.
                 * @return the <code>Accessible</code> parent of this object -- can
                 *     be <code>null</code> if this object does not have an
                 *     <code>Accessible</code> parent
                 */
                // @ts-ignore
                getAccessibleParent(): javax.accessibility.Accessible
                /**
                 * Gets the index of this object in its accessible parent.
                 * @return the index of this object in its parent; -1 if this
                 *      object does not have an accessible parent
                 * @see #getAccessibleParent
                 */
                // @ts-ignore
                getAccessibleIndexInParent(): int
                /**
                 * Returns the number of accessible children in the object.  If all
                 * of the children of this object implement <code>Accessible</code>,
                 * then this method should return the number of children of this object.
                 * @return the number of accessible children in the object
                 */
                // @ts-ignore
                getAccessibleChildrenCount(): int
                /**
                 * Returns the nth <code>Accessible</code> child of the object.
                 * @param i zero-based index of child
                 * @return the nth Accessible child of the object
                 */
                // @ts-ignore
                getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Returns the locale of this object.
                 * @return the locale of this object
                 */
                // @ts-ignore
                getLocale(): java.util.Locale
                /**
                 * Gets the <code>AccessibleComponent</code> associated with
                 * this object if one exists.  Otherwise return <code>null</code>.
                 * @return the component
                 */
                // @ts-ignore
                getAccessibleComponent(): javax.accessibility.AccessibleComponent
                /**
                 * Gets the background color of this object.
                 * @return the background color, if supported, of the object;
                 *      otherwise, <code>null</code>
                 */
                // @ts-ignore
                getBackground(): java.awt.Color
                /**
                 * Sets the background color of this object.
                 * (For transparency, see <code>isOpaque</code>.)
                 * @param c the new <code>Color</code> for the background
                 * @see Component#isOpaque
                 */
                // @ts-ignore
                setBackground(c: java.awt.Color): void
                /**
                 * Gets the foreground color of this object.
                 * @return the foreground color, if supported, of the object;
                 *      otherwise, <code>null</code>
                 */
                // @ts-ignore
                getForeground(): java.awt.Color
                /**
                 * Sets the foreground color of this object.
                 * @param c the new <code>Color</code> for the foreground
                 */
                // @ts-ignore
                setForeground(c: java.awt.Color): void
                /**
                 * Gets the <code>Cursor</code> of this object.
                 * @return the <code>Cursor</code>, if supported, of the object;
                 *      otherwise, <code>null</code>
                 */
                // @ts-ignore
                getCursor(): java.awt.Cursor
                /**
                 * Sets the <code>Cursor</code> of this object.
                 * <p>
                 * The method may have no visual effect if the Java platform
                 * implementation and/or the native system do not support
                 * changing the mouse cursor shape.
                 * @param cursor the new <code>Cursor</code> for the object
                 */
                // @ts-ignore
                setCursor(cursor: java.awt.Cursor): void
                /**
                 * Gets the <code>Font</code> of this object.
                 * @return the <code>Font</code>,if supported, for the object;
                 *      otherwise, <code>null</code>
                 */
                // @ts-ignore
                getFont(): java.awt.Font
                /**
                 * Sets the <code>Font</code> of this object.
                 * @param f the new <code>Font</code> for the object
                 */
                // @ts-ignore
                setFont(f: java.awt.Font): void
                /**
                 * Gets the <code>FontMetrics</code> of this object.
                 * @param f the <code>Font</code>
                 * @return the FontMetrics, if supported, the object;
                 *               otherwise, <code>null</code>
                 * @see #getFont
                 */
                // @ts-ignore
                getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                /**
                 * Determines if the object is enabled.
                 * @return true if object is enabled; otherwise, false
                 */
                // @ts-ignore
                isEnabled(): boolean
                /**
                 * Sets the enabled state of the object.
                 * @param b if true, enables this object; otherwise, disables it
                 */
                // @ts-ignore
                setEnabled(b: boolean): void
                /**
                 * Determines if the object is visible.  Note: this means that the
                 * object intends to be visible; however, it may not in fact be
                 * showing on the screen because one of the objects that this object
                 * is contained by is not visible.  To determine if an object is
                 * showing on the screen, use <code>isShowing</code>.
                 * @return true if object is visible; otherwise, false
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Sets the visible state of the object.
                 * @param b if true, shows this object; otherwise, hides it
                 */
                // @ts-ignore
                setVisible(b: boolean): void
                /**
                 * Determines if the object is showing.  This is determined by checking
                 * the visibility of the object and ancestors of the object.  Note:
                 * this will return true even if the object is obscured by another
                 * (for example, it happens to be underneath a menu that was pulled
                 * down).
                 * @return true if object is showing; otherwise, false
                 */
                // @ts-ignore
                isShowing(): boolean
                /**
                 * Checks whether the specified point is within this object's bounds,
                 * where the point's x and y coordinates are defined to be relative to
                 * the coordinate system of the object.
                 * @param p the <code>Point</code> relative to the coordinate
                 *      system of the object
                 * @return true if object contains <code>Point</code>; otherwise false
                 */
                // @ts-ignore
                contains(p: java.awt.Point): boolean
                /**
                 * Returns the location of the object on the screen.
                 * @return location of object on screen -- can be <code>null</code>
                 *      if this object is not on the screen
                 */
                // @ts-ignore
                getLocationOnScreen(): java.awt.Point
                /**
                 * Gets the location of the object relative to the parent in the form
                 * of a point specifying the object's top-left corner in the screen's
                 * coordinate space.
                 * @return an instance of <code>Point</code> representing the
                 *     top-left corner of the object's bounds in the coordinate
                 *     space of the screen; <code>null</code> if
                 *     this object or its parent are not on the screen
                 */
                // @ts-ignore
                getLocation(): java.awt.Point
                /**
                 * Sets the location of the object relative to the parent.
                 */
                // @ts-ignore
                setLocation(p: java.awt.Point): void
                /**
                 * Gets the bounds of this object in the form of a
                 * <code>Rectangle</code> object.
                 * The bounds specify this object's width, height, and location
                 * relative to its parent.
                 * @return a rectangle indicating this component's bounds;
                 *      <code>null</code> if this object is not on the screen
                 */
                // @ts-ignore
                getBounds(): java.awt.Rectangle
                /**
                 * Sets the bounds of this object in the form of a
                 * <code>Rectangle</code> object.
                 * The bounds specify this object's width, height, and location
                 * relative to its parent.
                 * @param r a rectangle indicating this component's bounds
                 */
                // @ts-ignore
                setBounds(r: java.awt.Rectangle): void
                /**
                 * Returns the size of this object in the form of a
                 * <code>Dimension</code> object. The height field of
                 * the <code>Dimension</code> object contains this object's
                 * height, and the width field of the <code>Dimension</code>
                 * object contains this object's width.
                 * @return a <code>Dimension</code> object that indicates the
                 *          size of this component; <code>null</code>
                 *          if this object is not on the screen
                 */
                // @ts-ignore
                getSize(): java.awt.Dimension
                /**
                 * Resizes this object.
                 * @param d - the <code>Dimension</code> specifying the
                 *     new size of the object
                 */
                // @ts-ignore
                setSize(d: java.awt.Dimension): void
                /**
                 * Returns the <code>Accessible</code> child, if one exists,
                 * contained at the local coordinate <code>Point</code>.
                 * If there is no <code>Accessible</code> child, <code>null</code>
                 * is returned.
                 * @param p the point defining the top-left corner of the
                 *     <code>Accessible</code>, given in the coordinate space
                 *     of the object's parent
                 * @return the <code>Accessible</code>, if it exists,
                 *     at the specified location; else <code>null</code>
                 */
                // @ts-ignore
                getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                /**
                 * Returns whether this object can accept focus or not.
                 * @return true if object can accept focus; otherwise false
                 */
                // @ts-ignore
                isFocusTraversable(): boolean
                /**
                 * Requests focus for this object.
                 */
                // @ts-ignore
                requestFocus(): void
                /**
                 * Adds the specified focus listener to receive focus events from this
                 * component.
                 * @param l the focus listener
                 */
                // @ts-ignore
                addFocusListener(l: java.awt.event.FocusListener): void
                /**
                 * Removes the specified focus listener so it no longer receives focus
                 * events from this component.
                 * @param l the focus listener
                 */
                // @ts-ignore
                removeFocusListener(l: java.awt.event.FocusListener): void
                /**
                 * Returns the number of <code>Accessible</code> children currently selected.
                 * If no children are selected, the return value will be 0.
                 * @return the number of items currently selected
                 */
                // @ts-ignore
                getAccessibleSelectionCount(): int
                /**
                 * Returns an <code>Accessible</code> representing the specified
                 * selected child in the object.  If there isn't a selection, or there are
                 * fewer children selected than the integer passed in, the return
                 * value will be <code>null</code>.
                 * <p>Note that the index represents the i-th selected child, which
                 * is different from the i-th child.
                 * @param i the zero-based index of selected children
                 * @return the i-th selected child
                 * @see #getAccessibleSelectionCount
                 */
                // @ts-ignore
                getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                /**
                 * Determines if the current child of this object is selected.
                 * @return true if the current child of this object is selected;
                 *     else false
                 * @param i the zero-based index of the child in this
                 *       <code>Accessible</code> object
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                isAccessibleChildSelected(i: number /*int*/): boolean
                /**
                 * Adds the specified <code>Accessible</code> child of the object
                 * to the object's selection.  If the object supports multiple selections,
                 * the specified child is added to any existing selection, otherwise
                 * it replaces any existing selection in the object.  If the
                 * specified child is already selected, this method has no effect.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                addAccessibleSelection(i: number /*int*/): void
                /**
                 * Removes the specified child of the object from the object's
                 * selection.  If the specified item isn't currently selected, this
                 * method has no effect.
                 * @param i the zero-based index of the child
                 * @see AccessibleContext#getAccessibleChild
                 */
                // @ts-ignore
                removeAccessibleSelection(i: number /*int*/): void
                /**
                 * Clears the selection in the object, so that no children in the
                 * object are selected.
                 */
                // @ts-ignore
                clearAccessibleSelection(): void
                /**
                 * Causes every child of the object to be selected
                 * if the object supports multiple selections.
                 */
                // @ts-ignore
                selectAllAccessibleSelection(): void
            }
        }
    }
}
