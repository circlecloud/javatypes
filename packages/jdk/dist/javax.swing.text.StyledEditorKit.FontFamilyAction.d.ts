declare namespace javax {
    namespace swing {
        namespace text {
            namespace StyledEditorKit {
                /**
                 * An action to set the font family in the associated
                 * JEditorPane.  This will use the family specified as
                 * the command string on the ActionEvent if there is one,
                 * otherwise the family that was initialized with will be used.
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
                class FontFamilyAction extends javax.swing.text.StyledEditorKit.StyledTextAction {
                    /**
                     * Creates a new FontFamilyAction.
                     * @param nm the action name
                     * @param family the font family
                     */
                    // @ts-ignore
                    constructor(nm: java.lang.String | string, family: java.lang.String | string)
                    /**
                     * Sets the font family.
                     * @param e the event
                     */
                    // @ts-ignore
                    public actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
