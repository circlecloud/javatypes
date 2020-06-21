declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * An Icon wrapper class which implements UIResource.  UI
             * classes which set icon properties should use this class
             * to wrap any icons specified as defaults.
             * This class delegates all method invocations to the
             * Icon "delegate" object specified at construction.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see javax.swing.plaf.UIResource
             * @author Amy Fowler
             */
            // @ts-ignore
            class IconUIResource extends java.lang.Object implements javax.swing.Icon, javax.swing.plaf.UIResource, java.io.Serializable {
                /**
                 * Creates a UIResource icon object which wraps
                 * an existing Icon instance.
                 * @param delegate the icon being wrapped
                 */
                // @ts-ignore
                constructor(delegate: javax.swing.Icon)
                // @ts-ignore
                public paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/): void
                // @ts-ignore
                public getIconWidth(): number /*int*/
                // @ts-ignore
                public getIconHeight(): number /*int*/
            }
        }
    }
}
