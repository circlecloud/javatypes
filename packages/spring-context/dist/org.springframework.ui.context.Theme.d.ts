declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                /**
                 * A Theme can resolve theme-specific messages, codes, file paths, etcetera
                 * (e&#46;g&#46; CSS and image files in a web environment).
                 * The exposed {@link org.springframework.context.MessageSource} supports
                 * theme-specific parameterization and internationalization.
                 * @author Juergen Hoeller
                 * @since 17.06.2003
                 * @see ThemeSource
                 * @see org.springframework.web.servlet.ThemeResolver
                 */
                // @ts-ignore
                interface Theme {
                    /**
                     * Return the name of the theme.
                     * @return the name of the theme (never {#code null})
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Return the specific MessageSource that resolves messages
                     * with respect to this theme.
                     * @return the theme-specific MessageSource (never {#code null})
                     */
                    // @ts-ignore
                    getMessageSource(): org.springframework.context.MessageSource
                }
            }
        }
    }
}
