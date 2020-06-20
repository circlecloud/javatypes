declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JSplitPane.
             * @author Scott Violet
             */
            // @ts-ignore
            class SplitPaneUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Messaged to relayout the JSplitPane based on the preferred size
                 * of the children components.
                 */
                // @ts-ignore
                abstract resetToPreferredSizes(jc: javax.swing.JSplitPane): void
                /**
                 * Sets the location of the divider to location.
                 */
                // @ts-ignore
                abstract setDividerLocation(jc: javax.swing.JSplitPane, location: number /*int*/): void
                /**
                 * Returns the location of the divider.
                 */
                // @ts-ignore
                abstract getDividerLocation(jc: javax.swing.JSplitPane): int
                /**
                 * Returns the minimum possible location of the divider.
                 */
                // @ts-ignore
                abstract getMinimumDividerLocation(jc: javax.swing.JSplitPane): int
                /**
                 * Returns the maximum possible location of the divider.
                 */
                // @ts-ignore
                abstract getMaximumDividerLocation(jc: javax.swing.JSplitPane): int
                /**
                 * Messaged after the JSplitPane the receiver is providing the look
                 * and feel for paints its children.
                 */
                // @ts-ignore
                abstract finishedPaintingChildren(jc: javax.swing.JSplitPane, g: java.awt.Graphics): void
            }
        }
    }
}
