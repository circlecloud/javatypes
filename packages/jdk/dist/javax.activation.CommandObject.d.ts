declare namespace javax {
    namespace activation {
        /**
         * JavaBeans components that are Activation Framework aware implement
         * this interface to find out which command verb they're being asked
         * to perform, and to obtain the DataHandler representing the
         * data they should operate on.  JavaBeans that don't implement
         * this interface may be used as well.  Such commands may obtain
         * the data using the Externalizable interface, or using an
         * application-specific method.<p>
         * @since 1.6
         */
        // @ts-ignore
        interface CommandObject {
            /**
             * Initialize the Command with the verb it is requested to handle
             * and the DataHandler that describes the data it will
             * operate on. <b>NOTE:</b> it is acceptable for the caller
             * to pass <i>null</i> as the value for <code>DataHandler</code>.
             * @param verb The Command Verb this object refers to.
             * @param dh The DataHandler.
             */
            // @ts-ignore
            setCommandContext(verb: java.lang.String | string, dh: javax.activation.DataHandler): void
        }
    }
}
