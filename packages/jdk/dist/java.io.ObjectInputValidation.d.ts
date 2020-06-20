declare namespace java {
    namespace io {
        /**
         * Callback interface to allow validation of objects within a graph.
         * Allows an object to be called when a complete graph of objects has
         * been deserialized.
         * @author unascribed
         * @see ObjectInputStream
         * @see ObjectInputStream#registerValidation(java.io.ObjectInputValidation, int)
         * @since JDK1.1
         */
        // @ts-ignore
        interface ObjectInputValidation {
            /**
             * Validates the object.
             * @exception InvalidObjectException If the object cannot validate itself.
             */
            // @ts-ignore
            validateObject(): void
        }
    }
}
