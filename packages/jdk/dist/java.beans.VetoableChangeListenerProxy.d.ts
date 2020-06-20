declare namespace java {
    namespace beans {
        /**
         * A class which extends the {@code EventListenerProxy}
         * specifically for adding a {@code VetoableChangeListener}
         * with a "constrained" property.
         * Instances of this class can be added
         * as {@code VetoableChangeListener}s to a bean
         * which supports firing vetoable change events.
         * <p>
         * If the object has a {@code getVetoableChangeListeners} method
         * then the array returned could be a mixture of {@code VetoableChangeListener}
         * and {@code VetoableChangeListenerProxy} objects.
         * @see java.util.EventListenerProxy
         * @see VetoableChangeSupport#getVetoableChangeListeners
         * @since 1.4
         */
        // @ts-ignore
        class VetoableChangeListenerProxy extends java.util.EventListenerProxy<java.beans.VetoableChangeListener> implements java.beans.VetoableChangeListener {
            /**
             * Constructor which binds the {@code VetoableChangeListener}
             * to a specific property.
             * @param propertyName  the name of the property to listen on
             * @param listener      the listener object
             */
            // @ts-ignore
            constructor(propertyName: string, listener: java.beans.VetoableChangeListener)
            /**
             * Forwards the property change event to the listener delegate.
             * @param event  the property change event
             * @exception PropertyVetoException if the recipient wishes the property
             *                                   change to be rolled back
             */
            // @ts-ignore
            vetoableChange(event: java.beans.PropertyChangeEvent): void
            /**
             * Returns the name of the named property associated with the listener.
             * @return the name of the named property associated with the listener
             */
            // @ts-ignore
            getPropertyName(): java.lang.String
        }
    }
}
