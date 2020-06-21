declare namespace javax {
    namespace accessibility {
        /**
         * Class AccessibleTable describes a user-interface component that
         * presents data in a two-dimensional table format.
         * @author Lynn Monsanto
         * @since 1.3
         */
        // @ts-ignore
        interface AccessibleTable {
            /**
             * Returns the caption for the table.
             * @return the caption for the table
             */
            // @ts-ignore
            getAccessibleCaption(): javax.accessibility.Accessible
            /**
             * Sets the caption for the table.
             * @param a the caption for the table
             */
            // @ts-ignore
            setAccessibleCaption(a: javax.accessibility.Accessible): void
            /**
             * Returns the summary description of the table.
             * @return the summary description of the table
             */
            // @ts-ignore
            getAccessibleSummary(): javax.accessibility.Accessible
            /**
             * Sets the summary description of the table
             * @param a the summary description of the table
             */
            // @ts-ignore
            setAccessibleSummary(a: javax.accessibility.Accessible): void
            /**
             * Returns the number of rows in the table.
             * @return the number of rows in the table
             */
            // @ts-ignore
            getAccessibleRowCount(): number /*int*/
            /**
             * Returns the number of columns in the table.
             * @return the number of columns in the table
             */
            // @ts-ignore
            getAccessibleColumnCount(): number /*int*/
            /**
             * Returns the Accessible at a specified row and column
             * in the table.
             * @param r zero-based row of the table
             * @param c zero-based column of the table
             * @return the Accessible at the specified row and column
             */
            // @ts-ignore
            getAccessibleAt(r: number /*int*/, c: number /*int*/): javax.accessibility.Accessible
            /**
             * Returns the number of rows occupied by the Accessible at
             * a specified row and column in the table.
             * @param r zero-based row of the table
             * @param c zero-based column of the table
             * @return the number of rows occupied by the Accessible at a
             *  given specified (row, column)
             */
            // @ts-ignore
            getAccessibleRowExtentAt(r: number /*int*/, c: number /*int*/): number /*int*/
            /**
             * Returns the number of columns occupied by the Accessible at
             * a specified row and column in the table.
             * @param r zero-based row of the table
             * @param c zero-based column of the table
             * @return the number of columns occupied by the Accessible at a
             *  given specified row and column
             */
            // @ts-ignore
            getAccessibleColumnExtentAt(r: number /*int*/, c: number /*int*/): number /*int*/
            /**
             * Returns the row headers as an AccessibleTable.
             * @return an AccessibleTable representing the row
             *  headers
             */
            // @ts-ignore
            getAccessibleRowHeader(): javax.accessibility.AccessibleTable
            /**
             * Sets the row headers.
             * @param table an AccessibleTable representing the
             *  row headers
             */
            // @ts-ignore
            setAccessibleRowHeader(table: javax.accessibility.AccessibleTable): void
            /**
             * Returns the column headers as an AccessibleTable.
             * @return an AccessibleTable representing the column
             *  headers
             */
            // @ts-ignore
            getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
            /**
             * Sets the column headers.
             * @param table an AccessibleTable representing the
             *  column headers
             */
            // @ts-ignore
            setAccessibleColumnHeader(table: javax.accessibility.AccessibleTable): void
            /**
             * Returns the description of the specified row in the table.
             * @param r zero-based row of the table
             * @return the description of the row
             */
            // @ts-ignore
            getAccessibleRowDescription(r: number /*int*/): javax.accessibility.Accessible
            /**
             * Sets the description text of the specified row of the table.
             * @param r zero-based row of the table
             * @param a the description of the row
             */
            // @ts-ignore
            setAccessibleRowDescription(r: number /*int*/, a: javax.accessibility.Accessible): void
            /**
             * Returns the description text of the specified column in the table.
             * @param c zero-based column of the table
             * @return the text description of the column
             */
            // @ts-ignore
            getAccessibleColumnDescription(c: number /*int*/): javax.accessibility.Accessible
            /**
             * Sets the description text of the specified column in the table.
             * @param c zero-based column of the table
             * @param a the text description of the column
             */
            // @ts-ignore
            setAccessibleColumnDescription(c: number /*int*/, a: javax.accessibility.Accessible): void
            /**
             * Returns a boolean value indicating whether the accessible at
             * a specified row and column is selected.
             * @param r zero-based row of the table
             * @param c zero-based column of the table
             * @return the boolean value true if the accessible at the
             *  row and column is selected. Otherwise, the boolean value
             *  false
             */
            // @ts-ignore
            isAccessibleSelected(r: number /*int*/, c: number /*int*/): boolean
            /**
             * Returns a boolean value indicating whether the specified row
             * is selected.
             * @param r zero-based row of the table
             * @return the boolean value true if the specified row is selected.
             *  Otherwise, false.
             */
            // @ts-ignore
            isAccessibleRowSelected(r: number /*int*/): boolean
            /**
             * Returns a boolean value indicating whether the specified column
             * is selected.
             * @param c zero-based column of the table
             * @return the boolean value true if the specified column is selected.
             *  Otherwise, false.
             */
            // @ts-ignore
            isAccessibleColumnSelected(c: number /*int*/): boolean
            /**
             * Returns the selected rows in a table.
             * @return an array of selected rows where each element is a
             *  zero-based row of the table
             */
            // @ts-ignore
            getSelectedAccessibleRows(): number /*int*/[]
            /**
             * Returns the selected columns in a table.
             * @return an array of selected columns where each element is a
             *  zero-based column of the table
             */
            // @ts-ignore
            getSelectedAccessibleColumns(): number /*int*/[]
        }
    }
}
