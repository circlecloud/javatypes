declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of the SplitPaneUI.
                 * @author Scott Violet
                 * @author Steve Wilson
                 * @author Ralph Kar
                 */
                // @ts-ignore
                class BasicSplitPaneUI extends javax.swing.plaf.SplitPaneUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * The divider used for non-continuous layout is added to the split pane
                     * with this object.
                     */
                    // @ts-ignore
                    static readonly NON_CONTINUOUS_DIVIDER: java.lang.String | string
                    /**
                     * How far (relative) the divider does move when it is moved around by
                     * the cursor keys on the keyboard.
                     */
                    // @ts-ignore
                    static KEYBOARD_DIVIDER_MOVE_OFFSET: number /*int*/
                    /**
                     * JSplitPane instance this instance is providing
                     * the look and feel for.
                     */
                    // @ts-ignore
                    splitPane: javax.swing.JSplitPane
                    /**
                     * LayoutManager that is created and placed into the split pane.
                     */
                    // @ts-ignore
                    layoutManager: javax.swing.plaf.basic.BasicSplitPaneUI.BasicHorizontalLayoutManager
                    /**
                     * Instance of the divider for this JSplitPane.
                     */
                    // @ts-ignore
                    divider: javax.swing.plaf.basic.BasicSplitPaneDivider
                    /**
                     * Instance of the PropertyChangeListener for this JSplitPane.
                     */
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    /**
                     * Instance of the FocusListener for this JSplitPane.
                     */
                    // @ts-ignore
                    focusListener: java.awt.event.FocusListener
                    /**
                     * The size of the divider while the dragging session is valid.
                     */
                    // @ts-ignore
                    dividerSize: number /*int*/
                    /**
                     * Instance for the shadow of the divider when non continuous layout
                     * is being used.
                     */
                    // @ts-ignore
                    nonContinuousLayoutDivider: java.awt.Component
                    /**
                     * Set to true in startDragging if any of the children
                     * (not including the nonContinuousLayoutDivider) are heavy weights.
                     */
                    // @ts-ignore
                    draggingHW: boolean
                    /**
                     * Location of the divider when the dragging session began.
                     */
                    // @ts-ignore
                    beginDragDividerLocation: number /*int*/
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    upKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    downKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    leftKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    rightKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    homeKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    endKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    dividerResizeToggleKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    keyboardUpLeftListener: java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    keyboardDownRightListener: java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    keyboardHomeListener: java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    keyboardEndListener: java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    keyboardResizeToggleListener: java.awt.event.ActionListener
                    /**
                     * Creates a new BasicSplitPaneUI instance
                     */
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Installs the UI.
                     */
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Installs the UI defaults.
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Installs the event listeners for the UI.
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Installs the keyboard actions for the UI.
                     */
                    // @ts-ignore
                    installKeyboardActions(): void
                    /**
                     * Uninstalls the UI.
                     */
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Uninstalls the UI defaults.
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * Uninstalls the event listeners for the UI.
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * Uninstalls the keyboard actions for the UI.
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    /**
                     * Creates a PropertyChangeListener for the JSplitPane UI.
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * Creates a FocusListener for the JSplitPane UI.
                     */
                    // @ts-ignore
                    createFocusListener(): java.awt.event.FocusListener
                    /**
                     * As of Java 2 platform v1.3 this method is no
                     * longer used. Subclassers previously using this method should
                     * instead create an Action wrapping the ActionListener, and register
                     * that Action by overriding <code>installKeyboardActions</code> and
                     * placing the Action in the SplitPane's ActionMap. Please refer to
                     * the key bindings specification for further details.
                     * <p>
                     * Creates a ActionListener for the JSplitPane UI that listens for
                     * specific key presses.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    createKeyboardUpLeftListener(): java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this method is no
                     * longer used. Subclassers previously using this method should
                     * instead create an Action wrapping the ActionListener, and register
                     * that Action by overriding <code>installKeyboardActions</code> and
                     * placing the Action in the SplitPane's ActionMap. Please refer to
                     * the key bindings specification for further details.
                     * <p>
                     * Creates a ActionListener for the JSplitPane UI that listens for
                     * specific key presses.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    createKeyboardDownRightListener(): java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this method is no
                     * longer used. Subclassers previously using this method should
                     * instead create an Action wrapping the ActionListener, and register
                     * that Action by overriding <code>installKeyboardActions</code> and
                     * placing the Action in the SplitPane's ActionMap. Please refer to
                     * the key bindings specification for further details.
                     * <p>
                     * Creates a ActionListener for the JSplitPane UI that listens for
                     * specific key presses.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    createKeyboardHomeListener(): java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this method is no
                     * longer used. Subclassers previously using this method should
                     * instead create an Action wrapping the ActionListener, and register
                     * that Action by overriding <code>installKeyboardActions</code> and
                     * placing the Action in the SplitPane's ActionMap. Please refer to
                     * the key bindings specification for further details.
                     * <p>
                     * Creates a ActionListener for the JSplitPane UI that listens for
                     * specific key presses.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    createKeyboardEndListener(): java.awt.event.ActionListener
                    /**
                     * As of Java 2 platform v1.3 this method is no
                     * longer used. Subclassers previously using this method should
                     * instead create an Action wrapping the ActionListener, and register
                     * that Action by overriding <code>installKeyboardActions</code> and
                     * placing the Action in the SplitPane's ActionMap. Please refer to
                     * the key bindings specification for further details.
                     * <p>
                     * Creates a ActionListener for the JSplitPane UI that listens for
                     * specific key presses.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    createKeyboardResizeToggleListener(): java.awt.event.ActionListener
                    /**
                     * Returns the orientation for the JSplitPane.
                     */
                    // @ts-ignore
                    public getOrientation(): number /*int*/
                    /**
                     * Set the orientation for the JSplitPane.
                     */
                    // @ts-ignore
                    public setOrientation(orientation: number /*int*/): void
                    /**
                     * Determines whether the JSplitPane is set to use a continuous layout.
                     */
                    // @ts-ignore
                    public isContinuousLayout(): boolean
                    /**
                     * Turn continuous layout on/off.
                     */
                    // @ts-ignore
                    public setContinuousLayout(b: boolean): void
                    /**
                     * Returns the last drag location of the JSplitPane.
                     */
                    // @ts-ignore
                    public getLastDragLocation(): number /*int*/
                    /**
                     * Set the last drag location of the JSplitPane.
                     */
                    // @ts-ignore
                    public setLastDragLocation(l: number /*int*/): void
                    /**
                     * Returns the divider between the top Components.
                     */
                    // @ts-ignore
                    public getDivider(): javax.swing.plaf.basic.BasicSplitPaneDivider
                    /**
                     * Returns the default non continuous layout divider, which is an
                     * instance of {@code Canvas} that fills in the background with dark gray.
                     */
                    // @ts-ignore
                    createDefaultNonContinuousLayoutDivider(): java.awt.Component
                    /**
                     * Sets the divider to use when the splitPane is configured to
                     * not continuously layout. This divider will only be used during a
                     * dragging session. It is recommended that the passed in component
                     * be a heavy weight.
                     */
                    // @ts-ignore
                    setNonContinuousLayoutDivider(newDivider: java.awt.Component): void
                    /**
                     * Sets the divider to use.
                     */
                    // @ts-ignore
                    setNonContinuousLayoutDivider(newDivider: java.awt.Component, rememberSizes: boolean): void
                    /**
                     * Returns the divider to use when the splitPane is configured to
                     * not continuously layout. This divider will only be used during a
                     * dragging session.
                     */
                    // @ts-ignore
                    public getNonContinuousLayoutDivider(): java.awt.Component
                    /**
                     * Returns the splitpane this instance is currently contained
                     * in.
                     */
                    // @ts-ignore
                    public getSplitPane(): javax.swing.JSplitPane
                    /**
                     * Creates the default divider.
                     */
                    // @ts-ignore
                    public createDefaultDivider(): javax.swing.plaf.basic.BasicSplitPaneDivider
                    /**
                     * Messaged to reset the preferred sizes.
                     */
                    // @ts-ignore
                    public resetToPreferredSizes(jc: javax.swing.JSplitPane): void
                    /**
                     * Sets the location of the divider to location.
                     */
                    // @ts-ignore
                    public setDividerLocation(jc: javax.swing.JSplitPane, location: number /*int*/): void
                    /**
                     * Returns the location of the divider, which may differ from what
                     * the splitpane thinks the location of the divider is.
                     */
                    // @ts-ignore
                    public getDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                    /**
                     * Gets the minimum location of the divider.
                     */
                    // @ts-ignore
                    public getMinimumDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                    /**
                     * Gets the maximum location of the divider.
                     */
                    // @ts-ignore
                    public getMaximumDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                    /**
                     * Called when the specified split pane has finished painting
                     * its children.
                     */
                    // @ts-ignore
                    public finishedPaintingChildren(sp: javax.swing.JSplitPane, g: java.awt.Graphics): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, jc: javax.swing.JComponent): void
                    /**
                     * Returns the preferred size for the passed in component,
                     * This is passed off to the current layout manager.
                     */
                    // @ts-ignore
                    public getPreferredSize(jc: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the minimum size for the passed in component,
                     * This is passed off to the current layout manager.
                     */
                    // @ts-ignore
                    public getMinimumSize(jc: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the maximum size for the passed in component,
                     * This is passed off to the current layout manager.
                     */
                    // @ts-ignore
                    public getMaximumSize(jc: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the insets. The insets are returned from the border insets
                     * of the current border.
                     */
                    // @ts-ignore
                    public getInsets(jc: javax.swing.JComponent): java.awt.Insets
                    /**
                     * Resets the layout manager based on orientation and messages it
                     * with invalidateLayout to pull in appropriate Components.
                     */
                    // @ts-ignore
                    resetLayoutManager(): void
                    /**
                     * Should be messaged before the dragging session starts, resets
                     * lastDragLocation and dividerSize.
                     */
                    // @ts-ignore
                    startDragging(): void
                    /**
                     * Messaged during a dragging session to move the divider to the
                     * passed in location. If continuousLayout is true the location is
                     * reset and the splitPane validated.
                     */
                    // @ts-ignore
                    dragDividerTo(location: number /*int*/): void
                    /**
                     * Messaged to finish the dragging session. If not continuous display
                     * the dividers location will be reset.
                     */
                    // @ts-ignore
                    finishDraggingTo(location: number /*int*/): void
                    /**
                     * As of Java 2 platform v1.3 this method is no longer used. Instead
                     * you should set the border on the divider.
                     * <p>
                     * Returns the width of one side of the divider border.
                     * @deprecated As of Java 2 platform v1.3, instead set the border on the
                     *  divider.
                     */
                    // @ts-ignore
                    getDividerBorderSize(): number /*int*/
                }
            }
        }
    }
}
