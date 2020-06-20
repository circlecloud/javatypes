declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * Implementation of ScrollBarUI for the Metal Look and Feel
                 * <p>
                 * @author Tom Santos
                 * @author Steve Wilson
                 */
                // @ts-ignore
                class MetalScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    bumps: javax.swing.plaf.metal.MetalBumps
                    // @ts-ignore
                    increaseButton: javax.swing.plaf.metal.MetalScrollButton
                    // @ts-ignore
                    decreaseButton: javax.swing.plaf.metal.MetalScrollButton
                    // @ts-ignore
                    scrollBarWidth: number /*int*/
                    // @ts-ignore
                    readonly FREE_STANDING_PROP: string
                    // @ts-ignore
                    isFreeStanding: boolean
                    // @ts-ignore
                    createUI(c: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    installListeners(): void
                    // @ts-ignore
                    createPropertyChangeListener(): java.beans.PropertyChangeListener
                    // @ts-ignore
                    configureScrollBarColors(): void
                    // @ts-ignore
                    getPreferredSize(c: javax.swing.JComponent): java.awt.Dimension
                    /**
                     * Returns the view that represents the decrease view.
                     */
                    // @ts-ignore
                    createDecreaseButton(orientation: number /*int*/): javax.swing.JButton
                    /**
                     * Returns the view that represents the increase view.
                     */
                    // @ts-ignore
                    createIncreaseButton(orientation: number /*int*/): javax.swing.JButton
                    // @ts-ignore
                    paintTrack(g: java.awt.Graphics, c: javax.swing.JComponent, trackBounds: java.awt.Rectangle): void
                    // @ts-ignore
                    paintThumb(g: java.awt.Graphics, c: javax.swing.JComponent, thumbBounds: java.awt.Rectangle): void
                    // @ts-ignore
                    getMinimumThumbSize(): java.awt.Dimension
                    /**
                     * This is overridden only to increase the invalid area.  This
                     * ensures that the "Shadow" below the thumb is invalidated
                     */
                    // @ts-ignore
                    setThumbBounds(x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                }
            }
        }
    }
}
