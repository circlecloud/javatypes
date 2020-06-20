declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * Represents a parser for a particular file format allowing reading and writing
                     * a DataContainer to/from a stream of the specific format.
                     */
                    // @ts-ignore
                    interface DataFormat extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link InputStream}.
                         * @param input The input stream
                         * @return A data container representing the contents of the input stream
                         * @throws InvalidDataFormatException If the data in the stream was not a
                         *          supported format
                         * @throws IOException If there was an error reading from the stream
                         */
                        // @ts-ignore
                        readFrom(input: java.io.InputStream): org.spongepowered.api.data.DataContainer
                        /**
                         * Writes the given {@link DataView} to the given {@link OutputStream} using
                         * the format specified by this {@link DataFormat}.
                         * @param output The output stream to write the data to
                         * @param data The DataView to write to the stream
                         * @throws IOException If there was an error writing to the stream
                         */
                        // @ts-ignore
                        writeTo(output: java.io.OutputStream, data: org.spongepowered.api.data.DataView): void
                    }
                }
            }
        }
    }
}
