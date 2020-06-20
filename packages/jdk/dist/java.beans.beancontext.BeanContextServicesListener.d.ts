declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * The listener interface for receiving
             * <code>BeanContextServiceAvailableEvent</code> objects.
             * A class that is interested in processing a
             * <code>BeanContextServiceAvailableEvent</code> implements this interface.
             */
            // @ts-ignore
            interface BeanContextServicesListener extends java.beans.beancontext.BeanContextServiceRevokedListener {
                /**
                 * The service named has been registered. getService requests for
                 * this service may now be made.
                 * @param bcsae the <code>BeanContextServiceAvailableEvent</code>
                 */
                // @ts-ignore
                serviceAvailable(bcsae: java.beans.beancontext.BeanContextServiceAvailableEvent): void
            }
        }
    }
}
