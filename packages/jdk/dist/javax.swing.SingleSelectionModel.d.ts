declare namespace javax {
    namespace swing {
        /**
         * A model that supports at most one indexed selection.
         * @author Dave Moore
         */
        // @ts-ignore
        interface SingleSelectionModel {
            /**
             * Returns the model's selection.
             * @return the model's selection, or -1 if there is no selection
             * @see #setSelectedIndex
             */
            // @ts-ignore
            getSelectedIndex(): number /*int*/
            /**
             * Sets the model's selected index to <I>index</I>.
             * Notifies any listeners if the model changes
             * @param index an int specifying the model selection
             * @see #getSelectedIndex
             * @see #addChangeListener
             */
            // @ts-ignore
            setSelectedIndex(index: number /*int*/): void
            /**
             * Clears the selection (to -1).
             */
            // @ts-ignore
            clearSelection(): void
            /**
             * Returns true if the selection model currently has a selected value.
             * @return true if a value is currently selected
             */
            // @ts-ignore
            isSelected(): boolean
            /**
             * Adds <I>listener</I> as a listener to changes in the model.
             * @param listener the ChangeListener to add
             */
            // @ts-ignore
            addChangeListener(listener: javax.swing.event.ChangeListener): void
            /**
             * Removes <I>listener</I> as a listener to changes in the model.
             * @param listener the ChangeListener to remove
             */
            // @ts-ignore
            removeChangeListener(listener: javax.swing.event.ChangeListener): void
        }
    }
}
