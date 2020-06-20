declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Abstract base implementation of the MultipartHttpServletRequest interface.
                     * Provides management of pre-generated MultipartFile instances.
                     * @author Juergen Hoeller
                     * @author Arjen Poutsma
                     * @since 06.10.2003
                     */
                    // @ts-ignore
                    class AbstractMultipartHttpServletRequest extends HttpServletRequestWrapper implements org.springframework.web.multipart.MultipartHttpServletRequest {
                        /**
                         * Wrap the given HttpServletRequest in a MultipartHttpServletRequest.
                         * @param request the request to wrap
                         */
                        // @ts-ignore
                        constructor(request: HttpServletRequest)
                        // @ts-ignore
                        getRequest(): HttpServletRequest
                        // @ts-ignore
                        getRequestMethod(): org.springframework.http.HttpMethod
                        // @ts-ignore
                        getRequestHeaders(): org.springframework.http.HttpHeaders
                        // @ts-ignore
                        getFileNames(): java.util.Iterator<java.lang.String>
                        // @ts-ignore
                        getFile(name: string): org.springframework.web.multipart.MultipartFile
                        // @ts-ignore
                        getFiles(name: string): java.util.List<org.springframework.web.multipart.MultipartFile>
                        // @ts-ignore
                        getFileMap(): java.util.Map<java.lang.String, org.springframework.web.multipart.MultipartFile>
                        // @ts-ignore
                        getMultiFileMap(): <any>
                        /**
                         * Determine whether the underlying multipart request has been resolved.
                         * @return {#code true} when eagerly initialized or lazily triggered,
                         *  {@code false} in case of a lazy-resolution request that got aborted
                         *  before any parameters or multipart files have been accessed
                         * @since 4.3.15
                         * @see #getMultipartFiles()
                         */
                        // @ts-ignore
                        isResolved(): boolean
                        /**
                         * Set a Map with parameter names as keys and list of MultipartFile objects as values.
                         * To be invoked by subclasses on initialization.
                         */
                        // @ts-ignore
                        setMultipartFiles(multipartFiles: object): void
                        /**
                         * Obtain the MultipartFile Map for retrieval,
                         * lazily initializing it if necessary.
                         * @see #initializeMultipart()
                         */
                        // @ts-ignore
                        getMultipartFiles(): <any>
                        /**
                         * Lazily initialize the multipart request, if possible.
                         * Only called if not already eagerly initialized.
                         */
                        // @ts-ignore
                        initializeMultipart(): void
                    }
                }
            }
        }
    }
}
