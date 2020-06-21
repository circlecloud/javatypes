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
                    public getEditorComponent(): java.awt.Component
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
                    public setItem(anObject: java.lang.Object | any): void
                    // @ts-ignore
                    public getItem(): any
                    // @ts-ignore
                    public selectAll(): void
                    // @ts-ignore
                    public focusGained(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    public focusLost(e: java.awt.event.FocusEvent): void
                    // @ts-ignore
                    public addActionListener(l: java.awt.event.ActionListener): void
                    // @ts-ignore
                    public removeActionListener(l: java.awt.event.ActionListener): void
                }
            }
        }
    }
}
