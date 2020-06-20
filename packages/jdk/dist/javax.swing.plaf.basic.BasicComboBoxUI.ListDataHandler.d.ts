declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboBoxUI {
                    /**
                     * This listener watches for changes in the
                     * <code>ComboBoxModel</code>.
                     * <p>
                     * This public inner class should be treated as protected.
                     * Instantiate it only within subclasses of
                     * <code>BasicComboBoxUI</code>.
                     * @see #createListDataListener
                     */
                    // @ts-ignore
                    class ListDataHandler extends java.lang.Object implements javax.swing.event.ListDataListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        contentsChanged(e: javax.swing.event.ListDataEvent): void
                        // @ts-ignore
                        intervalAdded(e: javax.swing.event.ListDataEvent): void
                        // @ts-ignore
                        intervalRemoved(e: javax.swing.event.ListDataEvent): void
                    }
                }
            }
        }
    }
}
