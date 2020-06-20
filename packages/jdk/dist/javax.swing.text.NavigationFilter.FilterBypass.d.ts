declare namespace javax {
    namespace swing {
        namespace text {
            namespace NavigationFilter {
                /**
                 * Used as a way to circumvent calling back into the caret to
                 * position the cursor. Caret implementations that wish to support
                 * a NavigationFilter must provide an implementation that will
                 * not callback into the NavigationFilter.
                 * @since 1.4
                 */
                // @ts-ignore
                class FilterBypass extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns the Caret that is changing.
                     * @return Caret that is changing
                     */
                    // @ts-ignore
                    abstract getCaret(): javax.swing.text.Caret
                    /**
                     * Sets the caret location, bypassing the NavigationFilter.
                     * @param dot the position &gt;= 0
                     * @param bias Bias to place the dot at
                     */
                    // @ts-ignore
                    abstract setDot(dot: number /*int*/, bias: javax.swing.text.Position.Bias): void
                    /**
                     * Moves the caret location, bypassing the NavigationFilter.
                     * @param dot the position &gt;= 0
                     * @param bias Bias for new location
                     */
                    // @ts-ignore
                    abstract moveDot(dot: number /*int*/, bias: javax.swing.text.Position.Bias): void
                }
            }
        }
    }
}
