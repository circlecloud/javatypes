declare namespace java {
    namespace beans {
        /**
         * An "IndexedPropertyChange" event gets delivered whenever a component that
         * conforms to the JavaBeans&trade; specification (a "bean") changes a bound
         * indexed property. This class is an extension of <code>PropertyChangeEvent</code>
         * but contains the index of the property that has changed.
         * <P>
         * Null values may be provided for the old and the new values if their
         * true values are not known.
         * <P>
         * An event source may send a null object as the name to indicate that an
         * arbitrary set of if its properties have changed.  In this case the
         * old and new values should also be null.
         * @since 1.5
         * @author Mark Davidson
         */
        // @ts-ignore
        class IndexedPropertyChangeEvent extends java.beans.PropertyChangeEvent {
            /**
             * Constructs a new <code>IndexedPropertyChangeEvent</code> object.
             * @param source  The bean that fired the event.
             * @param propertyName  The programmatic name of the property that
             *              was changed.
             * @param oldValue      The old value of the property.
             * @param newValue      The new value of the property.
             * @param index index of the property element that was changed.
             */
            // @ts-ignore
            constructor(source: any, propertyName: string, oldValue: any, newValue: any, index: number /*int*/)
            /**
             * Gets the index of the property that was changed.
             * @return The index specifying the property element that was
             *          changed.
             */
            // @ts-ignore
            getIndex(): int
        }
    }
}
