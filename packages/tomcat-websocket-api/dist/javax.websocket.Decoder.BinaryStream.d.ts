declare namespace javax {
    namespace websocket {
        namespace Decoder {
            // @ts-ignore
            interface BinaryStream<T> extends javax.websocket.Decoder {
                // @ts-ignore
                decode(jis: java.io.InputStream): T
            }
        }
    }
}
