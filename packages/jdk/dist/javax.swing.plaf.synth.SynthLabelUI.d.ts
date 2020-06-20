declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JLabel}.
                 * @author Scott Violet
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthLabelUI extends javax.swing.plaf.basic.BasicLabelUI implements javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the LabelUI implementation used for the skins look and feel.
                     * @param c component to create UI object for
                     * @return the UI object
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installDefaults(c: javax.swing.JLabel): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallDefaults(c: javax.swing.JLabel): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
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
                    paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
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
