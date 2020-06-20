declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace persistence {
                    /**
                     * Represents a {@link DataFormat} that reads and writes data from/to a string.
                     */
                    // @ts-ignore
                    interface StringDataFormat extends org.spongepowered.api.data.persistence.DataFormat {
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link String}.
                         * @param input The string to parse
                         * @return A data container representing the parsed contents of the string
                         * @throws InvalidDataException If the data in the string was not a
                         *          supported format
                         * @throws IOException If there was an error reading from the string
                         */
                        // @ts-ignore
                        read(input: string): org.spongepowered.api.data.DataContainer
                        /**
                         * Creates a new {@link DataContainer} from the contents of the given
                         * {@link Reader}.
                         * @param input The reader
                         * @return A data container representing the parsed contents of the reader
                         * @throws InvalidDataException If the data in the reader was not a
                         *          supported format
                         * @throws IOException If there was an error reading from the reader
                         */
                        // @ts-ignore
                        readFrom(input: java.io.Reader): org.spongepowered.api.data.DataContainer
                        /**
                         * Serializes the given {@link DataView} to a {@link String} using
                         * the format specified by this {@link DataFormat}.
                         * @param data The DataView to write
                         * @return The serialized data view
                         * @throws IOException If there was an error serializing the data
                         */
                        // @ts-ignore
                        write(data: org.spongepowered.api.data.DataView): java.lang.String
                        /**
                         * Writes the given {@link DataView} to the given {@link Writer} using
                         * the format specified by this {@link DataFormat}.
                         * @param output The writer to write the data to
                         * @param data The DataView to write to the writer
                         * @throws IOException If there was an error writing to the writer
                         */
                        // @ts-ignore
                        writeTo(output: java.io.Writer, data: org.spongepowered.api.data.DataView): void
                    }
                }
            }
        }
    }
}
