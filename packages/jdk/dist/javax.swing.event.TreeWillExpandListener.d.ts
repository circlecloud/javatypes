declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * The listener that's notified when a tree expands or collapses
             * a node.
             * For further information and examples see
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/treewillexpandlistener.html">How to Write a Tree-Will-Expand Listener</a>,
             * a section in <em>The Java Tutorial.</em>
             * @author Scott Violet
             */
            // @ts-ignore
            interface TreeWillExpandListener extends java.util.EventListener {
                /**
                 * Invoked whenever a node in the tree is about to be expanded.
                 */
                // @ts-ignore
                treeWillExpand(event: javax.swing.event.TreeExpansionEvent): void
                /**
                 * Invoked whenever a node in the tree is about to be collapsed.
                 */
                // @ts-ignore
                treeWillCollapse(event: javax.swing.event.TreeExpansionEvent): void
            }
        }
    }
}
