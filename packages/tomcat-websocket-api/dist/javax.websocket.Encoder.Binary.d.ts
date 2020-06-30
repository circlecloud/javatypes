declare namespace javax {
    namespace websocket {
        namespace Encoder {
            // @ts-ignore
            interface Binary<T> extends javax.websocket.Encoder {
                // @ts-ignore
                encode(object: T): java.nio.ByteBuffer
            }
        }
    }
}
