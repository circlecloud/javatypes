declare namespace javax {
    namespace swing {
        namespace DefaultCellEditor {
            /**
             * The protected <code>EditorDelegate</code> class.
             */
            // @ts-ignore
            class EditorDelegate extends java.lang.Object implements java.awt.event.ActionListener, java.awt.event.ItemListener, java.io.Serializable {
                // @ts-ignore
                constructor()
                /**
                 * The value of this cell.
                 */
                // @ts-ignore
                value: any
                /**
                 * Returns the value of this cell.
                 * @return the value of this cell
                 */
                // @ts-ignore
                getCellEditorValue(): java.lang.Object
                /**
                 * Sets the value of this cell.
                 * @param value the new value of this cell
                 */
                // @ts-ignore
                setValue(value: any): void
                /**
                 * Returns true if <code>anEvent</code> is <b>not</b> a
                 * <code>MouseEvent</code>.  Otherwise, it returns true
                 * if the necessary number of clicks have occurred, and
                 * returns false otherwise.
                 * @param anEvent         the event
                 * @return true  if cell is ready for editing, false otherwise
                 * @see #setClickCountToStart
                 * @see #shouldSelectCell
                 */
                // @ts-ignore
                isCellEditable(anEvent: java.util.EventObject): boolean
                /**
                 * Returns true to indicate that the editing cell may
                 * be selected.
                 * @param anEvent         the event
                 * @return true
                 * @see #isCellEditable
                 */
                // @ts-ignore
                shouldSelectCell(anEvent: java.util.EventObject): boolean
                /**
                 * Returns true to indicate that editing has begun.
                 * @param anEvent          the event
                 */
                // @ts-ignore
                startCellEditing(anEvent: java.util.EventObject): boolean
                /**
                 * Stops editing and
                 * returns true to indicate that editing has stopped.
                 * This method calls <code>fireEditingStopped</code>.
                 * @return true
                 */
                // @ts-ignore
                stopCellEditing(): boolean
                /**
                 * Cancels editing.  This method calls <code>fireEditingCanceled</code>.
                 */
                // @ts-ignore
                cancelCellEditing(): void
                /**
                 * When an action is performed, editing is ended.
                 * @param e the action event
                 * @see #stopCellEditing
                 */
                // @ts-ignore
                actionPerformed(e: java.awt.event.ActionEvent): void
                /**
                 * When an item's state changes, editing is ended.
                 * @param e the action event
                 * @see #stopCellEditing
                 */
                // @ts-ignore
                itemStateChanged(e: java.awt.event.ItemEvent): void
            }
        }
    }
}
