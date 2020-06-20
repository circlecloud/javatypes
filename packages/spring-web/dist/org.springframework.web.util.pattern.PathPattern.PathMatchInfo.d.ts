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
                            getUriVariables(): java.util.Map<java.lang.String, java.lang.String>
                            /**
                             * Return maps of matrix variables per path segment, keyed off by URI
                             * variable name.
                             */
                            // @ts-ignore
                            getMatrixVariables(): java.util.Map<java.lang.String, <any>>
                            // @ts-ignore
                            toString(): java.lang.String
                        }
                    }
                }
            }
        }
    }
}
