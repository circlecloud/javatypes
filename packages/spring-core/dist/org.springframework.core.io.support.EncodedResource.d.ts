declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Holder that combines a {@link Resource} descriptor with a specific encoding
                     * or {@code Charset} to be used for reading from the resource.
                     * <p>Used as an argument for operations that support reading content with
                     * a specific encoding, typically via a {@code java.io.Reader}.
                     * @author Juergen Hoeller
                     * @author Sam Brannen
                     * @since 1.2.6
                     * @see Resource#getInputStream()
                     * @see java.io.Reader
                     * @see java.nio.charset.Charset
                     */
                    // @ts-ignore
                    class EncodedResource extends java.lang.Object implements org.springframework.core.io.InputStreamSource {
                        /**
                         * Create a new {@code EncodedResource} for the given {@code Resource},
                         * not specifying an explicit encoding or {@code Charset}.
                         * @param resource the {#code Resource} to hold (never {@code null})
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.Resource)
                        /**
                         * Create a new {@code EncodedResource} for the given {@code Resource},
                         * using the specified {@code encoding}.
                         * @param resource the {#code Resource} to hold (never {@code null})
                         * @param encoding the encoding to use for reading from the resource
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.Resource, encoding: string)
                        /**
                         * Create a new {@code EncodedResource} for the given {@code Resource},
                         * using the specified {@code Charset}.
                         * @param resource the {#code Resource} to hold (never {@code null})
                         * @param charset the {#code Charset} to use for reading from the resource
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.Resource, charset: java.nio.charset.Charset)
                        /**
                         * Return the {@code Resource} held by this {@code EncodedResource}.
                         */
                        // @ts-ignore
                        getResource(): org.springframework.core.io.Resource
                        /**
                         * Return the encoding to use for reading from the {@linkplain #getResource() resource},
                         * or {@code null} if none specified.
                         */
                        // @ts-ignore
                        getEncoding(): java.lang.String
                        /**
                         * Return the {@code Charset} to use for reading from the {@linkplain #getResource() resource},
                         * or {@code null} if none specified.
                         */
                        // @ts-ignore
                        getCharset(): java.nio.charset.Charset
                        /**
                         * Determine whether a {@link Reader} is required as opposed to an {@link InputStream},
                         * i.e. whether an {@linkplain #getEncoding() encoding} or a {@link #getCharset() Charset}
                         * has been specified.
                         * @see #getReader()
                         * @see #getInputStream()
                         */
                        // @ts-ignore
                        requiresReader(): boolean
                        /**
                         * Open a {@code java.io.Reader} for the specified resource, using the specified
                         * {@link #getCharset() Charset} or {@linkplain #getEncoding() encoding}
                         * (if any).
                         * @throws IOException if opening the Reader failed
                         * @see #requiresReader()
                         * @see #getInputStream()
                         */
                        // @ts-ignore
                        getReader(): java.io.Reader
                        /**
                         * Open an {@code InputStream} for the specified resource, ignoring any specified
                         * {@link #getCharset() Charset} or {@linkplain #getEncoding() encoding}.
                         * @throws IOException if opening the InputStream failed
                         * @see #requiresReader()
                         * @see #getReader()
                         */
                        // @ts-ignore
                        getInputStream(): java.io.InputStream
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
