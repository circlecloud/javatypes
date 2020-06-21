declare namespace javax {
    namespace swing {
        /**
         * This interface defines the methods components like JList use
         * to get the value of each cell in a list and the length of the list.
         * Logically the model is a vector, indices vary from 0 to
         * ListDataModel.getSize() - 1.  Any change to the contents or
         * length of the data model must be reported to all of the
         * ListDataListeners.
         * @param <E> the type of the elements of this model
         * @author Hans Muller
         * @see JList
         */
        // @ts-ignore
        interface ListModel<E> {
            /**
             * Returns the length of the list.
             * @return the length of the list
             */
            // @ts-ignore
            getSize(): number /*int*/
            /**
             * Returns the value at the specified index.
             * @param index the requested index
             * @return the value at <code>index</code>
             */
            // @ts-ignore
            getElementAt(index: number /*int*/): E
            /**
             * Adds a listener to the list that's notified each time a change
             * to the data model occurs.
             * @param l the <code>ListDataListener</code> to be added
             */
            // @ts-ignore
            addListDataListener(l: javax.swing.event.ListDataListener): void
            /**
             * Removes a listener from the list that's notified each time a
             * change to the data model occurs.
             * @param l the <code>ListDataListener</code> to be removed
             */
            // @ts-ignore
            removeListDataListener(l: javax.swing.event.ListDataListener): void
        }
    }
}
