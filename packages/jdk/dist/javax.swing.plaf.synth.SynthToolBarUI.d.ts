declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JToolBar}.
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthToolBarUI extends javax.swing.plaf.basic.BasicToolBarUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new UI object for the given component.
                     * @param c component to create UI object for
                     * @return the UI object
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installDefaults(): void
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
                    installComponents(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallComponents(): void
                    /**
                     * Creates a {@code LayoutManager} to use with the toolbar.
                     * @return a {#code LayoutManager} instance
                     */
                    // @ts-ignore
                    createLayout(): java.awt.LayoutManager
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
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
                    update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * Paints the specified component according to the Look and Feel.
                     * <p>This method is not used by Synth Look and Feel.
                     * Painting is handled by the {@link #paint(SynthContext,Graphics)} method.
                     * @param g the {#code Graphics} object used for painting
                     * @param c the component being painted
                     * @see #paint(SynthContext,Graphics)
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * This implementation does nothing, because the {@code rollover}
                     * property of the {@code JToolBar} class is not used
                     * in the Synth Look and Feel.
                     */
                    // @ts-ignore
                    setBorderToNonRollover(c: java.awt.Component): void
                    /**
                     * This implementation does nothing, because the {@code rollover}
                     * property of the {@code JToolBar} class is not used
                     * in the Synth Look and Feel.
                     */
                    // @ts-ignore
                    setBorderToRollover(c: java.awt.Component): void
                    /**
                     * This implementation does nothing, because the {@code rollover}
                     * property of the {@code JToolBar} class is not used
                     * in the Synth Look and Feel.
                     */
                    // @ts-ignore
                    setBorderToNormal(c: java.awt.Component): void
                    /**
                     * Paints the toolbar.
                     * @param context context for the component being painted
                     * @param g the {#code Graphics} object used for painting
                     * @see #update(Graphics,JComponent)
                     */
                    // @ts-ignore
                    paint(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics): void
                    /**
                     * Paints the toolbar content.
                     * @param context context for the component being painted
                     * @param g {#code Graphics} object used for painting
                     * @param bounds bounding box for the toolbar
                     */
                    // @ts-ignore
                    paintContent(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, bounds: java.awt.Rectangle): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    paintDragWindow(g: java.awt.Graphics): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
