declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Objects that are bound to a session may listen to container events notifying
             * them that sessions will be passivated and that session will be activated. A
             * container that migrates session between VMs or persists sessions is required
             * to notify all attributes bound to sessions implementing
             * HttpSessionActivationListener.
             * @since 2.3
             */
            // @ts-ignore
            interface HttpSessionActivationListener extends java.util.EventListener {
                /**
                 * Notification that the session is about to be passivated.
                 * The default implementation is a NO-OP.
                 * @param se Information about the session this is about to be passivated
                 */
                // @ts-ignore
                sessionWillPassivate(se: javax.servlet.http.HttpSessionEvent): void
                /**
                 * Notification that the session has just been activated.
                 * The default implementation is a NO-OP.
                 * @param se Information about the session this has just been activated
                 */
                // @ts-ignore
                sessionDidActivate(se: javax.servlet.http.HttpSessionEvent): void
            }
        }
    }
}
