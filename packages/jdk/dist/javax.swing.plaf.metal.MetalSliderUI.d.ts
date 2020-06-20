declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * A Java L&amp;F implementation of SliderUI.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 */
                // @ts-ignore
                class MetalSliderUI extends javax.swing.plaf.basic.BasicSliderUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    readonly TICK_BUFFER: number /*int*/
                    // @ts-ignore
                    filledSlider: boolean
                    // @ts-ignore
                    thumbColor: java.awt.Color
                    // @ts-ignore
                    highlightColor: java.awt.Color
                    // @ts-ignore
                    darkShadowColor: java.awt.Color
                    // @ts-ignore
                    trackWidth: number /*int*/
                    // @ts-ignore
                    tickLength: number /*int*/
                    /**
                     * A default horizontal thumb <code>Icon</code>. This field might not be
                     * used. To change the <code>Icon</code> used by this delegate directly set it
                     * using the <code>Slider.horizontalThumbIcon</code> UIManager property.
                     */
                    // @ts-ignore
                    horizThumbIcon: javax.swing.Icon
                    /**
                     * A default vertical thumb <code>Icon</code>. This field might not be
                     * used. To change the <code>Icon</code> used by this delegate directly set it
                     * using the <code>Slider.verticalThumbIcon</code> UIManager property.
                     */
                    // @ts-ignore
                    vertThumbIcon: javax.swing.Icon
                    // @ts-ignore
                    readonly SLIDER_FILL: string
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    createPropertyChangeListener(slider: javax.swing.JSlider): java.beans.PropertyChangeListener
                    // @ts-ignore
                    paintThumb(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintTrack(g: java.awt.Graphics): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics): void
                    // @ts-ignore
                    getThumbSize(): java.awt.Dimension
                    /**
                     * Gets the height of the tick area for horizontal sliders and the width of the
                     * tick area for vertical sliders.  BasicSliderUI uses the returned value to
                     * determine the tick area rectangle.
                     */
                    // @ts-ignore
                    getTickLength(): int
                    /**
                     * Returns the shorter dimension of the track.
                     */
                    // @ts-ignore
                    getTrackWidth(): int
                    /**
                     * Returns the longer dimension of the slide bar.  (The slide bar is only the
                     * part that runs directly under the thumb)
                     */
                    // @ts-ignore
                    getTrackLength(): int
                    /**
                     * Returns the amount that the thumb goes past the slide bar.
                     */
                    // @ts-ignore
                    getThumbOverhang(): int
                    // @ts-ignore
                    scrollDueToClickInTrack(dir: number /*int*/): void
                    // @ts-ignore
                    paintMinorTickForHorizSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, x: number /*int*/): void
                    // @ts-ignore
                    paintMajorTickForHorizSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, x: number /*int*/): void
                    // @ts-ignore
                    paintMinorTickForVertSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, y: number /*int*/): void
                    // @ts-ignore
                    paintMajorTickForVertSlider(g: java.awt.Graphics, tickBounds: java.awt.Rectangle, y: number /*int*/): void
                }
            }
        }
    }
}
