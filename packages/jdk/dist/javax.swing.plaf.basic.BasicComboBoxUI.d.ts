declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic UI implementation for JComboBox.
                 * <p>
                 * The combo box is a compound component which means that it is an aggregate of
                 * many simpler components. This class creates and manages the listeners
                 * on the combo box and the combo box model. These listeners update the user
                 * interface in response to changes in the properties and state of the combo box.
                 * <p>
                 * All event handling is handled by listener classes created with the
                 * <code>createxxxListener()</code> methods and internal classes.
                 * You can change the behavior of this class by overriding the
                 * <code>createxxxListener()</code> methods and supplying your own
                 * event listeners or subclassing from the ones supplied in this class.
                 * <p>
                 * For adding specific actions,
                 * overide <code>installKeyboardActions</code> to add actions in response to
                 * KeyStroke bindings. See the article <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/keybinding.html">How to Use Key Bindings</a>
                 * @author Arnaud Weber
                 * @author Tom Santos
                 * @author Mark Davidson
                 */
                // @ts-ignore
                class BasicComboBoxUI extends javax.swing.plaf.ComboBoxUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    comboBox: javax.swing.JComboBox
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override.
                     */
                    // @ts-ignore
                    hasFocus: boolean
                    // @ts-ignore
                    listBox: javax.swing.JList
                    // @ts-ignore
                    currentValuePane: javax.swing.CellRendererPane
                    // @ts-ignore
                    popup: javax.swing.plaf.basic.ComboPopup
                    // @ts-ignore
                    editor: java.awt.Component
                    // @ts-ignore
                    arrowButton: javax.swing.JButton
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Override the listener construction method instead.
                     * @see #createKeyListener
                     */
                    // @ts-ignore
                    keyListener: java.awt.event.KeyListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Override the listener construction method instead.
                     * @see #createFocusListener
                     */
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Override the listener construction method instead.
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Override the listener construction method instead.
                     * @see #createItemListener
                     */
                    // @ts-ignore
                    itemListener: java.awt.event.ItemListener
                    // @ts-ignore
                    popupMouseListener: java.awt.event.MouseListener
                    // @ts-ignore
                    popupMouseMotionListener: java.awt.event.MouseMotionListener
                    // @ts-ignore
                    popupKeyListener: java.awt.event.KeyListener
                    /**
                     * This protected field is implementation specific. Do not access directly
                     * or override. Override the listener construction method instead.
                     * @see #createListDataListener
                     */
                    // @ts-ignore
                    listDataListener: javax.swing.event.ListDataListener
                    // @ts-ignore
                    isMinimumSizeDirty: boolean
                    // @ts-ignore
                    cachedMinimumSize: java.awt.Dimension
                    /**
                     * Indicates whether or not the combo box button should be square.
                     * If square, then the width and height are equal, and are both set to
                     * the height of the combo minus appropriate insets.
                     * @since 1.7
                     */
                    // @ts-ignore
                    squareButton: boolean
                    /**
                     * If specified, these insets act as padding around the cell renderer when
                     * laying out and painting the "selected" item in the combo box. These
                     * insets add to those specified by the cell renderer.
                     * @since 1.7
                     */
                    // @ts-ignore
                    padding: java.awt.Insets
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Installs the default colors, default font, default renderer, and default
                     * editor into the JComboBox.
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Creates and installs listeners for the combo box and its model.
                     * This method is called when the UI is installed.
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Uninstalls the default colors, default font, default renderer,
                     * and default editor from the combo box.
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * Removes the installed listeners from the combo box and its model.
                     * The number and types of listeners removed and in this method should be
                     * the same that was added in <code>installListeners</code>
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Creates the popup portion of the combo box.
                     * @return an instance of <code>ComboPopup</code>
                     * @see ComboPopup
                     */
                    // @ts-ignore
                    createPopup(): javax.swing.plaf.basic.ComboPopup
                    /**
                     * Creates a <code>KeyListener</code> which will be added to the
                     * combo box. If this method returns null then it will not be added
                     * to the combo box.
                     * @return an instance <code>KeyListener</code> or null
                     */
                    // @ts-ignore
                    createKeyListener(): java.awt.event.KeyListener
                    /**
                     * Creates a <code>FocusListener</code> which will be added to the combo box.
                     * If this method returns null then it will not be added to the combo box.
                     * @return an instance of a <code>FocusListener</code> or null
                     */
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    /**
                     * Creates a list data listener which will be added to the
                     * <code>ComboBoxModel</code>. If this method returns null then
                     * it will not be added to the combo box model.
                     * @return an instance of a <code>ListDataListener</code> or null
                     */
                    // @ts-ignore
                    createListDataListener(): javax.swing.event.ListDataListener
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
                     * Creates a <code>PropertyChangeListener</code> which will be added to
                     * the combo box. If this method returns null then it will not
                     * be added to the combo box.
                     * @return an instance of a <code>PropertyChangeListener</code> or null
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates a layout manager for managing the components which make up the
                     * combo box.
                     * @return an instance of a layout manager
                     */
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    /**
                     * Creates the default renderer that will be used in a non-editiable combo
                     * box. A default renderer will used only if a renderer has not been
                     * explicitly set with <code>setRenderer</code>.
                     * @return a <code>ListCellRender</code> used for the combo box
                     * @see javax.swing.JComboBox#setRenderer
                     */
                    // @ts-ignore
                    createRenderer(): javax.swing.ListCellRenderer
                    /**
                     * Creates the default editor that will be used in editable combo boxes.
                     * A default editor will be used only if an editor has not been
                     * explicitly set with <code>setEditor</code>.
                     * @return a <code>ComboBoxEditor</code> used for the combo box
                     * @see javax.swing.JComboBox#setEditor
                     */
                    // @ts-ignore
                    createEditor(): javax.swing.ComboBoxEditor
                    /**
                     * Creates and initializes the components which make up the
                     * aggregate combo box. This method is called as part of the UI
                     * installation process.
                     */
                    // @ts-ignore
                    installComponents(): void
                    /**
                     * The aggregate components which comprise the combo box are
                     * unregistered and uninitialized. This method is called as part of the
                     * UI uninstallation process.
                     */
                    // @ts-ignore
                    uninstallComponents(): void
                    /**
                     * This public method is implementation specific and should be private.
                     * do not call or override. To implement a specific editor create a
                     * custom <code>ComboBoxEditor</code>
                     * @see #createEditor
                     * @see javax.swing.JComboBox#setEditor
                     * @see javax.swing.ComboBoxEditor
                     */
                    // @ts-ignore
                    addEditor(): void
                    /**
                     * This public method is implementation specific and should be private.
                     * do not call or override.
                     * @see #addEditor
                     */
                    // @ts-ignore
                    removeEditor(): void
                    /**
                     * This protected method is implementation specific and should be private.
                     * do not call or override.
                     * @see #addEditor
                     */
                    // @ts-ignore
                    configureEditor(): void
                    /**
                     * This protected method is implementation specific and should be private.
                     * Do not call or override.
                     * @see #addEditor
                     */
                    // @ts-ignore
                    unconfigureEditor(): void
                    /**
                     * This public method is implementation specific and should be private. Do
                     * not call or override.
                     * @see #createArrowButton
                     */
                    // @ts-ignore
                    configureArrowButton(): void
                    /**
                     * This public method is implementation specific and should be private. Do
                     * not call or override.
                     * @see #createArrowButton
                     */
                    // @ts-ignore
                    unconfigureArrowButton(): void
                    /**
                     * Creates a button which will be used as the control to show or hide
                     * the popup portion of the combo box.
                     * @return a button which represents the popup control
                     */
                    // @ts-ignore
                    createArrowButton(): javax.swing.JButton
                    /**
                     * Tells if the popup is visible or not.
                     */
                    // @ts-ignore
                    isPopupVisible(c: javax.swing.JComboBox): boolean
                    /**
                     * Hides the popup.
                     */
                    // @ts-ignore
                    setPopupVisible(c: javax.swing.JComboBox, v: boolean): void
                    /**
                     * Determines if the JComboBox is focus traversable.  If the JComboBox is editable
                     * this returns false, otherwise it returns true.
                     */
                    // @ts-ignore
                    isFocusTraversable(c: javax.swing.JComboBox): boolean
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * The minimum size is the size of the display area plus insets plus the button.
                     */
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    // @ts-ignore
                    getAccessibleChildrenCount(c: javax.swing.JComponent): int
                    // @ts-ignore
                    getAccessibleChild(c: javax.swing.JComponent, i: number /*int*/): javax.accessibility.Accessible
                    /**
                     * Returns whether or not the supplied keyCode maps to a key that is used for
                     * navigation.  This is used for optimizing key input by only passing non-
                     * navigation keys to the type-ahead mechanism.  Subclasses should override this
                     * if they change the navigation keys.
                     */
                    // @ts-ignore
                    isNavigationKey(keyCode: number /*int*/): boolean
                    /**
                     * Selects the next item in the list.  It won't change the selection if the
                     * currently selected item is already the last item.
                     */
                    // @ts-ignore
                    selectNextPossibleValue(): void
                    /**
                     * Selects the previous item in the list.  It won't change the selection if the
                     * currently selected item is already the first item.
                     */
                    // @ts-ignore
                    selectPreviousPossibleValue(): void
                    /**
                     * Hides the popup if it is showing and shows the popup if it is hidden.
                     */
                    // @ts-ignore
                    toggleOpenClose(): void
                    /**
                     * Returns the area that is reserved for drawing the currently selected item.
                     */
                    // @ts-ignore
                    rectangleForCurrentValue(): java.awt.Rectangle
                    /**
                     * Gets the insets from the JComboBox.
                     */
                    // @ts-ignore
                    getInsets(): java.awt.Insets
                    /**
                     * Paints the currently selected item.
                     */
                    // @ts-ignore
                    paintCurrentValue(g: java.awt.Graphics, bounds: java.awt.Rectangle, hasFocus: boolean): void
                    /**
                     * Paints the background of the currently selected item.
                     */
                    // @ts-ignore
                    paintCurrentValueBackground(g: java.awt.Graphics, bounds: java.awt.Rectangle, hasFocus: boolean): void
                    /**
                     * Return the default size of an empty display area of the combo box using
                     * the current renderer and font.
                     * @return the size of an empty display area
                     * @see #getDisplaySize
                     */
                    // @ts-ignore
                    getDefaultSize(): java.awt.Dimension
                    /**
                     * Returns the calculated size of the display area. The display area is the
                     * portion of the combo box in which the selected item is displayed. This
                     * method will use the prototype display value if it has been set.
                     * <p>
                     * For combo boxes with a non trivial number of items, it is recommended to
                     * use a prototype display value to significantly speed up the display
                     * size calculation.
                     * @return the size of the display area calculated from the combo box items
                     * @see javax.swing.JComboBox#setPrototypeDisplayValue
                     */
                    // @ts-ignore
                    getDisplaySize(): java.awt.Dimension
                    /**
                     * Returns the size a component would have if used as a cell renderer.
                     * @param comp a {#code Component} to check
                     * @return size of the component
                     * @since 1.7
                     */
                    // @ts-ignore
                    getSizeForComponent(comp: java.awt.Component): java.awt.Dimension
                    /**
                     * Adds keyboard actions to the JComboBox.  Actions on enter and esc are already
                     * supplied.  Add more actions as you need them.
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Removes the focus InputMap and ActionMap.
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                }
            }
        }
    }
}
