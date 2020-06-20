declare namespace javax {
    namespace swing {
        namespace plaf {
            // @ts-ignore
            class BorderUIResource extends java.lang.Object implements javax.swing.border.Border, javax.swing.plaf.UIResource, java.io.Serializable {
                /**
                 * Creates a UIResource border object which wraps
                 * an existing Border instance.
                 * @param delegate the border being wrapped
                 */
                // @ts-ignore
                constructor(delegate: javax.swing.border.Border)
                // @ts-ignore
                getEtchedBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                getLoweredBevelBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                getRaisedBevelBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                getBlackLineBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                // @ts-ignore
                getBorderInsets(c: java.awt.Component): java.awt.Insets
                // @ts-ignore
                isBorderOpaque(): boolean
            }
        }
    }
}
