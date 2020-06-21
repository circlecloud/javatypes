declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which implements a border of an arbitrary stroke.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI
             * between applications running the same version of Swing.
             * As of 1.4, support for long term storage of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Sergey A. Malenkov
             * @since 1.7
             */
            // @ts-ignore
            class StrokeBorder extends javax.swing.border.AbstractBorder {
                /**
                 * Creates a border of the specified {@code stroke}.
                 * The component's foreground color will be used to render the border.
                 * @param stroke  the {#link BasicStroke} object used to stroke a shape
                 * @throws NullPointerException if the specified {#code stroke} is {@code null}
                 */
                // @ts-ignore
                constructor(stroke: java.awt.BasicStroke)
                /**
                 * Creates a border of the specified {@code stroke} and {@code paint}.
                 * If the specified {@code paint} is {@code null},
                 * the component's foreground color will be used to render the border.
                 * @param stroke  the {#link BasicStroke} object used to stroke a shape
                 * @param paint   the {#link Paint} object used to generate a color
                 * @throws NullPointerException if the specified {#code stroke} is {@code null}
                 */
                // @ts-ignore
                constructor(stroke: java.awt.BasicStroke, paint: java.awt.Paint)
                /**
                 * Paints the border for the specified component
                 * with the specified position and size.
                 * If the border was not specified with a {@link Paint} object,
                 * the component's foreground color will be used to render the border.
                 * If the component's foreground color is not available,
                 * the default color of the {@link Graphics} object will be used.
                 * @param c       the component for which this border is being painted
                 * @param g       the paint graphics
                 * @param x       the x position of the painted border
                 * @param y       the y position of the painted border
                 * @param width   the width of the painted border
                 * @param height  the height of the painted border
                 * @throws NullPointerException if the specified {#code g} is {@code null}
                 */
                // @ts-ignore
                public paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Reinitializes the {@code insets} parameter
                 * with this border's current insets.
                 * Every inset is the smallest (closest to negative infinity) integer value
                 * that is greater than or equal to the line width of the stroke
                 * that is used to paint the border.
                 * @param c       the component for which this border insets value applies
                 * @param insets  the {#code Insets} object to be reinitialized
                 * @return the reinitialized {#code insets} parameter
                 * @throws NullPointerException if the specified {#code insets} is {@code null}
                 * @see Math#ceil
                 */
                // @ts-ignore
                public getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets
                /**
                 * Returns the {@link BasicStroke} object used to stroke a shape
                 * during the border rendering.
                 * @return the {#link BasicStroke} object
                 */
                // @ts-ignore
                public getStroke(): java.awt.BasicStroke
                /**
                 * Returns the {@link Paint} object used to generate a color
                 * during the border rendering.
                 * @return the {#link Paint} object or {@code null}
                 *          if the {@code paint} parameter is not set
                 */
                // @ts-ignore
                public getPaint(): java.awt.Paint
            }
        }
    }
}
