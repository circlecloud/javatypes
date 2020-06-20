declare namespace javax {
    namespace swing {
        namespace JTree {
            /**
             * <code>EmptySelectionModel</code> is a <code>TreeSelectionModel</code>
             * that does not allow anything to be selected.
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
            class EmptySelectionModel extends javax.swing.tree.DefaultTreeSelectionModel {
                // @ts-ignore
                constructor()

                /**
                 * Returns the single instance of {@code EmptySelectionModel}.
                 * @return single instance of {#code EmptySelectionModel}
                 */
                // @ts-ignore
                sharedInstance(): javax.swing.JTree.EmptySelectionModel
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param paths the paths to select; this is ignored
                 */
                // @ts-ignore
                setSelectionPaths(paths: javax.swing.tree.TreePath[]): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param paths the paths to add to the selection; this is ignored
                 */
                // @ts-ignore
                addSelectionPaths(paths: javax.swing.tree.TreePath[]): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param paths the paths to remove; this is ignored
                 */
                // @ts-ignore
                removeSelectionPaths(paths: javax.swing.tree.TreePath[]): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param mode the selection mode; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                setSelectionMode(mode: number /*int*/): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param mapper the {#code RowMapper} instance; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                setRowMapper(mapper: javax.swing.tree.RowMapper): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param listener the listener to add; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                addTreeSelectionListener(listener: javax.swing.event.TreeSelectionListener): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param listener the listener to remove; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                removeTreeSelectionListener(listener: javax.swing.event.TreeSelectionListener): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param listener the listener to add; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
                /**
                 * This is overriden to do nothing; {@code EmptySelectionModel}
                 * does not allow a selection.
                 * @param listener the listener to remove; this is ignored
                 * @since 1.7
                 */
                // @ts-ignore
                removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            }
        }
    }
}
