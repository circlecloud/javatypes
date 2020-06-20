declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * <code>TreeTraverseAction</code> is the action used for left/right keys.
                     * Will toggle the expandedness of a node, as well as potentially
                     * incrementing the selection.
                     */
                    // @ts-ignore
                    class TreeTraverseAction extends javax.swing.AbstractAction {
                        // @ts-ignore
                        constructor(direction: number /*int*/, name: string)
                        /**
                         * Determines direction to traverse, 1 means expand, -1 means
                         * collapse.
                         */
                        // @ts-ignore
                        direction: number /*int*/
                        // @ts-ignore
                        actionPerformed(e: java.awt.event.ActionEvent): void
                        // @ts-ignore
                        isEnabled(): boolean
                    }
                }
            }
        }
    }
}
