declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Metal UI for JComboBox
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @see MetalComboBoxEditor
                 * @see MetalComboBoxButton
                 * @author Tom Santos
                 */
                // @ts-ignore
                class MetalComboBoxUI extends javax.swing.plaf.basic.BasicComboBoxUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    /**
                     * If necessary paints the currently selected item.
                     * @param g Graphics to paint to
                     * @param bounds Region to paint current value to
                     * @param hasFocus whether or not the JComboBox has focus
                     * @throws NullPointerException if any of the arguments are null.
                     * @since 1.5
                     */
                    // @ts-ignore
                    paintCurrentValue(g: java.awt.Graphics, bounds: java.awt.Rectangle, hasFocus: boolean): void
                    /**
                     * If necessary paints the background of the currently selected item.
                     * @param g Graphics to paint to
                     * @param bounds Region to paint background to
                     * @param hasFocus whether or not the JComboBox has focus
                     * @throws NullPointerException if any of the arguments are null.
                     * @since 1.5
                     */
                    // @ts-ignore
                    paintCurrentValueBackground(g: java.awt.Graphics, bounds: java.awt.Rectangle, hasFocus: boolean): void
                    /**
                     * Returns the baseline.
                     * @throws NullPointerException {#inheritDoc}
                     * @throws IllegalArgumentException {#inheritDoc}
                     * @see javax.swing.JComponent#getBaseline(int, int)
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaseline(c: javax.swing.JComponent, width: number /*int*/, height: number /*int*/): int
                    // @ts-ignore
                    createEditor(): javax.swing.ComboBoxEditor
                    // @ts-ignore
                    createPopup(): javax.swing.plaf.basic.ComboPopup
                    // @ts-ignore
                    createArrowButton(): javax.swing.JButton
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    /**
                     * As of Java 2 platform v1.4 this method is no longer used. Do not call or
                     * override. All the functionality of this method is in the
                     * MetalPropertyChangeListener.
                     * @deprecated As of Java 2 platform v1.4.
                     */
                    // @ts-ignore
                    editablePropertyChanged(e: java.beans.PropertyChangeEvent): void
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    // @ts-ignore
                    layoutComboBox(parent: java.awt.Container, manager: javax.swing.plaf.metal.MetalComboBoxUI.MetalComboBoxLayoutManager): void
                    /**
                     * As of Java 2 platform v1.4 this method is no
                     * longer used.
                     * @deprecated As of Java 2 platform v1.4.
                     */
                    // @ts-ignore
                    removeListeners(): void
                    // @ts-ignore
                    configureEditor(): void
                    // @ts-ignore
                    unconfigureEditor(): void
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                }
            }
        }
    }
}
