declare namespace javax {
    namespace swing {
        namespace JToggleButton {
            /**
             * The ToggleButton model
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class ToggleButtonModel extends javax.swing.DefaultButtonModel {
                /**
                 * Creates a new ToggleButton Model
                 */
                // @ts-ignore
                constructor()
                /**
                 * Checks if the button is selected.
                 */
                // @ts-ignore
                isSelected(): boolean
                /**
                 * Sets the selected state of the button.
                 * @param b true selects the toggle button,
                 *           false deselects the toggle button.
                 */
                // @ts-ignore
                setSelected(b: boolean): void
                /**
                 * Sets the pressed state of the toggle button.
                 */
                // @ts-ignore
                setPressed(b: boolean): void
            }
        }
    }
}
