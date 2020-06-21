declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * Implementation of {@link Jar} that is optimised for file based JAR URLs that
                     * refer directly to a JAR file (e.g URLs of the form jar:file: ... .jar!/ or
                     * file:... .jar).
                     */
                    // @ts-ignore
                    class JarFileUrlJar extends java.lang.Object implements org.apache.tomcat.Jar {
                        // @ts-ignore
                        constructor(url: java.net.URL, startsWithJar: boolean)
                        // @ts-ignore
                        public getJarFileURL(): java.net.URL
                        // @ts-ignore
                        public getInputStream(name: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getLastModified(name: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public exists(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public getURL(entry: java.lang.String | string): string
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public nextEntry(): void
                        // @ts-ignore
                        public getEntryName(): string
                        // @ts-ignore
                        public getEntryInputStream(): java.io.InputStream
                        // @ts-ignore
                        public getManifest(): java.util.jar.Manifest
                        // @ts-ignore
                        public reset(): void
                    }
                }
            }
        }
    }
}
