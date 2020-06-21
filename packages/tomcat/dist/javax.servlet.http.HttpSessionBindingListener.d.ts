declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Causes an object to be notified when it is bound to or unbound from a
             * session. The object is notified by an {@link HttpSessionBindingEvent} object.
             * This may be as a result of a servlet programmer explicitly unbinding an
             * attribute from a session, due to a session being invalidated, or due to a
             * session timing out.
             * @see HttpSession
             * @see HttpSessionBindingEvent
             */
            // @ts-ignore
            interface HttpSessionBindingListener extends java.util.EventListener {
                /**
                 * Notifies the object that it is being bound to a session and identifies
                 * the session.
                 * The default implementation is a NO-OP.
                 * @param event
                 *             the event that identifies the session
                 * @see #valueUnbound
                 */
                // @ts-ignore
                valueBound(event: javax.servlet.http.HttpSessionBindingEvent): void
                /**
                 * Notifies the object that it is being unbound from a session and
                 * identifies the session.
                 * The default implementation is a NO-OP.
                 * @param event
                 *             the event that identifies the session
                 * @see #valueBound
                 */
                // @ts-ignore
                valueUnbound(event: javax.servlet.http.HttpSessionBindingEvent): void
            }
        }
    }
}
