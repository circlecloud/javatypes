declare namespace javax {
    namespace websocket {
        namespace CloseReason {
            // @ts-ignore
            class CloseCodes extends java.lang.Enum<javax.websocket.CloseReason.CloseCodes> implements javax.websocket.CloseReason.CloseCode {
                // @ts-ignore
                readonly NORMAL_CLOSURE: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly GOING_AWAY: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly PROTOCOL_ERROR: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly CANNOT_ACCEPT: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly RESERVED: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly NO_STATUS_CODE: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly CLOSED_ABNORMALLY: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly NOT_CONSISTENT: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly VIOLATED_POLICY: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly TOO_BIG: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly NO_EXTENSION: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly UNEXPECTED_CONDITION: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly SERVICE_RESTART: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly TRY_AGAIN_LATER: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                readonly TLS_HANDSHAKE_FAILURE: javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                values(): javax.websocket.CloseReason.CloseCodes[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.websocket.CloseReason.CloseCodes
                // @ts-ignore
                getCloseCode(code: number /*int*/): javax.websocket.CloseReason.CloseCode
                // @ts-ignore
                getCode(): number /*int*/
            }
        }
    }
}
