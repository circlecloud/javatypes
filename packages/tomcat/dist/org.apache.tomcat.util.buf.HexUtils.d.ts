declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace buf {
                    /**
                     * Tables useful when converting byte arrays to and from strings of hexadecimal
                     * digits.
                     * Code from Ajp11, from Apache's JServ.
                     * @author Craig R. McClanahan
                     */
                    // @ts-ignore
                    class HexUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static getDec(index: number /*int*/): number /*int*/
                        // @ts-ignore
                        public static getHex(index: number /*int*/): number /*byte*/
                        // @ts-ignore
                        public static toHexString(bytes: number /*byte*/[]): string
                        // @ts-ignore
                        public static fromHexString(input: java.lang.String | string): number /*byte*/[]
                    }
                }
            }
        }
    }
}
