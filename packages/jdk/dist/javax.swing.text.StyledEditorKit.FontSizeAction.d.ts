declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyledEditorKit {
                /**
                 * An action to set the font size in the associated
                 * JEditorPane.  This will use the size specified as
                 * the command string on the ActionEvent if there is one,
                 * otherwise the size that was initialized with will be used.
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
                class FontSizeAction extends javax.swing.text.StyledEditorKit.StyledTextAction {
                    /**
                     * Creates a new FontSizeAction.
                     * @param nm the action name
                     * @param size the font size
                     */
                    // @ts-ignore
                    constructor(nm: string, size: number /*int*/)
                    /**
                     * Sets the font size.
                     * @param e the action event
                     */
                    // @ts-ignore
                    actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
