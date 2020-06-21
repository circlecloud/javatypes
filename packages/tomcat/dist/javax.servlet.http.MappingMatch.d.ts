declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Represents the ways that a request can be mapped to a servlet
             * @since 4.0
             */
            // @ts-ignore
            class MappingMatch extends java.lang.Enum<javax.servlet.http.MappingMatch> {
                // @ts-ignore
                readonly CONTEXT_ROOT: javax.servlet.http.MappingMatch
                // @ts-ignore
                readonly DEFAULT: javax.servlet.http.MappingMatch
                // @ts-ignore
                readonly EXACT: javax.servlet.http.MappingMatch
                // @ts-ignore
                readonly EXTENSION: javax.servlet.http.MappingMatch
                // @ts-ignore
                readonly PATH: javax.servlet.http.MappingMatch
                // @ts-ignore
                values(): javax.servlet.http.MappingMatch[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.servlet.http.MappingMatch
            }
        }
    }
}
