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
                public static getEtchedBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                public static getLoweredBevelBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                public static getRaisedBevelBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                public static getBlackLineBorderUIResource(): javax.swing.border.Border
                // @ts-ignore
                public paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                // @ts-ignore
                public getBorderInsets(c: java.awt.Component): java.awt.Insets
                // @ts-ignore
                public isBorderOpaque(): boolean
            }
        }
    }
}
