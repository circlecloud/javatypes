declare namespace javax {
    namespace net {
        namespace ssl {
            /**
             * This interface is implemented by objects which want to know when
             * they are being bound or unbound from a SSLSession.  When either event
             * occurs via {@link SSLSession#putValue(String, Object)}
             * or {@link SSLSession#removeValue(String)}, the event is communicated
             * through a SSLSessionBindingEvent identifying the session.
             * @see SSLSession
             * @see SSLSessionBindingEvent
             * @since 1.4
             * @author Nathan Abramson
             * @author David Brownell
             */
            // @ts-ignore
            interface SSLSessionBindingListener extends java.util.EventListener {
                /**
                 * This is called to notify the listener that it is being bound into
                 * an SSLSession.
                 * @param event the event identifying the SSLSession into
                 *           which the listener is being bound.
                 */
                // @ts-ignore
                valueBound(event: javax.net.ssl.SSLSessionBindingEvent): void
                /**
                 * This is called to notify the listener that it is being unbound
                 * from a SSLSession.
                 * @param event the event identifying the SSLSession from
                 *           which the listener is being unbound.
                 */
                // @ts-ignore
                valueUnbound(event: javax.net.ssl.SSLSessionBindingEvent): void
            }
        }
    }
}
