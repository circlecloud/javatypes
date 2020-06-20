declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * The listener interface for receiving
             * <code>BeanContextServiceRevokedEvent</code> objects. A class that is
             * interested in processing a <code>BeanContextServiceRevokedEvent</code>
             * implements this interface.
             */
            // @ts-ignore
            interface BeanContextServiceRevokedListener extends java.util.EventListener {
                /**
                 * The service named has been revoked. getService requests for
                 * this service will no longer be satisfied.
                 * @param bcsre the <code>BeanContextServiceRevokedEvent</code> received
                 *  by this listener.
                 */
                // @ts-ignore
                serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
            }
        }
    }
}
