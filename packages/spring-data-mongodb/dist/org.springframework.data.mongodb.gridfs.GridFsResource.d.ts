declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace gridfs {
                    /**
                     * {@link GridFSFile} based {@link Resource} implementation.
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     * @author Hartmut Lang
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class GridFsResource extends InputStreamResource {
                        /**
                         * Creates a new {@link GridFsResource} from the given {@link GridFSFile}.
                         * @param file must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(file: GridFSFile)
                        /**
                         * Creates a new {@link GridFsResource} from the given {@link GridFSFile} and {@link InputStream}.
                         * @param file must not be {#literal null}.
                         * @param inputStream must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(file: GridFSFile, inputStream: java.io.InputStream)
                        /**
                         * Obtain an absent {@link GridFsResource}.
                         * @param filename filename of the absent resource, must not be {#literal null}.
                         * @return never {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static absent(filename: java.lang.String | string): org.springframework.data.mongodb.gridfs.GridFsResource
                        // @ts-ignore
                        public getInputStream(): java.io.InputStream
                        // @ts-ignore
                        public contentLength(): number /*long*/
                        // @ts-ignore
                        public getFilename(): string
                        // @ts-ignore
                        public exists(): boolean
                        // @ts-ignore
                        public lastModified(): number /*long*/
                        // @ts-ignore
                        public getDescription(): string
                        /**
                         * Returns the {@link Resource}'s id.
                         * @return never {#literal null}.
                         * @throws IllegalStateException if the file does not {#link #exists()}.
                         */
                        // @ts-ignore
                        public getId(): any
                        /**
                         * Returns the {@link Resource}'s content type.
                         * @return never {#literal null}.
                         * @throws com.mongodb.MongoGridFSException in case no content type declared on {#link GridFSFile#getMetadata()} nor
                         *            provided via {@link GridFSFile#getContentType()}.
                         * @throws IllegalStateException if the file does not {#link #exists()}.
                         */
                        // @ts-ignore
                        public getContentType(): string
                    }
                }
            }
        }
    }
}
