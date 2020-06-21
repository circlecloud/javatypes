declare namespace java {
    namespace awt {
        /**
         * The interface for objects which contain a set of items for
         * which zero or more can be selected.
         * @author Amy Fowler
         */
        // @ts-ignore
        interface ItemSelectable {
            /**
             * Returns the selected items or <code>null</code> if no
             * items are selected.
             */
            // @ts-ignore
            getSelectedObjects(): any[]
            /**
             * Adds a listener to receive item events when the state of an item is
             * changed by the user. Item events are not sent when an item's
             * state is set programmatically.  If <code>l</code> is
             * <code>null</code>, no exception is thrown and no action is performed.
             * @param l the listener to receive events
             * @see ItemEvent
             */
            // @ts-ignore
            addItemListener(l: java.awt.event.ItemListener): void
            /**
             * Removes an item listener.
             * If <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * @param l the listener being removed
             * @see ItemEvent
             */
            // @ts-ignore
            removeItemListener(l: java.awt.event.ItemListener): void
        }
    }
}
