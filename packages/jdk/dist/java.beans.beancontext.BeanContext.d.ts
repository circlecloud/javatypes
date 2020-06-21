declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * The BeanContext acts a logical hierarchical container for JavaBeans.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.Beans
             * @see java.beans.beancontext.BeanContextChild
             * @see java.beans.beancontext.BeanContextMembershipListener
             * @see java.beans.PropertyChangeEvent
             * @see java.beans.DesignMode
             * @see java.beans.Visibility
             * @see java.util.Collection
             */
            // @ts-ignore
            interface BeanContext extends java.beans.beancontext.BeanContextChild, java.util.Collection<any>, java.beans.DesignMode, java.beans.Visibility {
                /**
                 * This global lock is used by both <code>BeanContext</code>
                 * and <code>BeanContextServices</code> implementors
                 * to serialize changes in a <code>BeanContext</code>
                 * hierarchy and any service requests etc.
                 */
                // @ts-ignore
                readonly globalHierarchyLock: java.lang.Object | any
                /**
                 * Instantiate the javaBean named as a
                 * child of this <code>BeanContext</code>.
                 * The implementation of the JavaBean is
                 * derived from the value of the beanName parameter,
                 * and is defined by the
                 * <code>java.beans.Beans.instantiate()</code> method.
                 * @return a javaBean named as a child of this
                 *  <code>BeanContext</code>
                 * @param beanName The name of the JavaBean to instantiate
                 *  as a child of this <code>BeanContext</code>
                 * @throws IOException if an IO problem occurs
                 * @throws ClassNotFoundException if the class identified
                 *  by the beanName parameter is not found
                 */
                // @ts-ignore
                instantiateChild(beanName: java.lang.String | string): any
                /**
                 * Analagous to <code>java.lang.ClassLoader.getResourceAsStream()</code>,
                 * this method allows a <code>BeanContext</code> implementation
                 * to interpose behavior between the child <code>Component</code>
                 * and underlying <code>ClassLoader</code>.
                 * @param name the resource name
                 * @param bcc the specified child
                 * @return an <code>InputStream</code> for reading the resource,
                 *  or <code>null</code> if the resource could not
                 *  be found.
                 * @throws IllegalArgumentException if
                 *  the resource is not valid
                 */
                // @ts-ignore
                getResourceAsStream(name: java.lang.String | string, bcc: java.beans.beancontext.BeanContextChild): java.io.InputStream
                /**
                 * Analagous to <code>java.lang.ClassLoader.getResource()</code>, this
                 * method allows a <code>BeanContext</code> implementation to interpose
                 * behavior between the child <code>Component</code>
                 * and underlying <code>ClassLoader</code>.
                 * @param name the resource name
                 * @param bcc the specified child
                 * @return a <code>URL</code> for the named
                 *  resource for the specified child
                 * @throws IllegalArgumentException
                 *  if the resource is not valid
                 */
                // @ts-ignore
                getResource(name: java.lang.String | string, bcc: java.beans.beancontext.BeanContextChild): java.net.URL
                /**
                 * Adds the specified <code>BeanContextMembershipListener</code>
                 * to receive <code>BeanContextMembershipEvents</code> from
                 * this <code>BeanContext</code> whenever it adds
                 * or removes a child <code>Component</code>(s).
                 * @param bcml the BeanContextMembershipListener to be added
                 */
                // @ts-ignore
                addBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void
                /**
                 * Removes the specified <code>BeanContextMembershipListener</code>
                 * so that it no longer receives <code>BeanContextMembershipEvent</code>s
                 * when the child <code>Component</code>(s) are added or removed.
                 * @param bcml the <code>BeanContextMembershipListener</code>
                 *  to be removed
                 */
                // @ts-ignore
                removeBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void
            }
        }
    }
}
