declare namespace javax {
    namespace swing {
        /**
         * A base class for <code>CellEditors</code>, providing default
         * implementations for the methods in the <code>CellEditor</code>
         * interface except <code>getCellEditorValue()</code>.
         * Like the other abstract implementations in Swing, also manages a list
         * of listeners.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @author Philip Milne
         * @since 1.3
         */
        // @ts-ignore
        abstract class AbstractCellEditor extends java.lang.Object implements javax.swing.CellEditor, java.io.Serializable {
            // @ts-ignore
            constructor()
            // @ts-ignore
            listenerList: javax.swing.event.EventListenerList
            // @ts-ignore
            changeEvent: javax.swing.event.ChangeEvent
            /**
             * Returns true.
             * @param e  an event object
             * @return true
             */
            // @ts-ignore
            public isCellEditable(e: java.util.EventObject): boolean
            /**
             * Returns true.
             * @param anEvent  an event object
             * @return true
             */
            // @ts-ignore
            public shouldSelectCell(anEvent: java.util.EventObject): boolean
            /**
             * Calls <code>fireEditingStopped</code> and returns true.
             * @return true
             */
            // @ts-ignore
            public stopCellEditing(): boolean
            /**
             * Calls <code>fireEditingCanceled</code>.
             */
            // @ts-ignore
            public cancelCellEditing(): void
            /**
             * Adds a <code>CellEditorListener</code> to the listener list.
             * @param l  the new listener to be added
             */
            // @ts-ignore
            public addCellEditorListener(l: javax.swing.event.CellEditorListener): void
            /**
             * Removes a <code>CellEditorListener</code> from the listener list.
             * @param l  the listener to be removed
             */
            // @ts-ignore
            public removeCellEditorListener(l: javax.swing.event.CellEditorListener): void
            /**
             * Returns an array of all the <code>CellEditorListener</code>s added
             * to this AbstractCellEditor with addCellEditorListener().
             * @return all of the <code>CellEditorListener</code>s added or an empty
             *          array if no listeners have been added
             * @since 1.4
             */
            // @ts-ignore
            public getCellEditorListeners(): javax.swing.event.CellEditorListener[]
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @see EventListenerList
             */
            // @ts-ignore
            fireEditingStopped(): void
            /**
             * Notifies all listeners that have registered interest for
             * notification on this event type.  The event instance
             * is created lazily.
             * @see EventListenerList
             */
            // @ts-ignore
            fireEditingCanceled(): void
        }
    }
}
