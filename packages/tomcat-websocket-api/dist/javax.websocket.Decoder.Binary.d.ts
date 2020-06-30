declare namespace javax {
    namespace websocket {
        namespace Decoder {
            // @ts-ignore
            interface Binary<T> extends javax.websocket.Decoder {
                // @ts-ignore
                decode(bytes: java.nio.ByteBuffer): T
                // @ts-ignore
                willDecode(bytes: java.nio.ByteBuffer): boolean
            }
        }
    }
}
