declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace pattern {
                    namespace PathPattern {
                        /**
                         * Holder for the result of a match on the start of a pattern.
                         * Provides access to the remaining path not matched to the pattern as well
                         * as any variables bound in that first part that was matched.
                         */
                        // @ts-ignore
                        class PathRemainingMatchInfo extends java.lang.Object {
                            /**
                             * Return the part of a path that was not matched by a pattern.
                             */
                            // @ts-ignore
                            public getPathRemaining(): org.springframework.http.server.PathContainer
                            /**
                             * Return variables that were bound in the part of the path that was
                             * successfully matched or an empty map.
                             */
                            // @ts-ignore
                            public getUriVariables(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            /**
                             * Return the path parameters for each bound variable.
                             */
                            // @ts-ignore
                            public getMatrixVariables(): java.util.Map<java.lang.String | string, object>
                        }
                    }
                }
            }
        }
    }
}
