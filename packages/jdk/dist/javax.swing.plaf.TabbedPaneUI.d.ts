declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JTabbedPane.
             * @author Dave Moore
             * @author Amy Fowler
             */
            // @ts-ignore
            abstract class TabbedPaneUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public abstract tabForCoordinate(pane: javax.swing.JTabbedPane, x: number /*int*/, y: number /*int*/): number /*int*/
                // @ts-ignore
                public abstract getTabBounds(pane: javax.swing.JTabbedPane, index: number /*int*/): java.awt.Rectangle
                // @ts-ignore
                public abstract getTabRunCount(pane: javax.swing.JTabbedPane): number /*int*/
            }
        }
    }
}
