declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Provides the metal look and feel implementation of <code>RootPaneUI</code>.
                 * <p>
                 * <code>MetalRootPaneUI</code> provides support for the
                 * <code>windowDecorationStyle</code> property of <code>JRootPane</code>.
                 * <code>MetalRootPaneUI</code> does this by way of installing a custom
                 * <code>LayoutManager</code>, a private <code>Component</code> to render
                 * the appropriate widgets, and a private <code>Border</code>. The
                 * <code>LayoutManager</code> is always installed, regardless of the value of
                 * the <code>windowDecorationStyle</code> property, but the
                 * <code>Border</code> and <code>Component</code> are only installed/added if
                 * the <code>windowDecorationStyle</code> is other than
                 * <code>JRootPane.NONE</code>.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Terry Kellerman
                 * @since 1.4
                 */
                // @ts-ignore
                class MetalRootPaneUI extends javax.swing.plaf.basic.BasicRootPaneUI {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a UI for a <code>JRootPane</code>.
                     * @param c the JRootPane the RootPaneUI will be created for
                     * @return the RootPaneUI implementation for the passed in JRootPane
                     */
                    // @ts-ignore
                    public static createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    /**
                     * Invokes supers implementation of <code>installUI</code> to install
                     * the necessary state onto the passed in <code>JRootPane</code>
                     * to render the metal look and feel implementation of
                     * <code>RootPaneUI</code>. If
                     * the <code>windowDecorationStyle</code> property of the
                     * <code>JRootPane</code> is other than <code>JRootPane.NONE</code>,
                     * this will add a custom <code>Component</code> to render the widgets to
                     * <code>JRootPane</code>, as well as installing a custom
                     * <code>Border</code> and <code>LayoutManager</code> on the
                     * <code>JRootPane</code>.
                     * @param c the JRootPane to install state onto
                     */
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    /**
                     * Invokes supers implementation to uninstall any of its state. This will
                     * also reset the <code>LayoutManager</code> of the <code>JRootPane</code>.
                     * If a <code>Component</code> has been added to the <code>JRootPane</code>
                     * to render the window decoration style, this method will remove it.
                     * Similarly, this will revert the Border and LayoutManager of the
                     * <code>JRootPane</code> to what it was before <code>installUI</code>
                     * was invoked.
                     * @param c the JRootPane to uninstall state from
                     */
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * Invoked when a property changes. <code>MetalRootPaneUI</code> is
                     * primarily interested in events originating from the
                     * <code>JRootPane</code> it has been installed on identifying the
                     * property <code>windowDecorationStyle</code>. If the
                     * <code>windowDecorationStyle</code> has changed to a value other
                     * than <code>JRootPane.NONE</code>, this will add a <code>Component</code>
                     * to the <code>JRootPane</code> to render the window decorations, as well
                     * as installing a <code>Border</code> on the <code>JRootPane</code>.
                     * On the other hand, if the <code>windowDecorationStyle</code> has
                     * changed to <code>JRootPane.NONE</code>, this will remove the
                     * <code>Component</code> that has been added to the <code>JRootPane</code>
                     * as well resetting the Border to what it was before
                     * <code>installUI</code> was invoked.
                     * @param e A PropertyChangeEvent object describing the event source
                     *           and the property that has changed.
                     */
                    // @ts-ignore
                    public propertyChange(e: java.beans.PropertyChangeEvent): void
                }
            }
        }
    }
}
