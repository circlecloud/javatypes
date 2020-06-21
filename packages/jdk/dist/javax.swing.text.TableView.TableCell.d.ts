declare namespace javax {
    namespace swing {
        namespace text {
            namespace TableView {
                /**
                 * @deprecated A table cell can now be any View implementation.
                 */
                // @ts-ignore
                class TableCell extends javax.swing.text.BoxView implements javax.swing.text.TableView.GridCell {
                    /**
                     * Constructs a TableCell for the given element.
                     * @param elem the element that this view is responsible for
                     * @since 1.4
                     */
                    // @ts-ignore
                    constructor(elem: javax.swing.text.Element)
                    /**
                     * Gets the number of columns this cell spans (e.g. the
                     * grid width).
                     * @return the number of columns
                     */
                    // @ts-ignore
                    public getColumnCount(): number /*int*/
                    /**
                     * Gets the number of rows this cell spans (that is, the
                     * grid height).
                     * @return the number of rows
                     */
                    // @ts-ignore
                    public getRowCount(): number /*int*/
                    /**
                     * Sets the grid location.
                     * @param row the row &gt;= 0
                     * @param col the column &gt;= 0
                     */
                    // @ts-ignore
                    public setGridLocation(row: number /*int*/, col: number /*int*/): void
                    /**
                     * Gets the row of the grid location
                     */
                    // @ts-ignore
                    public getGridRow(): number /*int*/
                    /**
                     * Gets the column of the grid location
                     */
                    // @ts-ignore
                    public getGridColumn(): number /*int*/
                }
            }
        }
    }
}
