declare namespace java {
    namespace util {
        /**
         * An abstract wrapper class for an {@code EventListener} class
         * which associates a set of additional parameters with the listener.
         * Subclasses must provide the storage and accessor methods
         * for the additional arguments or parameters.
         * <p>
         * For example, a bean which supports named properties
         * would have a two argument method signature for adding
         * a {@code PropertyChangeListener} for a property:
         * <pre>
         * public void addPropertyChangeListener(String propertyName,
         * PropertyChangeListener listener)
         * </pre>
         * If the bean also implemented the zero argument get listener method:
         * <pre>
         * public PropertyChangeListener[] getPropertyChangeListeners()
         * </pre>
         * then the array may contain inner {@code PropertyChangeListeners}
         * which are also {@code PropertyChangeListenerProxy} objects.
         * <p>
         * If the calling method is interested in retrieving the named property
         * then it would have to test the element to see if it is a proxy class.
         * @since 1.4
         */
        // @ts-ignore
        class EventListenerProxy<T extends java.util.EventListener> extends java.lang.Object implements java.util.EventListener {
            /**
             * Creates a proxy for the specified listener.
             * @param listener  the listener object
             */
            // @ts-ignore
            constructor(listener: T extends java.util.EventListener)
            /**
             * Returns the listener associated with the proxy.
             * @return the listener associated with the proxy
             */
            // @ts-ignore
            getListener(): T
        }
    }
}
