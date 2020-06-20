declare namespace org {
    namespace springframework {
        namespace http {
            namespace codec {
                namespace multipart {
                    /**
                     * Specialization of {@link Part} that represents an uploaded file received in
                     * a multipart request.
                     * @author Rossen Stoyanchev
                     * @author Juergen Hoeller
                     * @since 5.0
                     */
                    // @ts-ignore
                    interface FilePart extends org.springframework.http.codec.multipart.Part {
                        /**
                         * Return the original filename in the client's filesystem.
                         */
                        // @ts-ignore
                        filename(): java.lang.String
                        /**
                         * Convenience method to copy the content of the file in this part to the
                         * given destination file. If the destination file already exists, it will
                         * be truncated first.
                         * <p>The default implementation delegates to {@link #transferTo(Path)}.
                         * @param dest the target file
                         * @return completion {#code Mono} with the result of the file transfer,
                         *  possibly {@link IllegalStateException} if the part isn't a file
                         * @see #transferTo(Path)
                         */
                        // @ts-ignore
                        transferTo(dest: java.io.File): <any>
                        /**
                         * Convenience method to copy the content of the file in this part to the
                         * given destination file. If the destination file already exists, it will
                         * be truncated first.
                         * @param dest the target file
                         * @return completion {#code Mono} with the result of the file transfer,
                         *  possibly {@link IllegalStateException} if the part isn't a file
                         * @since 5.1
                         * @see #transferTo(File)
                         */
                        // @ts-ignore
                        transferTo(dest: java.nio.file.Path): <any>
                    }
                }
            }
        }
    }
}
