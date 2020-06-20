declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This helper class provides a utility implementation of the
             * java.beans.beancontext.BeanContextServices interface.
             * </p>
             * <p>
             * Since this class directly implements the BeanContextServices interface,
             * the class can, and is intended to be used either by subclassing this
             * implementation, or via delegation of an instance of this class
             * from another through the BeanContextProxy interface.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             */
            // @ts-ignore
            class BeanContextServicesSupport extends java.beans.beancontext.BeanContextSupport implements java.beans.beancontext.BeanContextServices {
                /**
                 * <p>
                 * Construct a BeanContextServicesSupport instance
                 * </p>
                 * @param peer      The peer BeanContext we are supplying an implementation for, if null the this object is its own peer
                 * @param lcle      The current Locale for this BeanContext.
                 * @param dTime     The initial state, true if in design mode, false if runtime.
                 * @param visible   The initial visibility.
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale, dTime: boolean, visible: boolean)
                /**
                 * Create an instance using the specified Locale and design mode.
                 * @param peer      The peer BeanContext we are supplying an implementation for, if null the this object is its own peer
                 * @param lcle      The current Locale for this BeanContext.
                 * @param dtime     The initial state, true if in design mode, false if runtime.
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale, dtime: boolean)
                /**
                 * Create an instance using the specified locale
                 * @param peer      The peer BeanContext we are supplying an implementation for, if null the this object is its own peer
                 * @param lcle      The current Locale for this BeanContext.
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale)
                /**
                 * Create an instance with a peer
                 * @param peer      The peer BeanContext we are supplying an implementation for, if null the this object is its own peer
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices)
                /**
                 * Create an instance that is not a delegate of another object
                 */
                // @ts-ignore
                constructor()
                /**
                 * all accesses to the <code> protected transient HashMap services </code>
                 * field should be synchronized on that object
                 */
                // @ts-ignore
                services: java.util.HashMap
                /**
                 * The number of instances of a serializable <tt>BeanContextServceProvider</tt>.
                 */
                // @ts-ignore
                serializable: number /*int*/
                /**
                 * Delegate for the <tt>BeanContextServiceProvider</tt>.
                 */
                // @ts-ignore
                proxy: java.beans.beancontext.BeanContextServicesSupport.BCSSProxyServiceProvider
                /**
                 * List of <tt>BeanContextServicesListener</tt> objects.
                 */
                // @ts-ignore
                bcsListeners: java.util.ArrayList
                /**
                 * called by BeanContextSupport superclass during construction and
                 * deserialization to initialize subclass transient state.
                 * subclasses may envelope this method, but should not override it or
                 * call it directly.
                 */
                // @ts-ignore
                initialize(): void
                /**
                 * Gets the <tt>BeanContextServices</tt> associated with this
                 * <tt>BeanContextServicesSupport</tt>.
                 * @return the instance of <tt>BeanContext</tt>
                 *  this object is providing the implementation for.
                 */
                // @ts-ignore
                getBeanContextServicesPeer(): java.beans.beancontext.BeanContextServices
                /**
                 * <p>
                 * Subclasses can override this method to insert their own subclass
                 * of Child without having to override add() or the other Collection
                 * methods that add children to the set.
                 * </p>
                 * @param targetChild the child to create the Child on behalf of
                 * @param peer        the peer if the targetChild and peer are related by BeanContextProxy
                 */
                // @ts-ignore
                createBCSChild(targetChild: any, peer: any): java.beans.beancontext.BeanContextSupport.BCSChild
                /**
                 * subclasses can override this method to create new subclasses of
                 * BCSSServiceProvider without having to override addService() in
                 * order to instantiate.
                 * @param sc the class
                 * @param bcsp the service provider
                 * @return a service provider without overriding addService()
                 */
                // @ts-ignore
                createBCSSServiceProvider(sc: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider): java.beans.beancontext.BeanContextServicesSupport.BCSSServiceProvider
                /**
                 * add a BeanContextServicesListener
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                addBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void
                /**
                 * remove a BeanContextServicesListener
                 */
                // @ts-ignore
                removeBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void
                /**
                 * add a service
                 * @param serviceClass the service class
                 * @param bcsp the service provider
                 */
                // @ts-ignore
                addService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider): boolean
                /**
                 * add a service
                 * @param serviceClass the service class
                 * @param bcsp the service provider
                 * @param fireEvent whether or not an event should be fired
                 * @return true if the service was successfully added
                 */
                // @ts-ignore
                addService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider, fireEvent: boolean): boolean
                /**
                 * remove a service
                 * @param serviceClass the service class
                 * @param bcsp the service provider
                 * @param revokeCurrentServicesNow whether or not to revoke the service
                 */
                // @ts-ignore
                revokeService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider, revokeCurrentServicesNow: boolean): void
                /**
                 * has a service, which may be delegated
                 */
                // @ts-ignore
                hasService(serviceClass: java.lang.Class): boolean
                /**
                 * obtain a service which may be delegated
                 */
                // @ts-ignore
                getService(child: java.beans.beancontext.BeanContextChild, requestor: any, serviceClass: java.lang.Class, serviceSelector: any, bcsrl: java.beans.beancontext.BeanContextServiceRevokedListener): java.lang.Object
                /**
                 * release a service
                 */
                // @ts-ignore
                releaseService(child: java.beans.beancontext.BeanContextChild, requestor: any, service: any): void
                /**
                 * @return an iterator for all the currently registered service classes.
                 */
                // @ts-ignore
                getCurrentServiceClasses(): java.util.Iterator
                /**
                 * @return an iterator for all the currently available service selectors
                 *  (if any) available for the specified service.
                 */
                // @ts-ignore
                getCurrentServiceSelectors(serviceClass: java.lang.Class): java.util.Iterator
                /**
                 * BeanContextServicesListener callback, propagates event to all
                 * currently registered listeners and BeanContextServices children,
                 * if this BeanContextService does not already implement this service
                 * itself.
                 * subclasses may override or envelope this method to implement their
                 * own propagation semantics.
                 */
                // @ts-ignore
                serviceAvailable(bcssae: java.beans.beancontext.BeanContextServiceAvailableEvent): void
                /**
                 * BeanContextServicesListener callback, propagates event to all
                 * currently registered listeners and BeanContextServices children,
                 * if this BeanContextService does not already implement this service
                 * itself.
                 * subclasses may override or envelope this method to implement their
                 * own propagation semantics.
                 */
                // @ts-ignore
                serviceRevoked(bcssre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                /**
                 * Gets the <tt>BeanContextServicesListener</tt> (if any) of the specified
                 * child.
                 * @param child the specified child
                 * @return the BeanContextServicesListener (if any) of the specified child
                 */
                // @ts-ignore
                getChildBeanContextServicesListener(child: any): java.beans.beancontext.BeanContextServicesListener
                /**
                 * called from superclass child removal operations after a child
                 * has been successfully removed. called with child synchronized.
                 * This subclass uses this hook to immediately revoke any services
                 * being used by this child if it is a BeanContextChild.
                 * subclasses may envelope this method in order to implement their
                 * own child removal side-effects.
                 */
                // @ts-ignore
                childJustRemovedHook(child: any, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void
                /**
                 * called from setBeanContext to notify a BeanContextChild
                 * to release resources obtained from the nesting BeanContext.
                 * This method revokes any services obtained from its parent.
                 * subclasses may envelope this method to implement their own semantics.
                 */
                // @ts-ignore
                releaseBeanContextResources(): void
                /**
                 * called from setBeanContext to notify a BeanContextChild
                 * to allocate resources obtained from the nesting BeanContext.
                 * subclasses may envelope this method to implement their own semantics.
                 */
                // @ts-ignore
                initializeBeanContextResources(): void
                /**
                 * Fires a <tt>BeanContextServiceEvent</tt> notifying of a new service.
                 * @param serviceClass the service class
                 */
                // @ts-ignore
                fireServiceAdded(serviceClass: java.lang.Class): void
                /**
                 * Fires a <tt>BeanContextServiceAvailableEvent</tt> indicating that a new
                 * service has become available.
                 * @param bcssae the <tt>BeanContextServiceAvailableEvent</tt>
                 */
                // @ts-ignore
                fireServiceAdded(bcssae: java.beans.beancontext.BeanContextServiceAvailableEvent): void
                /**
                 * Fires a <tt>BeanContextServiceEvent</tt> notifying of a service being revoked.
                 * @param bcsre the <tt>BeanContextServiceRevokedEvent</tt>
                 */
                // @ts-ignore
                fireServiceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                /**
                 * Fires a <tt>BeanContextServiceRevokedEvent</tt>
                 * indicating that a particular service is
                 * no longer available.
                 * @param serviceClass the service class
                 * @param revokeNow whether or not the event should be revoked now
                 */
                // @ts-ignore
                fireServiceRevoked(serviceClass: java.lang.Class, revokeNow: boolean): void
                /**
                 * called from BeanContextSupport writeObject before it serializes the
                 * children ...
                 * This class will serialize any Serializable BeanContextServiceProviders
                 * herein.
                 * subclasses may envelope this method to insert their own serialization
                 * processing that has to occur prior to serialization of the children
                 */
                // @ts-ignore
                bcsPreSerializationHook(oos: java.io.ObjectOutputStream): void
                /**
                 * called from BeanContextSupport readObject before it deserializes the
                 * children ...
                 * This class will deserialize any Serializable BeanContextServiceProviders
                 * serialized earlier thus making them available to the children when they
                 * deserialized.
                 * subclasses may envelope this method to insert their own serialization
                 * processing that has to occur prior to serialization of the children
                 */
                // @ts-ignore
                bcsPreDeserializationHook(ois: java.io.ObjectInputStream): void
            }
        }
    }
}
