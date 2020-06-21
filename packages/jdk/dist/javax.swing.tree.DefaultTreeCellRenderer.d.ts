declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Displays an entry in a tree.
             * <code>DefaultTreeCellRenderer</code> is not opaque and
             * unless you subclass paint you should not change this.
             * See <a
             * href="https://docs.oracle.com/javase/tutorial/uiswing/components/tree.html">How to Use Trees</a>
             * in <em>The Java Tutorial</em>
             * for examples of customizing node display using this class.
             * <p>
             * The set of icons and colors used by {@code DefaultTreeCellRenderer}
             * can be configured using the various setter methods. The value for
             * each property is initialized from the defaults table. When the
             * look and feel changes ({@code updateUI} is invoked), any properties
             * that have a value of type {@code UIResource} are refreshed from the
             * defaults table. The following table lists the mapping between
             * {@code DefaultTreeCellRenderer} property and defaults table key:
             * <table border="1" cellpadding="1" cellspacing="0" summary="">
             * <tr valign="top"  align="left">
             * <th style="background-color:#CCCCFF" align="left">Property:
             * <th style="background-color:#CCCCFF" align="left">Key:
             * <tr><td>"leafIcon"<td>"Tree.leafIcon"
             * <tr><td>"closedIcon"<td>"Tree.closedIcon"
             * <tr><td>"openIcon"<td>"Tree.openIcon"
             * <tr><td>"textSelectionColor"<td>"Tree.selectionForeground"
             * <tr><td>"textNonSelectionColor"<td>"Tree.textForeground"
             * <tr><td>"backgroundSelectionColor"<td>"Tree.selectionBackground"
             * <tr><td>"backgroundNonSelectionColor"<td>"Tree.textBackground"
             * <tr><td>"borderSelectionColor"<td>"Tree.selectionBorderColor"
             * </table>
             * <p>
             * <strong><a name="override">Implementation Note:</a></strong>
             * This class overrides
             * <code>invalidate</code>,
             * <code>validate</code>,
             * <code>revalidate</code>,
             * <code>repaint</code>,
             * and
             * <code>firePropertyChange</code>
             * solely to improve performance.
             * If not overridden, these frequently called methods would execute code paths
             * that are unnecessary for the default tree cell renderer.
             * If you write your own renderer,
             * take care to weigh the benefits and
             * drawbacks of overriding these methods.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Rob Davis
             * @author Ray Ryan
             * @author Scott Violet
             */
            // @ts-ignore
            class DefaultTreeCellRenderer extends javax.swing.JLabel implements javax.swing.tree.TreeCellRenderer {
                /**
                 * Creates a {@code DefaultTreeCellRenderer}. Icons and text color are
                 * determined from the {@code UIManager}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Is the value currently selected.
                 */
                // @ts-ignore
                selected: boolean
                /**
                 * True if has focus.
                 */
                // @ts-ignore
                hasFocus: boolean
                /**
                 * Icon used to show non-leaf nodes that aren't expanded.
                 */
                // @ts-ignore
                closedIcon: javax.swing.Icon
                /**
                 * Icon used to show leaf nodes.
                 */
                // @ts-ignore
                leafIcon: javax.swing.Icon
                /**
                 * Icon used to show non-leaf nodes that are expanded.
                 */
                // @ts-ignore
                openIcon: javax.swing.Icon
                /**
                 * Color to use for the foreground for selected nodes.
                 */
                // @ts-ignore
                textSelectionColor: java.awt.Color
                /**
                 * Color to use for the foreground for non-selected nodes.
                 */
                // @ts-ignore
                textNonSelectionColor: java.awt.Color
                /**
                 * Color to use for the background when a node is selected.
                 */
                // @ts-ignore
                backgroundSelectionColor: java.awt.Color
                /**
                 * Color to use for the background when the node isn't selected.
                 */
                // @ts-ignore
                backgroundNonSelectionColor: java.awt.Color
                /**
                 * Color to use for the focus indicator when the node has focus.
                 */
                // @ts-ignore
                borderSelectionColor: java.awt.Color
                /**
                 * {@inheritDoc}
                 * @since 1.7
                 */
                // @ts-ignore
                public updateUI(): void
                /**
                 * Returns the default icon, for the current laf, that is used to
                 * represent non-leaf nodes that are expanded.
                 */
                // @ts-ignore
                public getDefaultOpenIcon(): javax.swing.Icon
                /**
                 * Returns the default icon, for the current laf, that is used to
                 * represent non-leaf nodes that are not expanded.
                 */
                // @ts-ignore
                public getDefaultClosedIcon(): javax.swing.Icon
                /**
                 * Returns the default icon, for the current laf, that is used to
                 * represent leaf nodes.
                 */
                // @ts-ignore
                public getDefaultLeafIcon(): javax.swing.Icon
                /**
                 * Sets the icon used to represent non-leaf nodes that are expanded.
                 */
                // @ts-ignore
                public setOpenIcon(newIcon: javax.swing.Icon): void
                /**
                 * Returns the icon used to represent non-leaf nodes that are expanded.
                 */
                // @ts-ignore
                public getOpenIcon(): javax.swing.Icon
                /**
                 * Sets the icon used to represent non-leaf nodes that are not expanded.
                 */
                // @ts-ignore
                public setClosedIcon(newIcon: javax.swing.Icon): void
                /**
                 * Returns the icon used to represent non-leaf nodes that are not
                 * expanded.
                 */
                // @ts-ignore
                public getClosedIcon(): javax.swing.Icon
                /**
                 * Sets the icon used to represent leaf nodes.
                 */
                // @ts-ignore
                public setLeafIcon(newIcon: javax.swing.Icon): void
                /**
                 * Returns the icon used to represent leaf nodes.
                 */
                // @ts-ignore
                public getLeafIcon(): javax.swing.Icon
                /**
                 * Sets the color the text is drawn with when the node is selected.
                 */
                // @ts-ignore
                public setTextSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the color the text is drawn with when the node is selected.
                 */
                // @ts-ignore
                public getTextSelectionColor(): java.awt.Color
                /**
                 * Sets the color the text is drawn with when the node isn't selected.
                 */
                // @ts-ignore
                public setTextNonSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the color the text is drawn with when the node isn't selected.
                 */
                // @ts-ignore
                public getTextNonSelectionColor(): java.awt.Color
                /**
                 * Sets the color to use for the background if node is selected.
                 */
                // @ts-ignore
                public setBackgroundSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the color to use for the background if node is selected.
                 */
                // @ts-ignore
                public getBackgroundSelectionColor(): java.awt.Color
                /**
                 * Sets the background color to be used for non selected nodes.
                 */
                // @ts-ignore
                public setBackgroundNonSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the background color to be used for non selected nodes.
                 */
                // @ts-ignore
                public getBackgroundNonSelectionColor(): java.awt.Color
                /**
                 * Sets the color to use for the border.
                 */
                // @ts-ignore
                public setBorderSelectionColor(newColor: java.awt.Color): void
                /**
                 * Returns the color the border is drawn.
                 */
                // @ts-ignore
                public getBorderSelectionColor(): java.awt.Color
                /**
                 * Subclassed to map <code>FontUIResource</code>s to null. If
                 * <code>font</code> is null, or a <code>FontUIResource</code>, this
                 * has the effect of letting the font of the JTree show
                 * through. On the other hand, if <code>font</code> is non-null, and not
                 * a <code>FontUIResource</code>, the font becomes <code>font</code>.
                 */
                // @ts-ignore
                public setFont(font: java.awt.Font): void
                /**
                 * Gets the font of this component.
                 * @return this component's font; if a font has not been set
                 *  for this component, the font of its parent is returned
                 */
                // @ts-ignore
                public getFont(): java.awt.Font
                /**
                 * Subclassed to map <code>ColorUIResource</code>s to null. If
                 * <code>color</code> is null, or a <code>ColorUIResource</code>, this
                 * has the effect of letting the background color of the JTree show
                 * through. On the other hand, if <code>color</code> is non-null, and not
                 * a <code>ColorUIResource</code>, the background becomes
                 * <code>color</code>.
                 */
                // @ts-ignore
                public setBackground(color: java.awt.Color): void
                /**
                 * Configures the renderer based on the passed in components.
                 * The value is set from messaging the tree with
                 * <code>convertValueToText</code>, which ultimately invokes
                 * <code>toString</code> on <code>value</code>.
                 * The foreground color is set based on the selection and the icon
                 * is set based on the <code>leaf</code> and <code>expanded</code>
                 * parameters.
                 */
                // @ts-ignore
                public getTreeCellRendererComponent(tree: javax.swing.JTree, value: java.lang.Object | any, sel: boolean, expanded: boolean, leaf: boolean, row: number /*int*/, hasFocus: boolean): java.awt.Component
                /**
                 * Paints the value.  The background is filled based on selected.
                 */
                // @ts-ignore
                public paint(g: java.awt.Graphics): void
                /**
                 * Overrides <code>JComponent.getPreferredSize</code> to
                 * return slightly wider preferred size value.
                 */
                // @ts-ignore
                public getPreferredSize(): java.awt.Dimension
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public validate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 * @since 1.5
                 */
                // @ts-ignore
                public invalidate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public revalidate(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public repaint(tm: number /*long*/, x: number /*int*/, y: number /*int*/, width: number /*int*/, height: number /*int*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public repaint(r: java.awt.Rectangle): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 * @since 1.5
                 */
                // @ts-ignore
                public repaint(): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                firePropertyChange(propertyName: java.lang.String | string, oldValue: java.lang.Object | any, newValue: java.lang.Object | any): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*byte*/, newValue: number /*byte*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: string, newValue: string): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*short*/, newValue: number /*short*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*int*/, newValue: number /*int*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*long*/, newValue: number /*long*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*float*/, newValue: number /*float*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: number /*double*/, newValue: number /*double*/): void
                /**
                 * Overridden for performance reasons.
                 * See the <a href="#override">Implementation Note</a>
                 * for more information.
                 */
                // @ts-ignore
                public firePropertyChange(propertyName: java.lang.String | string, oldValue: boolean, newValue: boolean): void
            }
        }
    }
}
