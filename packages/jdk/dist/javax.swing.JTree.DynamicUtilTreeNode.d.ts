declare namespace javax {
    namespace swing {
        namespace JTree {
            /**
             * <code>DynamicUtilTreeNode</code> can wrap
             * vectors/hashtables/arrays/strings and
             * create the appropriate children tree nodes as necessary. It is
             * dynamic in that it will only create the children as necessary.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             */
            // @ts-ignore
            class DynamicUtilTreeNode extends javax.swing.tree.DefaultMutableTreeNode {
                /**
                 * Creates a node with the specified object as its value and
                 * with the specified children. For the node to allow children,
                 * the children-object must be an array of objects, a
                 * <code>Vector</code>, or a <code>Hashtable</code> -- even
                 * if empty. Otherwise, the node is not
                 * allowed to have children.
                 * @param value  the <code>Object</code> that is the value for the
                 *               new node
                 * @param children an array of <code>Object</code>s, a
                 *               <code>Vector</code>, or a <code>Hashtable</code>
                 *               used to create the child nodes; if any other
                 *               object is specified, or if the value is
                 *               <code>null</code>,
                 *               then the node is not allowed to have children
                 */
                // @ts-ignore
                constructor(value: java.lang.Object | any, children: java.lang.Object | any)
                /**
                 * Does the this <code>JTree</code> have children?
                 * This property is currently not implemented.
                 */
                // @ts-ignore
                hasChildren: boolean
                /**
                 * Value to create children with.
                 */
                // @ts-ignore
                childValue: java.lang.Object | any
                /**
                 * Have the children been loaded yet?
                 */
                // @ts-ignore
                loadedChildren: boolean
                /**
                 * Adds to parent all the children in <code>children</code>.
                 * If <code>children</code> is an array or vector all of its
                 * elements are added is children, otherwise if <code>children</code>
                 * is a hashtable all the key/value pairs are added in the order
                 * <code>Enumeration</code> returns them.
                 */
                // @ts-ignore
                public static createChildren(parent: javax.swing.tree.DefaultMutableTreeNode, children: java.lang.Object | any): void
                /**
                 * Returns true if this node allows children. Whether the node
                 * allows children depends on how it was created.
                 * @return true if this node allows children, false otherwise
                 * @see JTree.DynamicUtilTreeNode
                 */
                // @ts-ignore
                public isLeaf(): boolean
                /**
                 * Returns the number of child nodes.
                 * @return the number of child nodes
                 */
                // @ts-ignore
                public getChildCount(): number /*int*/
                /**
                 * Loads the children based on <code>childValue</code>.
                 * If <code>childValue</code> is a <code>Vector</code>
                 * or array each element is added as a child,
                 * if <code>childValue</code> is a <code>Hashtable</code>
                 * each key/value pair is added in the order that
                 * <code>Enumeration</code> returns the keys.
                 */
                // @ts-ignore
                loadChildren(): void
                /**
                 * Subclassed to load the children, if necessary.
                 */
                // @ts-ignore
                public getChildAt(index: number /*int*/): javax.swing.tree.TreeNode
                /**
                 * Subclassed to load the children, if necessary.
                 */
                // @ts-ignore
                public children(): java.util.Enumeration<any>
            }
        }
    }
}
