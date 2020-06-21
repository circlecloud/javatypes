declare namespace org {
    namespace springframework {
        namespace web {
            namespace multipart {
                namespace commons {
                    namespace CommonsFileUploadSupport {
                        /**
                         * Holder for a Map of Spring MultipartFiles and a Map of
                         * multipart parameters.
                         */
                        // @ts-ignore
                        class MultipartParsingResult extends java.lang.Object {
                            // @ts-ignore
                            constructor(mpFiles: object, mpParams: java.util.Map<java.lang.String | string, java.lang.String[] | string[]>, mpParamContentTypes: java.util.Map<java.lang.String | string, java.lang.String | string>)
                            // @ts-ignore
                            public getMultipartFiles(): object
                            // @ts-ignore
                            public getMultipartParameters(): java.util.Map<java.lang.String | string, java.lang.String[] | string[]>
                            // @ts-ignore
                            public getMultipartParameterContentTypes(): java.util.Map<java.lang.String | string, java.lang.String | string>
                        }
                    }
                }
            }
        }
    }
}
