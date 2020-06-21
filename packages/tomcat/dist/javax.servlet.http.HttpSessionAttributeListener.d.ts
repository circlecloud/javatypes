declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * This listener interface can be implemented in order to get notifications of
             * changes to the attribute lists of sessions within this web application.
             * @since v 2.3
             */
            // @ts-ignore
            interface HttpSessionAttributeListener extends java.util.EventListener {
                /**
                 * Notification that an attribute has been added to a session. Called after
                 * the attribute is added.
                 * The default implementation is a NO-OP.
                 * @param se Information about the added attribute
                 */
                // @ts-ignore
                attributeAdded(se: javax.servlet.http.HttpSessionBindingEvent): void
                /**
                 * Notification that an attribute has been removed from a session. Called
                 * after the attribute is removed.
                 * The default implementation is a NO-OP.
                 * @param se Information about the removed attribute
                 */
                // @ts-ignore
                attributeRemoved(se: javax.servlet.http.HttpSessionBindingEvent): void
                /**
                 * Notification that an attribute has been replaced in a session. Called
                 * after the attribute is replaced.
                 * The default implementation is a NO-OP.
                 * @param se Information about the replaced attribute
                 */
                // @ts-ignore
                attributeReplaced(se: javax.servlet.http.HttpSessionBindingEvent): void
            }
        }
    }
}
