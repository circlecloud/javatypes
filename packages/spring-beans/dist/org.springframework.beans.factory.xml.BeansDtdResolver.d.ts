declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * {@link EntityResolver} implementation for the Spring beans DTD,
                     * to load the DTD from the Spring class path (or JAR file).
                     * <p>Fetches "spring-beans.dtd" from the class path resource
                     * "/org/springframework/beans/factory/xml/spring-beans.dtd",
                     * no matter whether specified as some local URL that includes "spring-beans"
                     * in the DTD name or as "https://www.springframework.org/dtd/spring-beans-2.0.dtd".
                     * @author Juergen Hoeller
                     * @author Colin Sampaleanu
                     * @since 04.06.2003
                     * @see ResourceEntityResolver
                     */
                    // @ts-ignore
                    class BeansDtdResolver extends java.lang.Object implements org.xml.sax.EntityResolver {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
