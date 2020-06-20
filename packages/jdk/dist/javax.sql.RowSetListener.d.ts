declare namespace javax {
    namespace sql {
        /**
         * An interface that must be implemented by a
         * component that wants to be notified when a significant
         * event happens in the life of a <code>RowSet</code> object.
         * A component becomes a listener by being registered with a
         * <code>RowSet</code> object via the method <code>RowSet.addRowSetListener</code>.
         * How a registered component implements this interface determines what it does
         * when it is notified of an event.
         * @since 1.4
         */
        // @ts-ignore
        interface RowSetListener extends java.util.EventListener {
            /**
             * Notifies registered listeners that a <code>RowSet</code> object
             * in the given <code>RowSetEvent</code> object has changed its entire contents.
             * <P>
             * The source of the event can be retrieved with the method
             * <code>event.getSource</code>.
             * @param event a <code>RowSetEvent</code> object that contains
             *          the <code>RowSet</code> object that is the source of the event
             */
            // @ts-ignore
            rowSetChanged(event: javax.sql.RowSetEvent): void
            /**
             * Notifies registered listeners that a <code>RowSet</code> object
             * has had a change in one of its rows.
             * <P>
             * The source of the event can be retrieved with the method
             * <code>event.getSource</code>.
             * @param event a <code>RowSetEvent</code> object that contains
             *          the <code>RowSet</code> object that is the source of the event
             */
            // @ts-ignore
            rowChanged(event: javax.sql.RowSetEvent): void
            /**
             * Notifies registered listeners that a <code>RowSet</code> object's
             * cursor has moved.
             * <P>
             * The source of the event can be retrieved with the method
             * <code>event.getSource</code>.
             * @param event a <code>RowSetEvent</code> object that contains
             *          the <code>RowSet</code> object that is the source of the event
             */
            // @ts-ignore
            cursorMoved(event: javax.sql.RowSetEvent): void
        }
    }
}
