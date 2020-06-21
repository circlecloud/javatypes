declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Wrapper for primitive graphics calls.
                 * @since 1.5
                 * @author Scott Violet
                 */
                // @ts-ignore
                class SynthGraphicsUtils extends java.lang.Object {
                    /**
                     * Creates a <code>SynthGraphicsUtils</code>.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Draws a line between the two end points.
                     * @param context Identifies hosting region.
                     * @param paintKey Identifies the portion of the component being asked
                     *                  to paint, may be null.
                     * @param g Graphics object to paint to
                     * @param x1 x origin
                     * @param y1 y origin
                     * @param x2 x destination
                     * @param y2 y destination
                     */
                    // @ts-ignore
                    public drawLine(context: javax.swing.plaf.synth.SynthContext, paintKey: java.lang.Object | any, g: java.awt.Graphics, x1: number /*int*/, y1: number /*int*/, x2: number /*int*/, y2: number /*int*/): void
                    /**
                     * Draws a line between the two end points.
                     * <p>This implementation supports only one line style key,
                     * <code>"dashed"</code>. The <code>"dashed"</code> line style is applied
                     * only to vertical and horizontal lines.
                     * <p>Specifying <code>null</code> or any key different from
                     * <code>"dashed"</code> will draw solid lines.
                     * @param context identifies hosting region
                     * @param paintKey identifies the portion of the component being asked
                     *                  to paint, may be null
                     * @param g Graphics object to paint to
                     * @param x1 x origin
                     * @param y1 y origin
                     * @param x2 x destination
                     * @param y2 y destination
                     * @param styleKey identifies the requested style of the line (e.g. "dashed")
                     * @since 1.6
                     */
                    // @ts-ignore
                    public drawLine(context: javax.swing.plaf.synth.SynthContext, paintKey: java.lang.Object | any, g: java.awt.Graphics, x1: number /*int*/, y1: number /*int*/, x2: number /*int*/, y2: number /*int*/, styleKey: java.lang.Object | any): void
                    /**
                     * Lays out text and an icon returning, by reference, the location to
                     * place the icon and text.
                     * @param ss SynthContext
                     * @param fm FontMetrics for the Font to use, this may be ignored
                     * @param text Text to layout
                     * @param icon Icon to layout
                     * @param hAlign horizontal alignment
                     * @param vAlign vertical alignment
                     * @param hTextPosition horizontal text position
                     * @param vTextPosition vertical text position
                     * @param viewR Rectangle to layout text and icon in.
                     * @param iconR Rectangle to place icon bounds in
                     * @param textR Rectangle to place text in
                     * @param iconTextGap gap between icon and text
                     */
                    // @ts-ignore
                    public layoutText(ss: javax.swing.plaf.synth.SynthContext, fm: java.awt.FontMetrics, text: java.lang.String | string, icon: javax.swing.Icon, hAlign: number /*int*/, vAlign: number /*int*/, hTextPosition: number /*int*/, vTextPosition: number /*int*/, viewR: java.awt.Rectangle, iconR: java.awt.Rectangle, textR: java.awt.Rectangle, iconTextGap: number /*int*/): string
                    /**
                     * Returns the size of the passed in string.
                     * @param ss SynthContext
                     * @param font Font to use
                     * @param metrics FontMetrics, may be ignored
                     * @param text Text to get size of.
                     */
                    // @ts-ignore
                    public computeStringWidth(ss: javax.swing.plaf.synth.SynthContext, font: java.awt.Font, metrics: java.awt.FontMetrics, text: java.lang.String | string): number /*int*/
                    /**
                     * Returns the minimum size needed to properly render an icon and text.
                     * @param ss SynthContext
                     * @param font Font to use
                     * @param text Text to layout
                     * @param icon Icon to layout
                     * @param hAlign horizontal alignment
                     * @param vAlign vertical alignment
                     * @param hTextPosition horizontal text position
                     * @param vTextPosition vertical text position
                     * @param iconTextGap gap between icon and text
                     * @param mnemonicIndex Index into text to render the mnemonic at, -1
                     *         indicates no mnemonic.
                     */
                    // @ts-ignore
                    public getMinimumSize(ss: javax.swing.plaf.synth.SynthContext, font: java.awt.Font, text: java.lang.String | string, icon: javax.swing.Icon, hAlign: number /*int*/, vAlign: number /*int*/, hTextPosition: number /*int*/, vTextPosition: number /*int*/, iconTextGap: number /*int*/, mnemonicIndex: number /*int*/): java.awt.Dimension
                    /**
                     * Returns the maximum size needed to properly render an icon and text.
                     * @param ss SynthContext
                     * @param font Font to use
                     * @param text Text to layout
                     * @param icon Icon to layout
                     * @param hAlign horizontal alignment
                     * @param vAlign vertical alignment
                     * @param hTextPosition horizontal text position
                     * @param vTextPosition vertical text position
                     * @param iconTextGap gap between icon and text
                     * @param mnemonicIndex Index into text to render the mnemonic at, -1
                     *         indicates no mnemonic.
                     */
                    // @ts-ignore
                    public getMaximumSize(ss: javax.swing.plaf.synth.SynthContext, font: java.awt.Font, text: java.lang.String | string, icon: javax.swing.Icon, hAlign: number /*int*/, vAlign: number /*int*/, hTextPosition: number /*int*/, vTextPosition: number /*int*/, iconTextGap: number /*int*/, mnemonicIndex: number /*int*/): java.awt.Dimension
                    /**
                     * Returns the maximum height of the the Font from the passed in
                     * SynthContext.
                     * @param context SynthContext used to determine font.
                     * @return maximum height of the characters for the font from the passed
                     *          in context.
                     */
                    // @ts-ignore
                    public getMaximumCharHeight(context: javax.swing.plaf.synth.SynthContext): number /*int*/
                    /**
                     * Returns the preferred size needed to properly render an icon and text.
                     * @param ss SynthContext
                     * @param font Font to use
                     * @param text Text to layout
                     * @param icon Icon to layout
                     * @param hAlign horizontal alignment
                     * @param vAlign vertical alignment
                     * @param hTextPosition horizontal text position
                     * @param vTextPosition vertical text position
                     * @param iconTextGap gap between icon and text
                     * @param mnemonicIndex Index into text to render the mnemonic at, -1
                     *         indicates no mnemonic.
                     */
                    // @ts-ignore
                    public getPreferredSize(ss: javax.swing.plaf.synth.SynthContext, font: java.awt.Font, text: java.lang.String | string, icon: javax.swing.Icon, hAlign: number /*int*/, vAlign: number /*int*/, hTextPosition: number /*int*/, vTextPosition: number /*int*/, iconTextGap: number /*int*/, mnemonicIndex: number /*int*/): java.awt.Dimension
                    /**
                     * Paints text at the specified location. This will not attempt to
                     * render the text as html nor will it offset by the insets of the
                     * component.
                     * @param ss SynthContext
                     * @param g Graphics used to render string in.
                     * @param text Text to render
                     * @param bounds Bounds of the text to be drawn.
                     * @param mnemonicIndex Index to draw string at.
                     */
                    // @ts-ignore
                    public paintText(ss: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, text: java.lang.String | string, bounds: java.awt.Rectangle, mnemonicIndex: number /*int*/): void
                    /**
                     * Paints text at the specified location. This will not attempt to
                     * render the text as html nor will it offset by the insets of the
                     * component.
                     * @param ss SynthContext
                     * @param g Graphics used to render string in.
                     * @param text Text to render
                     * @param x X location to draw text at.
                     * @param y Upper left corner to draw text at.
                     * @param mnemonicIndex Index to draw string at.
                     */
                    // @ts-ignore
                    public paintText(ss: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, text: java.lang.String | string, x: number /*int*/, y: number /*int*/, mnemonicIndex: number /*int*/): void
                    /**
                     * Paints an icon and text. This will render the text as html, if
                     * necessary, and offset the location by the insets of the component.
                     * @param ss SynthContext
                     * @param g Graphics to render string and icon into
                     * @param text Text to layout
                     * @param icon Icon to layout
                     * @param hAlign horizontal alignment
                     * @param vAlign vertical alignment
                     * @param hTextPosition horizontal text position
                     * @param vTextPosition vertical text position
                     * @param iconTextGap gap between icon and text
                     * @param mnemonicIndex Index into text to render the mnemonic at, -1
                     *         indicates no mnemonic.
                     * @param textOffset Amount to offset the text when painting
                     */
                    // @ts-ignore
                    public paintText(ss: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, text: java.lang.String | string, icon: javax.swing.Icon, hAlign: number /*int*/, vAlign: number /*int*/, hTextPosition: number /*int*/, vTextPosition: number /*int*/, iconTextGap: number /*int*/, mnemonicIndex: number /*int*/, textOffset: number /*int*/): void
                }
            }
        }
    }
}
