declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace event {
                    // @ts-ignore
                    class ConfigLoadEvent extends Event {
                        // @ts-ignore
                        constructor(fileName: java.lang.String | string, yaml: YamlConfiguration)
                        // @ts-ignore
                        public static getHANDLERS(): HandlerList
                        // @ts-ignore
                        public getHandlers(): HandlerList
                        // @ts-ignore
                        public static getHandlerList(): HandlerList
                        // @ts-ignore
                        public getFileName(): string
                        // @ts-ignore
                        public getYaml(): YamlConfiguration
                        // @ts-ignore
                        public setYaml(yaml: YamlConfiguration): void
                        // @ts-ignore
                        public callEvent(): boolean
                    }
                }
            }
        }
    }
}
