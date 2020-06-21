declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Updates the TreeState in response to nodes expanding/collapsing.
                     */
                    // @ts-ignore
                    class TreeExpansionHandler extends java.lang.Object implements javax.swing.event.TreeExpansionListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Called whenever an item in the tree has been expanded.
                         */
                        // @ts-ignore
                        public treeExpanded(event: javax.swing.event.TreeExpansionEvent): void
                        /**
                         * Called whenever an item in the tree has been collapsed.
                         */
                        // @ts-ignore
                        public treeCollapsed(event: javax.swing.event.TreeExpansionEvent): void
                    }
                }
            }
        }
    }
}
