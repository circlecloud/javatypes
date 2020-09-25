declare namespace javax {
    namespace xml {
        namespace ws {
            namespace Service {
                /**
                 * The orientation of a dynamic client or service. <code>MESSAGE</code> provides
                 * access to entire protocol message, <code>PAYLOAD</code> to protocol message
                 * payload only.
                 */
                // @ts-ignore
                class Mode extends java.lang.Enum<javax.xml.ws.Service.Mode> {
                    // @ts-ignore
                    public static readonly MESSAGE: javax.xml.ws.Service.Mode
                    // @ts-ignore
                    public static readonly PAYLOAD: javax.xml.ws.Service.Mode
                    // @ts-ignore
                    public static values(): javax.xml.ws.Service.Mode[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.xml.ws.Service.Mode
                }
            }
        }
    }
}
