declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * Pluggable look and feel interface for JTabbedPane.
             * @author Dave Moore
             * @author Amy Fowler
             */
            // @ts-ignore
            class TabbedPaneUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                // @ts-ignore
                abstract tabForCoordinate(pane: javax.swing.JTabbedPane, x: number /*int*/, y: number /*int*/): int
                // @ts-ignore
                abstract getTabBounds(pane: javax.swing.JTabbedPane, index: number /*int*/): java.awt.Rectangle
                // @ts-ignore
                abstract getTabRunCount(pane: javax.swing.JTabbedPane): int
            }
        }
    }
}
