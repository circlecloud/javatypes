declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace config {
                        /**
                         * Annotation to activate MongoDB repositories. If no base package is configured through either {@link #value()},
                         * {@link #basePackages()} or {@link #basePackageClasses()} it will trigger scanning of the package of annotated class.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         */
                        // @ts-ignore
                        abstract class EnableMongoRepositories implements java.lang.annotation.Annotation {
                        }
                    }
                }
            }
        }
    }
}
