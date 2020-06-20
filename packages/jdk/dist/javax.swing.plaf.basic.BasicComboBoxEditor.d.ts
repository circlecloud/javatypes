declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * The default editor for editable combo boxes. The editor is implemented as a JTextField.
                 * @author Arnaud Weber
                 * @author Mark Davidson
                 */
                // @ts-ignore
                class BasicComboBoxEditor extends java.lang.Object implements javax.swing.ComboBoxEditor, java.awt.event.FocusListener {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    editor: javax.swing.JTextField
                    // @ts-ignore
                    getEditorComponent(): java.awt.Component
                    /**
                     * Creates the internal editor component. Override this to provide
                     * a custom implementation.
                     * @return a new editor component
                     * @since 1.6
                     */
                    // @ts-ignore
                    createEditorComponent(): javax.swing.JTextField
                    /**
                     * Sets the item that should be edited.
                     * @param anObject the displayed value of the editor
                     */
                    // @ts-ignore
                    setItem(anObject: any): void
                    // @ts-ignore
                    getItem(): java.lang.Object
                    // @ts-ignore
                    selectAll(): void
                    // @ts-ignore
                    focusGained(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    focusLost(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    addActionListener(l: java.awt.event.ActionListener): void
                    // @ts-ignore
                    removeActionListener(l: java.awt.event.ActionListener): void
                }
            }
        }
    }
}
