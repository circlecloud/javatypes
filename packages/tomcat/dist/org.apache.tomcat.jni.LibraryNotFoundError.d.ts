declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                // @ts-ignore
                class LibraryNotFoundError extends java.lang.UnsatisfiedLinkError {
                    /**
                     * @param libraryNames A list of the file names of the native libraries that
                     *                      failed to load
                     * @param errors A list of the error messages received when trying to load
                     *                each of the libraries
                     */
                    // @ts-ignore
                    constructor(libraryNames: java.lang.String | string, errors: java.lang.String | string)
                    // @ts-ignore
                    getLibraryNames(): string
                }
            }
        }
    }
}
