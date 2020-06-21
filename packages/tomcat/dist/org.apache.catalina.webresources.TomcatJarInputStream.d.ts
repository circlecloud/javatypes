declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                /**
                 * The purpose of this sub-class is to obtain references to the JarEntry objects
                 * for META-INF/ and META-INF/MANIFEST.MF that are otherwise swallowed by the
                 * JarInputStream implementation.
                 */
                // @ts-ignore
                class TomcatJarInputStream extends java.util.jar.JarInputStream {
                    // @ts-ignore
                    createZipEntry(name: java.lang.String | string): java.util.zip.ZipEntry
                }
            }
        }
    }
}
