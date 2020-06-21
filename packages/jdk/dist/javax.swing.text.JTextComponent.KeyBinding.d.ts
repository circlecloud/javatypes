declare namespace javax {
    namespace swing {
        namespace text {
            namespace JTextComponent {
                /**
                 * Binding record for creating key bindings.
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
                class KeyBinding extends java.lang.Object {
                    /**
                     * Creates a new key binding.
                     * @param key the key
                     * @param actionName the name of the action for the key
                     */
                    // @ts-ignore
                    constructor(key: javax.swing.KeyStroke, actionName: java.lang.String | string)
                    /**
                     * The key.
                     */
                    // @ts-ignore
                    public key: javax.swing.KeyStroke
                    /**
                     * The name of the action for the key.
                     */
                    // @ts-ignore
                    public actionName: java.lang.String | string
                }
            }
        }
    }
}
