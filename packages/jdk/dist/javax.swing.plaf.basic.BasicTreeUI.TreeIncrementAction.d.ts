declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * TreeIncrementAction is used to handle up/down actions.  Selection
                     * is moved up or down based on direction.
                     */
                    // @ts-ignore
                    class TreeIncrementAction extends javax.swing.AbstractAction {
                        // @ts-ignore
                        constructor(direction: number /*int*/, name: java.lang.String | string)
                        /**
                         * Specifies the direction to adjust the selection by.
                         */
                        // @ts-ignore
                        direction: number /*int*/
                        // @ts-ignore
                        public actionPerformed(e: java.awt.event.ActionEvent): void
                        // @ts-ignore
                        public isEnabled(): boolean
                    }
                }
            }
        }
    }
}
