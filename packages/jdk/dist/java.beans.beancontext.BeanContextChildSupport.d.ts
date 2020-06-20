declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This is a general support class to provide support for implementing the
             * BeanContextChild protocol.
             * This class may either be directly subclassed, or encapsulated and delegated
             * to in order to implement this interface for a given component.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             * @see java.beans.beancontext.BeanContextServices
             * @see java.beans.beancontext.BeanContextChild
             */
            // @ts-ignore
            class BeanContextChildSupport extends java.lang.Object implements java.beans.beancontext.BeanContextChild, java.beans.beancontext.BeanContextServicesListener, java.io.Serializable {
                /**
                 * construct a BeanContextChildSupport where this class has been
                 * subclassed in order to implement the JavaBean component itself.
                 */
                // @ts-ignore
                constructor()
                /**
                 * construct a BeanContextChildSupport where the JavaBean component
                 * itself implements BeanContextChild, and encapsulates this, delegating
                 * that interface to this implementation
                 * @param bcc the underlying bean context child
                 */
                // @ts-ignore
                constructor(bcc: java.beans.beancontext.BeanContextChild)
                /**
                 * The <code>BeanContext</code> in which
                 * this <code>BeanContextChild</code> is nested.
                 */
                // @ts-ignore
                beanContextChildPeer: java.beans.beancontext.BeanContextChild
                /**
                 * The <tt>PropertyChangeSupport</tt> associated with this
                 * <tt>BeanContextChildSupport</tt>.
                 */
                // @ts-ignore
                pcSupport: java.beans.PropertyChangeSupport
                /**
                 * The <tt>VetoableChangeSupport</tt> associated with this
                 * <tt>BeanContextChildSupport</tt>.
                 */
                // @ts-ignore
                vcSupport: java.beans.VetoableChangeSupport
                /**
                 * The bean context.
                 */
                // @ts-ignore
                beanContext: java.beans.beancontext.BeanContext
                /**
                 * A flag indicating that there has been
                 * at least one <code>PropertyChangeVetoException</code>
                 * thrown for the attempted setBeanContext operation.
                 */
                // @ts-ignore
                rejectedSetBCOnce: boolean
                /**
                 * Sets the <code>BeanContext</code> for
                 * this <code>BeanContextChildSupport</code>.
                 * @param bc the new value to be assigned to the <code>BeanContext</code>
                 *  property
                 * @throws PropertyVetoException if the change is rejected
                 */
                // @ts-ignore
                setBeanContext(bc: java.beans.beancontext.BeanContext): void
                /**
                 * Gets the nesting <code>BeanContext</code>
                 * for this <code>BeanContextChildSupport</code>.
                 * @return the nesting <code>BeanContext</code> for
                 *  this <code>BeanContextChildSupport</code>.
                 */
                // @ts-ignore
                getBeanContext(): java.beans.beancontext.BeanContext
                /**
                 * Add a PropertyChangeListener for a specific property.
                 * The same listener object may be added more than once.  For each
                 * property,  the listener will be invoked the number of times it was added
                 * for that property.
                 * If <code>name</code> or <code>pcl</code> is null, no exception is thrown
                 * and no action is taken.
                 * @param name The name of the property to listen on
                 * @param pcl The <code>PropertyChangeListener</code> to be added
                 */
                // @ts-ignore
                addPropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void
                /**
                 * Remove a PropertyChangeListener for a specific property.
                 * If <code>pcl</code> was added more than once to the same event
                 * source for the specified property, it will be notified one less time
                 * after being removed.
                 * If <code>name</code> is null, no exception is thrown
                 * and no action is taken.
                 * If <code>pcl</code> is null, or was never added for the specified
                 * property, no exception is thrown and no action is taken.
                 * @param name The name of the property that was listened on
                 * @param pcl The PropertyChangeListener to be removed
                 */
                // @ts-ignore
                removePropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void
                /**
                 * Add a VetoableChangeListener for a specific property.
                 * The same listener object may be added more than once.  For each
                 * property,  the listener will be invoked the number of times it was added
                 * for that property.
                 * If <code>name</code> or <code>vcl</code> is null, no exception is thrown
                 * and no action is taken.
                 * @param name The name of the property to listen on
                 * @param vcl The <code>VetoableChangeListener</code> to be added
                 */
                // @ts-ignore
                addVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void
                /**
                 * Removes a <code>VetoableChangeListener</code>.
                 * If <code>pcl</code> was added more than once to the same event
                 * source for the specified property, it will be notified one less time
                 * after being removed.
                 * If <code>name</code> is null, no exception is thrown
                 * and no action is taken.
                 * If <code>vcl</code> is null, or was never added for the specified
                 * property, no exception is thrown and no action is taken.
                 * @param name The name of the property that was listened on
                 * @param vcl The <code>VetoableChangeListener</code> to be removed
                 */
                // @ts-ignore
                removeVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void
                /**
                 * A service provided by the nesting BeanContext has been revoked.
                 * Subclasses may override this method in order to implement their own
                 * behaviors.
                 * @param bcsre The <code>BeanContextServiceRevokedEvent</code> fired as a
                 *  result of a service being revoked
                 */
                // @ts-ignore
                serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void
                /**
                 * A new service is available from the nesting BeanContext.
                 * Subclasses may override this method in order to implement their own
                 * behaviors
                 * @param bcsae The BeanContextServiceAvailableEvent fired as a
                 *  result of a service becoming available
                 */
                // @ts-ignore
                serviceAvailable(bcsae: java.beans.beancontext.BeanContextServiceAvailableEvent): void
                /**
                 * Gets the <tt>BeanContextChild</tt> associated with this
                 * <tt>BeanContextChildSupport</tt>.
                 * @return the <tt>BeanContextChild</tt> peer of this class
                 */
                // @ts-ignore
                getBeanContextChildPeer(): java.beans.beancontext.BeanContextChild
                /**
                 * Reports whether or not this class is a delegate of another.
                 * @return true if this class is a delegate of another
                 */
                // @ts-ignore
                isDelegated(): boolean
                /**
                 * Report a bound property update to any registered listeners. No event is
                 * fired if old and new are equal and non-null.
                 * @param name The programmatic name of the property that was changed
                 * @param oldValue  The old value of the property
                 * @param newValue  The new value of the property
                 */
                // @ts-ignore
                firePropertyChange(name: string, oldValue: any, newValue: any): void
                /**
                 * Report a vetoable property update to any registered listeners.
                 * If anyone vetos the change, then fire a new event
                 * reverting everyone to the old value and then rethrow
                 * the PropertyVetoException. <P>
                 * No event is fired if old and new are equal and non-null.
                 * <P>
                 * @param name The programmatic name of the property that is about to
                 *  change
                 * @param oldValue The old value of the property
                 * @param newValue - The new value of the property
                 * @throws PropertyVetoException if the recipient wishes the property
                 *  change to be rolled back.
                 */
                // @ts-ignore
                fireVetoableChange(name: string, oldValue: any, newValue: any): void
                /**
                 * Called from setBeanContext to validate (or otherwise) the
                 * pending change in the nesting BeanContext property value.
                 * Returning false will cause setBeanContext to throw
                 * PropertyVetoException.
                 * @param newValue the new value that has been requested for
                 *   the BeanContext property
                 * @return <code>true</code> if the change operation is to be vetoed
                 */
                // @ts-ignore
                validatePendingSetBeanContext(newValue: java.beans.beancontext.BeanContext): boolean
                /**
                 * This method may be overridden by subclasses to provide their own
                 * release behaviors. When invoked any resources held by this instance
                 * obtained from its current BeanContext property should be released
                 * since the object is no longer nested within that BeanContext.
                 */
                // @ts-ignore
                releaseBeanContextResources(): void
                /**
                 * This method may be overridden by subclasses to provide their own
                 * initialization behaviors. When invoked any resources required by the
                 * BeanContextChild should be obtained from the current BeanContext.
                 */
                // @ts-ignore
                initializeBeanContextResources(): void
            }
        }
    }
}
