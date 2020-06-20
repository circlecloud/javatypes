declare namespace javax {
    namespace accessibility {
        /**
         * The AccessibleTableModelChange interface describes a change to
         * the table model.  The attributes of the model change can be
         * obtained by the following methods:
         * <ul>
         * <li> public int getType()
         * <li> public int getFirstRow();
         * <li> public int getLastRow();
         * <li> public int getFirstColumn();
         * <li> public int getLastColumn();
         * </ul>
         * The model change type returned by getType() will be one of:
         * <ul>
         * <li> INSERT - one or more rows and/or columns have been inserted
         * <li> UPDATE - some of the table data has changed
         * <li> DELETE - one or more rows and/or columns have been deleted
         * </ul>
         * The affected area of the table can be determined by the other
         * four methods which specify ranges of rows and columns
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleTable
         * @author Lynn Monsanto
         * @since 1.3
         */
        // @ts-ignore
        interface AccessibleTableModelChange {
            /**
             * Identifies the insertion of new rows and/or columns.
             */
            // @ts-ignore
            
            /**
             * Identifies a change to existing data.
             */
            // @ts-ignore
            
            /**
             * Identifies the deletion of rows and/or columns.
             */
            // @ts-ignore
            
            /**
             * Returns the type of event.
             * @return the type of event
             * @see #INSERT
             * @see #UPDATE
             * @see #DELETE
             */
            // @ts-ignore
            getType(): int
            /**
             * Returns the first row that changed.
             * @return the first row that changed
             */
            // @ts-ignore
            getFirstRow(): int
            /**
             * Returns the last row that changed.
             * @return the last row that changed
             */
            // @ts-ignore
            getLastRow(): int
            /**
             * Returns the first column that changed.
             * @return the first column that changed
             */
            // @ts-ignore
            getFirstColumn(): int
            /**
             * Returns the last column that changed.
             * @return the last column that changed
             */
            // @ts-ignore
            getLastColumn(): int
        }
    }
}
