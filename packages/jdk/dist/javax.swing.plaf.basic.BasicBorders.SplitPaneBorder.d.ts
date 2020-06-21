declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicBorders {
                    /**
                     * Draws the border around the splitpane. To work correctly you should
                     * also install a border on the divider (property SplitPaneDivider.border).
                     */
                    // @ts-ignore
                    class SplitPaneBorder extends java.lang.Object implements javax.swing.border.Border, javax.swing.plaf.UIResource {
                        // @ts-ignore
                        constructor(highlight: java.awt.Color, shadow: java.awt.Color)
                        // @ts-ignore
                        highlight: java.awt.Color
                        // @ts-ignore
                        shadow: java.awt.Color
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
    }
}
