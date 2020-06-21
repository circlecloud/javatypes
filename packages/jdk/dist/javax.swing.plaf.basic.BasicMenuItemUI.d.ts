declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicMenuItem implementation
                 * @author Georges Saab
                 * @author David Karlton
                 * @author Arnaud Weber
                 * @author Fredrik Lagerblad
                 */
                // @ts-ignore
                class BasicMenuItemUI extends javax.swing.plaf.MenuItemUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    menuItem: javax.swing.JMenuItem
                    // @ts-ignore
                    selectionBackground: java.awt.Color
                    // @ts-ignore
                    selectionForeground: java.awt.Color
                    // @ts-ignore
                    disabledForeground: java.awt.Color
                    // @ts-ignore
                    acceleratorForeground: java.awt.Color
                    // @ts-ignore
                    acceleratorSelectionForeground: java.awt.Color
                    /**
                     * Accelerator delimiter string, such as {@code '+'} in {@code 'Ctrl+C'}.
                     * @since 1.7
                     */
                    // @ts-ignore
                    acceleratorDelimiter: java.lang.String | string
                    // @ts-ignore
                    defaultTextIconGap: number /*int*/
                    // @ts-ignore
                    acceleratorFont: java.awt.Font
                    // @ts-ignore
                    mouseInputListener: javax.swing.event.MouseInputListener
                    // @ts-ignore
                    menuDragMouseListener: javax.swing.event.MenuDragMouseListener
                    // @ts-ignore
                    menuKeyListener: javax.swing.event.MenuKeyListener
                    /**
                     * <code>PropertyChangeListener</code> returned from
                     * <code>createPropertyChangeListener</code>. You should not
                     * need to access this field, rather if you want to customize the
                     * <code>PropertyChangeListener</code> override
                     * <code>createPropertyChangeListener</code>.
                     * @since 1.6
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    arrowIcon: javax.swing.Icon
                    // @ts-ignore
                    checkIcon: javax.swing.Icon
                    // @ts-ignore
                    oldBorderPainted: boolean
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * @since 1.3
                     */
                    // @ts-ignore
                    installComponents(menuItem: javax.swing.JMenuItem): void
                    // @ts-ignore
                    getPropertyPrefix(): string
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * @since 1.3
                     */
                    // @ts-ignore
                    uninstallComponents(menuItem: javax.swing.JMenuItem): void
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    createMouseInputListener(c: javax.swing.JComponent): javax.swing.event.MouseInputListener
                    // @ts-ignore
                    createMenuDragMouseListener(c: javax.swing.JComponent): javax.swing.event.MenuDragMouseListener
                    // @ts-ignore
                    createMenuKeyListener(c: javax.swing.JComponent): javax.swing.event.MenuKeyListener
                    /**
                     * Creates a <code>PropertyChangeListener</code> which will be added to
                     * the menu item.
                     * If this method returns null then it will not be added to the menu item.
                     * @return an instance of a <code>PropertyChangeListener</code> or null
                     * @since 1.6
                     */
                    // @ts-ignore
                    createPropertyChangeListener(c: javax.swing.JComponent): java.beans.PropertyChangeListener
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getPreferredMenuItemSize(c: javax.swing.JComponent, checkIcon: javax.swing.Icon, arrowIcon: javax.swing.Icon, defaultTextIconGap: number /*int*/): java.awt.Dimension
                    /**
                     * We draw the background in paintMenuItem()
                     * so override update (which fills the background of opaque
                     * components by default) to just call paint().
                     */
                    // @ts-ignore
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintMenuItem(g: java.awt.Graphics, c: javax.swing.JComponent, checkIcon: javax.swing.Icon, arrowIcon: javax.swing.Icon, background: java.awt.Color, foreground: java.awt.Color, defaultTextIconGap: number /*int*/): void
                    /**
                     * Draws the background of the menu item.
                     * @param g the paint graphics
                     * @param menuItem menu item to be painted
                     * @param bgColor selection background color
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintBackground(g: java.awt.Graphics, menuItem: javax.swing.JMenuItem, bgColor: java.awt.Color): void
                    /**
                     * Renders the text of the current menu item.
                     * <p>
                     * @param g graphics context
                     * @param menuItem menu item to render
                     * @param textRect bounding rectangle for rendering the text
                     * @param text string to render
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, menuItem: javax.swing.JMenuItem, textRect: java.awt.Rectangle, text: java.lang.String | string): void
                    // @ts-ignore
                    public getPath(): javax.swing.MenuElement[]
                    /**
                     * Call this method when a menu item is to be activated.
                     * This method handles some of the details of menu item activation
                     * such as clearing the selected path and messaging the
                     * JMenuItem's doClick() method.
                     * @param msm  A MenuSelectionManager. The visual feedback and
                     *              internal bookkeeping tasks are delegated to
                     *              this MenuSelectionManager. If <code>null</code> is
                     *              passed as this argument, the
                     *              <code>MenuSelectionManager.defaultManager</code> is
                     *              used.
                     * @see MenuSelectionManager
                     * @see JMenuItem#doClick(int)
                     * @since 1.4
                     */
                    // @ts-ignore
                    doClick(msm: javax.swing.MenuSelectionManager): void
                }
            }
        }
    }
}
