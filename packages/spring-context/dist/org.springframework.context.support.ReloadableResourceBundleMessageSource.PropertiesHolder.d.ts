declare namespace org {
    namespace springframework {
        namespace context {
            namespace support {
                namespace ReloadableResourceBundleMessageSource {
                    /**
                     * PropertiesHolder for caching.
                     * Stores the last-modified timestamp of the source file for efficient
                     * change detection, and the timestamp of the last refresh attempt
                     * (updated every time the cache entry gets re-validated).
                     */
                    // @ts-ignore
                    class PropertiesHolder extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(properties: java.util.Properties, fileTimestamp: number /*long*/)
                        // @ts-ignore
                        getProperties(): java.util.Properties
                        // @ts-ignore
                        getFileTimestamp(): long
                        // @ts-ignore
                        setRefreshTimestamp(refreshTimestamp: number /*long*/): void
                        // @ts-ignore
                        getRefreshTimestamp(): long
                        // @ts-ignore
                        getProperty(code: string): java.lang.String
                        // @ts-ignore
                        getMessageFormat(code: string, locale: java.util.Locale): java.text.MessageFormat
                    }
                }
            }
        }
    }
}
