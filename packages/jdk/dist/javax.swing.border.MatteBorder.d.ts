declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which provides a matte-like border of either a solid color
             * or a tiled icon.
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
             */
            // @ts-ignore
            class MatteBorder extends javax.swing.border.EmptyBorder {
                /**
                 * Creates a matte border with the specified insets and color.
                 * @param top the top inset of the border
                 * @param left the left inset of the border
                 * @param bottom the bottom inset of the border
                 * @param right the right inset of the border
                 * @param matteColor the color rendered for the border
                 */
                // @ts-ignore
                constructor(top: number /*int*/, left: number /*int*/, bottom: number /*int*/, right: number /*int*/, matteColor: java.awt.Color)
                /**
                 * Creates a matte border with the specified insets and color.
                 * @param borderInsets the insets of the border
                 * @param matteColor the color rendered for the border
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(borderInsets: java.awt.Insets, matteColor: java.awt.Color)
                /**
                 * Creates a matte border with the specified insets and tile icon.
                 * @param top the top inset of the border
                 * @param left the left inset of the border
                 * @param bottom the bottom inset of the border
                 * @param right the right inset of the border
                 * @param tileIcon the icon to be used for tiling the border
                 */
                // @ts-ignore
                constructor(top: number /*int*/, left: number /*int*/, bottom: number /*int*/, right: number /*int*/, tileIcon: javax.swing.Icon)
                /**
                 * Creates a matte border with the specified insets and tile icon.
                 * @param borderInsets the insets of the border
                 * @param tileIcon the icon to be used for tiling the border
                 * @since 1.3
                 */
                // @ts-ignore
                constructor(borderInsets: java.awt.Insets, tileIcon: javax.swing.Icon)
                /**
                 * Creates a matte border with the specified tile icon.  The
                 * insets will be calculated dynamically based on the size of
                 * the tile icon, where the top and bottom will be equal to the
                 * tile icon's height, and the left and right will be equal to
                 * the tile icon's width.
                 * @param tileIcon the icon to be used for tiling the border
                 */
                // @ts-ignore
                constructor(tileIcon: javax.swing.Icon)
                // @ts-ignore
                color: java.awt.Color
                // @ts-ignore
                tileIcon: javax.swing.Icon
                /**
                 * Paints the matte border.
                 */
                // @ts-ignore
                public paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Reinitialize the insets parameter with this Border's current Insets.
                 * @param c the component for which this border insets value applies
                 * @param insets the object to be reinitialized
                 * @since 1.3
                 */
                // @ts-ignore
                public getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets
                /**
                 * Returns the insets of the border.
                 * @since 1.3
                 */
                // @ts-ignore
                public getBorderInsets(): java.awt.Insets
                /**
                 * Returns the color used for tiling the border or null
                 * if a tile icon is being used.
                 * @since 1.3
                 */
                // @ts-ignore
                public getMatteColor(): java.awt.Color
                /**
                 * Returns the icon used for tiling the border or null
                 * if a solid color is being used.
                 * @since 1.3
                 */
                // @ts-ignore
                public getTileIcon(): javax.swing.Icon
                /**
                 * Returns whether or not the border is opaque.
                 */
                // @ts-ignore
                public isBorderOpaque(): boolean
            }
        }
    }
}
