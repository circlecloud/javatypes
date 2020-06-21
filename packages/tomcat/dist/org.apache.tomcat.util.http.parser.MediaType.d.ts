declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        // @ts-ignore
                        class MediaType extends java.lang.Object {
                            // @ts-ignore
                            constructor(type: java.lang.String | string, subtype: java.lang.String | string, parameters: java.util.LinkedHashMap<java.lang.String | string, java.lang.String | string>)
                            // @ts-ignore
                            public getType(): string
                            // @ts-ignore
                            public getSubtype(): string
                            // @ts-ignore
                            public getCharset(): string
                            // @ts-ignore
                            public getParameterCount(): number /*int*/
                            // @ts-ignore
                            public getParameterValue(parameter: java.lang.String | string): string
                            // @ts-ignore
                            public toString(): string
                            // @ts-ignore
                            public toStringNoCharset(): string
                            /**
                             * Parses a MediaType value, either from a HTTP header or from an application.
                             * @param input a reader over the header text
                             * @return a MediaType parsed from the input, or null if not valid
                             * @throws IOException if there was a problem reading the input
                             */
                            // @ts-ignore
                            public static parseMediaType(input: java.io.StringReader): org.apache.tomcat.util.http.parser.MediaType
                        }
                    }
                }
            }
        }
    }
}
