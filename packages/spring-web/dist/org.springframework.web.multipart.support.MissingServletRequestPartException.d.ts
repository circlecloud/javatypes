declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace support {
                    /**
                     * Raised when the part of a "multipart/form-data" request identified by its
                     * name cannot be found.
                     * <p>This may be because the request is not a multipart/form-data request,
                     * because the part is not present in the request, or because the web
                     * application is not configured correctly for processing  multipart requests,
                     * e.g. no {@link MultipartResolver}.
                     * @author Rossen Stoyanchev
                     * @since 3.1
                     */
                    // @ts-ignore
                    class MissingServletRequestPartException extends ServletException {
                        // @ts-ignore
                        constructor(partName: java.lang.String | string)
                        // @ts-ignore
                        public getRequestPartName(): string
                    }
                }
            }
        }
    }
}
