declare namespace javax {
    namespace websocket {
        namespace Encoder {
            // @ts-ignore
            interface BinaryStream<T> extends javax.websocket.Encoder {
                // @ts-ignore
                encode(object: T, os: java.io.OutputStream): void
            }
        }
    }
}
