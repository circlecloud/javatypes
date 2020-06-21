declare namespace javax {
    namespace swing {
        namespace JComboBox {
            /**
             * The interface that defines a <code>KeySelectionManager</code>.
             * To qualify as a <code>KeySelectionManager</code>,
             * the class needs to implement the method
             * that identifies the list index given a character and the
             * combo box data model.
             */
            // @ts-ignore
            interface KeySelectionManager {
                /**
                 * Given <code>aKey</code> and the model, returns the row
                 * that should become selected. Return -1 if no match was
                 * found.
                 * @param aKey  a char value, usually indicating a keyboard key that
                 *                was pressed
                 * @param aModel a ComboBoxModel -- the component's data model, containing
                 *                the list of selectable items
                 * @return an int equal to the selected row, where 0 is the
                 *          first item and -1 is none.
                 */
                // @ts-ignore
                selectionForKey(aKey: string, aModel: javax.swing.ComboBoxModel<any>): number /*int*/
            }
        }
    }
}
