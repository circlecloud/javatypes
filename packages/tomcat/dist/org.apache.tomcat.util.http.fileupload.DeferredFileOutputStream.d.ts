declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * An output stream which will retain data in memory until a specified
                         * threshold is reached, and only then commit it to disk. If the stream is
                         * closed before the threshold is reached, the data will not be written to
                         * disk at all.
                         * <p>
                         * This class originated in FileUpload processing. In this use case, you do
                         * not know in advance the size of the file being uploaded. If the file is small
                         * you want to store it in memory (for speed), but if the file is large you want
                         * to store it to file (to avoid memory issues).
                         */
                        // @ts-ignore
                        class DeferredFileOutputStream extends org.apache.tomcat.util.http.fileupload.ThresholdingOutputStream {
                            /**
                             * Constructs an instance of this class which will trigger an event at the
                             * specified threshold, and save data to a file beyond that point.
                             * The initial buffer size will default to 1024 bytes which is ByteArrayOutputStream's default buffer size.
                             * @param threshold  The number of bytes at which to trigger an event.
                             * @param outputFile The file to which data is saved beyond the threshold.
                             */
                            // @ts-ignore
                            constructor(threshold: number /*int*/, outputFile: java.io.File)
                            /**
                             * Returns the current output stream. This may be memory based or disk
                             * based, depending on the current state with respect to the threshold.
                             * @return The underlying output stream.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            getStream(): java.io.OutputStream
                            /**
                             * Switches the underlying output stream from a memory based stream to one
                             * that is backed by disk. This is the point at which we realise that too
                             * much data is being written to keep in memory, so we elect to switch to
                             * disk-based storage.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            thresholdReached(): void
                            /**
                             * Determines whether or not the data for this output stream has been
                             * retained in memory.
                             * @return {#code true} if the data is available in memory;
                             *          {@code false} otherwise.
                             */
                            // @ts-ignore
                            public isInMemory(): boolean
                            /**
                             * Returns the data for this output stream as an array of bytes, assuming
                             * that the data has been retained in memory. If the data was written to
                             * disk, this method returns {@code null}.
                             * @return The data for this output stream, or {#code null} if no such
                             *          data is available.
                             */
                            // @ts-ignore
                            public getData(): number /*byte*/[]
                            /**
                             * Returns either the output file specified in the constructor or
                             * the temporary file created or null.
                             * <p>
                             * If the constructor specifying the file is used then it returns that
                             * same output file, even when threshold has not been reached.
                             * <p>
                             * If constructor specifying a temporary file prefix/suffix is used
                             * then the temporary file created once the threshold is reached is returned
                             * If the threshold was not reached then {@code null} is returned.
                             * @return The file for this output stream, or {#code null} if no such
                             *          file exists.
                             */
                            // @ts-ignore
                            public getFile(): java.io.File
                            /**
                             * Closes underlying output stream, and mark this as closed
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public close(): void
                        }
                    }
                }
            }
        }
    }
}
