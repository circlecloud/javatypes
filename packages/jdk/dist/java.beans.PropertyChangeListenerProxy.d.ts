declare namespace java {
    namespace beans {
        /**
         * A class which extends the {@code EventListenerProxy}
         * specifically for adding a {@code PropertyChangeListener}
         * with a "bound" property.
         * Instances of this class can be added
         * as {@code PropertyChangeListener}s to a bean
         * which supports firing property change events.
         * <p>
         * If the object has a {@code getPropertyChangeListeners} method
         * then the array returned could be a mixture of {@code PropertyChangeListener}
         * and {@code PropertyChangeListenerProxy} objects.
         * @see java.util.EventListenerProxy
         * @see PropertyChangeSupport#getPropertyChangeListeners
         * @since 1.4
         */
        // @ts-ignore
        class PropertyChangeListenerProxy extends java.util.EventListenerProxy<java.beans.PropertyChangeListener> implements java.beans.PropertyChangeListener {
            /**
             * Constructor which binds the {@code PropertyChangeListener}
             * to a specific property.
             * @param propertyName  the name of the property to listen on
             * @param listener      the listener object
             */
            // @ts-ignore
            constructor(propertyName: java.lang.String | string, listener: java.beans.PropertyChangeListener)
            /**
             * Forwards the property change event to the listener delegate.
             * @param event  the property change event
             */
            // @ts-ignore
            public propertyChange(event: java.beans.PropertyChangeEvent): void
            /**
             * Returns the name of the named property associated with the listener.
             * @return the name of the named property associated with the listener
             */
            // @ts-ignore
            public getPropertyName(): string
        }
    }
}
