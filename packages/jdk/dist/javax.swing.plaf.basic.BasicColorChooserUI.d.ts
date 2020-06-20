declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the basic look and feel for a JColorChooser.
                 * <p>
                 * @author Tom Santos
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class BasicColorChooserUI extends javax.swing.plaf.ColorChooserUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * JColorChooser this BasicColorChooserUI is installed on.
                     * @since 1.5
                     */
                    // @ts-ignore
                    chooser: javax.swing.JColorChooser
                    // @ts-ignore
                    defaultChoosers: javax.swing.colorchooser.AbstractColorChooserPanel[]
                    // @ts-ignore
                    previewListener: javax.swing.event.ChangeListener
                    // @ts-ignore
                    propertyChangeListener: java.beans.PropertyChangeListener
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    createDefaultChoosers(): javax.swing.colorchooser.AbstractColorChooserPanel[]
                    // @ts-ignore
                    uninstallDefaultChoosers(): void
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installPreviewPanel(): void
                    /**
                     * Removes installed preview panel from the UI delegate.
                     * @since 1.7
                     */
                    // @ts-ignore
                    uninstallPreviewPanel(): void
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    uninstallDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    uninstallListeners(): void
                }
            }
        }
    }
}
