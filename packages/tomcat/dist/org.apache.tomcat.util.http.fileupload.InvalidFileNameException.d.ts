declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace fileupload {
                        /**
                         * This exception is thrown in case of an invalid file name.
                         * A file name is invalid, if it contains a NUL character.
                         * Attackers might use this to circumvent security checks:
                         * For example, a malicious user might upload a file with the name
                         * "foo.exe\0.png". This file name might pass security checks (i.e.
                         * checks for the extension ".png"), while, depending on the underlying
                         * C library, it might create a file named "foo.exe", as the NUL
                         * character is the string terminator in C.
                         */
                        // @ts-ignore
                        class InvalidFileNameException extends java.lang.RuntimeException {
                            /**
                             * Creates a new instance.
                             * @param pName The file name causing the exception.
                             * @param pMessage A human readable error message.
                             */
                            // @ts-ignore
                            constructor(pName: java.lang.String | string, pMessage: java.lang.String | string)
                            /**
                             * Returns the invalid file name.
                             * @return the invalid file name.
                             */
                            // @ts-ignore
                            getName(): string
                        }
                    }
                }
            }
        }
    }
}
