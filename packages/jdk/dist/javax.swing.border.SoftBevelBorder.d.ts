declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which implements a raised or lowered bevel with
             * softened corners.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Amy Fowler
             * @author Chester Rose
             */
            // @ts-ignore
            class SoftBevelBorder extends javax.swing.border.BevelBorder {
                /**
                 * Creates a bevel border with the specified type and whose
                 * colors will be derived from the background color of the
                 * component passed into the paintBorder method.
                 * @param bevelType the type of bevel for the border
                 */
                // @ts-ignore
                constructor(bevelType: number /*int*/)
                /**
                 * Creates a bevel border with the specified type, highlight and
                 * shadow colors.
                 * @param bevelType the type of bevel for the border
                 * @param highlight the color to use for the bevel highlight
                 * @param shadow the color to use for the bevel shadow
                 */
                // @ts-ignore
                constructor(bevelType: number /*int*/, highlight: java.awt.Color, shadow: java.awt.Color)
                /**
                 * Creates a bevel border with the specified type, highlight
                 * shadow colors.
                 * @param bevelType the type of bevel for the border
                 * @param highlightOuterColor the color to use for the bevel outer highlight
                 * @param highlightInnerColor the color to use for the bevel inner highlight
                 * @param shadowOuterColor the color to use for the bevel outer shadow
                 * @param shadowInnerColor the color to use for the bevel inner shadow
                 */
                // @ts-ignore
                constructor(bevelType: number /*int*/, highlightOuterColor: java.awt.Color, highlightInnerColor: java.awt.Color, shadowOuterColor: java.awt.Color, shadowInnerColor: java.awt.Color)
                /**
                 * Paints the border for the specified component with the specified
                 * position and size.
                 * @param c the component for which this border is being painted
                 * @param g the paint graphics
                 * @param x the x position of the painted border
                 * @param y the y position of the painted border
                 * @param width the width of the painted border
                 * @param height the height of the painted border
                 */
                // @ts-ignore
                public paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Reinitialize the insets parameter with this Border's current Insets.
                 * @param c the component for which this border insets value applies
                 * @param insets the object to be reinitialized
                 */
                // @ts-ignore
                public getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets
                /**
                 * Returns whether or not the border is opaque.
                 */
                // @ts-ignore
                public isBorderOpaque(): boolean
            }
        }
    }
}
