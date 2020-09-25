declare namespace javax {
    namespace swing {
        namespace GroupLayout {
            /**
             * Enumeration of the possible ways {@code ParallelGroup} can align
             * its children.
             * @see #createParallelGroup(Alignment)
             * @since 1.6
             */
            // @ts-ignore
            class Alignment extends java.lang.Enum<javax.swing.GroupLayout.Alignment> {
                /**
                 * Indicates the elements should be
                 * aligned to the origin.  For the horizontal axis with a left to
                 * right orientation this means aligned to the left edge. For the
                 * vertical axis leading means aligned to the top edge.
                 * @see #createParallelGroup(Alignment)
                 */
                // @ts-ignore
                public static readonly LEADING: javax.swing.GroupLayout.Alignment
                /**
                 * Indicates the elements should be aligned to the end of the
                 * region.  For the horizontal axis with a left to right
                 * orientation this means aligned to the right edge. For the
                 * vertical axis trailing means aligned to the bottom edge.
                 * @see #createParallelGroup(Alignment)
                 */
                // @ts-ignore
                public static readonly TRAILING: javax.swing.GroupLayout.Alignment
                /**
                 * Indicates the elements should be centered in
                 * the region.
                 * @see #createParallelGroup(Alignment)
                 */
                // @ts-ignore
                public static readonly CENTER: javax.swing.GroupLayout.Alignment
                /**
                 * Indicates the elements should be aligned along
                 * their baseline.
                 * @see #createParallelGroup(Alignment)
                 * @see #createBaselineGroup(boolean,boolean)
                 */
                // @ts-ignore
                public static readonly BASELINE: javax.swing.GroupLayout.Alignment
                // @ts-ignore
                public static values(): javax.swing.GroupLayout.Alignment[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.swing.GroupLayout.Alignment
            }
        }
    }
}
