declare namespace javax {
    namespace swing {
        namespace RowFilter {
            /**
             * Enumeration of the possible comparison values supported by
             * some of the default <code>RowFilter</code>s.
             * @see RowFilter
             * @since 1.6
             */
            // @ts-ignore
            class ComparisonType extends java.lang.Enum<javax.swing.RowFilter.ComparisonType> {
                /**
                 * Indicates that entries with a value before the supplied
                 * value should be included.
                 */
                // @ts-ignore
                readonly BEFORE: javax.swing.RowFilter.ComparisonType
                /**
                 * Indicates that entries with a value after the supplied
                 * value should be included.
                 */
                // @ts-ignore
                readonly AFTER: javax.swing.RowFilter.ComparisonType
                /**
                 * Indicates that entries with a value equal to the supplied
                 * value should be included.
                 */
                // @ts-ignore
                readonly EQUAL: javax.swing.RowFilter.ComparisonType
                /**
                 * Indicates that entries with a value not equal to the supplied
                 * value should be included.
                 */
                // @ts-ignore
                readonly NOT_EQUAL: javax.swing.RowFilter.ComparisonType
                // @ts-ignore
                values(): javax.swing.RowFilter.ComparisonType[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.swing.RowFilter.ComparisonType
            }
        }
    }
}
