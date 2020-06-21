declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Defines the requirements for a tree node object that can change --
             * by adding or removing child nodes, or by changing the contents
             * of a user object stored in the node.
             * @see DefaultMutableTreeNode
             * @see javax.swing.JTree
             * @author Rob Davis
             * @author Scott Violet
             */
            // @ts-ignore
            interface MutableTreeNode extends javax.swing.tree.TreeNode {
                /**
                 * Adds <code>child</code> to the receiver at <code>index</code>.
                 * <code>child</code> will be messaged with <code>setParent</code>.
                 */
                // @ts-ignore
                insert(child: javax.swing.tree.MutableTreeNode, index: number /*int*/): void
                /**
                 * Removes the child at <code>index</code> from the receiver.
                 */
                // @ts-ignore
                remove(index: number /*int*/): void
                /**
                 * Removes <code>node</code> from the receiver. <code>setParent</code>
                 * will be messaged on <code>node</code>.
                 */
                // @ts-ignore
                remove(node: javax.swing.tree.MutableTreeNode): void
                /**
                 * Resets the user object of the receiver to <code>object</code>.
                 */
                // @ts-ignore
                setUserObject(object: java.lang.Object | any): void
                /**
                 * Removes the receiver from its parent.
                 */
                // @ts-ignore
                removeFromParent(): void
                /**
                 * Sets the parent of the receiver to <code>newParent</code>.
                 */
                // @ts-ignore
                setParent(newParent: javax.swing.tree.MutableTreeNode): void
            }
        }
    }
}
