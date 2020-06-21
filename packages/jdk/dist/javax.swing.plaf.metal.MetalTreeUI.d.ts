declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                /**
                 * The metal look and feel implementation of <code>TreeUI</code>.
                 * <p>
                 * <code>MetalTreeUI</code> allows for configuring how to
                 * visually render the spacing and delineation between nodes. The following
                 * hints are supported:
                 * <table summary="Descriptions of supported hints: Angled, Horizontal, and None">
                 * <tr>
                 * <th><p style="text-align:left">Angled</p></th>
                 * <td>A line is drawn connecting the child to the parent. For handling
                 * of the root node refer to
                 * {@link javax.swing.JTree#setRootVisible} and
                 * {@link javax.swing.JTree#setShowsRootHandles}.
                 * </td>
                 * </tr>
                 * <tr>
                 * <th><p style="text-align:left">Horizontal</p></th>
                 * <td>A horizontal line is drawn dividing the children of the root node.</td>
                 * </tr>
                 * <tr>
                 * <th><p style="text-align:left">None</p></th>
                 * <td>Do not draw any visual indication between nodes.</td>
                 * </tr>
                 * </table>
                 * <p>
                 * As it is typically impractical to obtain the <code>TreeUI</code> from
                 * the <code>JTree</code> and cast to an instance of <code>MetalTreeUI</code>
                 * you enable this property via the client property
                 * <code>JTree.lineStyle</code>. For example, to switch to
                 * <code>Horizontal</code> style you would do:
                 * <code>tree.putClientProperty("JTree.lineStyle", "Horizontal");</code>
                 * <p>
                 * The default is <code>Angled</code>.
                 * @author Tom Santos
                 * @author Steve Wilson (value add stuff)
                 */
                // @ts-ignore
                class MetalTreeUI extends javax.swing.plaf.basic.BasicTreeUI {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static createUI(x: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    // @ts-ignore
                    getHorizontalLegBuffer(): number /*int*/
                    // @ts-ignore
                    public installUI(c: javax.swing.JComponent): void
                    // @ts-ignore
                    public uninstallUI(c: javax.swing.JComponent): void
                    /**
                     * this function converts between the string passed into the client property
                     * and the internal representation (currently and int)
                     */
                    // @ts-ignore
                    decodeLineStyle(lineStyleFlag: java.lang.Object | any): void
                    // @ts-ignore
                    isLocationInExpandControl(row: number /*int*/, rowLevel: number /*int*/, mouseX: number /*int*/, mouseY: number /*int*/): boolean
                    // @ts-ignore
                    public paint(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintHorizontalSeparators(g: java.awt.Graphics, c: javax.swing.JComponent): void
                    // @ts-ignore
                    paintVerticalPartOfLeg(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, path: javax.swing.tree.TreePath): void
                    // @ts-ignore
                    paintHorizontalPartOfLeg(g: java.awt.Graphics, clipBounds: java.awt.Rectangle, insets: java.awt.Insets, bounds: java.awt.Rectangle, path: javax.swing.tree.TreePath, row: number /*int*/, isExpanded: boolean, hasBeenExpanded: boolean, isLeaf: boolean): void
                }
            }
        }
    }
}
