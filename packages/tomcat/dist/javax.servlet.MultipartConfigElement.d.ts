declare namespace javax {
    namespace servlet {
        /**
         * @since Servlet 3.0
         *  TODO SERVLET3 - Add comments
         */
        // @ts-ignore
        class MultipartConfigElement extends java.lang.Object {
            // @ts-ignore
            constructor(location: java.lang.String | string)
            // @ts-ignore
            constructor(location: java.lang.String | string, maxFileSize: number /*long*/, maxRequestSize: number /*long*/, fileSizeThreshold: number /*int*/)
            // @ts-ignore
            constructor(annotation: javax.servlet.annotation.MultipartConfig)
            // @ts-ignore
            public getLocation(): string
            // @ts-ignore
            public getMaxFileSize(): number /*long*/
            // @ts-ignore
            public getMaxRequestSize(): number /*long*/
            // @ts-ignore
            public getFileSizeThreshold(): number /*int*/
        }
    }
}
