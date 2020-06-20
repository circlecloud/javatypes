declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace commons {
                    /**
                     * Base class for multipart resolvers that use Apache Commons FileUpload
                     * 1.2 or above.
                     * <p>Provides common configuration properties and parsing functionality
                     * for multipart requests, using a Map of Spring CommonsMultipartFile instances
                     * as representation of uploaded files and a String-based parameter Map as
                     * representation of uploaded form fields.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see CommonsMultipartFile
                     * @see CommonsMultipartResolver
                     */
                    // @ts-ignore
                    class CommonsFileUploadSupport extends java.lang.Object {
                        /**
                         * Instantiate a new CommonsFileUploadSupport with its
                         * corresponding FileItemFactory and FileUpload instances.
                         * @see #newFileItemFactory
                         * @see #newFileUpload
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly logger: Log
                        /**
                         * Return the underlying {@code org.apache.commons.fileupload.disk.DiskFileItemFactory}
                         * instance. There is hardly any need to access this.
                         * @return the underlying DiskFileItemFactory instance
                         */
                        // @ts-ignore
                        getFileItemFactory(): DiskFileItemFactory
                        /**
                         * Return the underlying {@code org.apache.commons.fileupload.FileUpload}
                         * instance. There is hardly any need to access this.
                         * @return the underlying FileUpload instance
                         */
                        // @ts-ignore
                        getFileUpload(): FileUpload
                        /**
                         * Set the maximum allowed size (in bytes) before an upload gets rejected.
                         * -1 indicates no limit (the default).
                         * @param maxUploadSize the maximum upload size allowed
                         * @see org.apache.commons.fileupload.FileUploadBase#setSizeMax
                         */
                        // @ts-ignore
                        setMaxUploadSize(maxUploadSize: number /*long*/): void
                        /**
                         * Set the maximum allowed size (in bytes) for each individual file before
                         * an upload gets rejected. -1 indicates no limit (the default).
                         * @param maxUploadSizePerFile the maximum upload size per file
                         * @since 4.2
                         * @see org.apache.commons.fileupload.FileUploadBase#setFileSizeMax
                         */
                        // @ts-ignore
                        setMaxUploadSizePerFile(maxUploadSizePerFile: number /*long*/): void
                        /**
                         * Set the maximum allowed size (in bytes) before uploads are written to disk.
                         * Uploaded files will still be received past this amount, but they will not be
                         * stored in memory. Default is 10240, according to Commons FileUpload.
                         * @param maxInMemorySize the maximum in memory size allowed
                         * @see org.apache.commons.fileupload.disk.DiskFileItemFactory#setSizeThreshold
                         */
                        // @ts-ignore
                        setMaxInMemorySize(maxInMemorySize: number /*int*/): void
                        /**
                         * Set the default character encoding to use for parsing requests,
                         * to be applied to headers of individual parts and to form fields.
                         * Default is ISO-8859-1, according to the Servlet spec.
                         * <p>If the request specifies a character encoding itself, the request
                         * encoding will override this setting. This also allows for generically
                         * overriding the character encoding in a filter that invokes the
                         * {@code ServletRequest.setCharacterEncoding} method.
                         * @param defaultEncoding the character encoding to use
                         * @see javax.servlet.ServletRequest#getCharacterEncoding
                         * @see javax.servlet.ServletRequest#setCharacterEncoding
                         * @see WebUtils#DEFAULT_CHARACTER_ENCODING
                         * @see org.apache.commons.fileupload.FileUploadBase#setHeaderEncoding
                         */
                        // @ts-ignore
                        setDefaultEncoding(defaultEncoding: string): void
                        /**
                         * Determine the default encoding to use for parsing requests.
                         * @see #setDefaultEncoding
                         */
                        // @ts-ignore
                        getDefaultEncoding(): java.lang.String
                        /**
                         * Set the temporary directory where uploaded files get stored.
                         * Default is the servlet container's temporary directory for the web application.
                         * @see org.springframework.web.util.WebUtils#TEMP_DIR_CONTEXT_ATTRIBUTE
                         */
                        // @ts-ignore
                        setUploadTempDir(uploadTempDir: Resource): void
                        /**
                         * Return the temporary directory where uploaded files get stored.
                         * @see #setUploadTempDir
                         */
                        // @ts-ignore
                        isUploadTempDirSpecified(): boolean
                        /**
                         * Set whether to preserve the filename as sent by the client, not stripping off
                         * path information in {@link CommonsMultipartFile#getOriginalFilename()}.
                         * <p>Default is "false", stripping off path information that may prefix the
                         * actual filename e.g. from Opera. Switch this to "true" for preserving the
                         * client-specified filename as-is, including potential path separators.
                         * @since 4.3.5
                         * @see MultipartFile#getOriginalFilename()
                         * @see CommonsMultipartFile#setPreserveFilename(boolean)
                         */
                        // @ts-ignore
                        setPreserveFilename(preserveFilename: boolean): void
                        /**
                         * Factory method for a Commons DiskFileItemFactory instance.
                         * <p>Default implementation returns a standard DiskFileItemFactory.
                         * Can be overridden to use a custom subclass, e.g. for testing purposes.
                         * @return the new DiskFileItemFactory instance
                         */
                        // @ts-ignore
                        newFileItemFactory(): DiskFileItemFactory
                        /**
                         * Factory method for a Commons FileUpload instance.
                         * <p><b>To be implemented by subclasses.</b>
                         * @param fileItemFactory the Commons FileItemFactory to build upon
                         * @return the Commons FileUpload instance
                         */
                        // @ts-ignore
                        abstract newFileUpload(fileItemFactory: FileItemFactory): FileUpload
                        /**
                         * Determine an appropriate FileUpload instance for the given encoding.
                         * <p>Default implementation returns the shared FileUpload instance
                         * if the encoding matches, else creates a new FileUpload instance
                         * with the same configuration other than the desired encoding.
                         * @param encoding the character encoding to use
                         * @return an appropriate FileUpload instance.
                         */
                        // @ts-ignore
                        prepareFileUpload(encoding: string): FileUpload
                        /**
                         * Parse the given List of Commons FileItems into a Spring MultipartParsingResult,
                         * containing Spring MultipartFile instances and a Map of multipart parameter.
                         * @param fileItems the Commons FileItems to parse
                         * @param encoding the encoding to use for form fields
                         * @return the Spring MultipartParsingResult
                         * @see CommonsMultipartFile#CommonsMultipartFile(org.apache.commons.fileupload.FileItem)
                         */
                        // @ts-ignore
                        parseFileItems(fileItems: Array<FileItem>, encoding: string): org.springframework.web.multipart.commons.CommonsFileUploadSupport.MultipartParsingResult
                        /**
                         * Create a {@link CommonsMultipartFile} wrapper for the given Commons {@link FileItem}.
                         * @param fileItem the Commons FileItem to wrap
                         * @return the corresponding CommonsMultipartFile (potentially a custom subclass)
                         * @since 4.3.5
                         * @see #setPreserveFilename(boolean)
                         * @see CommonsMultipartFile#setPreserveFilename(boolean)
                         */
                        // @ts-ignore
                        createMultipartFile(fileItem: FileItem): org.springframework.web.multipart.commons.CommonsMultipartFile
                        /**
                         * Cleanup the Spring MultipartFiles created during multipart parsing,
                         * potentially holding temporary data on disk.
                         * <p>Deletes the underlying Commons FileItem instances.
                         * @param multipartFiles a Collection of MultipartFile instances
                         * @see org.apache.commons.fileupload.FileItem#delete()
                         */
                        // @ts-ignore
                        cleanupFileItems(multipartFiles: object): void
                    }
                }
            }
        }
    }
}
