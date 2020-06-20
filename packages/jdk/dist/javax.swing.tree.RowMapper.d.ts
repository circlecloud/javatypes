declare namespace javax {
    namespace swing {
        namespace tree {
            /**
             * Defines the requirements for an object that translates paths in
             * the tree into display rows.
             * @author Scott Violet
             */
            // @ts-ignore
            interface RowMapper {
                /**
                 * Returns the rows that the TreePath instances in <code>path</code>
                 * are being displayed at. The receiver should return an array of
                 * the same length as that passed in, and if one of the TreePaths
                 * in <code>path</code> is not valid its entry in the array should
                 * be set to -1.
                 */
                // @ts-ignore
                getRowsForPaths(path: javax.swing.tree.TreePath[]): int[]
            }
        }
    }
}
