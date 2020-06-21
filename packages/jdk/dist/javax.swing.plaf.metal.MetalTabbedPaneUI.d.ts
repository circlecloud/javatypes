declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * The Metal subclass of BasicTabbedPaneUI.
                 * <p>
                 * <strong>Warning:</strong>
                 * Serialized objects of this class will not be compatible with
                 * future Swing releases. The current serialization support is
                 * appropriate for short term storage or RMI between applications running
                 * the same version of Swing.  As of 1.4, support for long term storage
                 * of all JavaBeans&trade;
                 * has been added to the <code>java.beans</code> package.
                 * Please see {@link java.beans.XMLEncoder}.
                 * @author Tom Santos
                 */
                // @ts-ignore
                class MetalTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    minTabWidth: number /*int*/
                    // @ts-ignore
                    tabAreaBackground: java.awt.Color
                    // @ts-ignore
                    selectColor: java.awt.Color
                    // @ts-ignore
                    selectHighlight: java.awt.Color
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    createLayoutManager(): java.awt.LayoutManager
                    // @ts-ignore
                    installDefaults(): void
                    // @ts-ignore
                    paintTabBorder(g: java.awt.Graphics, tabPlacement: number /*int*/, tabIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    paintTopTabBorder(tabIndex: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, btm: number /*int*/, rght: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    shouldFillGap(currentRun: number /*int*/, tabIndex: number /*int*/, x: number /*int*/, y: number /*int*/): boolean
                    // @ts-ignore
                    getColorForGap(currentRun: number /*int*/, x: number /*int*/, y: number /*int*/): java.awt.Color
                    // @ts-ignore
                    paintLeftTabBorder(tabIndex: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, btm: number /*int*/, rght: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    paintBottomTabBorder(tabIndex: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, btm: number /*int*/, rght: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    paintRightTabBorder(tabIndex: number /*int*/, g: java.awt.Graphics, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, btm: number /*int*/, rght: number /*int*/, isSelected: boolean): void
                    // @ts-ignore
                    public update(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintTabBackground(g: java.awt.Graphics, tabPlacement: number /*int*/, tabIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/, isSelected: boolean): void
                    /**
                     * Overridden to do nothing for the Java L&amp;F.
                     */
                    // @ts-ignore
                    getTabLabelShiftX(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
                    /**
                     * Overridden to do nothing for the Java L&amp;F.
                     */
                    // @ts-ignore
                    getTabLabelShiftY(tabPlacement: number /*int*/, tabIndex: number /*int*/, isSelected: boolean): number /*int*/
                    /**
                     * {@inheritDoc}
                     * @since 1.6
                     */
                    // @ts-ignore
                    getBaselineOffset(): number /*int*/
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintHighlightBelowTab(): void
                    // @ts-ignore
                    paintFocusIndicator(g: java.awt.Graphics, tabPlacement: number /*int*/, rects: java.awt.Rectangle[], tabIndex: number /*int*/, iconRect: java.awt.Rectangle, textRect: java.awt.Rectangle, isSelected: boolean): void
                    // @ts-ignore
                    paintContentBorderTopEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderBottomEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderLeftEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    paintContentBorderRightEdge(g: java.awt.Graphics, tabPlacement: number /*int*/, selectedIndex: number /*int*/, x: number /*int*/, y: number /*int*/, w: number /*int*/, h: number /*int*/): void
                    // @ts-ignore
                    calculateMaxTabHeight(tabPlacement: number /*int*/): number /*int*/
                    // @ts-ignore
                    getTabRunOverlay(tabPlacement: number /*int*/): number /*int*/
                    // @ts-ignore
                    shouldRotateTabRuns(tabPlacement: number /*int*/, selectedRun: number /*int*/): boolean
                    // @ts-ignore
                    shouldPadTabRun(tabPlacement: number /*int*/, run: number /*int*/): boolean
                }
            }
        }
    }
}
