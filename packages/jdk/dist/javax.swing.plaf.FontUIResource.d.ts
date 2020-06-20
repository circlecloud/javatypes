declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * A subclass of java.awt.Font that implements UIResource.
             * UI classes which set default font properties should use
             * this class.
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
             * @author Hans Muller
             */
            // @ts-ignore
            class FontUIResource extends java.awt.Font implements javax.swing.plaf.UIResource {
                // @ts-ignore
                constructor(name: string, style: number /*int*/, size: number /*int*/)
                // @ts-ignore
                constructor(font: java.awt.Font)
            }
        }
    }
}
