declare namespace javax {
    namespace swing {
        namespace JTable {
            namespace AccessibleJTable {
                /**
                 * The class provides an implementation of the Java Accessibility
                 * API appropriate to table cells.
                 */
                // @ts-ignore
                class AccessibleJTableCell extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible, javax.accessibility.AccessibleComponent {
                    /**
                     * Constructs an <code>AccessibleJTableHeaderEntry</code>.
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(t: javax.swing.JTable, r: number /*int*/, c: number /*int*/, i: number /*int*/)
                    /**
                     * Gets the <code>AccessibleContext</code> associated with this
                     * component. In the implementation of the Java Accessibility
                     * API for this class, return this object, which is its own
                     * <code>AccessibleContext</code>.
                     * @return this object
                     */
                    // @ts-ignore
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    /**
                     * Gets the AccessibleContext for the table cell renderer.
                     * @return the <code>AccessibleContext</code> for the table
                     *  cell renderer if one exists;
                     *  otherwise, returns <code>null</code>.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getCurrentAccessibleContext(): javax.accessibility.AccessibleContext
                    /**
                     * Gets the table cell renderer component.
                     * @return the table cell renderer component if one exists;
                     *  otherwise, returns <code>null</code>.
                     * @since 1.6
                     */
                    // @ts-ignore
                    getCurrentComponent(): java.awt.Component
                    /**
                     * Gets the accessible name of this object.
                     * @return the localized name of the object; <code>null</code>
                     *      if this object does not have a name
                     */
                    // @ts-ignore
                    public getAccessibleName(): string
                    /**
                     * Sets the localized accessible name of this object.
                     * @param s the new localized name of the object
                     */
                    // @ts-ignore
                    public setAccessibleName(s: java.lang.String | string): void
                    /**
                     * Gets the accessible description of this object.
                     * @return the localized description of the object;
                     *      <code>null</code> if this object does not have
                     *      a description
                     */
                    // @ts-ignore
                    public getAccessibleDescription(): string
                    /**
                     * Sets the accessible description of this object.
                     * @param s the new localized description of the object
                     */
                    // @ts-ignore
                    public setAccessibleDescription(s: java.lang.String | string): void
                    /**
                     * Gets the role of this object.
                     * @return an instance of <code>AccessibleRole</code>
                     *       describing the role of the object
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Gets the state set of this object.
                     * @return an instance of <code>AccessibleStateSet</code>
                     *      containing the current state set of the object
                     * @see AccessibleState
                     */
                    // @ts-ignore
                    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    /**
                     * Gets the <code>Accessible</code> parent of this object.
                     * @return the Accessible parent of this object;
                     *      <code>null</code> if this object does not
                     *      have an <code>Accessible</code> parent
                     */
                    // @ts-ignore
                    public getAccessibleParent(): javax.accessibility.Accessible
                    /**
                     * Gets the index of this object in its accessible parent.
                     * @return the index of this object in its parent; -1 if this
                     *      object does not have an accessible parent
                     * @see #getAccessibleParent
                     */
                    // @ts-ignore
                    public getAccessibleIndexInParent(): number /*int*/
                    /**
                     * Returns the number of accessible children in the object.
                     * @return the number of accessible children in the object
                     */
                    // @ts-ignore
                    public getAccessibleChildrenCount(): number /*int*/
                    /**
                     * Returns the specified <code>Accessible</code> child of the
                     * object.
                     * @param i zero-based index of child
                     * @return the <code>Accessible</code> child of the object
                     */
                    // @ts-ignore
                    public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                    /**
                     * Gets the locale of the component. If the component
                     * does not have a locale, then the locale of its parent
                     * is returned.
                     * @return this component's locale; if this component does
                     *     not have a locale, the locale of its parent is returned
                     * @exception IllegalComponentStateException if the
                     *     <code>Component</code> does not have its own locale
                     *     and has not yet been added to a containment hierarchy
                     *     such that the locale can be determined from the
                     *     containing parent
                     * @see #setLocale
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    /**
                     * Adds a <code>PropertyChangeListener</code> to the listener list.
                     * The listener is registered for all properties.
                     * @param l  the <code>PropertyChangeListener</code>
                     *      to be added
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    /**
                     * Removes a <code>PropertyChangeListener</code> from the
                     * listener list. This removes a <code>PropertyChangeListener</code>
                     * that was registered for all properties.
                     * @param l  the <code>PropertyChangeListener</code>
                     *     to be removed
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    /**
                     * Gets the <code>AccessibleAction</code> associated with this
                     * object if one exists.  Otherwise returns <code>null</code>.
                     * @return the <code>AccessibleAction</code>, or <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleAction(): javax.accessibility.AccessibleAction
                    /**
                     * Gets the <code>AccessibleComponent</code> associated with
                     * this object if one exists.  Otherwise returns <code>null</code>.
                     * @return the <code>AccessibleComponent</code>, or
                     *     <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleComponent(): javax.accessibility.AccessibleComponent
                    /**
                     * Gets the <code>AccessibleSelection</code> associated with
                     * this object if one exists.  Otherwise returns <code>null</code>.
                     * @return the <code>AccessibleSelection</code>, or
                     *     <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleSelection(): javax.accessibility.AccessibleSelection
                    /**
                     * Gets the <code>AccessibleText</code> associated with this
                     * object if one exists.  Otherwise returns <code>null</code>.
                     * @return the <code>AccessibleText</code>, or <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleText(): javax.accessibility.AccessibleText
                    /**
                     * Gets the <code>AccessibleValue</code> associated with
                     * this object if one exists.  Otherwise returns <code>null</code>.
                     * @return the <code>AccessibleValue</code>, or <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleValue(): javax.accessibility.AccessibleValue
                    /**
                     * Gets the background color of this object.
                     * @return the background color, if supported, of the object;
                     *      otherwise, <code>null</code>
                     */
                    // @ts-ignore
                    public getBackground(): java.awt.Color
                    /**
                     * Sets the background color of this object.
                     * @param c the new <code>Color</code> for the background
                     */
                    // @ts-ignore
                    public setBackground(c: java.awt.Color): void
                    /**
                     * Gets the foreground color of this object.
                     * @return the foreground color, if supported, of the object;
                     *      otherwise, <code>null</code>
                     */
                    // @ts-ignore
                    public getForeground(): java.awt.Color
                    /**
                     * Sets the foreground color of this object.
                     * @param c the new <code>Color</code> for the foreground
                     */
                    // @ts-ignore
                    public setForeground(c: java.awt.Color): void
                    /**
                     * Gets the <code>Cursor</code> of this object.
                     * @return the <code>Cursor</code>, if supported,
                     *     of the object; otherwise, <code>null</code>
                     */
                    // @ts-ignore
                    public getCursor(): java.awt.Cursor
                    /**
                     * Sets the <code>Cursor</code> of this object.
                     * @param c the new <code>Cursor</code> for the object
                     */
                    // @ts-ignore
                    public setCursor(c: java.awt.Cursor): void
                    /**
                     * Gets the <code>Font</code> of this object.
                     * @return the <code>Font</code>,if supported,
                     *    for the object; otherwise, <code>null</code>
                     */
                    // @ts-ignore
                    public getFont(): java.awt.Font
                    /**
                     * Sets the <code>Font</code> of this object.
                     * @param f the new <code>Font</code> for the object
                     */
                    // @ts-ignore
                    public setFont(f: java.awt.Font): void
                    /**
                     * Gets the <code>FontMetrics</code> of this object.
                     * @param f the <code>Font</code>
                     * @return the <code>FontMetrics</code> object, if supported;
                     *     otherwise <code>null</code>
                     * @see #getFont
                     */
                    // @ts-ignore
                    public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                    /**
                     * Determines if the object is enabled.
                     * @return true if object is enabled; otherwise, false
                     */
                    // @ts-ignore
                    public isEnabled(): boolean
                    /**
                     * Sets the enabled state of the object.
                     * @param b if true, enables this object; otherwise, disables it
                     */
                    // @ts-ignore
                    public setEnabled(b: boolean): void
                    /**
                     * Determines if this object is visible.  Note: this means that the
                     * object intends to be visible; however, it may not in fact be
                     * showing on the screen because one of the objects that this object
                     * is contained by is not visible.  To determine if an object is
                     * showing on the screen, use <code>isShowing</code>.
                     * @return true if object is visible; otherwise, false
                     */
                    // @ts-ignore
                    public isVisible(): boolean
                    /**
                     * Sets the visible state of the object.
                     * @param b if true, shows this object; otherwise, hides it
                     */
                    // @ts-ignore
                    public setVisible(b: boolean): void
                    /**
                     * Determines if the object is showing.  This is determined
                     * by checking the visibility of the object and ancestors
                     * of the object.  Note: this will return true even if the
                     * object is obscured by another (for example,
                     * it happens to be underneath a menu that was pulled down).
                     * @return true if the object is showing; otherwise, false
                     */
                    // @ts-ignore
                    public isShowing(): boolean
                    /**
                     * Checks whether the specified point is within this
                     * object's bounds, where the point's x and y coordinates
                     * are defined to be relative to the coordinate system of
                     * the object.
                     * @param p the <code>Point</code> relative to the
                     *     coordinate system of the object
                     * @return true if object contains <code>Point</code>;
                     *     otherwise false
                     */
                    // @ts-ignore
                    public contains(p: java.awt.Point): boolean
                    /**
                     * Returns the location of the object on the screen.
                     * @return location of object on screen -- can be
                     *     <code>null</code> if this object is not on the screen
                     */
                    // @ts-ignore
                    public getLocationOnScreen(): java.awt.Point
                    /**
                     * Gets the location of the object relative to the parent
                     * in the form of a point specifying the object's
                     * top-left corner in the screen's coordinate space.
                     * @return an instance of <code>Point</code> representing
                     *     the top-left corner of the object's bounds in the
                     *     coordinate space of the screen; <code>null</code> if
                     *     this object or its parent are not on the screen
                     */
                    // @ts-ignore
                    public getLocation(): java.awt.Point
                    /**
                     * Sets the location of the object relative to the parent.
                     */
                    // @ts-ignore
                    public setLocation(p: java.awt.Point): void
                    // @ts-ignore
                    public getBounds(): java.awt.Rectangle
                    // @ts-ignore
                    public setBounds(r: java.awt.Rectangle): void
                    // @ts-ignore
                    public getSize(): java.awt.Dimension
                    // @ts-ignore
                    public setSize(d: java.awt.Dimension): void
                    // @ts-ignore
                    public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                    // @ts-ignore
                    public isFocusTraversable(): boolean
                    // @ts-ignore
                    public requestFocus(): void
                    // @ts-ignore
                    public addFocusListener(l: java.awt.event.FocusListener): void
                    // @ts-ignore
                    public removeFocusListener(l: java.awt.event.FocusListener): void
                }
            }
        }
    }
}
