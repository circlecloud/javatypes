declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This event type is used by the BeanContextServicesListener in order to
             * identify the service being registered.
             * </p>
             */
            // @ts-ignore
            class BeanContextServiceAvailableEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Construct a <code>BeanContextAvailableServiceEvent</code>.
                 * @param bcs The context in which the service has become available
                 * @param sc A <code>Class</code> reference to the newly available service
                 */
                // @ts-ignore
                constructor(bcs: java.beans.beancontext.BeanContextServices, sc: java.lang.Class)
                /**
                 * A <code>Class</code> reference to the newly available service
                 */
                // @ts-ignore
                serviceClass: java.lang.Class
                /**
                 * Gets the source as a reference of type <code>BeanContextServices</code>.
                 * @return The context in which the service has become available
                 */
                // @ts-ignore
                getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
                /**
                 * Gets the service class that is the subject of this notification.
                 * @return A <code>Class</code> reference to the newly available service
                 */
                // @ts-ignore
                getServiceClass(): java.lang.Class
                /**
                 * Gets the list of service dependent selectors.
                 * @return the current selectors available from the service
                 */
                // @ts-ignore
                getCurrentServiceSelectors(): java.util.Iterator
            }
        }
    }
}
