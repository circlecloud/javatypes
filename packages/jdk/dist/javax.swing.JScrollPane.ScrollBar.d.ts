declare namespace javax {
    namespace swing {
        namespace JScrollPane {
            /**
             * By default <code>JScrollPane</code> creates scrollbars
             * that are instances
             * of this class.  <code>Scrollbar</code> overrides the
             * <code>getUnitIncrement</code> and <code>getBlockIncrement</code>
             * methods so that, if the viewport's view is a <code>Scrollable</code>,
             * the view is asked to compute these values. Unless
             * the unit/block increment have been explicitly set.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see Scrollable
             * @see JScrollPane#createVerticalScrollBar
             * @see JScrollPane#createHorizontalScrollBar
             */
            // @ts-ignore
            class ScrollBar extends javax.swing.JScrollBar implements javax.swing.plaf.UIResource {
                /**
                 * Creates a scrollbar with the specified orientation.
                 * The options are:
                 * <ul>
                 * <li><code>ScrollPaneConstants.VERTICAL</code>
                 * <li><code>ScrollPaneConstants.HORIZONTAL</code>
                 * </ul>
                 * @param orientation  an integer specifying one of the legal
                 *       orientation values shown above
                 * @since 1.4
                 */
                // @ts-ignore
                constructor(orientation: number /*int*/)
                /**
                 * Messages super to set the value, and resets the
                 * <code>unitIncrementSet</code> instance variable to true.
                 * @param unitIncrement the new unit increment value, in pixels
                 */
                // @ts-ignore
                public setUnitIncrement(unitIncrement: number /*int*/): void
                /**
                 * Computes the unit increment for scrolling if the viewport's
                 * view is a <code>Scrollable</code> object.
                 * Otherwise return <code>super.getUnitIncrement</code>.
                 * @param direction less than zero to scroll up/left,
                 *       greater than zero for down/right
                 * @return an integer, in pixels, containing the unit increment
                 * @see Scrollable#getScrollableUnitIncrement
                 */
                // @ts-ignore
                public getUnitIncrement(direction: number /*int*/): number /*int*/
                /**
                 * Messages super to set the value, and resets the
                 * <code>blockIncrementSet</code> instance variable to true.
                 * @param blockIncrement the new block increment value, in pixels
                 */
                // @ts-ignore
                public setBlockIncrement(blockIncrement: number /*int*/): void
                /**
                 * Computes the block increment for scrolling if the viewport's
                 * view is a <code>Scrollable</code> object.  Otherwise
                 * the <code>blockIncrement</code> equals the viewport's width
                 * or height.  If there's no viewport return
                 * <code>super.getBlockIncrement</code>.
                 * @param direction less than zero to scroll up/left,
                 *       greater than zero for down/right
                 * @return an integer, in pixels, containing the block increment
                 * @see Scrollable#getScrollableBlockIncrement
                 */
                // @ts-ignore
                public getBlockIncrement(direction: number /*int*/): number /*int*/
            }
        }
    }
}
