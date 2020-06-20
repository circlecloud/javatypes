declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * The listener that's notified when the selection in a TreeSelectionModel
             * changes.
             * For more information and examples see
             * <a
             * href="https://docs.oracle.com/javase/tutorial/uiswing/events/treeselectionlistener.html">How to Write a Tree Selection Listener</a>,
             * a section in <em>The Java Tutorial.</em>
             * @see javax.swing.tree.TreeSelectionModel
             * @see javax.swing.JTree
             * @author Scott Violet
             */
            // @ts-ignore
            interface TreeSelectionListener extends java.util.EventListener {
                /**
                 * Called whenever the value of the selection changes.
                 * @param e the event that characterizes the change.
                 */
                // @ts-ignore
                valueChanged(e: javax.swing.event.TreeSelectionEvent): void
            }
        }
    }
}
