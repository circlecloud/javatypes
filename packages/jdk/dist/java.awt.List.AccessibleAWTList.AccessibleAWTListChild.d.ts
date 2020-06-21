declare namespace java {
    namespace awt {
        namespace List {
            namespace AccessibleAWTList {
                /**
                 * This class implements accessibility support for
                 * List children.  It provides an implementation of the
                 * Java Accessibility API appropriate to list children
                 * user-interface elements.
                 * @since 1.3
                 */
                // @ts-ignore
                class AccessibleAWTListChild extends java.awt.Component.AccessibleAWTComponent implements javax.accessibility.Accessible {
                    // @ts-ignore
                    constructor(parent: java.awt.List, indexInParent: number /*int*/)
                    /**
                     * Gets the AccessibleContext for this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which acts as its own AccessibleContext.
                     * @return this object
                     */
                    // @ts-ignore
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    /**
                     * Get the role of this object.
                     * @return an instance of AccessibleRole describing the role of
                     *  the object
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Get the state set of this object.  The AccessibleStateSet of an
                     * object is composed of a set of unique AccessibleState's.  A
                     * change in the AccessibleStateSet of an object will cause a
                     * PropertyChangeEvent to be fired for the
                     * ACCESSIBLE_STATE_PROPERTY property.
                     * @return an instance of AccessibleStateSet containing the
                     *  current state set of the object
                     * @see AccessibleStateSet
                     * @see AccessibleState
                     * @see #addPropertyChangeListener
                     */
                    // @ts-ignore
                    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    /**
                     * Gets the locale of the component. If the component does not
                     * have a locale, then the locale of its parent is returned.
                     * @return This component's locale.  If this component does not have
                     *  a locale, the locale of its parent is returned.
                     * @exception IllegalComponentStateException
                     *  If the Component does not have its own locale and has not yet
                     *  been added to a containment hierarchy such that the locale can
                     *  be determined from the containing parent.
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    /**
                     * Get the 0-based index of this object in its accessible parent.
                     * @return the 0-based index of this object in its parent; -1 if
                     *  this object does not have an accessible parent.
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
                     * Return the specified Accessible child of the object.  The
                     * Accessible children of an Accessible object are zero-based,
                     * so the first child of an Accessible child is at index 0, the
                     * second child is at index 1, and so on.
                     * @param i zero-based index of child
                     * @return the Accessible child of the object
                     * @see #getAccessibleChildrenCount
                     */
                    // @ts-ignore
                    public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                    /**
                     * Get the background color of this object.
                     * @return the background color, if supported, of the object;
                     *  otherwise, null
                     * @see #setBackground
                     */
                    // @ts-ignore
                    public getBackground(): java.awt.Color
                    /**
                     * Set the background color of this object.
                     * @param c the new Color for the background
                     * @see #setBackground
                     */
                    // @ts-ignore
                    public setBackground(c: java.awt.Color): void
                    /**
                     * Get the foreground color of this object.
                     * @return the foreground color, if supported, of the object;
                     *  otherwise, null
                     * @see #setForeground
                     */
                    // @ts-ignore
                    public getForeground(): java.awt.Color
                    /**
                     * Set the foreground color of this object.
                     * @param c the new Color for the foreground
                     * @see #getForeground
                     */
                    // @ts-ignore
                    public setForeground(c: java.awt.Color): void
                    /**
                     * Get the Cursor of this object.
                     * @return the Cursor, if supported, of the object; otherwise, null
                     * @see #setCursor
                     */
                    // @ts-ignore
                    public getCursor(): java.awt.Cursor
                    /**
                     * Set the Cursor of this object.
                     * <p>
                     * The method may have no visual effect if the Java platform
                     * implementation and/or the native system do not support
                     * changing the mouse cursor shape.
                     * @param cursor the new Cursor for the object
                     * @see #getCursor
                     */
                    // @ts-ignore
                    public setCursor(cursor: java.awt.Cursor): void
                    /**
                     * Get the Font of this object.
                     * @return the Font,if supported, for the object; otherwise, null
                     * @see #setFont
                     */
                    // @ts-ignore
                    public getFont(): java.awt.Font
                    /**
                     * Set the Font of this object.
                     * @param f the new Font for the object
                     * @see #getFont
                     */
                    // @ts-ignore
                    public setFont(f: java.awt.Font): void
                    /**
                     * Get the FontMetrics of this object.
                     * @param f the Font
                     * @return the FontMetrics, if supported, the object; otherwise, null
                     * @see #getFont
                     */
                    // @ts-ignore
                    public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                    /**
                     * Determine if the object is enabled.  Objects that are enabled
                     * will also have the AccessibleState.ENABLED state set in their
                     * AccessibleStateSet.
                     * @return true if object is enabled; otherwise, false
                     * @see #setEnabled
                     * @see AccessibleContext#getAccessibleStateSet
                     * @see AccessibleState#ENABLED
                     * @see AccessibleStateSet
                     */
                    // @ts-ignore
                    public isEnabled(): boolean
                    /**
                     * Set the enabled state of the object.
                     * @param b if true, enables this object; otherwise, disables it
                     * @see #isEnabled
                     */
                    // @ts-ignore
                    public setEnabled(b: boolean): void
                    /**
                     * Determine if the object is visible.  Note: this means that the
                     * object intends to be visible; however, it may not be
                     * showing on the screen because one of the objects that this object
                     * is contained by is currently not visible.  To determine if an
                     * object is showing on the screen, use isShowing().
                     * <p>Objects that are visible will also have the
                     * AccessibleState.VISIBLE state set in their AccessibleStateSet.
                     * @return true if object is visible; otherwise, false
                     * @see #setVisible
                     * @see AccessibleContext#getAccessibleStateSet
                     * @see AccessibleState#VISIBLE
                     * @see AccessibleStateSet
                     */
                    // @ts-ignore
                    public isVisible(): boolean
                    /**
                     * Set the visible state of the object.
                     * @param b if true, shows this object; otherwise, hides it
                     * @see #isVisible
                     */
                    // @ts-ignore
                    public setVisible(b: boolean): void
                    /**
                     * Determine if the object is showing.  This is determined by
                     * checking the visibility of the object and visibility of the
                     * object ancestors.
                     * Note: this will return true even if the object is obscured
                     * by another (for example, it to object is underneath a menu
                     * that was pulled down).
                     * @return true if object is showing; otherwise, false
                     */
                    // @ts-ignore
                    public isShowing(): boolean
                    /**
                     * Checks whether the specified point is within this object's
                     * bounds, where the point's x and y coordinates are defined to
                     * be relative to the coordinate system of the object.
                     * @param p the Point relative to the coordinate system of the
                     *  object
                     * @return true if object contains Point; otherwise false
                     * @see #getBounds
                     */
                    // @ts-ignore
                    public contains(p: java.awt.Point): boolean
                    /**
                     * Returns the location of the object on the screen.
                     * @return location of object on screen; null if this object
                     *  is not on the screen
                     * @see #getBounds
                     * @see #getLocation
                     */
                    // @ts-ignore
                    public getLocationOnScreen(): java.awt.Point
                    /**
                     * Gets the location of the object relative to the parent in the
                     * form of a point specifying the object's top-left corner in the
                     * screen's coordinate space.
                     * @return An instance of Point representing the top-left corner of
                     *  the objects's bounds in the coordinate space of the screen; null
                     *  if this object or its parent are not on the screen
                     * @see #getBounds
                     * @see #getLocationOnScreen
                     */
                    // @ts-ignore
                    public getLocation(): java.awt.Point
                    /**
                     * Sets the location of the object relative to the parent.
                     * @param p the new position for the top-left corner
                     * @see #getLocation
                     */
                    // @ts-ignore
                    public setLocation(p: java.awt.Point): void
                    /**
                     * Gets the bounds of this object in the form of a Rectangle object.
                     * The bounds specify this object's width, height, and location
                     * relative to its parent.
                     * @return A rectangle indicating this component's bounds; null if
                     *  this object is not on the screen.
                     * @see #contains
                     */
                    // @ts-ignore
                    public getBounds(): java.awt.Rectangle
                    /**
                     * Sets the bounds of this object in the form of a Rectangle
                     * object.  The bounds specify this object's width, height, and
                     * location relative to its parent.
                     * @param r rectangle indicating this component's bounds
                     * @see #getBounds
                     */
                    // @ts-ignore
                    public setBounds(r: java.awt.Rectangle): void
                    /**
                     * Returns the size of this object in the form of a Dimension
                     * object.  The height field of the Dimension object contains this
                     * objects's height, and the width field of the Dimension object
                     * contains this object's width.
                     * @return A Dimension object that indicates the size of this
                     *  component; null if this object is not on the screen
                     * @see #setSize
                     */
                    // @ts-ignore
                    public getSize(): java.awt.Dimension
                    /**
                     * Resizes this object so that it has width and height.
                     * @param d - The dimension specifying the new size of the object.
                     * @see #getSize
                     */
                    // @ts-ignore
                    public setSize(d: java.awt.Dimension): void
                    /**
                     * Returns the <code>Accessible</code> child, if one exists,
                     * contained at the local coordinate <code>Point</code>.
                     * @param p the point relative to the coordinate system of this
                     *      object
                     * @return the <code>Accessible</code>, if it exists,
                     *      at the specified location; otherwise <code>null</code>
                     */
                    // @ts-ignore
                    public getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible
                    /**
                     * Returns whether this object can accept focus or not.   Objects
                     * that can accept focus will also have the
                     * <code>AccessibleState.FOCUSABLE</code> state set in their
                     * <code>AccessibleStateSet</code>.
                     * @return true if object can accept focus; otherwise false
                     * @see AccessibleContext#getAccessibleStateSet
                     * @see AccessibleState#FOCUSABLE
                     * @see AccessibleState#FOCUSED
                     * @see AccessibleStateSet
                     */
                    // @ts-ignore
                    public isFocusTraversable(): boolean
                    /**
                     * Requests focus for this object.  If this object cannot accept
                     * focus, nothing will happen.  Otherwise, the object will attempt
                     * to take focus.
                     * @see #isFocusTraversable
                     */
                    // @ts-ignore
                    public requestFocus(): void
                    /**
                     * Adds the specified focus listener to receive focus events from
                     * this component.
                     * @param l the focus listener
                     * @see #removeFocusListener
                     */
                    // @ts-ignore
                    public addFocusListener(l: java.awt.event.FocusListener): void
                    /**
                     * Removes the specified focus listener so it no longer receives
                     * focus events from this component.
                     * @param l the focus listener
                     * @see #addFocusListener
                     */
                    // @ts-ignore
                    public removeFocusListener(l: java.awt.event.FocusListener): void
                }
            }
        }
    }
}
