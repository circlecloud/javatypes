declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                namespace BasicListUI {
                    /**
                     * The ListSelectionListener that's added to the JLists selection
                     * model at installUI time, and whenever the JList.selectionModel property
                     * changes.  When the selection changes we repaint the affected rows.
                     * <p>
                     * <strong>Warning:</strong>
                     * Serialized objects of this class will not be compatible with
                     * future Swing releases. The current serialization support is
                     * appropriate for short term storage or RMI between applications running
                     * the same version of Swing.  As of 1.4, support for long term storage
                     * of all JavaBeans&trade;
                     * has been added to the <code>java.beans</code> package.
                     * Please see {@link java.beans.XMLEncoder}.
                     * @see #createListSelectionListener
                     * @see #getCellBounds
                     * @see #installUI
                     */
                    // @ts-ignore
                    class ListSelectionHandler extends java.lang.Object implements javax.swing.event.ListSelectionListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        valueChanged(e: javax.swing.event.ListSelectionEvent): void
                    }
                }
            }
        }
    }
}
