declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        /**
                         * Helper class to register JSR-310 specific {@link Converter} implementations in case the we're running on Java 8.
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        abstract class Jsr310Converters extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Returns the converters to be registered. Will only return converters in case we're running on Java 8.
                             * @return 
                             */
                            // @ts-ignore
                            public static getConvertersToRegister(): Array<object>
                            // @ts-ignore
                            public static supports(type: java.lang.Class<any>): boolean
                        }
                    }
                }
            }
        }
    }
}
