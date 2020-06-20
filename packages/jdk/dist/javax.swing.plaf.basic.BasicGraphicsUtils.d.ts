declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                // @ts-ignore
                class BasicGraphicsUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    drawEtchedRect(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, shadow: java.awt.Color, darkShadow: java.awt.Color, highlight: java.awt.Color, lightHighlight: java.awt.Color): void
                    /**
                     * Returns the amount of space taken up by a border drawn by
                     * <code>drawEtchedRect()</code>
                     * @return the inset of an etched rect
                     */
                    // @ts-ignore
                    getEtchedInsets(): java.awt.Insets
                    // @ts-ignore
                    drawGroove(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, shadow: java.awt.Color, highlight: java.awt.Color): void
                    /**
                     * Returns the amount of space taken up by a border drawn by
                     * <code>drawGroove()</code>
                     * @return the inset of a groove border
                     */
                    // @ts-ignore
                    getGrooveInsets(): java.awt.Insets
                    // @ts-ignore
                    drawBezel(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, isPressed: boolean, isDefault: boolean, shadow: java.awt.Color, darkShadow: java.awt.Color, highlight: java.awt.Color, lightHighlight: java.awt.Color): void
                    // @ts-ignore
                    drawLoweredBezel(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, shadow: java.awt.Color, darkShadow: java.awt.Color, highlight: java.awt.Color, lightHighlight: java.awt.Color): void
                    /**
                     * Draw a string with the graphics <code>g</code> at location (x,y)
                     * just like <code>g.drawString</code> would.
                     * The first occurrence of <code>underlineChar</code>
                     * in text will be underlined. The matching algorithm is
                     * not case sensitive.
                     */
                    // @ts-ignore
                    drawString(g: java.awt.Graphics, text: string, underlinedChar: number /*int*/, x: number /*int*/, y: number /*int*/): void
                    /**
                     * Draw a string with the graphics <code>g</code> at location
                     * (<code>x</code>, <code>y</code>)
                     * just like <code>g.drawString</code> would.
                     * The character at index <code>underlinedIndex</code>
                     * in text will be underlined. If <code>index</code> is beyond the
                     * bounds of <code>text</code> (including &lt; 0), nothing will be
                     * underlined.
                     * @param g Graphics to draw with
                     * @param text String to draw
                     * @param underlinedIndex Index of character in text to underline
                     * @param x x coordinate to draw at
                     * @param y y coordinate to draw at
                     * @since 1.4
                     */
                    // @ts-ignore
                    drawStringUnderlineCharAt(g: java.awt.Graphics, text: string, underlinedIndex: number /*int*/, x: number /*int*/, y: number /*int*/): void
                    // @ts-ignore
                    drawDashedRect(g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                    // @ts-ignore
                    getPreferredButtonSize(b: javax.swing.AbstractButton, textIconGap: number /*int*/): java.awt.Dimension
                }
            }
        }
    }
}
