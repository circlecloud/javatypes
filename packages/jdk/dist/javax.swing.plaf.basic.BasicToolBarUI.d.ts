declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Basic L&amp;F implementation of ToolBarUI.  This implementation
                 * is a "combined" view/controller.
                 * <p>
                 * @author Georges Saab
                 * @author Jeff Shapiro
                 */
                // @ts-ignore
                class BasicToolBarUI extends javax.swing.plaf.ToolBarUI implements javax.swing.SwingConstants {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    toolBar: javax.swing.JToolBar
                    // @ts-ignore
                    dragWindow: javax.swing.plaf.basic.BasicToolBarUI.DragWindow
                    // @ts-ignore
                    focusedCompIndex: number /*int*/
                    // @ts-ignore
                    dockingColor: java.awt.Color
                    // @ts-ignore
                    floatingColor: java.awt.Color
                    // @ts-ignore
                    dockingBorderColor: java.awt.Color
                    // @ts-ignore
                    floatingBorderColor: java.awt.Color
                    // @ts-ignore
                    dockingListener: javax.swing.event.MouseInputListener
                    // @ts-ignore
                    propertyListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    toolBarContListener: java.awt.event.ContainerListener
                    // @ts-ignore
                    toolBarFocusListener: java.awt.event.FocusListener
                    // @ts-ignore
                    constraintBeforeFloating: java.lang.String | string
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
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    installComponents(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    navigateFocusedComp(direction: number /*int*/): void
                    /**
                     * Creates a rollover border for toolbar components. The
                     * rollover border will be installed if rollover borders are
                     * enabled.
                     * <p>
                     * Override this method to provide an alternate rollover border.
                     * @since 1.4
                     */
                    // @ts-ignore
                    createRolloverBorder(): javax.swing.border.Border
                    /**
                     * Creates the non rollover border for toolbar components. This
                     * border will be installed as the border for components added
                     * to the toolbar if rollover borders are not enabled.
                     * <p>
                     * Override this method to provide an alternate rollover border.
                     * @since 1.4
                     */
                    // @ts-ignore
                    createNonRolloverBorder(): javax.swing.border.Border
                    /**
                     * No longer used, use BasicToolBarUI.createFloatingWindow(JToolBar)
                     * @see #createFloatingWindow
                     */
                    // @ts-ignore
                    createFloatingFrame(toolbar: javax.swing.JToolBar): javax.swing.JFrame
                    /**
                     * Creates a window which contains the toolbar after it has been
                     * dragged out from its container
                     * @return a <code>RootPaneContainer</code> object, containing the toolbar.
                     * @since 1.4
                     */
                    // @ts-ignore
                    createFloatingWindow(toolbar: javax.swing.JToolBar): javax.swing.RootPaneContainer
                    // @ts-ignore
                    createDragWindow(toolbar: javax.swing.JToolBar): javax.swing.plaf.basic.BasicToolBarUI.DragWindow
                    /**
                     * Returns a flag to determine whether rollover button borders
                     * are enabled.
                     * @return true if rollover borders are enabled; false otherwise
                     * @see #setRolloverBorders
                     * @since 1.4
                     */
                    // @ts-ignore
                    public isRolloverBorders(): boolean
                    /**
                     * Sets the flag for enabling rollover borders on the toolbar and it will
                     * also install the appropriate border depending on the state of the flag.
                     * @param rollover if true, rollover borders are installed.
                     *         Otherwise non-rollover borders are installed
                     * @see #isRolloverBorders
                     * @since 1.4
                     */
                    // @ts-ignore
                    public setRolloverBorders(rollover: boolean): void
                    /**
                     * Installs rollover borders on all the child components of the JComponent.
                     * <p>
                     * This is a convenience method to call <code>setBorderToRollover</code>
                     * for each child component.
                     * @param c container which holds the child components (usually a JToolBar)
                     * @see #setBorderToRollover
                     * @since 1.4
                     */
                    // @ts-ignore
                    installRolloverBorders(c: javax.swing.JComponent): void
                    /**
                     * Installs non-rollover borders on all the child components of the JComponent.
                     * A non-rollover border is the border that is installed on the child component
                     * while it is in the toolbar.
                     * <p>
                     * This is a convenience method to call <code>setBorderToNonRollover</code>
                     * for each child component.
                     * @param c container which holds the child components (usually a JToolBar)
                     * @see #setBorderToNonRollover
                     * @since 1.4
                     */
                    // @ts-ignore
                    installNonRolloverBorders(c: javax.swing.JComponent): void
                    /**
                     * Installs normal borders on all the child components of the JComponent.
                     * A normal border is the original border that was installed on the child
                     * component before it was added to the toolbar.
                     * <p>
                     * This is a convenience method to call <code>setBorderNormal</code>
                     * for each child component.
                     * @param c container which holds the child components (usually a JToolBar)
                     * @see #setBorderToNonRollover
                     * @since 1.4
                     */
                    // @ts-ignore
                    installNormalBorders(c: javax.swing.JComponent): void
                    /**
                     * Sets the border of the component to have a rollover border which
                     * was created by the {@link #createRolloverBorder} method.
                     * @param c component which will have a rollover border installed
                     * @see #createRolloverBorder
                     * @since 1.4
                     */
                    // @ts-ignore
                    setBorderToRollover(c: java.awt.Component): void
                    /**
                     * Returns a rollover border for the button.
                     * @param b the button to calculate the rollover border for
                     * @return the rollover border
                     * @see #setBorderToRollover
                     * @since 1.6
                     */
                    // @ts-ignore
                    getRolloverBorder(b: javax.swing.AbstractButton): javax.swing.border.Border
                    /**
                     * Sets the border of the component to have a non-rollover border which
                     * was created by the {@link #createNonRolloverBorder} method.
                     * @param c component which will have a non-rollover border installed
                     * @see #createNonRolloverBorder
                     * @since 1.4
                     */
                    // @ts-ignore
                    setBorderToNonRollover(c: java.awt.Component): void
                    /**
                     * Returns a non-rollover border for the button.
                     * @param b the button to calculate the non-rollover border for
                     * @return the non-rollover border
                     * @see #setBorderToNonRollover
                     * @since 1.6
                     */
                    // @ts-ignore
                    getNonRolloverBorder(b: javax.swing.AbstractButton): javax.swing.border.Border
                    /**
                     * Sets the border of the component to have a normal border.
                     * A normal border is the original border that was installed on the child
                     * component before it was added to the toolbar.
                     * @param c component which will have a normal border re-installed
                     * @see #createNonRolloverBorder
                     * @since 1.4
                     */
                    // @ts-ignore
                    setBorderToNormal(c: java.awt.Component): void
                    // @ts-ignore
                    public setFloatingLocation(x: number /*int*/, y: number /*int*/): void
                    // @ts-ignore
                    public isFloating(): boolean
                    // @ts-ignore
                    public setFloating(b: boolean, p: java.awt.Point): void
                    // @ts-ignore
                    public setOrientation(orientation: number /*int*/): void
                    /**
                     * Gets the color displayed when over a docking area
                     */
                    // @ts-ignore
                    public getDockingColor(): java.awt.Color
                    /**
                     * Sets the color displayed when over a docking area
                     */
                    // @ts-ignore
                    public setDockingColor(c: java.awt.Color): void
                    /**
                     * Gets the color displayed when over a floating area
                     */
                    // @ts-ignore
                    public getFloatingColor(): java.awt.Color
                    /**
                     * Sets the color displayed when over a floating area
                     */
                    // @ts-ignore
                    public setFloatingColor(c: java.awt.Color): void
                    // @ts-ignore
                    public canDock(c: java.awt.Component, p: java.awt.Point): boolean
                    // @ts-ignore
                    dragTo(position: java.awt.Point, origin: java.awt.Point): void
                    // @ts-ignore
                    floatAt(position: java.awt.Point, origin: java.awt.Point): void
                    // @ts-ignore
                    createToolBarContListener(): java.awt.event.ContainerListener
                    // @ts-ignore
                    createToolBarFocusListener(): java.awt.event.FocusListener
                    // @ts-ignore
                    createPropertyListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    createDockingListener(): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    createFrameListener(): java.awt.event.WindowListener
                    /**
                     * Paints the contents of the window used for dragging.
                     * @param g Graphics to paint to.
                     * @throws NullPointerException is <code>g</code> is null
                     * @since 1.5
                     */
                    // @ts-ignore
                    paintDragWindow(g: java.awt.Graphics): void
                }
            }
        }
    }
}
