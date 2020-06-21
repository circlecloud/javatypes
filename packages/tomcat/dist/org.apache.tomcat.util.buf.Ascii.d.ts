declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * This class implements some basic ASCII character handling functions.
                     * @author dac#eng.sun.com
                     * @author James Todd [gonzo#eng.sun.com]
                     */
                    // @ts-ignore
                    class Ascii extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Returns the lower case equivalent of the specified ASCII character.
                         * @param c The char
                         * @return the lower case equivalent char
                         */
                        // @ts-ignore
                        public static toLower(c: number /*int*/): number /*int*/
                        /**
                         * Parses an unsigned long from the specified subarray of bytes.
                         * @param b the bytes to parse
                         * @param off the start offset of the bytes
                         * @param len the length of the bytes
                         * @return the long value
                         * @exception NumberFormatException if the long format was invalid
                         */
                        // @ts-ignore
                        public static parseLong(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*long*/
                    }
                }
            }
        }
    }
}
