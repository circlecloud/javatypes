declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Basis of a look and feel for a JTextField.
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
                class MetalTextFieldUI extends javax.swing.plaf.basic.BasicTextFieldUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
