declare namespace javax {
    namespace swing {
        namespace JTree {
            /**
             * A subclass of <code>TransferHandler.DropLocation</code> representing
             * a drop location for a <code>JTree</code>.
             * @see #getDropLocation
             * @since 1.6
             */
            // @ts-ignore
            class DropLocation extends javax.swing.TransferHandler.DropLocation {
                /**
                 * Returns the index where the dropped data should be inserted
                 * with respect to the path returned by <code>getPath()</code>.
                 * <p>
                 * For drop modes <code>DropMode.USE_SELECTION</code> and
                 * <code>DropMode.ON</code>, this index is unimportant (and it will
                 * always be <code>-1</code>) as the only interesting data is the
                 * path over which the drop operation occurred.
                 * <p>
                 * For drop mode <code>DropMode.INSERT</code>, this index
                 * indicates the index at which the data should be inserted into
                 * the parent path represented by <code>getPath()</code>.
                 * <code>-1</code> indicates that the drop occurred over the
                 * parent itself, and in most cases should be treated as inserting
                 * into either the beginning or the end of the parent's list of
                 * children.
                 * <p>
                 * For <code>DropMode.ON_OR_INSERT</code>, this value will be
                 * an insert index, as described above, or <code>-1</code> if
                 * the drop occurred over the path itself.
                 * @return the child index
                 * @see #getPath
                 */
                // @ts-ignore
                public getChildIndex(): number /*int*/
                /**
                 * Returns the path where dropped data should be placed in the
                 * tree.
                 * <p>
                 * Interpretation of this value depends on the drop mode set on the
                 * component. If the drop mode is <code>DropMode.USE_SELECTION</code>
                 * or <code>DropMode.ON</code>, the return value is the path in the
                 * tree over which the data has been (or will be) dropped.
                 * <code>null</code> indicates that the drop is over empty space,
                 * not associated with a particular path.
                 * <p>
                 * If the drop mode is <code>DropMode.INSERT</code>, the return value
                 * refers to the path that should become the parent of the new data,
                 * in which case <code>getChildIndex()</code> indicates where the
                 * new item should be inserted into this parent path. A
                 * <code>null</code> path indicates that no parent path has been
                 * determined, which can happen for multiple reasons:
                 * <ul>
                 * <li>The tree has no model
                 * <li>There is no root in the tree
                 * <li>The root is collapsed
                 * <li>The root is a leaf node
                 * </ul>
                 * It is up to the developer to decide if and how they wish to handle
                 * the <code>null</code> case.
                 * <p>
                 * If the drop mode is <code>DropMode.ON_OR_INSERT</code>,
                 * <code>getChildIndex</code> can be used to determine whether the
                 * drop is on top of the path itself (<code>-1</code>) or the index
                 * at which it should be inserted into the path (values other than
                 * <code>-1</code>).
                 * @return the drop path
                 * @see #getChildIndex
                 */
                // @ts-ignore
                public getPath(): javax.swing.tree.TreePath
                /**
                 * Returns a string representation of this drop location.
                 * This method is intended to be used for debugging purposes,
                 * and the content and format of the returned string may vary
                 * between implementations.
                 * @return a string representation of this drop location
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
