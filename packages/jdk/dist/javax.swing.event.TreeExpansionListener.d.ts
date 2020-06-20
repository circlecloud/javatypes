declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * The listener that's notified when a tree expands or collapses
             * a node.
             * For further documentation and examples see
             * <a
             * href="https://docs.oracle.com/javase/tutorial/uiswing/events/treeexpansionlistener.html">How to Write a Tree Expansion Listener</a>,
             * a section in <em>The Java Tutorial.</em>
             * @author Scott Violet
             */
            // @ts-ignore
            interface TreeExpansionListener extends java.util.EventListener {
                /**
                 * Called whenever an item in the tree has been expanded.
                 */
                // @ts-ignore
                treeExpanded(event: javax.swing.event.TreeExpansionEvent): void
                /**
                 * Called whenever an item in the tree has been collapsed.
                 */
                // @ts-ignore
                treeCollapsed(event: javax.swing.event.TreeExpansionEvent): void
            }
        }
    }
}
