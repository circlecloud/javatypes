declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                /**
                 * Provides the Synth L&amp;F UI delegate for
                 * {@link javax.swing.JTabbedPane}.
                 * <p>Looks up the {@code selectedTabPadInsets} property from the Style,
                 * which represents additional insets for the selected tab.
                 * @author Scott Violet
                 * @since 1.7
                 */
                // @ts-ignore
                class SynthTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
                    // @ts-ignore
                    constructor()
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
                    public getContext(c: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    createScrollButton(direction: number /*int*/): javax.swing.JButton
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                    /**
                     * {@inheritDoc}
                     * Overridden to keep track of whether the selected tab is also pressed.
                     */
                    // @ts-ignore
                    createMouseListener(): java.awt.event.MouseListener
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getTabLabelShiftX(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getTabLabelShiftY(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
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
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getBaseline(tab: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public paintBorder(context: javax.swing.plaf.synth.SynthContext, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
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
                    // @ts-ignore
                    paintTabArea(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    setRolloverTab(index: number /*int*/): void
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    calculateMaxTabHeight(tabPlacement: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    calculateTabWidth(tabPlacement: number /*int*/, tabIndex: number /*int*/, metrics: java.awt.FontMetrics): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    calculateMaxTabWidth(tabPlacement: number /*int*/): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getTabInsets(tabPlacement: number /*int*/, tabIndex: number /*int*/): java.awt.Insets
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    getFontMetrics(): java.awt.FontMetrics
                    /**
                     * {@inheritDoc}
                     * Overridden to create a TabbedPaneLayout subclass which takes into
                     * account tabOverlap.
                     */
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                }
            }
        }
    }
}
