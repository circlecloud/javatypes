declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JSpinner}.
                 * @author Hans Muller
                 * @author Joshua Outwater
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthSpinnerUI extends javax.swing.plaf.basic.BasicSpinnerUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns a new instance of SynthSpinnerUI.
                     * @param c the JSpinner (not used)
                     * @see ComponentUI#createUI
                     * @return a new SynthSpinnerUI object
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
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
                     * Initializes the <code>JSpinner</code> <code>border</code>,
                     * <code>foreground</code>, and <code>background</code>, properties
                     * based on the corresponding "Spinner.*" properties from defaults table.
                     * The <code>JSpinners</code> layout is set to the value returned by
                     * <code>createLayout</code>.  This method is called by <code>installUI</code>.
                     * @see #uninstallDefaults
                     * @see #installUI
                     * @see #createLayout
                     * @see LookAndFeel#installBorder
                     * @see LookAndFeel#installColors
                     */
                    // @ts-ignore
                    installDefaults(): void
                    /**
                     * Sets the <code>JSpinner's</code> layout manager to null.  This
                     * method is called by <code>uninstallUI</code>.
                     * @see #installDefaults
                     * @see #uninstallUI
                     */
                    // @ts-ignore
                    uninstallDefaults(): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createLayout(): java.awt.LayoutManager
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createPreviousButton(): java.awt.Component
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createNextButton(): java.awt.Component
                    /**
                     * This method is called by installUI to get the editor component
                     * of the <code>JSpinner</code>.  By default it just returns
                     * <code>JSpinner.getEditor()</code>.  Subclasses can override
                     * <code>createEditor</code> to return a component that contains
                     * the spinner's editor or null, if they're going to handle adding
                     * the editor to the <code>JSpinner</code> in an
                     * <code>installUI</code> override.
                     * <p>
                     * Typically this method would be overridden to wrap the editor
                     * with a container with a custom border, since one can't assume
                     * that the editors border can be set directly.
                     * <p>
                     * The <code>replaceEditor</code> method is called when the spinners
                     * editor is changed with <code>JSpinner.setEditor</code>.  If you've
                     * overriden this method, then you'll probably want to override
                     * <code>replaceEditor</code> as well.
                     * @return the JSpinners editor JComponent, spinner.getEditor() by default
                     * @see #installUI
                     * @see #replaceEditor
                     * @see JSpinner#getEditor
                     */
                    // @ts-ignore
                    createEditor(): javax.swing.JComponent
                    /**
                     * Called by the <code>PropertyChangeListener</code> when the
                     * <code>JSpinner</code> editor property changes.  It's the responsibility
                     * of this method to remove the old editor and add the new one.  By
                     * default this operation is just:
                     * <pre>
                     * spinner.remove(oldEditor);
                     * spinner.add(newEditor, "Editor");
                     * </pre>
                     * The implementation of <code>replaceEditor</code> should be coordinated
                     * with the <code>createEditor</code> method.
                     * @see #createEditor
                     * @see #createPropertyChangeListener
                     */
                    // @ts-ignore
                    replaceEditor(oldEditor: javax.swing.JComponent, newEditor: javax.swing.JComponent): void
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
