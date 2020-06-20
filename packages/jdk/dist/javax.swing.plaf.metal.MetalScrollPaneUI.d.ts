declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A Metal L&amp;F implementation of ScrollPaneUI.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalScrollPaneUI extends javax.swing.plaf.basic.BasicScrollPaneUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installListeners(scrollPane: javax.swing.JScrollPane): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallListeners(c: javax.swing.JComponent): void
                    /**
                     * @deprecated - Replaced by {#link #uninstallListeners(JComponent)}
                     */
                    // @ts-ignore
                    uninstallListeners(scrollPane: javax.swing.JScrollPane): void
                    // @ts-ignore
                    createScrollBarSwapListener(): java.beans.PropertyChangeListener
                }
            }
        }
    }
}
