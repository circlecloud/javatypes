declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This interface is implemented by BeanContexts' that have an AWT Container
             * associated with them.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             * @see java.beans.beancontext.BeanContextSupport
             */
            // @ts-ignore
            interface BeanContextContainerProxy {
                /**
                 * Gets the <code>java.awt.Container</code> associated
                 * with this <code>BeanContext</code>.
                 * @return the <code>java.awt.Container</code> associated
                 *  with this <code>BeanContext</code>.
                 */
                // @ts-ignore
                getContainer(): java.awt.Container
            }
        }
    }
}
