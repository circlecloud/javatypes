declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JMenuBar}.
                 * @author Scott Violet
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthMenuBarUI extends javax.swing.plaf.basic.BasicMenuBarUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new UI object for the given component.
                     * @param x component to create UI object for
                     * @return the UI object
                     */
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
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
                    uninstallDefaults(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallListeners(): void
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
                     * Paints the specified component. This implementation does nothing.
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
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
