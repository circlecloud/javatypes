declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * Represents a single resource (file or directory) that is located within a
                 * JAR that in turn is located in a WAR file.
                 */
                // @ts-ignore
                class JarWarResource extends org.apache.catalina.webresources.AbstractArchiveResource {
                    // @ts-ignore
                    constructor(archiveResourceSet: org.apache.catalina.webresources.AbstractArchiveResourceSet, webAppPath: java.lang.String | string, baseUrl: java.lang.String | string, jarEntry: java.util.jar.JarEntry, archivePath: java.lang.String | string)
                    // @ts-ignore
                    getJarInputStreamWrapper(): org.apache.catalina.webresources.AbstractArchiveResource.JarInputStreamWrapper
                    // @ts-ignore
                    getLog(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
