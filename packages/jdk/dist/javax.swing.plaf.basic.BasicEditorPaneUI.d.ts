declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the look and feel for a JEditorPane.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Timothy Prinzing
                 */
                // @ts-ignore
                class BasicEditorPaneUI extends javax.swing.plaf.basic.BasicTextUI {
                    /**
                     * Creates a new BasicEditorPaneUI.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for the JTextPane.
                     * @param c the JTextPane component
                     * @return the UI
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to lookup properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("EditorPane")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    /**
                     * {@inheritDoc}
                     * @since 1.5
                     */
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    /**
                     * {@inheritDoc}
                     * @since 1.5
                     */
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Fetches the EditorKit for the UI.  This is whatever is
                     * currently set in the associated JEditorPane.
                     * @return the editor capabilities
                     * @see TextUI#getEditorKit
                     */
                    // @ts-ignore
                    getEditorKit(tc: javax.swing.text.JTextComponent): javax.swing.text.EditorKit
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * This is implemented to rebuild the ActionMap based upon an
                     * EditorKit change.
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
