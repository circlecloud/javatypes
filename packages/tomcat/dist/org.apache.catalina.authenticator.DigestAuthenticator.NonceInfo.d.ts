declare namespace org {
    namespace apache {
        namespace catalina {
            namespace authenticator {
                namespace DigestAuthenticator {
                    // @ts-ignore
                    class NonceInfo extends java.lang.Object {
                        // @ts-ignore
                        constructor(currentTime: number /*long*/, seenWindowSize: number /*int*/)
                        // @ts-ignore
                        public nonceCountValid(nonceCount: number /*long*/): boolean
                        // @ts-ignore
                        public getTimestamp(): number /*long*/
                    }
                }
            }
        }
    }
}
