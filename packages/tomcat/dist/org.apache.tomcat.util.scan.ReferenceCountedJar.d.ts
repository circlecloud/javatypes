declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace scan {
                    /**
                     * This class provides a wrapper around {@link Jar} that uses reference counting
                     * to close and re-create the wrapped {@link Jar} instance as required.
                     */
                    // @ts-ignore
                    class ReferenceCountedJar extends java.lang.Object implements org.apache.tomcat.Jar {
                        // @ts-ignore
                        constructor(url: java.net.URL)
                        // @ts-ignore
                        public close(): void
                        // @ts-ignore
                        public getJarFileURL(): java.net.URL
                        // @ts-ignore
                        public getInputStream(name: java.lang.String | string): java.io.InputStream
                        // @ts-ignore
                        public getLastModified(name: java.lang.String | string): number /*long*/
                        // @ts-ignore
                        public exists(name: java.lang.String | string): boolean
                        // @ts-ignore
                        public nextEntry(): void
                        // @ts-ignore
                        public getEntryName(): string
                        // @ts-ignore
                        public getEntryInputStream(): java.io.InputStream
                        // @ts-ignore
                        public getURL(entry: java.lang.String | string): string
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
