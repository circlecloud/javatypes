declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A basic L&amp;F implementation of JInternalFrame.
                 * @author David Kloba
                 * @author Rich Schiavi
                 */
                // @ts-ignore
                class BasicInternalFrameUI extends javax.swing.plaf.InternalFrameUI {
                    // @ts-ignore
                    constructor(b: javax.swing.JInternalFrame)
                    // @ts-ignore
                    frame: javax.swing.JInternalFrame
                    // @ts-ignore
                    borderListener: javax.swing.event.MouseInputAdapter
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    internalFrameLayout: java.awt.LayoutManager
                    // @ts-ignore
                    componentListener: java.awt.event.ComponentListener
                    // @ts-ignore
                    glassPaneDispatcher: javax.swing.event.MouseInputListener
                    // @ts-ignore
                    northPane: javax.swing.JComponent
                    // @ts-ignore
                    southPane: javax.swing.JComponent
                    // @ts-ignore
                    westPane: javax.swing.JComponent
                    // @ts-ignore
                    eastPane: javax.swing.JComponent
                    // @ts-ignore
                    titlePane: javax.swing.plaf.basic.BasicInternalFrameTitlePane
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of Java 2 platform v1.3.
                     */
                    // @ts-ignore
                    openMenuKey: javax.swing.KeyStroke
                    // @ts-ignore
                    public static createUI(b: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    installComponents(): void
                    /**
                     * @since 1.3
                     */
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    uninstallComponents(): void
                    /**
                     * @since 1.3
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    public getPreferredSize(x: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMinimumSize(x: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(x: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Installs necessary mouse handlers on <code>newPane</code>
                     * and adds it to the frame.
                     * Reverse process for the <code>currentPane</code>.
                     */
                    // @ts-ignore
                    replacePane(currentPane: javax.swing.JComponent, newPane: javax.swing.JComponent): void
                    // @ts-ignore
                    deinstallMouseHandlers(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installMouseHandlers(c: javax.swing.JComponent): void
                    // @ts-ignore
                    createNorthPane(w: javax.swing.JInternalFrame): javax.swing.JComponent
                    // @ts-ignore
                    createSouthPane(w: javax.swing.JInternalFrame): javax.swing.JComponent
                    // @ts-ignore
                    createWestPane(w: javax.swing.JInternalFrame): javax.swing.JComponent
                    // @ts-ignore
                    createEastPane(w: javax.swing.JInternalFrame): javax.swing.JComponent
                    // @ts-ignore
                    createBorderListener(w: javax.swing.JInternalFrame): javax.swing.event.MouseInputAdapter
                    // @ts-ignore
                    createInternalFrameListener(): void
                    // @ts-ignore
                    isKeyBindingRegistered(): boolean
                    // @ts-ignore
                    setKeyBindingRegistered(b: boolean): void
                    // @ts-ignore
                    public isKeyBindingActive(): boolean
                    // @ts-ignore
                    setKeyBindingActive(b: boolean): void
                    // @ts-ignore
                    setupMenuOpenKey(): void
                    // @ts-ignore
                    setupMenuCloseKey(): void
                    // @ts-ignore
                    public getNorthPane(): javax.swing.JComponent
                    // @ts-ignore
                    public setNorthPane(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getSouthPane(): javax.swing.JComponent
                    // @ts-ignore
                    public setSouthPane(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getWestPane(): javax.swing.JComponent
                    // @ts-ignore
                    public setWestPane(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getEastPane(): javax.swing.JComponent
                    // @ts-ignore
                    public setEastPane(c: javax.swing.JComponent): void
                    /**
                     * Returns the proper DesktopManager. Calls getDesktopPane() to
                     * find the JDesktop component and returns the desktopManager from
                     * it. If this fails, it will return a default DesktopManager that
                     * should work in arbitrary parents.
                     */
                    // @ts-ignore
                    getDesktopManager(): javax.swing.DesktopManager
                    // @ts-ignore
                    createDesktopManager(): javax.swing.DesktopManager
                    /**
                     * This method is called when the user wants to close the frame.
                     * The <code>playCloseSound</code> Action is fired.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    closeFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the user wants to maximize the frame.
                     * The <code>playMaximizeSound</code> Action is fired.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    maximizeFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the user wants to minimize the frame.
                     * The <code>playRestoreDownSound</code> Action is fired.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    minimizeFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the user wants to iconify the frame.
                     * The <code>playMinimizeSound</code> Action is fired.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    iconifyFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the user wants to deiconify the frame.
                     * The <code>playRestoreUpSound</code> Action is fired.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    deiconifyFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the frame becomes selected.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    activateFrame(f: javax.swing.JInternalFrame): void
                    /**
                     * This method is called when the frame is no longer selected.
                     * This action is delegated to the desktopManager.
                     */
                    // @ts-ignore
                    deactivateFrame(f: javax.swing.JInternalFrame): void
                    // @ts-ignore
                    createComponentListener(): java.awt.event.ComponentListener
                    // @ts-ignore
                    createGlassPaneDispatcher(): javax.swing.event.MouseInputListener
                }
            }
        }
    }
}
