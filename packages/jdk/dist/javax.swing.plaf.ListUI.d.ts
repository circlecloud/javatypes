declare namespace javax {
    namespace swing {
        namespace plaf {
            /**
             * The {@code JList} pluggable look and feel delegate.
             * @author Hans Muller
             */
            // @ts-ignore
            class ListUI extends javax.swing.plaf.ComponentUI {
                // @ts-ignore
                constructor()
                /**
                 * Returns the cell index in the specified {@code JList} closest to the
                 * given location in the list's coordinate system. To determine if the
                 * cell actually contains the specified location, compare the point against
                 * the cell's bounds, as provided by {@code getCellBounds}.
                 * This method returns {@code -1} if the list's model is empty.
                 * @param list the list
                 * @param location the coordinates of the point
                 * @return the cell index closest to the given location, or {#code -1}
                 * @throws NullPointerException if {#code location} is null
                 */
                // @ts-ignore
                abstract locationToIndex(list: javax.swing.JList, location: java.awt.Point): int
                /**
                 * Returns the origin in the given {@code JList}, of the specified item,
                 * in the list's coordinate system.
                 * Returns {@code null} if the index isn't valid.
                 * @param list the list
                 * @param index the cell index
                 * @return the origin of the cell, or {#code null}
                 */
                // @ts-ignore
                abstract indexToLocation(list: javax.swing.JList, index: number /*int*/): java.awt.Point
                /**
                 * Returns the bounding rectangle, in the given list's coordinate system,
                 * for the range of cells specified by the two indices.
                 * The indices can be supplied in any order.
                 * <p>
                 * If the smaller index is outside the list's range of cells, this method
                 * returns {@code null}. If the smaller index is valid, but the larger
                 * index is outside the list's range, the bounds of just the first index
                 * is returned. Otherwise, the bounds of the valid range is returned.
                 * @param list the list
                 * @param index1 the first index in the range
                 * @param index2 the second index in the range
                 * @return the bounding rectangle for the range of cells, or {#code null}
                 */
                // @ts-ignore
                abstract getCellBounds(list: javax.swing.JList, index1: number /*int*/, index2: number /*int*/): java.awt.Rectangle
            }
        }
    }
}