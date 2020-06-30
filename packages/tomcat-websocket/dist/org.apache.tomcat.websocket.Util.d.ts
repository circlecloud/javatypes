declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace websocket {
                /**
                 * Utility class for internal use only within the
                 * {@link org.apache.tomcat.websocket} package.
                 */
                // @ts-ignore
                class Util extends java.lang.Object {
                    // @ts-ignore
                    public static isPrimitive(clazz: java.lang.Class<any>): boolean
                    // @ts-ignore
                    public static coerceToType(type: java.lang.Class<any>, value: java.lang.String | string): any
                    // @ts-ignore
                    public static getDecoders(decoderClazzes: java.util.List<java.lang.Class<any>> | Array<java.lang.Class<any>>): Array<org.apache.tomcat.websocket.DecoderEntry>
                    // @ts-ignore
                    public static parseExtensionHeader(extensions: java.util.List<Extension> | Array<Extension>, header: java.lang.String | string): void
                }
            }
        }
    }
}
