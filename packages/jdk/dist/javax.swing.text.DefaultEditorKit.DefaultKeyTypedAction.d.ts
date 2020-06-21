declare namespace javax {
    namespace swing {
        namespace text {
            namespace DefaultEditorKit {
                /**
                 * The action that is executed by default if
                 * a <em>key typed event</em> is received and there
                 * is no keymap entry.  There is a variation across
                 * different VM's in what gets sent as a <em>key typed</em>
                 * event, and this action tries to filter out the undesired
                 * events.  This filters the control characters and those
                 * with the ALT modifier.  It allows Control-Alt sequences
                 * through as these form legitimate unicode characters on
                 * some PC keyboards.
                 * <p>
                 * If the event doesn't get filtered, it will try to insert
                 * content into the text editor.  The content is fetched
                 * from the command string of the ActionEvent.  The text
                 * entry is done through the <code>replaceSelection</code>
                 * method on the target text component.  This is the
                 * action that will be fired for most text entry tasks.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see DefaultEditorKit#defaultKeyTypedAction
                 * @see DefaultEditorKit#getActions
                 * @see Keymap#setDefaultAction
                 * @see Keymap#getDefaultAction
                 */
                // @ts-ignore
                class DefaultKeyTypedAction extends javax.swing.text.TextAction {
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
                    public actionPerformed(e: java.awt.event.ActionEvent): void
                }
            }
        }
    }
}
