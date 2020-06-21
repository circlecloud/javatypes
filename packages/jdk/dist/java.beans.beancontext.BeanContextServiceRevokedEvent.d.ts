declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This event type is used by the
             * <code>BeanContextServiceRevokedListener</code> in order to
             * identify the service being revoked.
             * </p>
             */
            // @ts-ignore
            class BeanContextServiceRevokedEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Construct a <code>BeanContextServiceEvent</code>.
                 * @param bcs the <code>BeanContextServices</code>
                 *  from which this service is being revoked
                 * @param sc the service that is being revoked
                 * @param invalidate <code>true</code> for immediate revocation
                 */
                // @ts-ignore
                constructor(bcs: java.beans.beancontext.BeanContextServices, sc: java.lang.Class<any>, invalidate: boolean)
                /**
                 * A <code>Class</code> reference to the service that is being revoked.
                 */
                // @ts-ignore
                serviceClass: java.lang.Class<any>
                /**
                 * Gets the source as a reference of type <code>BeanContextServices</code>
                 * @return the <code>BeanContextServices</code> from which
                 *  this service is being revoked
                 */
                // @ts-ignore
                public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices
                /**
                 * Gets the service class that is the subject of this notification
                 * @return A <code>Class</code> reference to the
                 *  service that is being revoked
                 */
                // @ts-ignore
                public getServiceClass(): java.lang.Class<any>
                /**
                 * Checks this event to determine whether or not
                 * the service being revoked is of a particular class.
                 * @param service the service of interest (should be non-null)
                 * @return <code>true</code> if the service being revoked is of the
                 *  same class as the specified service
                 */
                // @ts-ignore
                public isServiceClass(service: java.lang.Class<any>): boolean
                /**
                 * Reports if the current service is being forcibly revoked,
                 * in which case the references are now invalidated and unusable.
                 * @return <code>true</code> if current service is being forcibly revoked
                 */
                // @ts-ignore
                public isCurrentServiceInvalidNow(): boolean
            }
        }
    }
}
