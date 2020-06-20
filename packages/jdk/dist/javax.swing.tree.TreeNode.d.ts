declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Defines the requirements for an object that can be used as a
             * tree node in a JTree.
             * <p>
             * Implementations of <code>TreeNode</code> that override <code>equals</code>
             * will typically need to override <code>hashCode</code> as well.  Refer
             * to {@link javax.swing.tree.TreeModel} for more information.
             * For further information and examples of using tree nodes,
             * see <a
             * href="https://docs.oracle.com/javase/tutorial/uiswing/components/tree.html">How to Use Tree Nodes</a>
             * in <em>The Java Tutorial.</em>
             * @author Rob Davis
             * @author Scott Violet
             */
            // @ts-ignore
            interface TreeNode {
                /**
                 * Returns the child <code>TreeNode</code> at index
                 * <code>childIndex</code>.
                 */
                // @ts-ignore
                getChildAt(childIndex: number /*int*/): javax.swing.tree.TreeNode
                /**
                 * Returns the number of children <code>TreeNode</code>s the receiver
                 * contains.
                 */
                // @ts-ignore
                getChildCount(): int
                /**
                 * Returns the parent <code>TreeNode</code> of the receiver.
                 */
                // @ts-ignore
                getParent(): javax.swing.tree.TreeNode
                /**
                 * Returns the index of <code>node</code> in the receivers children.
                 * If the receiver does not contain <code>node</code>, -1 will be
                 * returned.
                 */
                // @ts-ignore
                getIndex(node: javax.swing.tree.TreeNode): int
                /**
                 * Returns true if the receiver allows children.
                 */
                // @ts-ignore
                getAllowsChildren(): boolean
                /**
                 * Returns true if the receiver is a leaf.
                 */
                // @ts-ignore
                isLeaf(): boolean
                /**
                 * Returns the children of the receiver as an <code>Enumeration</code>.
                 */
                // @ts-ignore
                children(): java.util.Enumeration
            }
        }
    }
}
