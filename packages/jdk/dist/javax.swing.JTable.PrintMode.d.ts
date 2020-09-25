declare namespace javax {
    namespace swing {
        namespace JTable {
            /**
             * Printing modes, used in printing <code>JTable</code>s.
             * @see #print(JTable.PrintMode, MessageFormat, MessageFormat,
             *              boolean, PrintRequestAttributeSet, boolean)
             * @see #getPrintable
             * @since 1.5
             */
            // @ts-ignore
            class PrintMode extends java.lang.Enum<javax.swing.JTable.PrintMode> {
                /**
                 * Printing mode that prints the table at its current size,
                 * spreading both columns and rows across multiple pages if necessary.
                 */
                // @ts-ignore
                public static readonly NORMAL: javax.swing.JTable.PrintMode
                /**
                 * Printing mode that scales the output smaller, if necessary,
                 * to fit the table's entire width (and thereby all columns) on each page;
                 * Rows are spread across multiple pages as necessary.
                 */
                // @ts-ignore
                public static readonly FIT_WIDTH: javax.swing.JTable.PrintMode
                // @ts-ignore
                public static values(): javax.swing.JTable.PrintMode[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.swing.JTable.PrintMode
            }
        }
    }
}
