declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace naming {
                    /**
                     * {@code ObjectNamingStrategy} implementation that builds
                     * {@code ObjectName} instances from the key used in the
                     * "beans" map passed to {@code MBeanExporter}.
                     * <p>Can also check object name mappings, given as {@code Properties}
                     * or as {@code mappingLocations} of properties files. The key used
                     * to look up is the key used in {@code MBeanExporter}'s "beans" map.
                     * If no mapping is found for a given key, the key itself is used to
                     * build an {@code ObjectName}.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 1.2
                     * @see #setMappings
                     * @see #setMappingLocation
                     * @see #setMappingLocations
                     * @see org.springframework.jmx.export.MBeanExporter#setBeans
                     */
                    // @ts-ignore
                    class KeyNamingStrategy extends java.lang.Object implements org.springframework.jmx.export.naming.ObjectNamingStrategy {
                        // @ts-ignore
                        constructor()
                        /**
                         * {@code Log} instance for this class.
                         */
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Set local properties, containing object name mappings, e.g. via
                         * the "props" tag in XML bean definitions. These can be considered
                         * defaults, to be overridden by properties loaded from files.
                         */
                        // @ts-ignore
                        setMappings(mappings: java.util.Properties): void
                        /**
                         * Set a location of a properties file to be loaded,
                         * containing object name mappings.
                         */
                        // @ts-ignore
                        setMappingLocation(location: Resource): void
                        /**
                         * Set location of properties files to be loaded,
                         * containing object name mappings.
                         */
                        // @ts-ignore
                        setMappingLocations(...mappingLocations: Resource[]): void
                        /**
                         * Merges the {@code Properties} configured in the {@code mappings} and
                         * {@code mappingLocations} into the final {@code Properties} instance
                         * used for {@code ObjectName} resolution.
                         */
                        // @ts-ignore
                        afterPropertiesSet(): void
                        /**
                         * Attempts to retrieve the {@code ObjectName} via the given key, trying to
                         * find a mapped value in the mappings first.
                         */
                        // @ts-ignore
                        getObjectName(managedBean: any, beanKey: string): javax.management.ObjectName
                    }
                }
            }
        }
    }
}
