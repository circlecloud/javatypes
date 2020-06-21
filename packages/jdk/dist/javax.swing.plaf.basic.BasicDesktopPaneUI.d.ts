declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic L&amp;F for a desktop.
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class BasicDesktopPaneUI extends javax.swing.plaf.DesktopPaneUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    desktop: javax.swing.JDesktopPane
                    // @ts-ignore
                    desktopManager: javax.swing.DesktopManager
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of 1.3.
                     */
                    // @ts-ignore
                    minimizeKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of 1.3.
                     */
                    // @ts-ignore
                    maximizeKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of 1.3.
                     */
                    // @ts-ignore
                    closeKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of 1.3.
                     */
                    // @ts-ignore
                    navigateKey: javax.swing.KeyStroke
                    /**
                     * As of Java 2 platform v1.3 this previously undocumented field is no
                     * longer used.
                     * Key bindings are now defined by the LookAndFeel, please refer to
                     * the key bindings specification for further details.
                     * @deprecated As of 1.3.
                     */
                    // @ts-ignore
                    navigateKey2: javax.swing.KeyStroke
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
                    /**
                     * Installs the <code>PropertyChangeListener</code> returned from
                     * <code>createPropertyChangeListener</code> on the
                     * <code>JDesktopPane</code>.
                     * @since 1.5
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * Uninstalls the <code>PropertyChangeListener</code> returned from
                     * <code>createPropertyChangeListener</code> from the
                     * <code>JDesktopPane</code>.
                     * @since 1.5
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    // @ts-ignore
                    installDesktopManager(): void
                    // @ts-ignore
                    uninstallDesktopManager(): void
                    // @ts-ignore
                    installKeyboardActions(): void
                    // @ts-ignore
                    registerKeyboardActions(): void
                    // @ts-ignore
                    unregisterKeyboardActions(): void
                    // @ts-ignore
                    uninstallKeyboardActions(): void
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    public getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the <code>PropertyChangeListener</code> to install on
                     * the <code>JDesktopPane</code>.
                     * @since 1.5
                     * @return The PropertyChangeListener that will be added to track
                     *  changes in the desktop pane.
                     */
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                }
            }
        }
    }
}
