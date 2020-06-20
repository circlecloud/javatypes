declare namespace javax {
    namespace swing {
        namespace text {
            namespace Highlighter {
                // @ts-ignore
                interface Highlight {
                    /**
                     * Gets the starting model offset for the highlight.
                     * @return the starting offset &gt;= 0
                     */
                    // @ts-ignore
                    getStartOffset(): int
                    /**
                     * Gets the ending model offset for the highlight.
                     * @return the ending offset &gt;= 0
                     */
                    // @ts-ignore
                    getEndOffset(): int
                    /**
                     * Gets the painter for the highlighter.
                     * @return the painter
                     */
                    // @ts-ignore
                    getPainter(): javax.swing.text.Highlighter.HighlightPainter
                }
            }
        }
    }
}
