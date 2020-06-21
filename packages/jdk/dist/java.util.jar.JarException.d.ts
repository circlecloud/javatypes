declare namespace java {
    namespace util {
        namespace jar {
            /**
             * Signals that an error of some sort has occurred while reading from
             * or writing to a JAR file.
             * @author David Connelly
             * @since 1.2
             */
            // @ts-ignore
            class JarException extends java.util.zip.ZipException {
                /**
                 * Constructs a JarException with no detail message.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructs a JarException with the specified detail message.
                 * @param s the detail message
                 */
                // @ts-ignore
                constructor(s: java.lang.String | string)
            }
        }
    }
}
