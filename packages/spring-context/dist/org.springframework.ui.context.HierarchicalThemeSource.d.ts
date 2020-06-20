declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                /**
                 * Sub-interface of ThemeSource to be implemented by objects that
                 * can resolve theme messages hierarchically.
                 * @author Jean-Pierre Pawlak
                 * @author Juergen Hoeller
                 */
                // @ts-ignore
                interface HierarchicalThemeSource extends org.springframework.ui.context.ThemeSource {
                    /**
                     * Set the parent that will be used to try to resolve theme messages
                     * that this object can't resolve.
                     * @param parent the parent ThemeSource that will be used to
                     *  resolve messages that this object can't resolve.
                     *  May be {#code null}, in which case no further resolution is possible.
                     */
                    // @ts-ignore
                    setParentThemeSource(parent: org.springframework.ui.context.ThemeSource): void
                    /**
                     * Return the parent of this ThemeSource, or {@code null} if none.
                     */
                    // @ts-ignore
                    getParentThemeSource(): org.springframework.ui.context.ThemeSource
                }
            }
        }
    }
}
