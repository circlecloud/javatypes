declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * This is a basic implementation of the <code>ComboPopup</code> interface.
                 * This class represents the ui for the popup portion of the combo box.
                 * <p>
                 * All event handling is handled by listener classes created with the
                 * <code>createxxxListener()</code> methods and internal classes.
                 * You can change the behavior of this class by overriding the
                 * <code>createxxxListener()</code> methods and supplying your own
                 * event listeners or subclassing from the ones supplied in this class.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 * @author Mark Davidson
                 */
                // @ts-ignore
                class BasicComboPopup extends javax.swing.JPopupMenu implements javax.swing.plaf.basic.ComboPopup {
                    // @ts-ignore
                    constructor(combo: javax.swing.JComboBox)
                    // @ts-ignore
                    comboBox: javax.swing.JComboBox
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the accessor methods instead.
                     * @see #getList
                     * @see #createList
                     */
                    // @ts-ignore
                    list: javax.swing.JList
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead
                     * @see #createScroller
                     */
                    // @ts-ignore
                    scroller: javax.swing.JScrollPane
                    /**
                     * As of Java 2 platform v1.4 this previously undocumented field is no
                     * longer used.
                     */
                    // @ts-ignore
                    valueIsAdjusting: boolean
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the accessor or create methods instead.
                     * @see #getMouseMotionListener
                     * @see #createMouseMotionListener
                     */
                    // @ts-ignore
                    mouseMotionListener: java.awt.event.MouseMotionListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the accessor or create methods instead.
                     * @see #getMouseListener
                     * @see #createMouseListener
                     */
                    // @ts-ignore
                    mouseListener: java.awt.event.MouseListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the accessor or create methods instead.
                     * @see #getKeyListener
                     * @see #createKeyListener
                     */
                    // @ts-ignore
                    keyListener: java.awt.event.KeyListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead.
                     * @see #createListSelectionListener
                     */
                    // @ts-ignore
                    listSelectionListener: javax.swing.event.ListSelectionListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead.
                     * @see #createListMouseListener
                     */
                    // @ts-ignore
                    listMouseListener: java.awt.event.MouseListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead
                     * @see #createListMouseMotionListener
                     */
                    // @ts-ignore
                    listMouseMotionListener: java.awt.event.MouseMotionListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead
                     * @see #createListDataListener
                     */
                    // @ts-ignore
                    listDataListener: javax.swing.event.ListDataListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Use the create method instead
                     * @see #createItemListener
                     */
                    // @ts-ignore
                    itemListener: java.awt.event.ItemListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override.
                     */
                    // @ts-ignore
                    autoscrollTimer: javax.swing.Timer
                    // @ts-ignore
                    hasEntered: boolean
                    // @ts-ignore
                    isAutoScrolling: boolean
                    // @ts-ignore
                    scrollDirection: number /*int*/
                    // @ts-ignore
                    readonly SCROLL_UP: number /*int*/
                    // @ts-ignore
                    readonly SCROLL_DOWN: number /*int*/
                    /**
                     * Implementation of ComboPopup.show().
                     */
                    // @ts-ignore
                    show(): void
                    /**
                     * Implementation of ComboPopup.hide().
                     */
                    // @ts-ignore
                    hide(): void
                    /**
                     * Implementation of ComboPopup.getList().
                     */
                    // @ts-ignore
                    getList(): javax.swing.JList
                    /**
                     * Implementation of ComboPopup.getMouseListener().
                     * @return a <code>MouseListener</code> or null
                     * @see ComboPopup#getMouseListener
                     */
                    // @ts-ignore
                    getMouseListener(): java.awt.event.MouseListener
                    /**
                     * Implementation of ComboPopup.getMouseMotionListener().
                     * @return a <code>MouseMotionListener</code> or null
                     * @see ComboPopup#getMouseMotionListener
                     */
                    // @ts-ignore
                    getMouseMotionListener(): java.awt.event.MouseMotionListener
                    /**
                     * Implementation of ComboPopup.getKeyListener().
                     * @return a <code>KeyListener</code> or null
                     * @see ComboPopup#getKeyListener
                     */
                    // @ts-ignore
                    getKeyListener(): java.awt.event.KeyListener
                    /**
                     * Called when the UI is uninstalling.  Since this popup isn't in the component
                     * tree, it won't get it's uninstallUI() called.  It removes the listeners that
                     * were added in addComboBoxListeners().
                     */
                    // @ts-ignore
                    uninstallingUI(): void
                    /**
                     * Removes the listeners from the combo box model
                     * @param model The combo box model to install listeners
                     * @see #installComboBoxModelListeners
                     */
                    // @ts-ignore
                    uninstallComboBoxModelListeners(model: javax.swing.ComboBoxModel): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    firePopupMenuWillBecomeVisible(): void
                    // @ts-ignore
                    firePopupMenuWillBecomeInvisible(): void
                    // @ts-ignore
                    firePopupMenuCanceled(): void
                    /**
                     * Creates a listener
                     * that will watch for mouse-press and release events on the combo box.
                     * <strong>Warning:</strong>
                     * When overriding this method, make sure to maintain the existing
                     * behavior.
                     * @return a <code>MouseListener</code> which will be added to
                     *  the combo box or null
                     */
                    // @ts-ignore
                    createMouseListener(): java.awt.event.MouseListener
                    /**
                     * Creates the mouse motion listener which will be added to the combo
                     * box.
                     * <strong>Warning:</strong>
                     * When overriding this method, make sure to maintain the existing
                     * behavior.
                     * @return a <code>MouseMotionListener</code> which will be added to
                     *          the combo box or null
                     */
                    // @ts-ignore
                    createMouseMotionListener(): java.awt.event.MouseMotionListener
                    /**
                     * Creates the key listener that will be added to the combo box. If
                     * this method returns null then it will not be added to the combo box.
                     * @return a <code>KeyListener</code> or null
                     */
                    // @ts-ignore
                    createKeyListener(): java.awt.event.KeyListener
                    /**
                     * Creates a list selection listener that watches for selection changes in
                     * the popup's list.  If this method returns null then it will not
                     * be added to the popup list.
                     * @return an instance of a <code>ListSelectionListener</code> or null
                     */
                    // @ts-ignore
                    createListSelectionListener(): javax.swing.event.ListSelectionListener
                    /**
                     * Creates a list data listener which will be added to the
                     * <code>ComboBoxModel</code>. If this method returns null then
                     * it will not be added to the combo box model.
                     * @return an instance of a <code>ListDataListener</code> or null
                     */
                    // @ts-ignore
                    createListDataListener(): javax.swing.event.ListDataListener
                    /**
                     * Creates a mouse listener that watches for mouse events in
                     * the popup's list. If this method returns null then it will
                     * not be added to the combo box.
                     * @return an instance of a <code>MouseListener</code> or null
                     */
                    // @ts-ignore
                    createListMouseListener(): java.awt.event.MouseListener
                    /**
                     * Creates a mouse motion listener that watches for mouse motion
                     * events in the popup's list. If this method returns null then it will
                     * not be added to the combo box.
                     * @return an instance of a <code>MouseMotionListener</code> or null
                     */
                    // @ts-ignore
                    createListMouseMotionListener(): java.awt.event.MouseMotionListener
                    /**
                     * Creates a <code>PropertyChangeListener</code> which will be added to
                     * the combo box. If this method returns null then it will not
                     * be added to the combo box.
                     * @return an instance of a <code>PropertyChangeListener</code> or null
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates an <code>ItemListener</code> which will be added to the
                     * combo box. If this method returns null then it will not
                     * be added to the combo box.
                     * <p>
                     * Subclasses may override this method to return instances of their own
                     * ItemEvent handlers.
                     * @return an instance of an <code>ItemListener</code> or null
                     */
                    // @ts-ignore
                    createItemListener(): java.awt.event.ItemListener
                    /**
                     * Creates the JList used in the popup to display
                     * the items in the combo box model. This method is called when the UI class
                     * is created.
                     * @return a <code>JList</code> used to display the combo box items
                     */
                    // @ts-ignore
                    createList(): javax.swing.JList
                    /**
                     * Configures the list which is used to hold the combo box items in the
                     * popup. This method is called when the UI class
                     * is created.
                     * @see #createList
                     */
                    // @ts-ignore
                    configureList(): void
                    /**
                     * Adds the listeners to the list control.
                     */
                    // @ts-ignore
                    installListListeners(): void
                    /**
                     * Creates the scroll pane which houses the scrollable list.
                     */
                    // @ts-ignore
                    createScroller(): javax.swing.JScrollPane
                    /**
                     * Configures the scrollable portion which holds the list within
                     * the combo box popup. This method is called when the UI class
                     * is created.
                     */
                    // @ts-ignore
                    configureScroller(): void
                    /**
                     * Configures the popup portion of the combo box. This method is called
                     * when the UI class is created.
                     */
                    // @ts-ignore
                    configurePopup(): void
                    /**
                     * This method adds the necessary listeners to the JComboBox.
                     */
                    // @ts-ignore
                    installComboBoxListeners(): void
                    /**
                     * Installs the listeners on the combo box model. Any listeners installed
                     * on the combo box model should be removed in
                     * <code>uninstallComboBoxModelListeners</code>.
                     * @param model The combo box model to install listeners
                     * @see #uninstallComboBoxModelListeners
                     */
                    // @ts-ignore
                    installComboBoxModelListeners(model: javax.swing.ComboBoxModel): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Overridden to unconditionally return false.
                     */
                    // @ts-ignore
                    isFocusTraversable(): boolean
                    /**
                     * This protected method is implementation specific and should be private.
                     * do not call or override.
                     */
                    // @ts-ignore
                    startAutoScrolling(direction: number /*int*/): void
                    /**
                     * This protected method is implementation specific and should be private.
                     * do not call or override.
                     */
                    // @ts-ignore
                    stopAutoScrolling(): void
                    /**
                     * This protected method is implementation specific and should be private.
                     * do not call or override.
                     */
                    // @ts-ignore
                    autoScrollUp(): void
                    /**
                     * This protected method is implementation specific and should be private.
                     * do not call or override.
                     */
                    // @ts-ignore
                    autoScrollDown(): void
                    /**
                     * Gets the AccessibleContext associated with this BasicComboPopup.
                     * The AccessibleContext will have its parent set to the ComboBox.
                     * @return an AccessibleContext for the BasicComboPopup
                     * @since 1.5
                     */
                    // @ts-ignore
                    getAccessibleContext(): javax.accessibility.AccessibleContext
                    /**
                     * This is is a utility method that helps event handlers figure out where to
                     * send the focus when the popup is brought up.  The standard implementation
                     * delegates the focus to the editor (if the combo box is editable) or to
                     * the JComboBox if it is not editable.
                     */
                    // @ts-ignore
                    delegateFocus(e: java.awt.event.MouseEvent): void
                    /**
                     * Makes the popup visible if it is hidden and makes it hidden if it is
                     * visible.
                     */
                    // @ts-ignore
                    togglePopup(): void
                    // @ts-ignore
                    convertMouseEvent(e: java.awt.event.MouseEvent): java.awt.event.MouseEvent
                    /**
                     * Retrieves the height of the popup based on the current
                     * ListCellRenderer and the maximum row count.
                     */
                    // @ts-ignore
                    getPopupHeightForRowCount(maxRowCount: number /*int*/): int
                    /**
                     * Calculate the placement and size of the popup portion of the combo box based
                     * on the combo box location and the enclosing screen bounds. If
                     * no transformations are required, then the returned rectangle will
                     * have the same values as the parameters.
                     * @param px starting x location
                     * @param py starting y location
                     * @param pw starting width
                     * @param ph starting height
                     * @return a rectangle which represents the placement and size of the popup
                     */
                    // @ts-ignore
                    computePopupBounds(px: number /*int*/, py: number /*int*/, pw: number /*int*/, ph: number /*int*/): java.awt.Rectangle
                    /**
                     * A utility method used by the event listeners.  Given a mouse event, it changes
                     * the list selection to the list item below the mouse.
                     */
                    // @ts-ignore
                    updateListBoxSelectionForEvent(anEvent: java.awt.event.MouseEvent, shouldScroll: boolean): void
                }
            }
        }
    }
}
