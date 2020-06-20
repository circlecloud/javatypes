declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A composite Border class used to compose two Border objects
             * into a single border by nesting an inside Border object within
             * the insets of an outside Border object.
             * For example, this class may be used to add blank margin space
             * to a component with an existing decorative border:
             * <pre>
             * Border border = comp.getBorder();
             * Border margin = new EmptyBorder(10,10,10,10);
             * comp.setBorder(new CompoundBorder(border, margin));
             * </pre>
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
            class CompoundBorder extends javax.swing.border.AbstractBorder {
                /**
                 * Creates a compound border with null outside and inside borders.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a compound border with the specified outside and
                 * inside borders.  Either border may be null.
                 * @param outsideBorder the outside border
                 * @param insideBorder the inside border to be nested
                 */
                // @ts-ignore
                constructor(outsideBorder: javax.swing.border.Border, insideBorder: javax.swing.border.Border)
                // @ts-ignore
                outsideBorder: javax.swing.border.Border
                // @ts-ignore
                insideBorder: javax.swing.border.Border
                /**
                 * Returns whether or not the compound border is opaque.
                 * @return {#code true} if the inside and outside borders
                 *          are each either {@code null} or opaque;
                 *          or {@code false} otherwise
                 */
                // @ts-ignore
                isBorderOpaque(): boolean
                /**
                 * Paints the compound border by painting the outside border
                 * with the specified position and size and then painting the
                 * inside border at the specified position and size offset by
                 * the insets of the outside border.
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
                 * Returns the outside border object.
                 */
                // @ts-ignore
                getOutsideBorder(): javax.swing.border.Border
                /**
                 * Returns the inside border object.
                 */
                // @ts-ignore
                getInsideBorder(): javax.swing.border.Border
            }
        }
    }
}
