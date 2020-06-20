declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Adds to CellEditor the extensions necessary to configure an editor
             * in a tree.
             * @see javax.swing.JTree
             * @author Scott Violet
             */
            // @ts-ignore
            interface TreeCellEditor extends javax.swing.CellEditor {
                /**
                 * Sets an initial <I>value</I> for the editor.  This will cause
                 * the editor to stopEditing and lose any partially edited value
                 * if the editor is editing when this method is called. <p>
                 * Returns the component that should be added to the client's
                 * Component hierarchy.  Once installed in the client's hierarchy
                 * this component will then be able to draw and receive user input.
                 * @param tree            the JTree that is asking the editor to edit;
                 *                           this parameter can be null
                 * @param value           the value of the cell to be edited
                 * @param isSelected      true if the cell is to be rendered with
                 *                           selection highlighting
                 * @param expanded        true if the node is expanded
                 * @param leaf            true if the node is a leaf node
                 * @param row             the row index of the node being edited
                 * @return the component for editing
                 */
                // @ts-ignore
                getTreeCellEditorComponent(tree: javax.swing.JTree, value: any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number /*int*/): java.awt.Component
            }
        }
    }
}
