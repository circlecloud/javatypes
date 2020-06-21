declare namespace java {
    namespace beans {
        /**
         * A PropertyVetoException is thrown when a proposed change to a
         * property represents an unacceptable value.
         */
        // @ts-ignore
        class PropertyVetoException extends java.lang.Exception {
            /**
             * Constructs a <code>PropertyVetoException</code> with a
             * detailed message.
             * @param mess Descriptive message
             * @param evt A PropertyChangeEvent describing the vetoed change.
             */
            // @ts-ignore
            constructor(mess: java.lang.String | string, evt: java.beans.PropertyChangeEvent)
            /**
             * Gets the vetoed <code>PropertyChangeEvent</code>.
             * @return A PropertyChangeEvent describing the vetoed change.
             */
            // @ts-ignore
            getPropertyChangeEvent(): java.beans.PropertyChangeEvent
        }
    }
}
