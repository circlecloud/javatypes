declare namespace javax {
    namespace swing {
        namespace border {
            /**
             * A class which implements a simple etched border which can
             * either be etched-in or etched-out.  If no highlight/shadow
             * colors are initialized when the border is created, then
             * these colors will be dynamically derived from the background
             * color of the component argument passed into the paintBorder()
             * method.
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
            class EtchedBorder extends javax.swing.border.AbstractBorder {
                /**
                 * Creates a lowered etched border whose colors will be derived
                 * from the background color of the component passed into
                 * the paintBorder method.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an etched border with the specified etch-type
                 * whose colors will be derived
                 * from the background color of the component passed into
                 * the paintBorder method.
                 * @param etchType the type of etch to be drawn by the border
                 */
                // @ts-ignore
                constructor(etchType: number /*int*/)
                /**
                 * Creates a lowered etched border with the specified highlight and
                 * shadow colors.
                 * @param highlight the color to use for the etched highlight
                 * @param shadow the color to use for the etched shadow
                 */
                // @ts-ignore
                constructor(highlight: java.awt.Color, shadow: java.awt.Color)
                /**
                 * Creates an etched border with the specified etch-type,
                 * highlight and shadow colors.
                 * @param etchType the type of etch to be drawn by the border
                 * @param highlight the color to use for the etched highlight
                 * @param shadow the color to use for the etched shadow
                 */
                // @ts-ignore
                constructor(etchType: number /*int*/, highlight: java.awt.Color, shadow: java.awt.Color)
                /**
                 * Raised etched type.
                 */
                // @ts-ignore
                public static readonly RAISED: number /*int*/
                /**
                 * Lowered etched type.
                 */
                // @ts-ignore
                public static readonly LOWERED: number /*int*/
                // @ts-ignore
                etchType: number /*int*/
                // @ts-ignore
                highlight: java.awt.Color
                // @ts-ignore
                shadow: java.awt.Color
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
                /**
                 * Returns which etch-type is set on the etched border.
                 */
                // @ts-ignore
                public getEtchType(): number /*int*/
                /**
                 * Returns the highlight color of the etched border
                 * when rendered on the specified component.  If no highlight
                 * color was specified at instantiation, the highlight color
                 * is derived from the specified component's background color.
                 * @param c the component for which the highlight may be derived
                 * @since 1.3
                 */
                // @ts-ignore
                public getHighlightColor(c: java.awt.Component): java.awt.Color
                /**
                 * Returns the highlight color of the etched border.
                 * Will return null if no highlight color was specified
                 * at instantiation.
                 * @since 1.3
                 */
                // @ts-ignore
                public getHighlightColor(): java.awt.Color
                /**
                 * Returns the shadow color of the etched border
                 * when rendered on the specified component.  If no shadow
                 * color was specified at instantiation, the shadow color
                 * is derived from the specified component's background color.
                 * @param c the component for which the shadow may be derived
                 * @since 1.3
                 */
                // @ts-ignore
                public getShadowColor(c: java.awt.Component): java.awt.Color
                /**
                 * Returns the shadow color of the etched border.
                 * Will return null if no shadow color was specified
                 * at instantiation.
                 * @since 1.3
                 */
                // @ts-ignore
                public getShadowColor(): java.awt.Color
            }
        }
    }
}
