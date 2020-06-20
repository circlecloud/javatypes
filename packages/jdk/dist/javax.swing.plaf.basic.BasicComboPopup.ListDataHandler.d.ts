declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicComboPopup {
                    /**
                     * As of 1.4, this class is now obsolete, doesn't do anything, and
                     * is only included for backwards API compatibility. Do not call or
                     * override.
                     * <p>
                     * The functionality has been migrated into <code>ItemHandler</code>.
                     * @see #createItemListener
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
