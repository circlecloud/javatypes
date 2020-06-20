declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Base class for JavaBean-style components that need to load properties
                     * from one or more resources. Supports local properties as well, with
                     * configurable overriding.
                     * @author Juergen Hoeller
                     * @since 1.2.2
                     */
                    // @ts-ignore
                    class PropertiesLoaderSupport extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Logger available to subclasses.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        // @ts-ignore
                        localProperties: java.util.Properties[]
                        // @ts-ignore
                        localOverride: boolean
                        /**
                         * Set local properties, e.g. via the "props" tag in XML bean definitions.
                         * These can be considered defaults, to be overridden by properties
                         * loaded from files.
                         */
                        // @ts-ignore
                        setProperties(properties: java.util.Properties): void
                        /**
                         * Set local properties, e.g. via the "props" tag in XML bean definitions,
                         * allowing for merging multiple properties sets into one.
                         */
                        // @ts-ignore
                        setPropertiesArray(...propertiesArray: java.util.Properties[]): void
                        /**
                         * Set a location of a properties file to be loaded.
                         * <p>Can point to a classic properties file or to an XML file
                         * that follows JDK 1.5's properties XML format.
                         */
                        // @ts-ignore
                        setLocation(location: org.springframework.core.io.Resource): void
                        /**
                         * Set locations of properties files to be loaded.
                         * <p>Can point to classic properties files or to XML files
                         * that follow JDK 1.5's properties XML format.
                         * <p>Note: Properties defined in later files will override
                         * properties defined earlier files, in case of overlapping keys.
                         * Hence, make sure that the most specific files are the last
                         * ones in the given list of locations.
                         */
                        // @ts-ignore
                        setLocations(...locations: org.springframework.core.io.Resource[]): void
                        /**
                         * Set whether local properties override properties from files.
                         * <p>Default is "false": Properties from files override local defaults.
                         * Can be switched to "true" to let local properties override defaults
                         * from files.
                         */
                        // @ts-ignore
                        setLocalOverride(localOverride: boolean): void
                        /**
                         * Set if failure to find the property resource should be ignored.
                         * <p>"true" is appropriate if the properties file is completely optional.
                         * Default is "false".
                         */
                        // @ts-ignore
                        setIgnoreResourceNotFound(ignoreResourceNotFound: boolean): void
                        /**
                         * Set the encoding to use for parsing properties files.
                         * <p>Default is none, using the {@code java.util.Properties}
                         * default encoding.
                         * <p>Only applies to classic properties files, not to XML files.
                         * @see org.springframework.util.PropertiesPersister#load
                         */
                        // @ts-ignore
                        setFileEncoding(encoding: string): void
                        /**
                         * Set the PropertiesPersister to use for parsing properties files.
                         * The default is DefaultPropertiesPersister.
                         * @see org.springframework.util.DefaultPropertiesPersister
                         */
                        // @ts-ignore
                        setPropertiesPersister(propertiesPersister: org.springframework.util.PropertiesPersister): void
                        /**
                         * Return a merged Properties instance containing both the
                         * loaded properties and properties set on this FactoryBean.
                         */
                        // @ts-ignore
                        mergeProperties(): java.util.Properties
                        /**
                         * Load properties into the given instance.
                         * @param props the Properties instance to load into
                         * @throws IOException in case of I/O errors
                         * @see #setLocations
                         */
                        // @ts-ignore
                        loadProperties(props: java.util.Properties): void
                    }
                }
            }
        }
    }
}
