declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for {@link javax.swing.JTextField}.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Shannon Hickey
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthTextFieldUI extends javax.swing.plaf.basic.BasicTextFieldUI implements javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a JTextField.
                     * @param c the text field
                     * @return the UI object
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
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
                     * Paints the specified component.
                     * <p>This is routed to the {@link #paintSafely} method under
                     * the guarantee that the model does not change from the view of this
                     * thread while it is rendering (if the associated model is
                     * derived from {@code AbstractDocument}).  This enables the
                     * model to potentially be updated asynchronously.
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
                     * Overridden to do nothing.
                     */
                    // @ts-ignore
                    paintBackground(g: java.awt.Graphics): void
                    /**
                     * This method gets called when a bound property is changed
                     * on the associated JTextComponent.  This is a hook
                     * which UI implementations may change to reflect how the
                     * UI displays bound properties of JTextComponent subclasses.
                     * This is implemented to do nothing (i.e. the response to
                     * properties in JTextComponent itself are handled prior
                     * to calling this method).
                     * @param evt the property change event
                     */
                    // @ts-ignore
                    propertyChange(evt: java.beans.PropertyChangeEvent): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                }
            }
        }
    }
}
