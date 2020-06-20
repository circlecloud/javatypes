declare namespace javax {
    namespace swing {
        namespace JToolBar {
            /**
             * A toolbar-specific separator. An object with dimension but
             * no contents used to divide buttons on a tool bar into groups.
             */
            // @ts-ignore
            class Separator extends javax.swing.JSeparator {
                /**
                 * Creates a new toolbar separator with the default size
                 * as defined by the current look and feel.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a new toolbar separator with the specified size.
                 * @param size the <code>Dimension</code> of the separator
                 */
                // @ts-ignore
                constructor(size: java.awt.Dimension)
                /**
                 * Returns the name of the L&amp;F class that renders this component.
                 * @return the string "ToolBarSeparatorUI"
                 * @see JComponent#getUIClassID
                 * @see UIDefaults#getUI
                 */
                // @ts-ignore
                getUIClassID(): java.lang.String
                /**
                 * Sets the size of the separator.
                 * @param size the new <code>Dimension</code> of the separator
                 */
                // @ts-ignore
                setSeparatorSize(size: java.awt.Dimension): void
                /**
                 * Returns the size of the separator
                 * @return the <code>Dimension</code> object containing the separator's
                 *          size (This is a reference, NOT a copy!)
                 */
                // @ts-ignore
                getSeparatorSize(): java.awt.Dimension
                /**
                 * Returns the minimum size for the separator.
                 * @return the <code>Dimension</code> object containing the separator's
                 *          minimum size
                 */
                // @ts-ignore
                getMinimumSize(): java.awt.Dimension
                /**
                 * Returns the maximum size for the separator.
                 * @return the <code>Dimension</code> object containing the separator's
                 *          maximum size
                 */
                // @ts-ignore
                getMaximumSize(): java.awt.Dimension
                /**
                 * Returns the preferred size for the separator.
                 * @return the <code>Dimension</code> object containing the separator's
                 *          preferred size
                 */
                // @ts-ignore
                getPreferredSize(): java.awt.Dimension
            }
        }
    }
}
