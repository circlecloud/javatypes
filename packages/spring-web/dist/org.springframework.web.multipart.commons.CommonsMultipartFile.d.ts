declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace commons {
                    /**
                     * {@link MultipartFile} implementation for Apache Commons FileUpload.
                     * @author Trevor D. Cook
                     * @author Juergen Hoeller
                     * @since 29.09.2003
                     * @see CommonsMultipartResolver
                     */
                    // @ts-ignore
                    class CommonsMultipartFile extends java.lang.Object implements org.springframework.web.multipart.MultipartFile, java.io.Serializable {
                        /**
                         * Create an instance wrapping the given FileItem.
                         * @param fileItem the FileItem to wrap
                         */
                        // @ts-ignore
                        constructor(fileItem: FileItem)
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Return the underlying {@code org.apache.commons.fileupload.FileItem}
                         * instance. There is hardly any need to access this.
                         */
                        // @ts-ignore
                        getFileItem(): FileItem
                        /**
                         * Set whether to preserve the filename as sent by the client, not stripping off
                         * path information in {@link CommonsMultipartFile#getOriginalFilename()}.
                         * <p>Default is "false", stripping off path information that may prefix the
                         * actual filename e.g. from Opera. Switch this to "true" for preserving the
                         * client-specified filename as-is, including potential path separators.
                         * @since 4.3.5
                         * @see #getOriginalFilename()
                         * @see CommonsMultipartResolver#setPreserveFilename(boolean)
                         */
                        // @ts-ignore
                        setPreserveFilename(preserveFilename: boolean): void
                        // @ts-ignore
                        getName(): java.lang.String
                        // @ts-ignore
                        getOriginalFilename(): java.lang.String
                        // @ts-ignore
                        getContentType(): java.lang.String
                        // @ts-ignore
                        isEmpty(): boolean
                        // @ts-ignore
                        getSize(): long
                        // @ts-ignore
                        getBytes(): byte[]
                        // @ts-ignore
                        getInputStream(): java.io.InputStream
                        // @ts-ignore
                        transferTo(dest: java.io.File): void
                        // @ts-ignore
                        transferTo(dest: java.nio.file.Path): void
                        /**
                         * Determine whether the multipart content is still available.
                         * If a temporary file has been moved, the content is no longer available.
                         */
                        // @ts-ignore
                        isAvailable(): boolean
                        /**
                         * Return a description for the storage location of the multipart content.
                         * Tries to be as specific as possible: mentions the file location in case
                         * of a temporary file.
                         */
                        // @ts-ignore
                        getStorageDescription(): java.lang.String
                    }
                }
            }
        }
    }
}
