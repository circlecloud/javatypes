declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Open SSL BIO Callback Interface
                 * @author Mladen Turk
                 */
                // @ts-ignore
                interface BIOCallback {
                    /**
                     * Write data
                     * @param buf containing the bytes to write.
                     * @return Number of characters written.
                     */
                    // @ts-ignore
                    write(buf: number /*byte*/[]): number /*int*/
                    /**
                     * Read data
                     * @param buf buffer to store the read bytes.
                     * @return number of bytes read.
                     */
                    // @ts-ignore
                    read(buf: number /*byte*/[]): number /*int*/
                    /**
                     * Puts string
                     * @param data String to write
                     * @return Number of characters written
                     */
                    // @ts-ignore
                    puts(data: java.lang.String | string): number /*int*/
                    /**
                     * Read string up to the len or CLRLF
                     * @param len Maximum number of characters to read
                     * @return String with up to len bytes read
                     */
                    // @ts-ignore
                    gets(len: number /*int*/): string
                }
            }
        }
    }
}
