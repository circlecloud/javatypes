declare namespace javax {
    namespace swing {
        /**
         * The default editor for table and tree cells.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Alan Chung
         * @author Philip Milne
         */
        // @ts-ignore
        class DefaultCellEditor extends javax.swing.AbstractCellEditor implements javax.swing.table.TableCellEditor, javax.swing.tree.TreeCellEditor {
            /**
             * Constructs a <code>DefaultCellEditor</code> that uses a text field.
             * @param textField  a <code>JTextField</code> object
             */
            // @ts-ignore
            constructor(textField: javax.swing.JTextField)
            /**
             * Constructs a <code>DefaultCellEditor</code> object that uses a check box.
             * @param checkBox  a <code>JCheckBox</code> object
             */
            // @ts-ignore
            constructor(checkBox: javax.swing.JCheckBox)
            /**
             * Constructs a <code>DefaultCellEditor</code> object that uses a
             * combo box.
             * @param comboBox  a <code>JComboBox</code> object
             */
            // @ts-ignore
            constructor(comboBox: javax.swing.JComboBox<any>)
            /**
             * The Swing component being edited.
             */
            // @ts-ignore
            editorComponent: javax.swing.JComponent
            /**
             * The delegate class which handles all methods sent from the
             * <code>CellEditor</code>.
             */
            // @ts-ignore
            delegate: javax.swing.DefaultCellEditor.EditorDelegate
            /**
             * An integer specifying the number of clicks needed to start editing.
             * Even if <code>clickCountToStart</code> is defined as zero, it
             * will not initiate until a click occurs.
             */
            // @ts-ignore
            clickCountToStart: number /*int*/
            /**
             * Returns a reference to the editor component.
             * @return the editor <code>Component</code>
             */
            // @ts-ignore
            public getComponent(): java.awt.Component
            /**
             * Specifies the number of clicks needed to start editing.
             * @param count  an int specifying the number of clicks needed to start editing
             * @see #getClickCountToStart
             */
            // @ts-ignore
            public setClickCountToStart(count: number /*int*/): void
            /**
             * Returns the number of clicks needed to start editing.
             * @return the number of clicks needed to start editing
             */
            // @ts-ignore
            public getClickCountToStart(): number /*int*/
            /**
             * Forwards the message from the <code>CellEditor</code> to
             * the <code>delegate</code>.
             * @see EditorDelegate#getCellEditorValue
             */
            // @ts-ignore
            public getCellEditorValue(): any
            /**
             * Forwards the message from the <code>CellEditor</code> to
             * the <code>delegate</code>.
             * @see EditorDelegate#isCellEditable(EventObject)
             */
            // @ts-ignore
            public isCellEditable(anEvent: java.util.EventObject): boolean
            /**
             * Forwards the message from the <code>CellEditor</code> to
             * the <code>delegate</code>.
             * @see EditorDelegate#shouldSelectCell(EventObject)
             */
            // @ts-ignore
            public shouldSelectCell(anEvent: java.util.EventObject): boolean
            /**
             * Forwards the message from the <code>CellEditor</code> to
             * the <code>delegate</code>.
             * @see EditorDelegate#stopCellEditing
             */
            // @ts-ignore
            public stopCellEditing(): boolean
            /**
             * Forwards the message from the <code>CellEditor</code> to
             * the <code>delegate</code>.
             * @see EditorDelegate#cancelCellEditing
             */
            // @ts-ignore
            public cancelCellEditing(): void
            /**
             * Implements the <code>TreeCellEditor</code> interface.
             */
            // @ts-ignore
            public getTreeCellEditorComponent(tree: javax.swing.JTree, value: java.lang.Object | any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number /*int*/): java.awt.Component
            /**
             * Implements the <code>TableCellEditor</code> interface.
             */
            // @ts-ignore
            public getTableCellEditorComponent(table: javax.swing.JTable, value: java.lang.Object | any, isSelected: boolean, row: number /*int*/, column: number /*int*/): java.awt.Component
        }
    }
}
