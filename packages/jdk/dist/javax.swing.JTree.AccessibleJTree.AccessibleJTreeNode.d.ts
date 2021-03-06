declare namespace javax {
    namespace swing {
        namespace JTree {
            namespace AccessibleJTree {
                /**
                 * This class implements accessibility support for the
                 * <code>JTree</code> child.  It provides an implementation of the
                 * Java Accessibility API appropriate to tree nodes.
                 */
                // @ts-ignore
                class AccessibleJTreeNode extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible, javax.accessibility.AccessibleComponent, javax.accessibility.AccessibleSelection, javax.accessibility.AccessibleAction {
                    /**
                     * Constructs an AccessibleJTreeNode
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(t: javax.swing.JTree, p: javax.swing.tree.TreePath, ap: javax.accessibility.Accessible)
                    /**
                     * Get the AccessibleContext associated with this tree node.
                     * In the implementation of the Java Accessibility API for
                     * this class, return this object, which is its own
                     * AccessibleContext.
                     * @return this object
                     */
                    // @ts-ignore
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    /**
                     * Get the accessible name of this object.
                     * @return the localized name of the object; null if this
                     *  object does not have a name
                     */
                    // @ts-ignore
                    public getAccessibleName(): string
                    /**
                     * Set the localized accessible name of this object.
                     * @param s the new localized name of the object.
                     */
                    // @ts-ignore
                    public setAccessibleName(s: java.lang.String | string): void
                    /**
                     * Get the accessible description of this object.
                     * @return the localized description of the object; null if
                     *  this object does not have a description
                     */
                    // @ts-ignore
                    public getAccessibleDescription(): string
                    /**
                     * Set the accessible description of this object.
                     * @param s the new localized description of the object
                     */
                    // @ts-ignore
                    public setAccessibleDescription(s: java.lang.String | string): void
                    /**
                     * Get the role of this object.
                     * @return an instance of AccessibleRole describing the role of the object
                     * @see AccessibleRole
                     */
                    // @ts-ignore
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
                    /**
                     * Get the state set of this object.
                     * @return an instance of AccessibleStateSet containing the
                     *  current state set of the object
                     * @see AccessibleState
                     */
                    // @ts-ignore
                    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    /**
                     * Get the Accessible parent of this object.
                     * @return the Accessible parent of this object; null if this
                     *  object does not have an Accessible parent
                     */
                    // @ts-ignore
                    public getAccessibleParent(): javax.accessibility.Accessible
                    /**
                     * Get the index of this object in its accessible parent.
                     * @return the index of this object in its parent; -1 if this
                     *  object does not have an accessible parent.
                     * @see #getAccessibleParent
                     */
                    // @ts-ignore
                    public getAccessibleIndexInParent(): number /*int*/
                    /**
                     * Returns the number of accessible children in the object.
                     * @return the number of accessible children in the object.
                     */
                    // @ts-ignore
                    public getAccessibleChildrenCount(): number /*int*/
                    /**
                     * Return the specified Accessible child of the object.
                     * @param i zero-based index of child
                     * @return the Accessible child of the object
                     */
                    // @ts-ignore
                    public getAccessibleChild(i: number /*int*/): javax.accessibility.Accessible
                    /**
                     * Gets the locale of the component. If the component does not have
                     * a locale, then the locale of its parent is returned.
                     * @return This component's locale. If this component does not have
                     *  a locale, the locale of its parent is returned.
                     * @exception IllegalComponentStateException
                     *  If the Component does not have its own locale and has not yet
                     *  been added to a containment hierarchy such that the locale can be
                     *  determined from the containing parent.
                     * @see #setLocale
                     */
                    // @ts-ignore
                    public getLocale(): java.util.Locale
                    /**
                     * Add a PropertyChangeListener to the listener list.
                     * The listener is registered for all properties.
                     * @param l  The PropertyChangeListener to be added
                     */
                    // @ts-ignore
                    public addPropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    /**
                     * Remove a PropertyChangeListener from the listener list.
                     * This removes a PropertyChangeListener that was registered
                     * for all properties.
                     * @param l  The PropertyChangeListener to be removed
                     */
                    // @ts-ignore
                    public removePropertyChangeListener(l: java.beans.PropertyChangeListener): void
                    /**
                     * Get the AccessibleAction associated with this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which is responsible for implementing the
                     * AccessibleAction interface on behalf of itself.
                     * @return this object
                     */
                    // @ts-ignore
                    public getAccessibleAction(): javax.accessibility.AccessibleAction
                    /**
                     * Get the AccessibleComponent associated with this object.  In the
                     * implementation of the Java Accessibility API for this class,
                     * return this object, which is responsible for implementing the
                     * AccessibleComponent interface on behalf of itself.
                     * @return this object
                     */
                    // @ts-ignore
                    public getAccessibleComponent(): javax.accessibility.AccessibleComponent
                    /**
                     * Get the AccessibleSelection associated with this object if one
                     * exists.  Otherwise return null.
                     * @return the AccessibleSelection, or null
                     */
                    // @ts-ignore
                    public getAccessibleSelection(): javax.accessibility.AccessibleSelection
                    /**
                     * Get the AccessibleText associated with this object if one
                     * exists.  Otherwise return null.
                     * @return the AccessibleText, or null
                     */
                    // @ts-ignore
                    public getAccessibleText(): javax.accessibility.AccessibleText
                    /**
                     * Get the AccessibleValue associated with this object if one
                     * exists.  Otherwise return null.
                     * @return the AccessibleValue, or null
                     */
                    // @ts-ignore
                    public getAccessibleValue(): javax.accessibility.AccessibleValue
                    /**
                     * Get the background color of this object.
                     * @return the background color, if supported, of the object;
                     *  otherwise, null
                     */
                    // @ts-ignore
                    public getBackground(): java.awt.Color
                    /**
                     * Set the background color of this object.
                     * @param c the new Color for the background
                     */
                    // @ts-ignore
                    public setBackground(c: java.awt.Color): void
                    /**
                     * Get the foreground color of this object.
                     * @return the foreground color, if supported, of the object;
                     *  otherwise, null
                     */
                    // @ts-ignore
                    public getForeground(): java.awt.Color
                    // @ts-ignore
                    public setForeground(c: java.awt.Color): void
                    // @ts-ignore
                    public getCursor(): java.awt.Cursor
                    // @ts-ignore
                    public setCursor(c: java.awt.Cursor): void
                    // @ts-ignore
                    public getFont(): java.awt.Font
                    // @ts-ignore
                    public setFont(f: java.awt.Font): void
                    // @ts-ignore
                    public getFontMetrics(f: java.awt.Font): java.awt.FontMetrics
                    // @ts-ignore
                    public isEnabled(): boolean
                    // @ts-ignore
                    public setEnabled(b: boolean): void
                    // @ts-ignore
                    public isVisible(): boolean
                    // @ts-ignore
                    public setVisible(b: boolean): void
                    // @ts-ignore
                    public isShowing(): boolean
                    // @ts-ignore
                    public contains(p: java.awt.Point): boolean
                    // @ts-ignore
                    public getLocationOnScreen(): java.awt.Point
                    // @ts-ignore
                    getLocationInJTree(): java.awt.Point
                    // @ts-ignore
                    public getLocation(): java.awt.Point
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
                    /**
                     * Returns the <code>Accessible</code> child, if one exists,
                     * contained at the local coordinate <code>Point</code>.
                     * Otherwise returns <code>null</code>.
                     * @param p point in local coordinates of this
                     *     <code>Accessible</code>
                     * @return the <code>Accessible</code>, if it exists,
                     *     at the specified location; else <code>null</code>
                     */
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
                    /**
                     * Returns the number of items currently selected.
                     * If no items are selected, the return value will be 0.
                     * @return the number of items currently selected.
                     */
                    // @ts-ignore
                    public getAccessibleSelectionCount(): number /*int*/
                    /**
                     * Returns an Accessible representing the specified selected item
                     * in the object.  If there isn't a selection, or there are
                     * fewer items selected than the integer passed in, the return
                     * value will be null.
                     * @param i the zero-based index of selected items
                     * @return an Accessible containing the selected item
                     */
                    // @ts-ignore
                    public getAccessibleSelection(i: number /*int*/): javax.accessibility.Accessible
                    /**
                     * Returns true if the current child of this object is selected.
                     * @param i the zero-based index of the child in this Accessible
                     *  object.
                     * @see AccessibleContext#getAccessibleChild
                     */
                    // @ts-ignore
                    public isAccessibleChildSelected(i: number /*int*/): boolean
                    /**
                     * Adds the specified selected item in the object to the object's
                     * selection.  If the object supports multiple selections,
                     * the specified item is added to any existing selection, otherwise
                     * it replaces any existing selection in the object.  If the
                     * specified item is already selected, this method has no effect.
                     * @param i the zero-based index of selectable items
                     */
                    // @ts-ignore
                    public addAccessibleSelection(i: number /*int*/): void
                    /**
                     * Removes the specified selected item in the object from the
                     * object's
                     * selection.  If the specified item isn't currently selected, this
                     * method has no effect.
                     * @param i the zero-based index of selectable items
                     */
                    // @ts-ignore
                    public removeAccessibleSelection(i: number /*int*/): void
                    /**
                     * Clears the selection in the object, so that nothing in the
                     * object is selected.
                     */
                    // @ts-ignore
                    public clearAccessibleSelection(): void
                    /**
                     * Causes every selected item in the object to be selected
                     * if the object supports multiple selections.
                     */
                    // @ts-ignore
                    public selectAllAccessibleSelection(): void
                    /**
                     * Returns the number of accessible actions available in this
                     * tree node.  If this node is not a leaf, there is at least
                     * one action (toggle expand), in addition to any available
                     * on the object behind the TreeCellRenderer.
                     * @return the number of Actions in this object
                     */
                    // @ts-ignore
                    public getAccessibleActionCount(): number /*int*/
                    /**
                     * Return a description of the specified action of the tree node.
                     * If this node is not a leaf, there is at least one action
                     * description (toggle expand), in addition to any available
                     * on the object behind the TreeCellRenderer.
                     * @param i zero-based index of the actions
                     * @return a description of the action
                     */
                    // @ts-ignore
                    public getAccessibleActionDescription(i: number /*int*/): string
                    /**
                     * Perform the specified Action on the tree node.  If this node
                     * is not a leaf, there is at least one action which can be
                     * done (toggle expand), in addition to any available on the
                     * object behind the TreeCellRenderer.
                     * @param i zero-based index of actions
                     * @return true if the the action was performed; else false.
                     */
                    // @ts-ignore
                    public doAccessibleAction(i: number /*int*/): boolean
                }
            }
        }
    }
}
