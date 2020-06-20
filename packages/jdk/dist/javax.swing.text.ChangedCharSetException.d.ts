declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * ChangedCharSetException as the name indicates is an exception
             * thrown when the charset is changed.
             * @author Sunita Mani
             */
            // @ts-ignore
            class ChangedCharSetException extends java.io.IOException {
                // @ts-ignore
                constructor(charSetSpec: string, charSetKey: boolean)
                // @ts-ignore
                getCharSetSpec(): java.lang.String
                // @ts-ignore
                keyEqualsCharSet(): boolean
            }
        }
    }
}
