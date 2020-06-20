declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which provides an empty, transparent border which
             * takes up space but does no drawing.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author David Kloba
             */
            // @ts-ignore
            class EmptyBorder extends javax.swing.border.AbstractBorder implements java.io.Serializable {
                /**
                 * Creates an empty border with the specified insets.
                 * @param top the top inset of the border
                 * @param left the left inset of the border
                 * @param bottom the bottom inset of the border
                 * @param right the right inset of the border
                 */
                // @ts-ignore
                constructor(top: number /*int*/, left: number /*int*/, bottom: number /*int*/, right: number /*int*/)
                /**
                 * Creates an empty border with the specified insets.
                 * @param borderInsets the insets of the border
                 */
                // @ts-ignore
                constructor(borderInsets: java.awt.Insets)
                // @ts-ignore
                left: number /*int*/
                // @ts-ignore
                right: number /*int*/
                // @ts-ignore
                top: number /*int*/
                // @ts-ignore
                bottom: number /*int*/
                /**
                 * Does no drawing by default.
                 */
                // @ts-ignore
                paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Reinitialize the insets parameter with this Border's current Insets.
                 * @param c the component for which this border insets value applies
                 * @param insets the object to be reinitialized
                 */
                // @ts-ignore
                getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets
                /**
                 * Returns the insets of the border.
                 * @since 1.3
                 */
                // @ts-ignore
                getBorderInsets(): java.awt.Insets
                /**
                 * Returns whether or not the border is opaque.
                 * Returns false by default.
                 */
                // @ts-ignore
                isBorderOpaque(): boolean
            }
        }
    }
}
