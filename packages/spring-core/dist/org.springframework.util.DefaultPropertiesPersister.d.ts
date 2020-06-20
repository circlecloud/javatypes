declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Default implementation of the {@link PropertiesPersister} interface.
             * Follows the native parsing of {@code java.util.Properties}.
             * <p>Allows for reading from any Reader and writing to any Writer, for example
             * to specify a charset for a properties file. This is a capability that standard
             * {@code java.util.Properties} unfortunately lacked up until JDK 5:
             * You were only able to load files using the ISO-8859-1 charset there.
             * <p>Loading from and storing to a stream delegates to {@code Properties.load}
             * and {@code Properties.store}, respectively, to be fully compatible with
             * the Unicode conversion as implemented by the JDK Properties class. As of JDK 6,
             * {@code Properties.load/store} will also be used for readers/writers,
             * effectively turning this class into a plain backwards compatibility adapter.
             * <p>The persistence code that works with Reader/Writer follows the JDK's parsing
             * strategy but does not implement Unicode conversion, because the Reader/Writer
             * should already apply proper decoding/encoding of characters. If you prefer
             * to escape unicode characters in your properties files, do <i>not</i> specify
             * an encoding for a Reader/Writer (like ReloadableResourceBundleMessageSource's
             * "defaultEncoding" and "fileEncodings" properties).
             * @author Juergen Hoeller
             * @since 10.03.2004
             * @see java.util.Properties
             * @see java.util.Properties#load
             * @see java.util.Properties#store
             */
            // @ts-ignore
            class DefaultPropertiesPersister extends java.lang.Object implements org.springframework.util.PropertiesPersister {
                // @ts-ignore
                constructor()
                // @ts-ignore
                load(props: java.util.Properties, jis: java.io.InputStream): void
                // @ts-ignore
                load(props: java.util.Properties, reader: java.io.Reader): void
                // @ts-ignore
                store(props: java.util.Properties, os: java.io.OutputStream, header: string): void
                // @ts-ignore
                store(props: java.util.Properties, writer: java.io.Writer, header: string): void
                // @ts-ignore
                loadFromXml(props: java.util.Properties, jis: java.io.InputStream): void
                // @ts-ignore
                storeToXml(props: java.util.Properties, os: java.io.OutputStream, header: string): void
                // @ts-ignore
                storeToXml(props: java.util.Properties, os: java.io.OutputStream, header: string, encoding: string): void
            }
        }
    }
}
