declare namespace javax {
    namespace servlet {
        /**
         * Implementations of this interface receive notifications of changes to the
         * attribute list on the servlet context of a web application. To receive
         * notification events, the implementation class must be configured in the
         * deployment descriptor for the web application.
         * @see ServletContextAttributeEvent
         * @since v 2.3
         */
        // @ts-ignore
        interface ServletContextAttributeListener extends java.util.EventListener {
            /**
             * Notification that a new attribute was added to the servlet context.
             * Called after the attribute is added.
             * The default implementation is a NO-OP.
             * @param scae Information about the new attribute
             */
            // @ts-ignore
            attributeAdded(scae: javax.servlet.ServletContextAttributeEvent): void
            /**
             * Notification that an existing attribute has been removed from the servlet
             * context. Called after the attribute is removed.
             * The default implementation is a NO-OP.
             * @param scae Information about the removed attribute
             */
            // @ts-ignore
            attributeRemoved(scae: javax.servlet.ServletContextAttributeEvent): void
            /**
             * Notification that an attribute on the servlet context has been replaced.
             * Called after the attribute is replaced.
             * The default implementation is a NO-OP.
             * @param scae Information about the replaced attribute
             */
            // @ts-ignore
            attributeReplaced(scae: javax.servlet.ServletContextAttributeEvent): void
        }
    }
}
