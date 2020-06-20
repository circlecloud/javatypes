declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which implements a line border of arbitrary thickness
             * and of a single color.
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
            class LineBorder extends javax.swing.border.AbstractBorder {
                /**
                 * Creates a line border with the specified color and a
                 * thickness = 1.
                 * @param color the color for the border
                 */
                // @ts-ignore
                constructor(color: java.awt.Color)
                /**
                 * Creates a line border with the specified color and thickness.
                 * @param color the color of the border
                 * @param thickness the thickness of the border
                 */
                // @ts-ignore
                constructor(color: java.awt.Color, thickness: number /*int*/)
                /**
                 * Creates a line border with the specified color, thickness,
                 * and corner shape.
                 * @param color the color of the border
                 * @param thickness the thickness of the border
                 * @param roundedCorners whether or not border corners should be round
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(color: java.awt.Color, thickness: number /*int*/, roundedCorners: boolean)
                // @ts-ignore
                thickness: number /*int*/
                // @ts-ignore
                lineColor: java.awt.Color
                // @ts-ignore
                roundedCorners: boolean
                /**
                 * Convenience method for getting the Color.black LineBorder of thickness 1.
                 */
                // @ts-ignore
                createBlackLineBorder(): javax.swing.border.Border
                /**
                 * Convenience method for getting the Color.gray LineBorder of thickness 1.
                 */
                // @ts-ignore
                createGrayLineBorder(): javax.swing.border.Border
                /**
                 * Paints the border for the specified component with the
                 * specified position and size.
                 * @param c the component for which this border is being painted
                 * @param g the paint graphics
                 * @param x the x position of the painted border
                 * @param y the y position of the painted border
                 * @param width the width of the painted border
                 * @param height the height of the painted border
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
                 * Returns the color of the border.
                 */
                // @ts-ignore
                getLineColor(): java.awt.Color
                /**
                 * Returns the thickness of the border.
                 */
                // @ts-ignore
                getThickness(): int
                /**
                 * Returns whether this border will be drawn with rounded corners.
                 * @since 1.3
                 */
                // @ts-ignore
                getRoundedCorners(): boolean
                /**
                 * Returns whether or not the border is opaque.
                 */
                // @ts-ignore
                isBorderOpaque(): boolean
            }
        }
    }
}
