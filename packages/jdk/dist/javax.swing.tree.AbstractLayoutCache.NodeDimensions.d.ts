declare namespace javax {
    namespace swing {
        namespace tree {
            namespace AbstractLayoutCache {
                /**
                 * Used by <code>AbstractLayoutCache</code> to determine the size
                 * and x origin of a particular node.
                 */
                // @ts-ignore
                abstract class NodeDimensions extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns, by reference in bounds, the size and x origin to
                     * place value at. The calling method is responsible for determining
                     * the Y location. If bounds is <code>null</code>, a newly created
                     * <code>Rectangle</code> should be returned,
                     * otherwise the value should be placed in bounds and returned.
                     * @param value the <code>value</code> to be represented
                     * @param row row being queried
                     * @param depth the depth of the row
                     * @param expanded true if row is expanded, false otherwise
                     * @param bounds  a <code>Rectangle</code> containing the size needed
                     *               to represent <code>value</code>
                     * @return a <code>Rectangle</code> containing the node dimensions,
                     *               or <code>null</code> if node has no dimension
                     */
                    // @ts-ignore
                    public abstract getNodeDimensions(value: java.lang.Object | any, row: number /*int*/, depth: number /*int*/, expanded: boolean, bounds: java.awt.Rectangle): java.awt.Rectangle
                }
            }
        }
    }
}
