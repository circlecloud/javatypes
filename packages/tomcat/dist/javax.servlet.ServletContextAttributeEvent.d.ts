declare namespace javax {
    namespace servlet {
        /**
         * This is the event class for notifications about changes to the attributes of
         * the servlet context of a web application.
         * @see ServletContextAttributeListener
         * @since v 2.3
         */
        // @ts-ignore
        class ServletContextAttributeEvent extends javax.servlet.ServletContextEvent {
            /**
             * Construct a ServletContextAttributeEvent from the given context for the
             * given attribute name and attribute value.
             * @param source The ServletContext associated with this attribute event
             * @param name   The name of the servlet context attribute
             * @param value  The value of the servlet context attribute
             */
            // @ts-ignore
            constructor(source: javax.servlet.ServletContext, name: java.lang.String | string, value: java.lang.Object | any)
            /**
             * Return the name of the attribute that changed on the ServletContext.
             * @return The name of the attribute that changed
             */
            // @ts-ignore
            public getName(): string
            /**
             * Returns the value of the attribute that has been added, removed, or
             * replaced.
             * @return If the attribute was added, this is the value of the attribute.
             *          If the attribute was removed, this is the value of the removed
             *          attribute. If the attribute was replaced, this is the old value
             *          of the attribute.
             */
            // @ts-ignore
            public getValue(): any
        }
    }
}
