declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    namespace util {
                        /**
                         * Simple class containing various decoding utilities.
                         * @author Costin Leau
                         * @auhtor Christoph Strobl
                         * @auhtor Mark Paluch
                         */
                        // @ts-ignore
                        abstract class DecodeUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static decode(bytes: number /*byte*/[]): string
                            // @ts-ignore
                            public static decodeMultiple(...bytes: number /*byte*/[][]): string[]
                            // @ts-ignore
                            public static encode(string: java.lang.String | string): number /*byte*/[]
                            // @ts-ignore
                            public static encodeMap(map: java.util.Map<java.lang.String | string, number /*byte*/[]>): java.util.Map<number /*byte*/[], number /*byte*/[]>
                            // @ts-ignore
                            public static decodeMap(tuple: java.util.Map<number /*byte*/[], number /*byte*/[]>): java.util.Map<java.lang.String | string, number /*byte*/[]>
                            // @ts-ignore
                            public static convertToSet(keys: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): Array<number /*byte*/[]>
                            // @ts-ignore
                            public static convertToList(keys: java.util.Collection<java.lang.String | string> | Array<java.lang.String | string>): Array<number /*byte*/[]>
                        }
                    }
                }
            }
        }
    }
}
