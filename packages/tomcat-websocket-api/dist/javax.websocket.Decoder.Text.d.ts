declare namespace javax {
    namespace websocket {
        namespace Decoder {
            // @ts-ignore
            interface Text<T> extends javax.websocket.Decoder {
                // @ts-ignore
                decode(s: java.lang.String | string): T
                // @ts-ignore
                willDecode(s: java.lang.String | string): boolean
            }
        }
    }
}
