declare namespace javax {
    namespace websocket {
        namespace Encoder {
            // @ts-ignore
            interface Text<T> extends javax.websocket.Encoder {
                // @ts-ignore
                encode(object: T): string
            }
        }
    }
}
