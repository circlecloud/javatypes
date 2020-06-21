declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This event is propagated to a SSLSessionBindingListener.
             * When a listener object is bound or unbound to an SSLSession by
             * {@link SSLSession#putValue(String, Object)}
             * or {@link SSLSession#removeValue(String)}, objects which
             * implement the SSLSessionBindingListener will be receive an
             * event of this type.  The event's <code>name</code> field is the
             * key in which the listener is being bound or unbound.
             * @see SSLSession
             * @see SSLSessionBindingListener
             * @since 1.4
             * @author Nathan Abramson
             * @author David Brownell
             */
            // @ts-ignore
            class SSLSessionBindingEvent extends java.util.EventObject {
                /**
                 * Constructs a new SSLSessionBindingEvent.
                 * @param session the SSLSession acting as the source of the event
                 * @param name the name to which the object is being bound or unbound
                 * @exception IllegalArgumentException  if <code>session</code> is null.
                 */
                // @ts-ignore
                constructor(session: javax.net.ssl.SSLSession, name: java.lang.String | string)
                /**
                 * Returns the name to which the object is being bound, or the name
                 * from which the object is being unbound.
                 * @return the name to which the object is being bound or unbound
                 */
                // @ts-ignore
                public getName(): string
                /**
                 * Returns the SSLSession into which the listener is being bound or
                 * from which the listener is being unbound.
                 * @return the <code>SSLSession</code>
                 */
                // @ts-ignore
                public getSession(): javax.net.ssl.SSLSession
            }
        }
    }
}
