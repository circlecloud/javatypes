declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JSplitPane.
             * @author Scott Violet
             */
            // @ts-ignore
            abstract class SplitPaneUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Messaged to relayout the JSplitPane based on the preferred size
                 * of the children components.
                 */
                // @ts-ignore
                public abstract resetToPreferredSizes(jc: javax.swing.JSplitPane): void
                /**
                 * Sets the location of the divider to location.
                 */
                // @ts-ignore
                public abstract setDividerLocation(jc: javax.swing.JSplitPane, location: number /*int*/): void
                /**
                 * Returns the location of the divider.
                 */
                // @ts-ignore
                public abstract getDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                /**
                 * Returns the minimum possible location of the divider.
                 */
                // @ts-ignore
                public abstract getMinimumDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                /**
                 * Returns the maximum possible location of the divider.
                 */
                // @ts-ignore
                public abstract getMaximumDividerLocation(jc: javax.swing.JSplitPane): number /*int*/
                /**
                 * Messaged after the JSplitPane the receiver is providing the look
                 * and feel for paints its children.
                 */
                // @ts-ignore
                public abstract finishedPaintingChildren(jc: javax.swing.JSplitPane, g: java.awt.Graphics): void
            }
        }
    }
}
