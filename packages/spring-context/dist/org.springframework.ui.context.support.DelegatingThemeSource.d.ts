declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                namespace support {
                    /**
                     * Empty ThemeSource that delegates all calls to the parent ThemeSource.
                     * If no parent is available, it simply won't resolve any theme.
                     * <p>Used as placeholder by UiApplicationContextUtils, if a context doesn't
                     * define its own ThemeSource. Not intended for direct use in applications.
                     * @author Juergen Hoeller
                     * @since 1.2.4
                     * @see UiApplicationContextUtils
                     */
                    // @ts-ignore
                    class DelegatingThemeSource extends java.lang.Object implements org.springframework.ui.context.HierarchicalThemeSource {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        setParentThemeSource(parentThemeSource: org.springframework.ui.context.ThemeSource): void
                        // @ts-ignore
                        getParentThemeSource(): org.springframework.ui.context.ThemeSource
                        // @ts-ignore
                        getTheme(themeName: string): org.springframework.ui.context.Theme
                    }
                }
            }
        }
    }
}
