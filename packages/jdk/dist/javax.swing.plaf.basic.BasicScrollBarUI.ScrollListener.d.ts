declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicScrollBarUI {
                    /**
                     * Listener for scrolling events initiated in the
                     * <code>ScrollPane</code>.
                     */
                    // @ts-ignore
                    class ScrollListener extends java.lang.Object implements java.awt.event.ActionListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(dir: number /*int*/, block: boolean)
                        // @ts-ignore
                        public setDirection(direction: number /*int*/): void
                        // @ts-ignore
                        public setScrollByBlock(block: boolean): void
                        // @ts-ignore
                        public actionPerformed(e: java.awt.event.ActionEvent): void
                    }
                }
            }
        }
    }
}
