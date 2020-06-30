declare namespace javax {
    namespace websocket {
        namespace Encoder {
            // @ts-ignore
            interface TextStream<T> extends javax.websocket.Encoder {
                // @ts-ignore
                encode(object: T, writer: java.io.Writer): void
            }
        }
    }
}
