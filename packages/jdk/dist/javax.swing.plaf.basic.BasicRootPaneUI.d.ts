declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Basic implementation of RootPaneUI, there is one shared between all
                 * JRootPane instances.
                 * @author Scott Violet
                 * @since 1.3
                 */
                // @ts-ignore
                class BasicRootPaneUI extends javax.swing.plaf.RootPaneUI implements java.beans.PropertyChangeListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(c: javax.swing.JRootPane): void
                    // @ts-ignore
                    installComponents(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    installListeners(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    installKeyboardActions(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    uninstallDefaults(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    uninstallComponents(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    uninstallListeners(root: javax.swing.JRootPane): void
                    // @ts-ignore
                    uninstallKeyboardActions(root: javax.swing.JRootPane): void
                    /**
                     * Invoked when a property changes on the root pane. If the event
                     * indicates the <code>defaultButton</code> has changed, this will
                     * reinstall the keyboard actions.
                     */
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
