declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JScrollBar}.
                 * @author Scott Violet
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    configureScrollBarColors(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installListeners(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallListeners(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public getSupportsAbsolutePositioning(): boolean
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
                     * Paints the scrollbar track.
                     * @param context context for the component being painted
                     * @param g {#code Graphics} object used for painting
                     * @param trackBounds bounding box for the track
                     */
                    // @ts-ignore
                    paintTrack(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, trackBounds: java.awt.Rectangle): void
                    /**
                     * Paints the scrollbar thumb.
                     * @param context context for the component being painted
                     * @param g {#code Graphics} object used for painting
                     * @param thumbBounds bounding box for the thumb
                     */
                    // @ts-ignore
                    paintThumb(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, thumbBounds: java.awt.Rectangle): void
                    /**
                     * A vertical scrollbar's preferred width is the maximum of
                     * preferred widths of the (non <code>null</code>)
                     * increment/decrement buttons,
                     * and the minimum width of the thumb. The preferred height is the
                     * sum of the preferred heights of the same parts.  The basis for
                     * the preferred size of a horizontal scrollbar is similar.
                     * <p>
                     * The <code>preferredSize</code> is only computed once, subsequent
                     * calls to this method just return a cached size.
                     * @param c the <code>JScrollBar</code> that's delegating this method to us
                     * @return the preferred size of a Basic JScrollBar
                     * @see #getMaximumSize
                     * @see #getMinimumSize
                     */
                    // @ts-ignore
                    public getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getMinimumThumbSize(): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createDecreaseButton(orientation: number /*int*/): javax.swing.JButton
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createIncreaseButton(orientation: number /*int*/): javax.swing.JButton
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    setThumbRollover(active: boolean): void
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
