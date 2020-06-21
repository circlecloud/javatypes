declare namespace javax {
    namespace swing {
        namespace JTree {
            /**
             * Listens to the model and updates the <code>expandedState</code>
             * accordingly when nodes are removed, or changed.
             */
            // @ts-ignore
            class TreeModelHandler extends java.lang.Object implements javax.swing.event.TreeModelListener {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public treeNodesChanged(e: javax.swing.event.TreeModelEvent): void
                // @ts-ignore
                public treeNodesInserted(e: javax.swing.event.TreeModelEvent): void
                // @ts-ignore
                public treeStructureChanged(e: javax.swing.event.TreeModelEvent): void
                // @ts-ignore
                public treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void
            }
        }
    }
}
