declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                /**
                 * BasicButton implementation
                 * @author Jeff Dinkins
                 */
                // @ts-ignore
                class BasicButtonUI extends javax.swing.plaf.ButtonUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    defaultTextIconGap: number /*int*/
                    // @ts-ignore
                    defaultTextShiftOffset: number /*int*/
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    getPropertyPrefix(): java.lang.String
                    // @ts-ignore
                    installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    installDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    installListeners(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    installKeyboardActions(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    uninstallKeyboardActions(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallListeners(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    uninstallDefaults(b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    createButtonListener(b: javax.swing.AbstractButton): javax.swing.plaf.basic.BasicButtonListener
                    // @ts-ignore
                    getDefaultTextIconGap(b: javax.swing.AbstractButton): int
                    // @ts-ignore
                    paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintIcon(g: java.awt.Graphics, c: javax.swing.JComponent, iconRect: java.awt.Rectangle): void
                    /**
                     * As of Java 2 platform v 1.4 this method should not be used or overriden.
                     * Use the paintText method which takes the AbstractButton argument.
                     */
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, c: javax.swing.JComponent, textRect: java.awt.Rectangle, text: string): void
                    /**
                     * Method which renders the text of the current button.
                     * <p>
                     * @param g Graphics context
                     * @param b Current button to render
                     * @param textRect Bounding rectangle to render the text.
                     * @param text String to render
                     * @since 1.4
                     */
                    // @ts-ignore
                    paintText(g: java.awt.Graphics, b: javax.swing.AbstractButton, textRect: java.awt.Rectangle, text: string): void
                    // @ts-ignore
                    paintFocus(g: java.awt.Graphics, b: javax.swing.AbstractButton, viewRect: java.awt.Rectangle, textRect: java.awt.Rectangle, iconRect: java.awt.Rectangle): void
                    // @ts-ignore
                    paintButtonPressed(g: java.awt.Graphics, b: javax.swing.AbstractButton): void
                    // @ts-ignore
                    clearTextShiftOffset(): void
                    // @ts-ignore
                    setTextShiftOffset(): void
                    // @ts-ignore
                    getTextShiftOffset(): int
                    // @ts-ignore
                    getMinimumSize(c: javax.swing.JComponent): java.awt.Dimension
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
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
                }
            }
        }
    }
}
