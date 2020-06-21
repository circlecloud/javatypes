declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * Listens for changes in the selection model and updates the display
                     * accordingly.
                     */
                    // @ts-ignore
                    class TreeSelectionHandler extends java.lang.Object implements javax.swing.event.TreeSelectionListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Messaged when the selection changes in the tree we're displaying
                         * for.  Stops editing, messages super and displays the changed paths.
                         */
                        // @ts-ignore
                        public valueChanged(event: javax.swing.event.TreeSelectionEvent): void
                    }
                }
            }
        }
    }
}
