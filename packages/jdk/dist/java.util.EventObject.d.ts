declare namespace java {
    namespace util {
        /**
         * <p>
         * The root class from which all event state objects shall be derived.
         * <p>
         * All Events are constructed with a reference to the object, the "source",
         * that is logically deemed to be the object upon which the Event in question
         * initially occurred upon.
         * @since JDK1.1
         */
        // @ts-ignore
        class EventObject extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs a prototypical Event.
             * @param source    The object on which the Event initially occurred.
             * @exception IllegalArgumentException  if source is null.
             */
            // @ts-ignore
            constructor(source: any)
            /**
             * The object on which the Event initially occurred.
             */
            // @ts-ignore
            source: any
            /**
             * The object on which the Event initially occurred.
             * @return The object on which the Event initially occurred.
             */
            // @ts-ignore
            getSource(): java.lang.Object
            /**
             * Returns a String representation of this EventObject.
             * @return A a String representation of this EventObject.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
