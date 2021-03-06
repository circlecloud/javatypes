declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link JSlider}.
                 * @author Joshua Outwater
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthSliderUI extends javax.swing.plaf.basic.BasicSliderUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor(c: javax.swing.JSlider)
                    /**
                     * Creates a new UI object for the given component.
                     * @param c component to create UI object for
                     * @return the UI object
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installDefaults(slider: javax.swing.JSlider): void
                    /**
                     * Uninstalls default setting. This method is called when a
                     * {@code LookAndFeel} is uninstalled.
                     */
                    // @ts-ignore
                    uninstallDefaults(slider: javax.swing.JSlider): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installListeners(slider: javax.swing.JSlider): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallListeners(slider: javax.swing.JSlider): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createTrackListener(s: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI.TrackListener
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    calculateGeometry(): void
                    /**
                     * Lays out the slider.
                     */
                    // @ts-ignore
                    layout(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    calculateThumbLocation(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public setThumbLocation(x: number /*int*/, y: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    xPositionForValue(value: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    yPositionForValue(value: number /*int*/, trackY: number /*int*/, trackHeight: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public valueForYPosition(yPos: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public valueForXPosition(xPos: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getThumbSize(): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    recalculateIfInsetsChanged(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    /**
                     * Notifies this UI delegate to repaint the specified component.
                     * This method paints the component background, then calls
                     * the {@link #paint(SynthContext,Graphics)} method.
                     * <p>In general, this method does not need to be overridden by subclasses.
                     * All Look and Feel rendering code should reside in the {@code paint} method.
                     * @param g the {#code Graphics} object used for painting
                     * @param c the component being painted
                     * @see #paint(SynthContext,Graphics)
                     */
                    // @ts-ignore
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints the specified component according to the Look and Feel.
                     * <p>This method is not used by Synth Look and Feel.
                     * Painting is handled by the {@link #paint(SynthContext,Graphics)} method.
                     * @param g the {#code Graphics} object used for painting
                     * @param c the component being painted
                     * @see #paint(SynthContext,Graphics)
                     */
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints the specified component.
                     * @param context context for the component being painted
                     * @param g the {#code Graphics} object used for painting
                     * @see #update(Graphics,JComponent)
                     */
                    // @ts-ignore
                    paint(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * Paints the slider thumb.
                     * @param context context for the component being painted
                     * @param g {#code Graphics} object used for painting
                     * @param thumbBounds bounding box for the thumb
                     */
                    // @ts-ignore
                    paintThumb(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, thumbBounds: java.awt.Rectangle): void
                    /**
                     * Paints the slider track.
                     * @param context context for the component being painted
                     * @param g {#code Graphics} object used for painting
                     * @param trackBounds bounding box for the track
                     */
                    // @ts-ignore
                    paintTrack(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, trackBounds: java.awt.Rectangle): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
