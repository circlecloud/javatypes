declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * TreePageAction handles page up and page down events.
                     */
                    // @ts-ignore
                    class TreePageAction extends javax.swing.AbstractAction {
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
