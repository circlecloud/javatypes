declare namespace javax {
    namespace swing {
        /**
         * A mutable version of <code>ComboBoxModel</code>.
         * @param <E> the type of the elements of this model
         * @author Tom Santos
         */
        // @ts-ignore
        interface MutableComboBoxModel<E> extends javax.swing.ComboBoxModel<E> {
            /**
             * Adds an item at the end of the model. The implementation of this method
             * should notify all registered <code>ListDataListener</code>s that the
             * item has been added.
             * @param item the item to be added
             */
            // @ts-ignore
            addElement(item: E): void
            /**
             * Removes an item from the model. The implementation of this method should
             * should notify all registered <code>ListDataListener</code>s that the
             * item has been removed.
             * @param obj the <code>Object</code> to be removed
             */
            // @ts-ignore
            removeElement(obj: java.lang.Object | any): void
            /**
             * Adds an item at a specific index.  The implementation of this method
             * should notify all registered <code>ListDataListener</code>s that the
             * item has been added.
             * @param item  the item to be added
             * @param index  location to add the object
             */
            // @ts-ignore
            insertElementAt(item: E, index: number /*int*/): void
            /**
             * Removes an item at a specific index. The implementation of this method
             * should notify all registered <code>ListDataListener</code>s that the
             * item has been removed.
             * @param index  location of the item to be removed
             */
            // @ts-ignore
            removeElementAt(index: number /*int*/): void
        }
    }
}
