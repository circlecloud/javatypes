declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * Provides the look and feel for a plain text editor.  In this
                 * implementation the default UI is extended to act as a simple
                 * view factory.
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
                class BasicTextAreaUI extends javax.swing.plaf.basic.BasicTextUI {
                    /**
                     * Constructs a new BasicTextAreaUI object.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JTextArea.
                     * @param ta a text area
                     * @return the UI
                     */
                    // @ts-ignore
                    createUI(ta: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Fetches the name used as a key to look up properties through the
                     * UIManager.  This is used as a prefix to all the standard
                     * text properties.
                     * @return the name ("TextArea")
                     */
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * This is implemented to rebuild the View when the
                     * <em>WrapLine</em> or the <em>WrapStyleWord</em> property changes.
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                    /**
                     * The method is overridden to take into account caret width.
                     * @param c the editor component
                     * @return the preferred size
                     * @throws IllegalArgumentException if invalid value is passed
                     * @since 1.5
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * The method is overridden to take into account caret width.
                     * @param c the editor component
                     * @return the minimum size
                     * @throws IllegalArgumentException if invalid value is passed
                     * @since 1.5
                     */
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Creates the view for an element.  Returns a WrappedPlainView or
                     * PlainView.
                     * @param elem the element
                     * @return the view
                     */
                    // @ts-ignore
                    create(elem: javax.swing.text.Element): javax.swing.text.View
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                }
            }
        }
    }
}
