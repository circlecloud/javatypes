declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboBoxUI {
                    /**
                     * This listener checks to see if the key event isn't a navigation key.  If
                     * it finds a key event that wasn't a navigation key it dispatches it to
                     * JComboBox.selectWithKeyChar() so that it can do type-ahead.
                     * This public inner class should be treated as protected.
                     * Instantiate it only within subclasses of
                     * <code>BasicComboBoxUI</code>.
                     */
                    // @ts-ignore
                    class KeyHandler extends java.awt.event.KeyAdapter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        keyPressed(e: java.awt.event.KeyEvent): void
                    }
                }
            }
        }
    }
}
