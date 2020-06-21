declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Events of this type are either sent to an object that implements
             * {@link HttpSessionBindingListener} when it is bound or unbound from a
             * session, or to a {@link HttpSessionAttributeListener} that has been
             * configured in the deployment descriptor when any attribute is bound, unbound
             * or replaced in a session.
             * <p>
             * The session binds the object by a call to
             * <code>HttpSession.setAttribute</code> and unbinds the object by a call to
             * <code>HttpSession.removeAttribute</code>.
             * @see HttpSession
             * @see HttpSessionBindingListener
             * @see HttpSessionAttributeListener
             */
            // @ts-ignore
            class HttpSessionBindingEvent extends javax.servlet.http.HttpSessionEvent {
                /**
                 * Constructs an event that notifies an object that it has been bound to or
                 * unbound from a session. To receive the event, the object must implement
                 * {@link HttpSessionBindingListener}.
                 * @param session
                 *             the session to which the object is bound or unbound
                 * @param name
                 *             the name with which the object is bound or unbound
                 * @see #getName()
                 * @see #getSession()
                 */
                // @ts-ignore
                constructor(session: javax.servlet.http.HttpSession, name: java.lang.String | string)
                /**
                 * Constructs an event that notifies an object that it has been bound to or
                 * unbound from a session. To receive the event, the object must implement
                 * {@link HttpSessionBindingListener}.
                 * @param session
                 *             the session to which the object is bound or unbound
                 * @param name
                 *             the name with which the object is bound or unbound
                 * @param value
                 *             the object that is bound or unbound
                 * @see #getName()
                 * @see #getSession()
                 * @see #getValue()
                 */
                // @ts-ignore
                constructor(session: javax.servlet.http.HttpSession, name: java.lang.String | string, value: java.lang.Object | any)
                /**
                 * Get the session that changed.
                 * @return The session that changed
                 */
                // @ts-ignore
                public getSession(): javax.servlet.http.HttpSession
                /**
                 * Returns the name with which the attribute is bound to or unbound from the
                 * session.
                 * @return a string specifying the name with which the object is bound to or
                 *          unbound from the session
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns the value of the attribute that has been added, removed or
                 * replaced.
                 * @return If the attribute was added (or bound), this is the value of the
                 *          attribute. If the attribute was removed (or unbound), this is the
                 *          value of the removed attribute. If the attribute was replaced,
                 *          this is the old value of the attribute.
                 * @since 2.3
                 */
                // @ts-ignore
                public getValue(): any
            }
        }
    }
}
