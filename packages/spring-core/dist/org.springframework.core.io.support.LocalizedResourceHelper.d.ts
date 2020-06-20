declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Helper class for loading a localized resource,
                     * specified through name, extension and current locale.
                     * @author Juergen Hoeller
                     * @since 1.2.5
                     */
                    // @ts-ignore
                    class LocalizedResourceHelper extends java.lang.Object {
                        /**
                         * Create a new LocalizedResourceHelper with a DefaultResourceLoader.
                         * @see org.springframework.core.io.DefaultResourceLoader
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Create a new LocalizedResourceHelper with the given ResourceLoader.
                         * @param resourceLoader the ResourceLoader to use
                         */
                        // @ts-ignore
                        constructor(resourceLoader: org.springframework.core.io.ResourceLoader)
                        /**
                         * The default separator to use in-between file name parts: an underscore.
                         */
                        // @ts-ignore
                        readonly DEFAULT_SEPARATOR: string
                        /**
                         * Set the separator to use in-between file name parts.
                         * Default is an underscore ("_").
                         */
                        // @ts-ignore
                        setSeparator(separator: string): void
                        /**
                         * Find the most specific localized resource for the given name,
                         * extension and locale:
                         * <p>The file will be searched with locations in the following order,
                         * similar to {@code java.util.ResourceBundle}'s search order:
                         * <ul>
                         * <li>[name]_[language]_[country]_[variant][extension]
                         * <li>[name]_[language]_[country][extension]
                         * <li>[name]_[language][extension]
                         * <li>[name][extension]
                         * </ul>
                         * <p>If none of the specific files can be found, a resource
                         * descriptor for the default location will be returned.
                         * @param name the name of the file, without localization part nor extension
                         * @param extension the file extension (e.g. ".xls")
                         * @param locale the current locale (may be {#code null})
                         * @return the most specific localized resource found
                         * @see java.util.ResourceBundle
                         */
                        // @ts-ignore
                        findLocalizedResource(name: string, extension: string, locale: java.util.Locale): org.springframework.core.io.Resource
                    }
                }
            }
        }
    }
}
