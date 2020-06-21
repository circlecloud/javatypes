declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTreeUI {
                    /**
                     * This is used to get multiple key down events to appropriately generate
                     * events.
                     */
                    // @ts-ignore
                    class KeyHandler extends java.awt.event.KeyAdapter {
                        // @ts-ignore
                        constructor()
                        /**
                         * Key code that is being generated for.
                         */
                        // @ts-ignore
                        repeatKeyAction: javax.swing.Action
                        /**
                         * Set to true while keyPressed is active.
                         */
                        // @ts-ignore
                        isKeyDown: boolean
                        /**
                         * Invoked when a key has been typed.
                         * Moves the keyboard focus to the first element
                         * whose first letter matches the alphanumeric key
                         * pressed by the user. Subsequent same key presses
                         * move the keyboard focus to the next object that
                         * starts with the same letter.
                         */
                        // @ts-ignore
                        public keyTyped(e: java.awt.event.KeyEvent): void
                        // @ts-ignore
                        public keyPressed(e: java.awt.event.KeyEvent): void
                        // @ts-ignore
                        public keyReleased(e: java.awt.event.KeyEvent): void
                    }
                }
            }
        }
    }
}
