declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    namespace PathPattern {
                        /**
                         * Holder for URI variables and path parameters (matrix variables) extracted
                         * based on the pattern for a given matched path.
                         */
                        // @ts-ignore
                        class PathMatchInfo extends java.lang.Object {
                            /**
                             * Return the extracted URI variables.
                             */
                            // @ts-ignore
                            public getUriVariables(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Return maps of matrix variables per path segment, keyed off by URI
                             * variable name.
                             */
                            // @ts-ignore
                            public getMatrixVariables(): java.util.Map<java.lang.String | string, object>
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
