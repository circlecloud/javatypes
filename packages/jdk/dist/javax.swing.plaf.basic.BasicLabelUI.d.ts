declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * A Windows L&amp;F implementation of LabelUI.  This implementation
                 * is completely static, i.e. there's only one UIView implementation
                 * that's shared by all JLabel objects.
                 * @author Hans Muller
                 */
                // @ts-ignore
                class BasicLabelUI extends javax.swing.plaf.LabelUI implements java.beans.PropertyChangeListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default <code>BasicLabelUI</code> instance. This field might
                     * not be used. To change the default instance use a subclass which
                     * overrides the <code>createUI</code> method, and place that class
                     * name in defaults table under the key "LabelUI".
                     */
                    // @ts-ignore
                    labelUI: javax.swing.plaf.basic.BasicLabelUI
                    /**
                     * Forwards the call to SwingUtilities.layoutCompoundLabel().
                     * This method is here so that a subclass could do Label specific
                     * layout and to shorten the method name a little.
                     * @param label an instance of {#code JLabel}
                     * @param fontMetrics a font metrics
                     * @param text a text
                     * @param icon an icon
                     * @param viewR a bounding rectangle to lay out label
                     * @param iconR a bounding rectangle to lay out icon
                     * @param textR a bounding rectangle to lay out text
                     * @return a possibly clipped version of the compound labels string
                     * @see SwingUtilities#layoutCompoundLabel
                     */
                    // @ts-ignore
                    layoutCL(label: javax.swing.JLabel, fontMetrics: java.awt.FontMetrics, text: string, icon: javax.swing.Icon, viewR: java.awt.Rectangle, iconR: java.awt.Rectangle, textR: java.awt.Rectangle): java.lang.String
                    /**
                     * Paint clippedText at textX, textY with the labels foreground color.
                     * @param l an instance of {#code JLabel}
                     * @param g an instance of {#code Graphics}
                     * @param s a text
                     * @param textX an X coordinate
                     * @param textY an Y coordinate
                     * @see #paint
                     * @see #paintDisabledText
                     */
                    // @ts-ignore
                    paintEnabledText(l: javax.swing.JLabel, g: java.awt.Graphics, s: string, textX: number /*int*/, textY: number /*int*/): void
                    /**
                     * Paint clippedText at textX, textY with background.lighter() and then
                     * shifted down and to the right by one pixel with background.darker().
                     * @param l an instance of {#code JLabel}
                     * @param g an instance of {#code Graphics}
                     * @param s a text
                     * @param textX an X coordinate
                     * @param textY an Y coordinate
                     * @see #paint
                     * @see #paintEnabledText
                     */
                    // @ts-ignore
                    paintDisabledText(l: javax.swing.JLabel, g: java.awt.Graphics, s: string, textX: number /*int*/, textY: number /*int*/): void
                    /**
                     * Paints the label text with the foreground color, if the label is opaque
                     * then paints the entire background with the background color. The Label
                     * text is drawn by {@link #paintEnabledText} or {@link #paintDisabledText}.
                     * The locations of the label parts are computed by {@link #layoutCL}.
                     * @see #paintEnabledText
                     * @see #paintDisabledText
                     * @see #layoutCL
                     */
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * @return getPreferredSize(c)
                     */
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * @return getPreferredSize(c)
                     */
                    // @ts-ignore
                    getMaximumSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    /**
                     * Returns an enum indicating how the baseline of the component
                     * changes as the size changes.
                     * @throws NullPointerException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineResizeBehavior(c: javax.swing.JComponent): java.awt.Component.BaselineResizeBehavior
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Installs default properties.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    installDefaults(c: javax.swing.JLabel): void
                    /**
                     * Registers listeners.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    installListeners(c: javax.swing.JLabel): void
                    /**
                     * Registers components.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    installComponents(c: javax.swing.JLabel): void
                    /**
                     * Registers keyboard actions.
                     * @param l an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    installKeyboardActions(l: javax.swing.JLabel): void
                    /**
                     * Uninstalls default properties.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    uninstallDefaults(c: javax.swing.JLabel): void
                    /**
                     * Unregisters listeners.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    uninstallListeners(c: javax.swing.JLabel): void
                    /**
                     * Unregisters components.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    uninstallComponents(c: javax.swing.JLabel): void
                    /**
                     * Unregisters keyboard actions.
                     * @param c an instance of {#code JLabel}
                     */
                    // @ts-ignore
                    uninstallKeyboardActions(c: javax.swing.JLabel): void
                    /**
                     * Returns an instance of {@code BasicLabelUI}.
                     * @param c a component
                     * @return an instance of {#code BasicLabelUI}
                     */
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
