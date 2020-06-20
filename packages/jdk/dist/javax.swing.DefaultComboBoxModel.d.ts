declare namespace javax {
    namespace swing {
        /**
         * The default model for combo boxes.
         * @param <E> the type of the elements of this model
         * @author Arnaud Weber
         * @author Tom Santos
         */
        // @ts-ignore
        class DefaultComboBoxModel<E> extends javax.swing.AbstractListModel<E> implements javax.swing.MutableComboBoxModel<E>, java.io.Serializable {
            /**
             * Constructs an empty DefaultComboBoxModel object.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a DefaultComboBoxModel object initialized with
             * an array of objects.
             * @param items  an array of Object objects
             */
            // @ts-ignore
            constructor(items: E[])
            /**
             * Constructs a DefaultComboBoxModel object initialized with
             * a vector.
             * @param v  a Vector object ...
             */
            // @ts-ignore
            constructor(v: java.util.Vector<E>)
            /**
             * Set the value of the selected item. The selected item may be null.
             * @param anObject The combo box value or null for no selection.
             */
            // @ts-ignore
            setSelectedItem(anObject: any): void
            // @ts-ignore
            getSelectedItem(): java.lang.Object
            // @ts-ignore
            getSize(): int
            // @ts-ignore
            getElementAt(index: number /*int*/): E
            /**
             * Returns the index-position of the specified object in the list.
             * @param anObject
             * @return an int representing the index position, where 0 is
             *          the first position
             */
            // @ts-ignore
            getIndexOf(anObject: any): int
            // @ts-ignore
            addElement(anObject: E): void
            // @ts-ignore
            insertElementAt(anObject: E, index: number /*int*/): void
            // @ts-ignore
            removeElementAt(index: number /*int*/): void
            // @ts-ignore
            removeElement(anObject: any): void
            /**
             * Empties the list.
             */
            // @ts-ignore
            removeAllElements(): void
        }
    }
}
