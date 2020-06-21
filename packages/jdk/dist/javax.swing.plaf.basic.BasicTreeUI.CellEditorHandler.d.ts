declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Listener responsible for getting cell editing events and updating
                     * the tree accordingly.
                     */
                    // @ts-ignore
                    class CellEditorHandler extends java.lang.Object implements javax.swing.event.CellEditorListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Messaged when editing has stopped in the tree.
                         */
                        // @ts-ignore
                        public editingStopped(e: javax.swing.event.ChangeEvent): void
                        /**
                         * Messaged when editing has been canceled in the tree.
                         */
                        // @ts-ignore
                        public editingCanceled(e: javax.swing.event.ChangeEvent): void
                    }
                }
            }
        }
    }
}
