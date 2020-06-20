declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicTableUI {
                    /**
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of {@code BasicTableUI}.
                     * <p>As of Java 2 platform v1.3 this class is no longer used.
                     * Instead <code>JTable</code>
                     * overrides <code>processKeyBinding</code> to dispatch the event to
                     * the current <code>TableCellEditor</code>.
                     */
                    // @ts-ignore
                    class KeyHandler extends java.lang.Object implements java.awt.event.KeyListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        keyPressed(e: java.awt.event.KeyEvent): void
                        // @ts-ignore
                        keyReleased(e: java.awt.event.KeyEvent): void
                        // @ts-ignore
                        keyTyped(e: java.awt.event.KeyEvent): void
                    }
                }
            }
        }
    }
}
