declare namespace javax {
    namespace swing {
        namespace event {
            /**
             * An event used to identify a single path in a tree.  The source
             * returned by <b>getSource</b> will be an instance of JTree.
             * <p>
             * For further documentation and examples see
             * the following sections in <em>The Java Tutorial</em>:
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/treeexpansionlistener.html">How to Write a Tree Expansion Listener</a> and
             * <a href="https://docs.oracle.com/javase/tutorial/uiswing/events/treewillexpandlistener.html">How to Write a Tree-Will-Expand Listener</a>.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @author Scott Violet
             */
            // @ts-ignore
            class TreeExpansionEvent extends java.util.EventObject {
                /**
                 * Constructs a TreeExpansionEvent object.
                 * @param source  the Object that originated the event
                 *                 (typically <code>this</code>)
                 * @param path    a TreePath object identifying the newly expanded
                 *                 node
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any, path: javax.swing.tree.TreePath)
                /**
                 * Path to the value this event represents.
                 */
                // @ts-ignore
                path: javax.swing.tree.TreePath
                /**
                 * Returns the path to the value that has been expanded/collapsed.
                 */
                // @ts-ignore
                public getPath(): javax.swing.tree.TreePath
            }
        }
    }
}
