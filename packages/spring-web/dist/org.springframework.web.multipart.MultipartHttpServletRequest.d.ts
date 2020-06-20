declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                /**
                 * Provides additional methods for dealing with multipart content within a
                 * servlet request, allowing to access uploaded files.
                 * Implementations also need to override the standard
                 * {@link javax.servlet.ServletRequest} methods for parameter access, making
                 * multipart parameters available.
                 * <p>A concrete implementation is
                 * {@link org.springframework.web.multipart.support.DefaultMultipartHttpServletRequest}.
                 * As an intermediate step,
                 * {@link org.springframework.web.multipart.support.AbstractMultipartHttpServletRequest}
                 * can be subclassed.
                 * @author Juergen Hoeller
                 * @author Trevor D. Cook
                 * @since 29.09.2003
                 * @see MultipartResolver
                 * @see MultipartFile
                 * @see javax.servlet.http.HttpServletRequest#getParameter
                 * @see javax.servlet.http.HttpServletRequest#getParameterNames
                 * @see javax.servlet.http.HttpServletRequest#getParameterMap
                 * @see org.springframework.web.multipart.support.DefaultMultipartHttpServletRequest
                 * @see org.springframework.web.multipart.support.AbstractMultipartHttpServletRequest
                 */
                // @ts-ignore
                interface MultipartHttpServletRequest extends org.springframework.web.multipart.MultipartRequest {
                    /**
                     * Return this request's method as a convenient HttpMethod instance.
                     */
                    // @ts-ignore
                    getRequestMethod(): org.springframework.http.HttpMethod
                    /**
                     * Return this request's headers as a convenient HttpHeaders instance.
                     */
                    // @ts-ignore
                    getRequestHeaders(): org.springframework.http.HttpHeaders
                    /**
                     * Return the headers associated with the specified part of the multipart request.
                     * <p>If the underlying implementation supports access to headers, then all headers are returned.
                     * Otherwise, the returned headers will include a 'Content-Type' header at the very least.
                     */
                    // @ts-ignore
                    getMultipartHeaders(paramOrFileName: string): org.springframework.http.HttpHeaders
                }
            }
        }
    }
}
