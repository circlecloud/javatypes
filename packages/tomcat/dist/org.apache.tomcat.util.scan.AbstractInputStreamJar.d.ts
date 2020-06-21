declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * Base implementation of Jar for implementations that use a JarInputStream to
                     * access the JAR file.
                     */
                    // @ts-ignore
                    abstract class AbstractInputStreamJar extends java.lang.Object implements org.apache.tomcat.Jar {
                        // @ts-ignore
                        constructor(jarFileUrl: java.net.URL)
                        // @ts-ignore
                        public getJarFileURL(): java.net.URL
                        // @ts-ignore
                        public nextEntry(): void
                        // @ts-ignore
                        public getEntryName(): string
                        // @ts-ignore
                        public getEntryInputStream(): java.io.InputStream
                        // @ts-ignore
                        public getInputStream(name: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getLastModified(name: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public exists(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public getURL(entry: java.lang.String | string): string
                        // @ts-ignore
                        public getManifest(): java.util.jar.Manifest
                        // @ts-ignore
                        public reset(): void
                        // @ts-ignore
                        closeStream(): void
                        // @ts-ignore
                        abstract createJarInputStream(): org.apache.tomcat.util.scan.NonClosingJarInputStream
                    }
                }
            }
        }
    }
}
