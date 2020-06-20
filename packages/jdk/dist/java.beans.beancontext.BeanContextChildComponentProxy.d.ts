declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * <p>
             * This interface is implemented by
             * <code>BeanContextChildren</code> that have an AWT <code>Component</code>
             * associated with them.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             * @see java.beans.beancontext.BeanContext
             * @see java.beans.beancontext.BeanContextSupport
             */
            // @ts-ignore
            interface BeanContextChildComponentProxy {
                /**
                 * Gets the <code>java.awt.Component</code> associated with
                 * this <code>BeanContextChild</code>.
                 * @return the AWT <code>Component</code> associated with
                 *  this <code>BeanContextChild</code>
                 */
                // @ts-ignore
                getComponent(): java.awt.Component
            }
        }
    }
}
