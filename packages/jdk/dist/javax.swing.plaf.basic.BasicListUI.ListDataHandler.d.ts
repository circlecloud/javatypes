declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicListUI {
                    /**
                     * The ListDataListener that's added to the JLists model at
                     * installUI time, and whenever the JList.model property changes.
                     * <p>
                     * <strong>Warning:</strong>
                     * Serialized objects of this class will not be compatible with
                     * future Swing releases. The current serialization support is
                     * appropriate for short term storage or RMI between applications running
                     * the same version of Swing.  As of 1.4, support for long term storage
                     * of all JavaBeans&trade;
                     * has been added to the <code>java.beans</code> package.
                     * Please see {@link java.beans.XMLEncoder}.
                     * @see JList#getModel
                     * @see #maybeUpdateLayoutState
                     * @see #createListDataListener
                     * @see #installUI
                     */
                    // @ts-ignore
                    class ListDataHandler extends java.lang.Object implements javax.swing.event.ListDataListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        intervalAdded(e: javax.swing.event.ListDataEvent): void
                        // @ts-ignore
                        intervalRemoved(e: javax.swing.event.ListDataEvent): void
                        // @ts-ignore
                        contentsChanged(e: javax.swing.event.ListDataEvent): void
                    }
                }
            }
        }
    }
}
