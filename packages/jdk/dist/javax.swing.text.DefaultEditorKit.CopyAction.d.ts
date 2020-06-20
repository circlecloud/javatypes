declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultEditorKit {
                /**
                 * Copies the selected region and place its contents
                 * into the system clipboard.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see DefaultEditorKit#copyAction
                 * @see DefaultEditorKit#getActions
                 */
                // @ts-ignore
                class CopyAction extends javax.swing.text.TextAction {
                    /**
                     * Create this object with the appropriate identifier.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * The operation to perform when this action is triggered.
                     * @param e the action event
                     */
                    // @ts-ignore
                    actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
