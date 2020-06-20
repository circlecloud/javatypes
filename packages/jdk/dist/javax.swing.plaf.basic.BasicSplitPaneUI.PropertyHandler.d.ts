declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicSplitPaneUI {
                    /**
                     * Implementation of the PropertyChangeListener
                     * that the JSplitPane UI uses.
                     * <p>
                     * This class should be treated as a &quot;protected&quot; inner class.
                     * Instantiate it only within subclasses of BasicSplitPaneUI.
                     */
                    // @ts-ignore
                    class PropertyHandler extends java.lang.Object implements java.beans.PropertyChangeListener {
                        // @ts-ignore
                        constructor()
                        /**
                         * Messaged from the <code>JSplitPane</code> the receiver is
                         * contained in.  May potentially reset the layout manager and cause a
                         * <code>validate</code> to be sent.
                         */
                        // @ts-ignore
                        propertyChange(e: java.beans.PropertyChangeEvent): void
                    }
                }
            }
        }
    }
}
