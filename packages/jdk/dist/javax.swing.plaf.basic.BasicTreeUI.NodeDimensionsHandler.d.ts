declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Class responsible for getting size of node, method is forwarded
                     * to BasicTreeUI method. X location does not include insets, that is
                     * handled in getPathBounds.
                     */
                    // @ts-ignore
                    class NodeDimensionsHandler extends javax.swing.tree.AbstractLayoutCache.NodeDimensions {
                        // @ts-ignore
                        constructor()
                        /**
                         * Responsible for getting the size of a particular node.
                         */
                        // @ts-ignore
                        public getNodeDimensions(value: java.lang.Object | any, row: number /*int*/, depth: number /*int*/, expanded: boolean, size: java.awt.Rectangle): java.awt.Rectangle
                        /**
                         * @return amount to indent the given row.
                         */
                        // @ts-ignore
                        getRowX(row: number /*int*/, depth: number /*int*/): number /*int*/
                    }
                }
            }
        }
    }
}
