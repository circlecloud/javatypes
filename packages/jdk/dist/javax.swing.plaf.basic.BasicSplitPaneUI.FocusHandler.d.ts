declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneUI {
                    /**
                     * Implementation of the FocusListener that the JSplitPane UI uses.
                     * <p>
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of BasicSplitPaneUI.
                     */
                    // @ts-ignore
                    class FocusHandler extends java.awt.event.FocusAdapter {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        focusGained(ev: java.awt.event.FocusEvent): void
                        // @ts-ignore
                        focusLost(ev: java.awt.event.FocusEvent): void
                    }
                }
            }
        }
    }
}
