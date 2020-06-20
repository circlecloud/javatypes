declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyledEditorKit {
                /**
                 * An action to set foreground color.  This sets the
                 * <code>StyleConstants.Foreground</code> attribute for the
                 * currently selected range of the target JEditorPane.
                 * This is done by calling
                 * <code>StyledDocument.setCharacterAttributes</code>
                 * on the styled document associated with the target
                 * JEditorPane.
                 * <p>
                 * If the target text component is specified as the
                 * source of the ActionEvent and there is a command string,
                 * the command string will be interpreted as the foreground
                 * color.  It will be interpreted by called
                 * <code>Color.decode</code>, and should therefore be
                 * legal input for that method.
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
                class ForegroundAction extends javax.swing.text.StyledEditorKit.StyledTextAction {
                    /**
                     * Creates a new ForegroundAction.
                     * @param nm the action name
                     * @param fg the foreground color
                     */
                    // @ts-ignore
                    constructor(nm: string, fg: java.awt.Color)
                    /**
                     * Sets the foreground color.
                     * @param e the action event
                     */
                    // @ts-ignore
                    actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
