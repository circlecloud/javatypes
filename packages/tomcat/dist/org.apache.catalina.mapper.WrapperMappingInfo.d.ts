declare namespace org {
    namespace apache {
        namespace catalina {
            namespace mapper {
                /**
                 * Encapsulates information used to register a Wrapper mapping.
                 */
                // @ts-ignore
                class WrapperMappingInfo extends java.lang.Object {
                    // @ts-ignore
                    constructor(mapping: java.lang.String | string, wrapper: org.apache.catalina.Wrapper, jspWildCard: boolean, resourceOnly: boolean)
                    // @ts-ignore
                    public getMapping(): string
                    // @ts-ignore
                    public getWrapper(): org.apache.catalina.Wrapper
                    // @ts-ignore
                    public isJspWildCard(): boolean
                    // @ts-ignore
                    public isResourceOnly(): boolean
                }
            }
        }
    }
}
