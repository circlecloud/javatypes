declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * JButton object that draws a scaled Arrow in one of the cardinal directions.
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
                class BasicArrowButton extends javax.swing.JButton implements javax.swing.SwingConstants {
                    /**
                     * Creates a {@code BasicArrowButton} whose arrow
                     * is drawn in the specified direction and with the specified
                     * colors.
                     * @param direction the direction of the arrow; one of
                     *         {#code SwingConstants.NORTH}, {@code SwingConstants.SOUTH},
                     *         {@code SwingConstants.EAST} or {@code SwingConstants.WEST}
                     * @param background the background color of the button
                     * @param shadow the color of the shadow
                     * @param darkShadow the color of the dark shadow
                     * @param highlight the color of the highlight
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(direction: number /*int*/, background: java.awt.Color, shadow: java.awt.Color, darkShadow: java.awt.Color, highlight: java.awt.Color)
                    /**
                     * Creates a {@code BasicArrowButton} whose arrow
                     * is drawn in the specified direction.
                     * @param direction the direction of the arrow; one of
                     *         {#code SwingConstants.NORTH}, {@code SwingConstants.SOUTH},
                     *         {@code SwingConstants.EAST} or {@code SwingConstants.WEST}
                     */
                    // @ts-ignore
                    constructor(direction: number /*int*/)
                    /**
                     * The direction of the arrow. One of
                     * {@code SwingConstants.NORTH}, {@code SwingConstants.SOUTH},
                     * {@code SwingConstants.EAST} or {@code SwingConstants.WEST}.
                     */
                    // @ts-ignore
                    direction: number /*int*/
                    /**
                     * Returns the direction of the arrow.
                     */
                    // @ts-ignore
                    getDirection(): int
                    /**
                     * Sets the direction of the arrow.
                     * @param direction the direction of the arrow; one of
                     *         of {#code SwingConstants.NORTH},
                     *         {@code SwingConstants.SOUTH},
                     *         {@code SwingConstants.EAST} or {@code SwingConstants.WEST}
                     */
                    // @ts-ignore
                    setDirection(direction: number /*int*/): void
                    // @ts-ignore
                    paint(g: java.awt.Graphics): void
                    /**
                     * Returns the preferred size of the {@code BasicArrowButton}.
                     * @return the preferred size
                     */
                    // @ts-ignore
                    getPreferredSize(): java.awt.Dimension
                    /**
                     * Returns the minimum size of the {@code BasicArrowButton}.
                     * @return the minimum size
                     */
                    // @ts-ignore
                    getMinimumSize(): java.awt.Dimension
                    /**
                     * Returns the maximum size of the {@code BasicArrowButton}.
                     * @return the maximum size
                     */
                    // @ts-ignore
                    getMaximumSize(): java.awt.Dimension
                    /**
                     * Returns whether the arrow button should get the focus.
                     * {@code BasicArrowButton}s are used as a child component of
                     * composite components such as {@code JScrollBar} and
                     * {@code JComboBox}. Since the composite component typically gets the
                     * focus, this method is overriden to return {@code false}.
                     * @return {#code false}
                     */
                    // @ts-ignore
                    isFocusTraversable(): boolean
                    /**
                     * Paints a triangle.
                     * @param g the {#code Graphics} to draw to
                     * @param x the x coordinate
                     * @param y the y coordinate
                     * @param size the size of the triangle to draw
                     * @param direction the direction in which to draw the arrow;
                     *         one of {#code SwingConstants.NORTH},
                     *         {@code SwingConstants.SOUTH}, {@code SwingConstants.EAST} or
                     *         {@code SwingConstants.WEST}
                     * @param isEnabled whether or not the arrow is drawn enabled
                     */
                    // @ts-ignore
                    paintTriangle(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, size: number /*int*/, direction: number /*int*/, isEnabled: boolean): void
                }
            }
        }
    }
}
