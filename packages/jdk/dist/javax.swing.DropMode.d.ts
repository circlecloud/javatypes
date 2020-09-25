declare namespace javax {
    namespace swing {
        /**
         * Drop modes, used to determine the method by which a component
         * tracks and indicates a drop location during drag and drop.
         * @author Shannon Hickey
         * @see JTable#setDropMode
         * @see JList#setDropMode
         * @see JTree#setDropMode
         * @see javax.swing.text.JTextComponent#setDropMode
         * @since 1.6
         */
        // @ts-ignore
        class DropMode extends java.lang.Enum<javax.swing.DropMode> {
            /**
             * A component's own internal selection mechanism (or caret for text
             * components) should be used to track the drop location.
             */
            // @ts-ignore
            public static readonly USE_SELECTION: javax.swing.DropMode
            /**
             * The drop location should be tracked in terms of the index of
             * existing items. Useful for dropping on items in tables, lists,
             * and trees.
             */
            // @ts-ignore
            public static readonly ON: javax.swing.DropMode
            /**
             * The drop location should be tracked in terms of the position
             * where new data should be inserted. For components that manage
             * a list of items (list and tree for example), the drop location
             * should indicate the index where new data should be inserted.
             * For text components the location should represent a position
             * between characters. For components that manage tabular data
             * (table for example), the drop location should indicate
             * where to insert new rows, columns, or both, to accommodate
             * the dropped data.
             */
            // @ts-ignore
            public static readonly INSERT: javax.swing.DropMode
            /**
             * The drop location should be tracked in terms of the row index
             * where new rows should be inserted to accommodate the dropped
             * data. This is useful for components that manage tabular data.
             */
            // @ts-ignore
            public static readonly INSERT_ROWS: javax.swing.DropMode
            /**
             * The drop location should be tracked in terms of the column index
             * where new columns should be inserted to accommodate the dropped
             * data. This is useful for components that manage tabular data.
             */
            // @ts-ignore
            public static readonly INSERT_COLS: javax.swing.DropMode
            /**
             * This mode is a combination of <code>ON</code>
             * and <code>INSERT</code>, specifying that data can be
             * dropped on existing items, or in insert locations
             * as specified by <code>INSERT</code>.
             */
            // @ts-ignore
            public static readonly ON_OR_INSERT: javax.swing.DropMode
            /**
             * This mode is a combination of <code>ON</code>
             * and <code>INSERT_ROWS</code>, specifying that data can be
             * dropped on existing items, or as insert rows
             * as specified by <code>INSERT_ROWS</code>.
             */
            // @ts-ignore
            public static readonly ON_OR_INSERT_ROWS: javax.swing.DropMode
            /**
             * This mode is a combination of <code>ON</code>
             * and <code>INSERT_COLS</code>, specifying that data can be
             * dropped on existing items, or as insert columns
             * as specified by <code>INSERT_COLS</code>.
             */
            // @ts-ignore
            public static readonly ON_OR_INSERT_COLS: javax.swing.DropMode
            // @ts-ignore
            public static values(): javax.swing.DropMode[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): javax.swing.DropMode
        }
    }
}
