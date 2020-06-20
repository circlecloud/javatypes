declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultEditorKit {
                /**
                 * Places content into the associated document.
                 * If there is a selection, it is removed before
                 * the new content is added.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see DefaultEditorKit#insertContentAction
                 * @see DefaultEditorKit#getActions
                 */
                // @ts-ignore
                class InsertContentAction extends javax.swing.text.TextAction {
                    /**
                     * Creates this object with the appropriate identifier.
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
