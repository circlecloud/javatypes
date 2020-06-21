declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboBoxUI {
                    /**
                     * This listener hides the popup when the focus is lost.  It also repaints
                     * when focus is gained or lost.
                     * This public inner class should be treated as protected.
                     * Instantiate it only within subclasses of
                     * <code>BasicComboBoxUI</code>.
                     */
                    // @ts-ignore
                    class FocusHandler extends java.lang.Object implements java.awt.event.FocusListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public focusGained(e: java.awt.event.FocusEvent): void
                        // @ts-ignore
                        public focusLost(e: java.awt.event.FocusEvent): void
                    }
                }
            }
        }
    }
}
