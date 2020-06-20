declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                /**
                 * This interface defines the multipart request access operations that are exposed
                 * for actual multipart requests. It is extended by {@link MultipartHttpServletRequest}.
                 * @author Juergen Hoeller
                 * @author Arjen Poutsma
                 * @since 2.5.2
                 */
                // @ts-ignore
                interface MultipartRequest {
                    /**
                     * Return an {@link java.util.Iterator} of String objects containing the
                     * parameter names of the multipart files contained in this request. These
                     * are the field names of the form (like with normal parameters), not the
                     * original file names.
                     * @return the names of the files
                     */
                    // @ts-ignore
                    getFileNames(): java.util.Iterator<java.lang.String>
                    /**
                     * Return the contents plus description of an uploaded file in this request,
                     * or {@code null} if it does not exist.
                     * @param name a String specifying the parameter name of the multipart file
                     * @return the uploaded content in the form of a {#link MultipartFile} object
                     */
                    // @ts-ignore
                    getFile(name: string): org.springframework.web.multipart.MultipartFile
                    /**
                     * Return the contents plus description of uploaded files in this request,
                     * or an empty list if it does not exist.
                     * @param name a String specifying the parameter name of the multipart file
                     * @return the uploaded content in the form of a {#link MultipartFile} list
                     * @since 3.0
                     */
                    // @ts-ignore
                    getFiles(name: string): java.util.List<org.springframework.web.multipart.MultipartFile>
                    /**
                     * Return a {@link java.util.Map} of the multipart files contained in this request.
                     * @return a map containing the parameter names as keys, and the
                     *  {#link MultipartFile} objects as values
                     */
                    // @ts-ignore
                    getFileMap(): java.util.Map<java.lang.String, org.springframework.web.multipart.MultipartFile>
                    /**
                     * Return a {@link MultiValueMap} of the multipart files contained in this request.
                     * @return a map containing the parameter names as keys, and a list of
                     *  {#link MultipartFile} objects as values
                     * @since 3.0
                     */
                    // @ts-ignore
                    getMultiFileMap(): <any>
                    /**
                     * Determine the content type of the specified request part.
                     * @param paramOrFileName the name of the part
                     * @return the associated content type, or {#code null} if not defined
                     * @since 3.1
                     */
                    // @ts-ignore
                    getMultipartContentType(paramOrFileName: string): java.lang.String
                }
            }
        }
    }
}
