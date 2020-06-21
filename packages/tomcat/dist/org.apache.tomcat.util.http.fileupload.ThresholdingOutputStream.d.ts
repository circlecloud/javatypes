declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * An output stream which triggers an event when a specified number of bytes of
                         * data have been written to it. The event can be used, for example, to throw
                         * an exception if a maximum has been reached, or to switch the underlying
                         * stream type when the threshold is exceeded.
                         * <p>
                         * This class overrides all <code>OutputStream</code> methods. However, these
                         * overrides ultimately call the corresponding methods in the underlying output
                         * stream implementation.
                         * <p>
                         * NOTE: This implementation may trigger the event <em>before</em> the threshold
                         * is actually reached, since it triggers when a pending write operation would
                         * cause the threshold to be exceeded.
                         */
                        // @ts-ignore
                        abstract class ThresholdingOutputStream extends java.io.OutputStream {
                            /**
                             * Constructs an instance of this class which will trigger an event at the
                             * specified threshold.
                             * @param threshold The number of bytes at which to trigger an event.
                             */
                            // @ts-ignore
                            constructor(threshold: number /*int*/)
                            /**
                             * Writes the specified byte to this output stream.
                             * @param b The byte to be written.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public write(b: number /*int*/): void
                            /**
                             * Writes <code>b.length</code> bytes from the specified byte array to this
                             * output stream.
                             * @param b The array of bytes to be written.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public write(b: number /*byte*/[]): void
                            /**
                             * Writes <code>len</code> bytes from the specified byte array starting at
                             * offset <code>off</code> to this output stream.
                             * @param b   The byte array from which the data will be written.
                             * @param off The start offset in the byte array.
                             * @param len The number of bytes to write.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                            /**
                             * Flushes this output stream and forces any buffered output bytes to be
                             * written out.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public flush(): void
                            /**
                             * Closes this output stream and releases any system resources associated
                             * with this stream.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            public close(): void
                            /**
                             * Determines whether or not the configured threshold has been exceeded for
                             * this output stream.
                             * @return {#code true} if the threshold has been reached;
                             *          {@code false} otherwise.
                             */
                            // @ts-ignore
                            public isThresholdExceeded(): boolean
                            /**
                             * Checks to see if writing the specified number of bytes would cause the
                             * configured threshold to be exceeded. If so, triggers an event to allow
                             * a concrete implementation to take action on this.
                             * @param count The number of bytes about to be written to the underlying
                             *               output stream.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            checkThreshold(count: number /*int*/): void
                            /**
                             * Returns the underlying output stream, to which the corresponding
                             * <code>OutputStream</code> methods in this class will ultimately delegate.
                             * @return The underlying output stream.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            abstract getStream(): java.io.OutputStream
                            /**
                             * Indicates that the configured threshold has been reached, and that a
                             * subclass should take whatever action necessary on this event. This may
                             * include changing the underlying output stream.
                             * @throws IOException if an error occurs.
                             */
                            // @ts-ignore
                            abstract thresholdReached(): void
                        }
                    }
                }
            }
        }
    }
}
