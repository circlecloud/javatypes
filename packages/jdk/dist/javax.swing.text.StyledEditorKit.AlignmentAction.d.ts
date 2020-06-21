declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyledEditorKit {
                /**
                 * An action to set paragraph alignment.  This sets the
                 * <code>StyleConstants.Alignment</code> attribute for the
                 * currently selected range of the target JEditorPane.
                 * This is done by calling
                 * <code>StyledDocument.setParagraphAttributes</code>
                 * on the styled document associated with the target
                 * JEditorPane.
                 * <p>
                 * If the target text component is specified as the
                 * source of the ActionEvent and there is a command string,
                 * the command string will be interpreted as an integer
                 * that should be one of the legal values for the
                 * <code>StyleConstants.Alignment</code> attribute.
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
                class AlignmentAction extends javax.swing.text.StyledEditorKit.StyledTextAction {
                    /**
                     * Creates a new AlignmentAction.
                     * @param nm the action name
                     * @param a the alignment &gt;= 0
                     */
                    // @ts-ignore
                    constructor(nm: java.lang.String | string, a: number /*int*/)
                    /**
                     * Sets the alignment.
                     * @param e the action event
                     */
                    // @ts-ignore
                    public actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
