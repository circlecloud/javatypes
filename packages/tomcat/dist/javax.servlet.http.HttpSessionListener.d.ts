declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Implementations of this interface are notified of changes to the list of
             * active sessions in a web application. To receive notification events, the
             * implementation class must be configured in the deployment descriptor for the
             * web application.
             * @see HttpSessionEvent
             * @since v 2.3
             */
            // @ts-ignore
            interface HttpSessionListener extends java.util.EventListener {
                /**
                 * Notification that a session was created.
                 * The default implementation is a NO-OP.
                 * @param se
                 *             the notification event
                 */
                // @ts-ignore
                sessionCreated(se: javax.servlet.http.HttpSessionEvent): void
                /**
                 * Notification that a session is about to be invalidated.
                 * The default implementation is a NO-OP.
                 * @param se
                 *             the notification event
                 */
                // @ts-ignore
                sessionDestroyed(se: javax.servlet.http.HttpSessionEvent): void
            }
        }
    }
}
