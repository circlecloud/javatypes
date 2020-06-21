declare namespace javax {
    namespace accessibility {
        /**
         * Class AccessibleExtendedTable provides extended information about
         * a user-interface component that presents data in a two-dimensional
         * table format.
         * Applications can determine if an object supports the
         * AccessibleExtendedTable interface by first obtaining its
         * AccessibleContext and then calling the
         * {@link AccessibleContext#getAccessibleTable} method.
         * If the return value is not null and the type of the return value is
         * AccessibleExtendedTable, the object supports this interface.
         * @author Lynn Monsanto
         * @since 1.4
         */
        // @ts-ignore
        interface AccessibleExtendedTable extends javax.accessibility.AccessibleTable {
            /**
             * Returns the row number of an index in the table.
             * @param index the zero-based index in the table.  The index is
             *  the table cell offset from row == 0 and column == 0.
             * @return the zero-based row of the table if one exists;
             *  otherwise -1.
             */
            // @ts-ignore
            getAccessibleRow(index: number /*int*/): number /*int*/
            /**
             * Returns the column number of an index in the table.
             * @param index the zero-based index in the table.  The index is
             *  the table cell offset from row == 0 and column == 0.
             * @return the zero-based column of the table if one exists;
             *  otherwise -1.
             */
            // @ts-ignore
            getAccessibleColumn(index: number /*int*/): number /*int*/
            /**
             * Returns the index at a row and column in the table.
             * @param r zero-based row of the table
             * @param c zero-based column of the table
             * @return the zero-based index in the table if one exists;
             *  otherwise -1.  The index is  the table cell offset from
             *  row == 0 and column == 0.
             */
            // @ts-ignore
            getAccessibleIndex(r: number /*int*/, c: number /*int*/): number /*int*/
        }
    }
}
