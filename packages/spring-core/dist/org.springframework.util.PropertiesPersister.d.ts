declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * Strategy interface for persisting {@code java.util.Properties},
             * allowing for pluggable parsing strategies.
             * <p>The default implementation is DefaultPropertiesPersister,
             * providing the native parsing of {@code java.util.Properties},
             * but allowing for reading from any Reader and writing to any Writer
             * (which allows to specify an encoding for a properties file).
             * @author Juergen Hoeller
             * @since 10.03.2004
             * @see DefaultPropertiesPersister
             * @see java.util.Properties
             */
            // @ts-ignore
            interface PropertiesPersister {
                /**
                 * Load properties from the given InputStream into the given
                 * Properties object.
                 * @param props the Properties object to load into
                 * @param is the InputStream to load from
                 * @throws IOException in case of I/O errors
                 * @see java.util.Properties#load
                 */
                // @ts-ignore
                load(props: java.util.Properties, jis: java.io.InputStream): void
                /**
                 * Load properties from the given Reader into the given
                 * Properties object.
                 * @param props the Properties object to load into
                 * @param reader the Reader to load from
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                load(props: java.util.Properties, reader: java.io.Reader): void
                /**
                 * Write the contents of the given Properties object to the
                 * given OutputStream.
                 * @param props the Properties object to store
                 * @param os the OutputStream to write to
                 * @param header the description of the property list
                 * @throws IOException in case of I/O errors
                 * @see java.util.Properties#store
                 */
                // @ts-ignore
                store(props: java.util.Properties, os: java.io.OutputStream, header: string): void
                /**
                 * Write the contents of the given Properties object to the
                 * given Writer.
                 * @param props the Properties object to store
                 * @param writer the Writer to write to
                 * @param header the description of the property list
                 * @throws IOException in case of I/O errors
                 */
                // @ts-ignore
                store(props: java.util.Properties, writer: java.io.Writer, header: string): void
                /**
                 * Load properties from the given XML InputStream into the
                 * given Properties object.
                 * @param props the Properties object to load into
                 * @param is the InputStream to load from
                 * @throws IOException in case of I/O errors
                 * @see java.util.Properties#loadFromXML(java.io.InputStream)
                 */
                // @ts-ignore
                loadFromXml(props: java.util.Properties, jis: java.io.InputStream): void
                /**
                 * Write the contents of the given Properties object to the
                 * given XML OutputStream.
                 * @param props the Properties object to store
                 * @param os the OutputStream to write to
                 * @param header the description of the property list
                 * @throws IOException in case of I/O errors
                 * @see java.util.Properties#storeToXML(java.io.OutputStream, String)
                 */
                // @ts-ignore
                storeToXml(props: java.util.Properties, os: java.io.OutputStream, header: string): void
                /**
                 * Write the contents of the given Properties object to the
                 * given XML OutputStream.
                 * @param props the Properties object to store
                 * @param os the OutputStream to write to
                 * @param encoding the encoding to use
                 * @param header the description of the property list
                 * @throws IOException in case of I/O errors
                 * @see java.util.Properties#storeToXML(java.io.OutputStream, String, String)
                 */
                // @ts-ignore
                storeToXml(props: java.util.Properties, os: java.io.OutputStream, header: string, encoding: string): void
            }
        }
    }
}
