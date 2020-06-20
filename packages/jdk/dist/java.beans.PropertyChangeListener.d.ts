declare namespace java {
    namespace beans {
        /**
         * A "PropertyChange" event gets fired whenever a bean changes a "bound"
         * property.  You can register a PropertyChangeListener with a source
         * bean so as to be notified of any bound property updates.
         */
        // @ts-ignore
        interface PropertyChangeListener extends java.util.EventListener {
            /**
             * This method gets called when a bound property is changed.
             * @param evt A PropertyChangeEvent object describing the event source
             *           and the property that has changed.
             */
            // @ts-ignore
            propertyChange(evt: java.beans.PropertyChangeEvent): void
        }
    }
}
