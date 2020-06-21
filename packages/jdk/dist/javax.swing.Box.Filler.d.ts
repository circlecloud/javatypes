declare namespace javax {
    namespace swing {
        namespace Box {
            /**
             * An implementation of a lightweight component that participates in
             * layout but has no view.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class Filler extends javax.swing.JComponent implements javax.accessibility.Accessible {
                /**
                 * Constructor to create shape with the given size ranges.
                 * @param min   Minimum size
                 * @param pref  Preferred size
                 * @param max   Maximum size
                 */
                // @ts-ignore
                constructor(min: java.awt.Dimension, pref: java.awt.Dimension, max: java.awt.Dimension)
                /**
                 * Change the size requests for this shape.  An invalidate() is
                 * propagated upward as a result so that layout will eventually
                 * happen with using the new sizes.
                 * @param min   Value to return for getMinimumSize
                 * @param pref  Value to return for getPreferredSize
                 * @param max   Value to return for getMaximumSize
                 */
                // @ts-ignore
                public changeShape(min: java.awt.Dimension, pref: java.awt.Dimension, max: java.awt.Dimension): void
                /**
                 * Paints this <code>Filler</code>.  If this
                 * <code>Filler</code> has a UI this method invokes super's
                 * implementation, otherwise if this <code>Filler</code> is
                 * opaque the <code>Graphics</code> is filled using the
                 * background.
                 * @param g the <code>Graphics</code> to paint to
                 * @throws NullPointerException if <code>g</code> is null
                 * @since 1.6
                 */
                // @ts-ignore
                paintComponent(g: java.awt.Graphics): void
                /**
                 * Gets the AccessibleContext associated with this Box.Filler.
                 * For box fillers, the AccessibleContext takes the form of an
                 * AccessibleBoxFiller.
                 * A new AccessibleAWTBoxFiller instance is created if necessary.
                 * @return an AccessibleBoxFiller that serves as the
                 *          AccessibleContext of this Box.Filler.
                 */
                // @ts-ignore
                public getAccessibleContext(): javax.accessibility.AccessibleContext
            }
        }
    }
}
