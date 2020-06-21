declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the look and feel for a styled text editor.
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
                class BasicTextPaneUI extends javax.swing.plaf.basic.BasicEditorPaneUI {
                    /**
                     * Creates a new BasicTextPaneUI.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for the JTextPane.
                     * @param c the JTextPane object
                     * @return the UI
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to lookup properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("TextPane")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): string
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * If the font, foreground or document has changed, the
                     * the appropriate property is set in the default style of
                     * the document.
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
