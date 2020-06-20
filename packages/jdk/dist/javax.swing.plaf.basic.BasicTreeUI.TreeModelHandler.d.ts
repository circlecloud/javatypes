declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Forwards all TreeModel events to the TreeState.
                     */
                    // @ts-ignore
                    class TreeModelHandler extends java.lang.Object implements javax.swing.event.TreeModelListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                        // @ts-ignore
                        treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                        // @ts-ignore
                        treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
                        // @ts-ignore
                        treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
                    }
                }
            }
        }
    }
}
