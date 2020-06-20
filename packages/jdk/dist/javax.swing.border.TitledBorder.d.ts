declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which implements an arbitrary border
             * with the addition of a String title in a
             * specified position and justification.
             * <p>
             * If the border, font, or color property values are not
             * specified in the constructor or by invoking the appropriate
             * set methods, the property values will be defined by the current
             * look and feel, using the following property names in the
             * Defaults Table:
             * <ul>
             * <li>&quot;TitledBorder.border&quot;
             * <li>&quot;TitledBorder.font&quot;
             * <li>&quot;TitledBorder.titleColor&quot;
             * </ul>
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
             * @author Amy Fowler
             */
            // @ts-ignore
            class TitledBorder extends javax.swing.border.AbstractBorder {
                /**
                 * Creates a TitledBorder instance.
                 * @param title  the title the border should display
                 */
                // @ts-ignore
                constructor(title: string)
                /**
                 * Creates a TitledBorder instance with the specified border
                 * and an empty title.
                 * @param border  the border
                 */
                // @ts-ignore
                constructor(border: javax.swing.border.Border)
                /**
                 * Creates a TitledBorder instance with the specified border
                 * and title.
                 * @param border  the border
                 * @param title  the title the border should display
                 */
                // @ts-ignore
                constructor(border: javax.swing.border.Border, title: string)
                /**
                 * Creates a TitledBorder instance with the specified border,
                 * title, title-justification, and title-position.
                 * @param border  the border
                 * @param title  the title the border should display
                 * @param titleJustification the justification for the title
                 * @param titlePosition the position for the title
                 */
                // @ts-ignore
                constructor(border: javax.swing.border.Border, title: string, titleJustification: number /*int*/, titlePosition: number /*int*/)
                /**
                 * Creates a TitledBorder instance with the specified border,
                 * title, title-justification, title-position, and title-font.
                 * @param border  the border
                 * @param title  the title the border should display
                 * @param titleJustification the justification for the title
                 * @param titlePosition the position for the title
                 * @param titleFont the font for rendering the title
                 */
                // @ts-ignore
                constructor(border: javax.swing.border.Border, title: string, titleJustification: number /*int*/, titlePosition: number /*int*/, titleFont: java.awt.Font)
                /**
                 * Creates a TitledBorder instance with the specified border,
                 * title, title-justification, title-position, title-font, and
                 * title-color.
                 * @param border  the border
                 * @param title  the title the border should display
                 * @param titleJustification the justification for the title
                 * @param titlePosition the position for the title
                 * @param titleFont the font of the title
                 * @param titleColor the color of the title
                 */
                // @ts-ignore
                constructor(border: javax.swing.border.Border, title: string, titleJustification: number /*int*/, titlePosition: number /*int*/, titleFont: java.awt.Font, titleColor: java.awt.Color)
                // @ts-ignore
                title: string
                // @ts-ignore
                border: javax.swing.border.Border
                // @ts-ignore
                titlePosition: number /*int*/
                // @ts-ignore
                titleJustification: number /*int*/
                // @ts-ignore
                titleFont: java.awt.Font
                // @ts-ignore
                titleColor: java.awt.Color
                /**
                 * Use the default vertical orientation for the title text.
                 */
                // @ts-ignore
                readonly DEFAULT_POSITION: number /*int*/
                /**
                 * Position the title above the border's top line.
                 */
                // @ts-ignore
                readonly ABOVE_TOP: number /*int*/
                /**
                 * Position the title in the middle of the border's top line.
                 */
                // @ts-ignore
                readonly TOP: number /*int*/
                /**
                 * Position the title below the border's top line.
                 */
                // @ts-ignore
                readonly BELOW_TOP: number /*int*/
                /**
                 * Position the title above the border's bottom line.
                 */
                // @ts-ignore
                readonly ABOVE_BOTTOM: number /*int*/
                /**
                 * Position the title in the middle of the border's bottom line.
                 */
                // @ts-ignore
                readonly BOTTOM: number /*int*/
                /**
                 * Position the title below the border's bottom line.
                 */
                // @ts-ignore
                readonly BELOW_BOTTOM: number /*int*/
                /**
                 * Use the default justification for the title text.
                 */
                // @ts-ignore
                readonly DEFAULT_JUSTIFICATION: number /*int*/
                /**
                 * Position title text at the left side of the border line.
                 */
                // @ts-ignore
                readonly LEFT: number /*int*/
                /**
                 * Position title text in the center of the border line.
                 */
                // @ts-ignore
                readonly CENTER: number /*int*/
                /**
                 * Position title text at the right side of the border line.
                 */
                // @ts-ignore
                readonly RIGHT: number /*int*/
                /**
                 * Position title text at the left side of the border line
                 * for left to right orientation, at the right side of the
                 * border line for right to left orientation.
                 */
                // @ts-ignore
                readonly LEADING: number /*int*/
                /**
                 * Position title text at the right side of the border line
                 * for left to right orientation, at the left side of the
                 * border line for right to left orientation.
                 */
                // @ts-ignore
                readonly TRAILING: number /*int*/
                // @ts-ignore
                readonly EDGE_SPACING: number /*int*/
                // @ts-ignore
                readonly TEXT_SPACING: number /*int*/
                // @ts-ignore
                readonly TEXT_INSET_H: number /*int*/
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
                 * Returns whether or not the border is opaque.
                 */
                // @ts-ignore
                isBorderOpaque(): boolean
                /**
                 * Returns the title of the titled border.
                 * @return the title of the titled border
                 */
                // @ts-ignore
                getTitle(): java.lang.String
                /**
                 * Returns the border of the titled border.
                 * @return the border of the titled border
                 */
                // @ts-ignore
                getBorder(): javax.swing.border.Border
                /**
                 * Returns the title-position of the titled border.
                 * @return the title-position of the titled border
                 */
                // @ts-ignore
                getTitlePosition(): int
                /**
                 * Returns the title-justification of the titled border.
                 * @return the title-justification of the titled border
                 */
                // @ts-ignore
                getTitleJustification(): int
                /**
                 * Returns the title-font of the titled border.
                 * @return the title-font of the titled border
                 */
                // @ts-ignore
                getTitleFont(): java.awt.Font
                /**
                 * Returns the title-color of the titled border.
                 * @return the title-color of the titled border
                 */
                // @ts-ignore
                getTitleColor(): java.awt.Color
                /**
                 * Sets the title of the titled border.
                 * @param title  the title for the border
                 */
                // @ts-ignore
                setTitle(title: string): void
                /**
                 * Sets the border of the titled border.
                 * @param border the border
                 */
                // @ts-ignore
                setBorder(border: javax.swing.border.Border): void
                /**
                 * Sets the title-position of the titled border.
                 * @param titlePosition the position for the border
                 */
                // @ts-ignore
                setTitlePosition(titlePosition: number /*int*/): void
                /**
                 * Sets the title-justification of the titled border.
                 * @param titleJustification the justification for the border
                 */
                // @ts-ignore
                setTitleJustification(titleJustification: number /*int*/): void
                /**
                 * Sets the title-font of the titled border.
                 * @param titleFont the font for the border title
                 */
                // @ts-ignore
                setTitleFont(titleFont: java.awt.Font): void
                /**
                 * Sets the title-color of the titled border.
                 * @param titleColor the color for the border title
                 */
                // @ts-ignore
                setTitleColor(titleColor: java.awt.Color): void
                /**
                 * Returns the minimum dimensions this border requires
                 * in order to fully display the border and title.
                 * @param c the component where this border will be drawn
                 * @return the {#code Dimension} object
                 */
                // @ts-ignore
                getMinimumSize(c: java.awt.Component): java.awt.Dimension
                /**
                 * Returns the baseline.
                 * @throws NullPointerException {#inheritDoc}
                 * @throws IllegalArgumentException {#inheritDoc}
                 * @see javax.swing.JComponent#getBaseline(int, int)
                 * @since 1.6
                 */
                // @ts-ignore
                getBaseline(c: java.awt.Component, width: number /*int*/, height: number /*int*/): int
                /**
                 * Returns an enum indicating how the baseline of the border
                 * changes as the size changes.
                 * @throws NullPointerException {#inheritDoc}
                 * @see javax.swing.JComponent#getBaseline(int, int)
                 * @since 1.6
                 */
                // @ts-ignore
                getBaselineResizeBehavior(c: java.awt.Component): java.awt.Component.BaselineResizeBehavior
                // @ts-ignore
                getFont(c: java.awt.Component): java.awt.Font
            }
        }
    }
}
