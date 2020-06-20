declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                namespace support {
                    /**
                     * Utility class for UI application context implementations.
                     * Provides support for a special bean named "themeSource",
                     * of type {@link org.springframework.ui.context.ThemeSource}.
                     * @author Jean-Pierre Pawlak
                     * @author Juergen Hoeller
                     * @since 17.06.2003
                     */
                    // @ts-ignore
                    class UiApplicationContextUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Name of the ThemeSource bean in the factory.
                         * If none is supplied, theme resolution is delegated to the parent.
                         * @see org.springframework.ui.context.ThemeSource
                         */
                        // @ts-ignore
                        readonly THEME_SOURCE_BEAN_NAME: string
                        /**
                         * Initialize the ThemeSource for the given application context,
                         * autodetecting a bean with the name "themeSource". If no such
                         * bean is found, a default (empty) ThemeSource will be used.
                         * @param context current application context
                         * @return the initialized theme source (will never be {#code null})
                         * @see #THEME_SOURCE_BEAN_NAME
                         */
                        // @ts-ignore
                        initThemeSource(context: org.springframework.context.ApplicationContext): org.springframework.ui.context.ThemeSource
                    }
                }
            }
        }
    }
}
