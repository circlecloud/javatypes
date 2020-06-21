declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                /**
                 * MultipartException subclass thrown when an upload exceeds the
                 * maximum upload size allowed.
                 * @author Juergen Hoeller
                 * @since 1.0.1
                 */
                // @ts-ignore
                class MaxUploadSizeExceededException extends org.springframework.web.multipart.MultipartException {
                    /**
                     * Constructor for MaxUploadSizeExceededException.
                     * @param maxUploadSize the maximum upload size allowed,
                     *  or -1 if the size limit isn't known
                     */
                    // @ts-ignore
                    constructor(maxUploadSize: number /*long*/)
                    /**
                     * Constructor for MaxUploadSizeExceededException.
                     * @param maxUploadSize the maximum upload size allowed,
                     *  or -1 if the size limit isn't known
                     * @param ex root cause from multipart parsing API in use
                     */
                    // @ts-ignore
                    constructor(maxUploadSize: number /*long*/, ex: java.lang.Throwable | Error)
                    /**
                     * Return the maximum upload size allowed,
                     * or -1 if the size limit isn't known.
                     */
                    // @ts-ignore
                    public getMaxUploadSize(): number /*long*/
                }
            }
        }
    }
}
