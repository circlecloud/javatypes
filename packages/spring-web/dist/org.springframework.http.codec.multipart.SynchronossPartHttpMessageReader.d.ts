declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * {@code HttpMessageReader} for parsing {@code "multipart/form-data"} requests
                     * to a stream of {@link Part}'s using the Synchronoss NIO Multipart library.
                     * <p>This reader can be provided to {@link MultipartHttpMessageReader} in order
                     * to aggregate all parts into a Map.
                     * @author Sebastien Deleuze
                     * @author Rossen Stoyanchev
                     * @author Arjen Poutsma
                     * @author Brian Clozel
                     * @since 5.0
                     * @see <a href="https://github.com/synchronoss/nio-multipart">Synchronoss NIO Multipart</a>
                     * @see MultipartHttpMessageReader
                     */
                    // @ts-ignore
                    class SynchronossPartHttpMessageReader extends org.springframework.http.codec.LoggingCodecSupport implements org.springframework.http.codec.HttpMessageReader<org.springframework.http.codec.multipart.Part> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Configure the maximum amount of memory that is allowed to use per part.
                         * When the limit is exceeded:
                         * <ul>
                         * <li>file parts are written to a temporary file.
                         * <li>non-file parts are rejected with {@link DataBufferLimitException}.
                         * </ul>
                         * <p>By default this is set to 256K.
                         * @param byteCount the in-memory limit in bytes; if set to -1 this limit is
                         *  not enforced, and all parts may be written to disk and are limited only
                         *  by the {#link #setMaxDiskUsagePerPart(long) maxDiskUsagePerPart} property.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxInMemorySize(byteCount: number /*int*/): void
                        /**
                         * Get the {@link #setMaxInMemorySize configured} maximum in-memory size.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxInMemorySize(): int
                        /**
                         * Configure the maximum amount of disk space allowed for file parts.
                         * <p>By default this is set to -1.
                         * @param maxDiskUsagePerPart the disk limit in bytes, or -1 for unlimited
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxDiskUsagePerPart(maxDiskUsagePerPart: number /*long*/): void
                        /**
                         * Get the {@link #setMaxDiskUsagePerPart configured} maximum disk usage.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxDiskUsagePerPart(): long
                        /**
                         * Specify the maximum number of parts allowed in a given multipart request.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        setMaxParts(maxParts: number /*int*/): void
                        /**
                         * Return the {@link #setMaxParts configured} limit on the number of parts.
                         * @since 5.1.11
                         */
                        // @ts-ignore
                        getMaxParts(): int
                        // @ts-ignore
                        getReadableMediaTypes(): java.util.List<org.springframework.http.MediaType>
                        // @ts-ignore
                        canRead(elementType: ResolvableType, mediaType: org.springframework.http.MediaType): boolean
                        // @ts-ignore
                        read(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                        // @ts-ignore
                        readMono(elementType: ResolvableType, message: org.springframework.http.ReactiveHttpInputMessage, hints: java.util.Map<java.lang.String, java.lang.Object>): <any>
                    }
                }
            }
        }
    }
}
