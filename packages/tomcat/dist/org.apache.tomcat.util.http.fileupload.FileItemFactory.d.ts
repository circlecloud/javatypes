declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * <p>A factory interface for creating {@link FileItem} instances. Factories
                         * can provide their own custom configuration, over and above that provided
                         * by the default file upload implementation.</p>
                         */
                        // @ts-ignore
                        interface FileItemFactory {
                            /**
                             * Create a new {@link FileItem} instance from the supplied parameters and
                             * any local factory configuration.
                             * @param fieldName   The name of the form field.
                             * @param contentType The content type of the form field.
                             * @param isFormField <code>true</code> if this is a plain form field;
                             *                     <code>false</code> otherwise.
                             * @param fileName    The name of the uploaded file, if any, as supplied
                             *                     by the browser or other client.
                             * @return The newly created file item.
                             */
                            // @ts-ignore
                            createItem(fieldName: java.lang.String | string, contentType: java.lang.String | string, isFormField: boolean, fileName: java.lang.String | string): org.apache.tomcat.util.http.fileupload.FileItem
                        }
                    }
                }
            }
        }
    }
}
