declare namespace javax {
    namespace websocket {
        namespace Decoder {
            // @ts-ignore
            interface TextStream<T> extends javax.websocket.Decoder {
                // @ts-ignore
                decode(reader: java.io.Reader): T
            }
        }
    }
}
