declare namespace com {
    namespace rabbitmq {
        namespace tools {
            namespace json {
                /**
                 * Interface for classes that wish to control their own serialization.
                 * Will be removed in 6.0
                 * @deprecated Use a third-party JSON library, e.g. Jackson or Gson
                 */
                // @ts-ignore
                interface JSONSerializable {
                    /**
                     * Called during serialization to JSON.
                     */
                    // @ts-ignore
                    jsonSerialize(w: com.rabbitmq.tools.json.JSONWriter): void
                }
            }
        }
    }
}
